export const SITE = {
  name: "Rise TMS",
  phone: "(805) 360-4085",
  phoneHref: "tel:8053604085",
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

export const INQUIRY_FORM_ID = "inquiry-form";
export const CONTACT_FORM_ID = "contact-form";

export const NAV_LINKS = [
  { href: "#what-is-tms", label: "What is TMS?" },
  { href: "#benefits", label: "Why TMS" },
  { href: "#about", label: "Our Team" },
  { href: "#contact", label: "Contact" },
] as const;

export const HERO_BADGES = [
  "Covered by insurance",
  "FDA-cleared since 2008",
  "20-minute sessions",
  // "Resume daily activities immediately",
] as const;

export const TRUST_ITEMS = [
  {
    title: "FDA-Cleared",
    description: "Approved for depression since 2008",
    icon: "shield" as const,
  },
  {
    title: "70% Find Relief",
    description: "After Medication Falls Short",
    icon: "heart" as const,
  },
  {
    title: "20-Minute Sessions",
    description: "Back to your day",
    icon: "clock" as const,
  },
  {
    title: "Covered by Insurance",
    description: "Most plans accepted",
    icon: "shield" as const,
  },
] as const;

export const WHAT_IS_TMS_FEATURES = [
  {
    title: "Covered by most insurance plans",
    description: "Many plans cover TMS when medication hasn't worked",
  },
  {
    title: "Non-invasive — no surgery, no anesthesia",
    description: "Patients sit comfortably in a reclining chair during treatment",
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
    title: "20-Min Sessions",
    description:
      "20-minute sessions, 5 days/week. Drive yourself, go to work, and get back to your day.",
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
      "20-min in-office sessions, typically 5 days/week for 4–6 weeks. Relax in a comfortable chair.",
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

export const CONDITIONS_SECTION = {
  label: "TMS for Depression",
  title: "Feel Like Yourself Again",
  subtitle:
    "Rise TMS provides compassionate, evidence-based care for people struggling with depression when medication hasn't helped enough.",
} as const;

export const CONDITIONS = [
  "Depression",
  "Medication Not Working",
  "Anxious Depression",
  "Low Motivation",
  "Loss of Interest",
  "Side Effects",
] as const;

export const ABOUT_CREDENTIALS = [
  "Board-Certified Psychiatrist",
  "Specializing in TMS & Treatment-Resistant Depression",
  "Located in Westlake Village, serving the greater Conejo Valley",
] as const;

export const SPRAVATO_BADGES = [
  "FDA-Approved",
  "Covered by Insurance",
  "Rapid Onset Relief",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Dr. Parmar took the time to listen to my concerns, including my personal thoughts on meds and therapy, and built a tailored med and TMS therapy for me.",
    name: "Steven B.",
    detail: "TMS Patient",
    initial: "S",
  },
  {
    quote:
      "They offer great things here! I've already felt a lot of improvement, and I couldn't be happier!",
    name: "Jaden R.",
    detail: "TMS Patient",
    initial: "J",
  },
  {
    quote:
      "The sweetest and most caring people. And the office is so peaceful! TMS treatments made a huge difference.",
    name: "Bella L.",
    detail: "TMS Patient",
    initial: "B",
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
  "Medication Not Working",
  "Anxious Depression",
  "Low Motivation",
  "Loss of Interest",
] as const;
