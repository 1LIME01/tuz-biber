export type Locale = "en" | "tr";

export type NavItem = {
  label: string;
  href: string;
};

export type FormState = "idle" | "loading" | "success" | "error";

export type WaitlistPayload = {
  email: string;
  firstName?: string;
  lang: Locale;
};

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  otp: string;
  lang: Locale;
};

export type BrandDictionary = {
  header: {
    nav: NavItem[];
    cta: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trustStrip: {
    items: string[];
  };
  category: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
  };
  servingIdeas: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  productMacro: {
    label: string;
    title: string;
    copy: string;
    stats: { value: string; label: string }[];
  };
  ingredients: {
    eyebrow: string;
    title: string;
    items: { name: string; note: string }[];
  };
  craftProcess: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  founderStory: {
    eyebrow: string;
    title: string;
    body: string[];
    quote: string;
  };
  cultural: {
    eyebrow: string;
    title: string;
    items: { name: string; origin: string; vibe: string }[];
  };
  howToUse: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  waitlist: {
    eyebrow: string;
    title: string;
    description: string;
    fields: { email: string; firstName: string };
    submit: string;
    success: string;
    error: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    submit: string;
    success: string;
    error: string;
    otpHeading: string;
    otpDescription: string;
    otpSubmit: string;
    otpResend: string;
    fields: { name: string; email: string; phone: string; message: string; otp: string };
  };
  footer: {
    brand: string;
    location: string;
    copyright: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  storyPage: {
    eyebrow: string;
    title: string;
    intro: string;
    body: string[];
  };
  ingredientPage: {
    eyebrow: string;
    title: string;
    intro: string;
    body: string[];
  };
  howToUsePage: {
    eyebrow: string;
    title: string;
    intro: string;
    body: string[];
  };
};
