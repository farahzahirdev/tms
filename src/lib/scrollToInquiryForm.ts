import { INQUIRY_FORM_ID } from "@/data/site";
import { scrollToAnchor } from "@/lib/scrollToAnchor";

export function scrollToInquiryForm() {
  return scrollToAnchor(INQUIRY_FORM_ID);
}
