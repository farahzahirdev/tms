"use client";

import Script from "next/script";
import { INQUIRY_FORM } from "@/data/form";

export default function FormEmbedScript() {
  return <Script src={INQUIRY_FORM.scriptSrc} strategy="afterInteractive" />;
}
