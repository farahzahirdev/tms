"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { INQUIRY_FORM_ID } from "@/data/site";
import { scrollToInquiryForm } from "@/lib/scrollToInquiryForm";

type InquiryFormLinkProps = Omit<ComponentProps<typeof Link>, "href">;

export default function InquiryFormLink({ onClick, ...props }: InquiryFormLinkProps) {
  return (
    <Link
      href={`#${INQUIRY_FORM_ID}`}
      onClick={(event) => {
        event.preventDefault();
        scrollToInquiryForm();
        onClick?.(event);
      }}
      {...props}
    />
  );
}
