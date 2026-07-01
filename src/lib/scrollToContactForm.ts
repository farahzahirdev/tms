import { CONTACT_FORM_ID } from "@/data/site";
import { scrollToAnchor } from "@/lib/scrollToAnchor";

export function scrollToContactForm() {
  return scrollToAnchor(CONTACT_FORM_ID);
}
