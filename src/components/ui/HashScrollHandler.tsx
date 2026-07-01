"use client";

import { useEffect } from "react";
import { INQUIRY_FORM_ID } from "@/data/site";
import { scrollToInquiryForm } from "@/lib/scrollToInquiryForm";

export default function HashScrollHandler() {
  useEffect(() => {
    if (window.location.hash !== `#${INQUIRY_FORM_ID}`) return;

    const frame = window.requestAnimationFrame(() => {
      scrollToInquiryForm();
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}
