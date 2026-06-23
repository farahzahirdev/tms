"use client";

import { INQUIRY_FORM } from "@/data/form";
import styles from "./EmbeddedInquiryForm.module.scss";

export default function EmbeddedInquiryForm() {
  const iframeId = `inline-${INQUIRY_FORM.id}`;


  console.log(INQUIRY_FORM.height, 'height');
  
  return (
    <div className={styles.wrappe}>
      <iframe
        src={INQUIRY_FORM.src}
        className={styles.iframe}
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={INQUIRY_FORM.title}
        data-height={INQUIRY_FORM.height}
        data-layout-iframe-id={iframeId}
        data-form-id={INQUIRY_FORM.id}
        title={INQUIRY_FORM.title}
      />
    </div>
  );
}
