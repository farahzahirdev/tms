import HeroInquiryForm from "@/components/forms/HeroInquiryForm";
import ContactFormLink from "@/components/ui/ContactFormLink";
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "@/components/icons/Icons";
import { HERO_BADGES, INQUIRY_FORM_ID, SITE } from "@/data/site";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.badges}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Westlake Village, California
            </div>
            {/* <div className={styles.badge}>Covered by Insurance</div> */}
          </div>

          <h1 className={styles.title}>
            Someone Finally
            <br />
            <em>Listened.</em>
          </h1>

          <p className={styles.lead}>
            Not just to your symptoms — to <strong>you</strong>. When antidepressants haven&apos;t been enough, TMS offers a proven, FDA-cleared path forward.
          </p>

          <p className={styles.sublead}>
            Led by Dr. Priya Parmar, MD — a board-certified psychiatrist dedicated to lasting mental wellness.
          </p>

          <div className={styles.features}>
            {HERO_BADGES.map((badge) => (
              <div key={badge} className={styles.feature}>
                <CheckIcon size={13} />
                {badge}
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <ContactFormLink className={styles.primaryAction}>
              Check Eligibility
              <ArrowRightIcon size={15} />
            </ContactFormLink>
            <a href={SITE.phoneHref} className={styles.secondaryAction}>
              <PhoneIcon size={17} />
              Call {SITE.phone}
            </a>
          </div>
        </div>

        <div id={INQUIRY_FORM_ID} className={styles.formWrapper}>
          <div className={styles.formCard}>
            <HeroInquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
