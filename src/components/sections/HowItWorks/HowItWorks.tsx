import InquiryFormLink from "@/components/ui/InquiryFormLink";
import { ArrowRightIcon, CircleCheckIcon } from "@/components/icons/Icons";
import { PROCESS_STEPS } from "@/data/site";
import styles from "./HowItWorks.module.scss";

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>The Process</div>
          <h2 className={styles.title}>Your Path to Feeling Better</h2>
        </div>

        <div className={styles.steps}>
          <div className={styles.connector} />
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className={styles.step}>
              <div className={`${styles.stepNumber} ${step.isFinal ? styles.stepNumberFinal : ""}`}>
                {step.isFinal ? <CircleCheckIcon size={22} /> : step.step}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <InquiryFormLink className={styles.ctaButton}>
            Start Your Journey Today
            <ArrowRightIcon size={16} />
          </InquiryFormLink>
        </div>
      </div>
    </section>
  );
}
