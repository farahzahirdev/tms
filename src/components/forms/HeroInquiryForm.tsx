"use client";

import { useEffect, useRef, useState } from "react";
import EmbeddedInquiryForm from "@/components/forms/EmbeddedInquiryForm";
import HeroFormSuccess from "@/components/forms/HeroFormSuccess";
import { INQUIRY_FORM } from "@/data/form";

const TRUSTED_ORIGINS = ["go.4tms.com", "leadconnectorhq.com"];

function isFormSubmittedMessage(data: unknown): boolean {
  if (typeof data === "string") {
    const lower = data.toLowerCase();
    return (
      lower.includes("leadcollected") ||
      lower.includes("thank you") ||
      lower.includes("thank-you") ||
      lower.includes("form_submitted") ||
      lower.includes("set-sticky-contacts")
    );
  }

  if (Array.isArray(data)) {
    const action = String(data[0] ?? "").toLowerCase();
    return action === "set-sticky-contacts" || action.includes("submit");
  }

  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>;
    if (record.leadCollected === true) return true;
    if (record.event === "form_submit" || record.type === "success") return true;
  }

  return false;
}

export default function HeroInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const peakHeight = useRef(0);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!TRUSTED_ORIGINS.some((origin) => event.origin.includes(origin))) return;
      if (isFormSubmittedMessage(event.data)) {
        setSubmitted(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (submitted) return;

    const iframe = document.getElementById(`inline-${INQUIRY_FORM.id}`) as HTMLIFrameElement | null;
    if (!iframe) return;

    iframeRef.current = iframe;

    const checkHeight = () => {
      const height = parseInt(iframe.style.height, 10) || iframe.getBoundingClientRect().height;
      if (height > peakHeight.current) {
        peakHeight.current = height;
      }

      if (peakHeight.current > 500 && height > 0 && height < 350) {
        setSubmitted(true);
      }
    };

    const observer = new MutationObserver(checkHeight);
    observer.observe(iframe, { attributes: true, attributeFilter: ["style"] });

    checkHeight();

    return () => observer.disconnect();
  }, [submitted]);

  if (submitted) {
    return <HeroFormSuccess />;
  }

  return <EmbeddedInquiryForm />;
}
