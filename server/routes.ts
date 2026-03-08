import type { Express, Request, Response } from "express";
import { type Server } from "http";
import { z } from "zod";
import { config } from "./config";

const analyticsSchema = z.object({
  event_type: z.string().min(1).max(50),
  section: z.string().max(100).nullable().optional(),
  referrer: z.string().max(2000).nullable().optional(),
  utm_source: z.string().max(200).nullable().optional(),
  utm_medium: z.string().max(200).nullable().optional(),
  utm_campaign: z.string().max(200).nullable().optional(),
  pathname: z.string().max(500).optional(),
  hash: z.string().max(500).nullable().optional(),
  user_agent: z.string().max(1000).optional(),
  screen_width: z.number().int().optional(),
  session_id: z.string().max(100).optional(),
});

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(254),
  message: z.string().min(1).max(2000),
});

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/analytics", async (req: Request, res: Response) => {
    try {
      const contentLength = parseInt(req.headers["content-length"] || "0", 10);
      if (contentLength > 2048) {
        res.status(413).json({ message: "Payload too large" });
        return;
      }

      const parsed = analyticsSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid payload" });
        return;
      }

      await fetch(`${config.supabaseUrl}/rest/v1/page_events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: config.supabaseAnonKey,
          Authorization: `Bearer ${config.supabaseAnonKey}`,
        },
        body: JSON.stringify(parsed.data),
      });

      res.status(204).end();
    } catch {
      res.status(204).end();
    }
  });

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const parsed = contactSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid input", errors: parsed.error.flatten().fieldErrors });
        return;
      }

      const payload = {
        name: stripHtml(parsed.data.name),
        email: stripHtml(parsed.data.email),
        message: stripHtml(parsed.data.message),
      };

      const response = await fetch(config.supabaseEdgeFnUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        res.status(response.status).json({ message: "Failed to send message" });
        return;
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
