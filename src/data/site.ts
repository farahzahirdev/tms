export const SITE = {
  name: "Rise TMS",
  phone: "(805) 507-5155",
  phoneHref: "tel:8055075155",
  email: "staff@risetms.com",
  address: {
    line1: "2629 Townsgate Rd, Suite 210",
    line2: "Westlake Village, CA 91361",
  },
  hours: {
    weekday: "Mon – Fri",
    weekdayTime: "8:30 AM – 5:00 PM",
    weekend: "Sat – Sun",
    weekendTime: "Closed",
  },
  links: {
    privacy: "https://www.risetms.com/your-privacy",
    terms: "https://www.risetms.com/our-terms",
    accessibility: "https://www.risetms.com/accessibility-statement",
  },
} as const;

export const NAV_LINKS = [
  { href: "#what-is-tms", label: "What is TMS?" },
  { href: "#benefits", label: "Why TMS" },
  { href: "#about", label: "Our Team" },
  { href: "#contact", label: "Contact" },
] as const;

export const HERO_BADGES = [
  "No medication side effects",
  "FDA-cleared since 2008",
  "20–40 min sessions",
  "Resume daily activities immediately",
] as const;

export const TRUST_ITEMS = [
  {
    title: "FDA-Cleared",
    description: "Approved for depression since 2008",
    icon: "shield" as const,
  },
  {
    title: "~70% Respond",
    description: "Of treatment-resistant patients",
    icon: "heart" as const,
  },
  {
    title: "20–40 Min",
    description: "Per session, drive yourself home",
    icon: "clock" as const,
  },
  {
    title: "Board-Certified",
    description: "Psychiatrists overseeing your care",
    icon: "users" as const,
  },
] as const;

export const WHAT_IS_TMS_FEATURES = [
  {
    title: "Non-invasive — no surgery, no anesthesia",
    description: "Patients sit comfortably in a reclining chair during treatment",
  },
  {
    title: "Covered by most major insurance plans",
    description: "Including Medicare, when antidepressants haven't worked",
  },
  {
    title: "Effective for treatment-resistant depression",
    description: "Also used for OCD, PTSD, anxiety, and more",
  },
] as const;

export const BENEFITS = [
  {
    title: "No Weight Changes",
    description:
      "TMS doesn't affect metabolism, appetite, or hormones — your weight stays exactly where it is.",
    icon: "heart" as const,
  },
  {
    title: "No Emotional Blunting",
    description:
      "Feel joy, connection, and the full range of your emotions — without the numbness many antidepressants cause.",
    icon: "smile" as const,
  },
  {
    title: "No Sexual Side Effects",
    description:
      "Unlike many SSRIs and SNRIs, TMS has no impact on libido or sexual function.",
    icon: "shield" as const,
  },
  {
    title: "Live Your Life Normally",
    description:
      "20–40 min sessions, 5 days/week. Drive yourself, go to work, maintain your full daily routine.",
    icon: "clock" as const,
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "Meet with Dr. Parmar to discuss your history and see if TMS is right for you. No obligation.",
    isFinal: false,
  },
  {
    step: 2,
    title: "Brain Mapping",
    description:
      "We locate the precise brain region to target and calibrate the ideal treatment intensity just for you.",
    isFinal: false,
  },
  {
    step: 3,
    title: "TMS Sessions",
    description:
      "20–40 min in-office sessions, typically 5 days/week for 4–6 weeks. Relax in a comfortable chair.",
    isFinal: false,
  },
  {
    step: 4,
    title: "Feel the Difference",
    description:
      "Most patients see real improvement within 2–3 weeks. Ongoing support guides your continued recovery.",
    isFinal: true,
  },
] as const;

export const CONDITIONS = [
  "Depression",
  "Anxiety",
  "OCD",
  "PTSD",
  "Bipolar Disorder",
  "ADD / ADHD",
  "Grief",
  "Psychotic Disorders",
  "Trauma",
] as const;

export const ABOUT_CREDENTIALS = [
  "Board-Certified Psychiatrist",
  "Specializing in TMS & Treatment-Resistant Depression",
  "Located in Westlake Village, serving the greater Conejo Valley",
] as const;

export const SPRAVATO_BADGES = [
  "FDA-Approved",
  "Administered In-Office",
  "Rapid Onset Relief",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "After years of trying different medications, TMS finally gave me my life back. I feel like myself again for the first time in years.",
    name: "Sarah M.",
    detail: "TMS Patient · Westlake Village",
    initial: "S",
  },
  {
    quote:
      "Dr. Parmar and her team made me feel genuinely heard throughout the entire process. TMS worked when nothing else did.",
    name: "James T.",
    detail: "TMS Patient · Thousand Oaks",
    initial: "J",
  },
  {
    quote:
      "I was skeptical at first, but within a few weeks I noticed real, lasting change. I'm so grateful I gave TMS a chance.",
    name: "Maria L.",
    detail: "TMS Patient · Calabasas",
    initial: "M",
  },
] as const;

export const INTEREST_OPTIONS = [
  { value: "tms", label: "TMS Therapy" },
  { value: "spravato", label: "Spravato® (Esketamine)" },
  { value: "both", label: "Both / Not Sure Yet" },
  { value: "other", label: "Other Psychiatry Services" },
] as const;

export const FOOTER_TREATMENTS = [
  { href: "#what-is-tms", label: "TMS Therapy" },
  { href: "#", label: "Spravato® (Esketamine)" },
  { href: "#", label: "Psychiatry Services" },
] as const;

export const FOOTER_CONDITIONS = [
  "Depression",
  "Anxiety",
  "PTSD",
  "OCD",
  "Bipolar Disorder",
] as const;
