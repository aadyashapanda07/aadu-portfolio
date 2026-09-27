export const EMAIL_ADDRESS = "aadyashapanda07@gmail.com";
export const GMAIL_WEB_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`;
export const MAILTO_URL = `mailto:${EMAIL_ADDRESS}`;
export const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/9c52c0088f5276d5490bfdf87f5928a5";

/**
 * Smart email opener that opens native Gmail App on phone,
 * or Gmail Web Composer on desktop PC.
 */
export function openEmailClient(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (typeof window === "undefined") return;

  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  if (isMobile) {
    // On phones (Android/iPhone), mailto launches the installed Gmail app compose screen directly
    window.location.href = MAILTO_URL;
  } else {
    // On desktop PC, open Gmail Web Composer in a new browser tab
    window.open(GMAIL_WEB_URL, "_blank", "noopener,noreferrer");
  }
}
