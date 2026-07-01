"use client";

import { useEffect } from "react";
import { CONTACT_FORM_ID, INQUIRY_FORM_ID } from "@/data/site";
import { scrollToContactForm } from "@/lib/scrollToContactForm";
import { scrollToInquiryForm } from "@/lib/scrollToInquiryForm";

export default function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash;

    const frame = window.requestAnimationFrame(() => {
      if (hash === `#${INQUIRY_FORM_ID}`) {
        scrollToInquiryForm();
      } else if (hash === `#${CONTACT_FORM_ID}`) {
        scrollToContactForm();
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}
