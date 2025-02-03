export const translations = {
  ar: {
    title: "أول ذكاء اصطناعي باللهجة المغربية",
    subtitle: "استكشف مستقبل التكنولوجيا بلغتك",
    placeholder: "دخل الإيميل ديالك",
    button: "بغيت نكون من الأوائل",
    success: "شكراً! غادي نخبرك فاش نطلقو",
  },
  fr: {
    title: "Premier IA en Darija Marocaine",
    subtitle: "Explorez l'avenir de la technologie dans votre langue",
    placeholder: "Entrez votre email",
    button: "Je veux être parmi les premiers",
    success: "Merci ! Nous vous tiendrons informé du lancement",
  },
  en: {
    title: "First AI in Moroccan Arabic",
    subtitle: "Explore the future of technology in your language",
    placeholder: "Enter your email",
    button: "I want to be among the first",
    success: "Thank you! We'll notify you of the launch",
  },
};

export type Language = keyof typeof translations;
