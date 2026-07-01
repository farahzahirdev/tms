import { INQUIRY_FORM_ID } from "@/data/site";

export function scrollToInquiryForm() {
  const target = document.getElementById(INQUIRY_FORM_ID);
  if (!target) return false;

  target.scrollIntoView({ behavior: "smooth", block: "start" });

  const hash = `#${INQUIRY_FORM_ID}`;
  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

  return true;
}
