import Image from "next/image";
import { ABOUT_CREDENTIALS } from "@/data/site";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/priya.png"
              alt="Dr. Priya Parmar, MD"
              width={896}
              height={1195}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.label}>Meet Your Doctor</div>
          <h2 className={styles.title}>Dr. Priya Parmar, MD</h2>
          <div className={styles.role}>Board-Certified Psychiatrist · Founder, Rise TMS</div>

          <p className={styles.quote}>
            &ldquo;Here at Rise, you are treated with respect, compassion, and great care.&rdquo;
          </p>

          <p className={styles.text}>
            Dr. Parmar leads Rise TMS with a philosophy centered on whole-person care — combining clinical precision with genuine human presence. She takes time to truly understand each patient&apos;s story, tailoring every treatment plan to support lasting wellness, not just symptom relief.
          </p>

          <div className={styles.credentials}>
            {ABOUT_CREDENTIALS.map((credential) => (
              <div key={credential} className={styles.credential}>
                <div className={styles.dot} />
                <span>{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
