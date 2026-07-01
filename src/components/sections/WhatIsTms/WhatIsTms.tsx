import Image from "next/image";
import { CheckIcon } from "@/components/icons/Icons";
import { WHAT_IS_TMS_FEATURES } from "@/data/site";
import styles from "./WhatIsTms.module.scss";

export default function WhatIsTms() {
  return (
    <section id="what-is-tms" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>What is TMS?</div>
          <h2 className={styles.title}>
            Healing Your Brain,
            <br />
            Without Side Effects.
          </h2>
          <p className={styles.text}>
            Transcranial Magnetic Stimulation (TMS) uses precisely targeted magnetic pulses — similar to those in an MRI — to stimulate areas of the brain involved in mood regulation.
          </p>
          <p className={styles.text}>
            There&apos;s no sedation, no systemic side effects, and no impact on your daily routine. Patients drive themselves home and return to work immediately after each session.
          </p>

          <div className={styles.features}>
            {WHAT_IS_TMS_FEATURES.map((feature) => (
              <div key={feature.title} className={styles.feature}>
                <div className={styles.featureIcon}>
                  <CheckIcon size={13} stroke="#E8711A" />
                </div>
                <div>
                  <div className={styles.featureTitle}>{feature.title}</div>
                  <div className={styles.featureDescription}>{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/tms-visual.jpg"
              alt="Peaceful person in light"
              width={440}
              height={550}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
