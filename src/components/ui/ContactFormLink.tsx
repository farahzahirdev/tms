"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { CONTACT_FORM_ID } from "@/data/site";
import { scrollToContactForm } from "@/lib/scrollToContactForm";

type ContactFormLinkProps = Omit<ComponentProps<typeof Link>, "href">;

export default function ContactFormLink({ onClick, ...props }: ContactFormLinkProps) {
  return (
    <Link
      href={`#${CONTACT_FORM_ID}`}
      onClick={(event) => {
        event.preventDefault();
        scrollToContactForm();
        onClick?.(event);
      }}
      {...props}
    />
  );
}
