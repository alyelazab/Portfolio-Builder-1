const SUPABASE_URL = "https://czhhwofczlvxsiavkpwd.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6aGh3b2Zjemx2eHNpYXZrcHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NjEyNDQsImV4cCI6MjA4NzUzNzI0NH0.awIFTurKqf0ZT-4L4KEu_h7jywM-WrEA9D7Eqo_FFrY";

const SESSION_ID =
  Math.random().toString(36).substring(2) + Date.now().toString(36);

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
  };
}

function trackEvent(eventType: string, section?: string) {
  const utm = getUtmParams();
  const payload = {
    event_type: eventType,
    section: section ?? null,
    referrer: document.referrer || null,
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    pathname: window.location.pathname,
    hash: window.location.hash || null,
    user_agent: navigator.userAgent,
    screen_width: window.innerWidth,
    session_id: SESSION_ID,
  };

  fetch(`${SUPABASE_URL}/rest/v1/page_events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify(payload),
  }).catch(() => {
    // silently fail — analytics should never break the site
  });
}

export function trackPageView() {
  trackEvent("page_view");
}

const viewedSections = new Set<string>();

export function trackSectionView(sectionId: string) {
  if (viewedSections.has(sectionId)) return;
  viewedSections.add(sectionId);
  trackEvent("section_view", sectionId);
}

export function initSectionObserver() {
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trackSectionView(entry.target.id);
        }
      });
    },
    { threshold: 0.3 }
  );
  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}

export function handleHashScroll() {
  const hash = window.location.hash;
  if (hash) {
    const el = document.getElementById(hash.slice(1));
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }
}
