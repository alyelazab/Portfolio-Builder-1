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

  fetch("/api/analytics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
