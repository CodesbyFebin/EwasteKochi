import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "hero.title": "Kerala's #1 Certified ITAD & E‑waste Recycler",
      "hero.subtitle": "NIST/DoD hard drive shredding • DPDP Act 2023 compliant • Free pickup across Kochi",
      "hero.cta.quote": "Get Free Quote",
      "hero.cta.call": "Call Now",
      "trust.google": "Google Rating",
      "trust.kspcb": "KSPCB Authorized",
      "trust.nist": "NIST Certified",
      "nav.services": "Services",
      "nav.blog": "Blog",
      "nav.locations": "Locations",
      "nav.sell": "Sell Electronics",
    }
  },
  ml: {
    translation: {
      "hero.title": "കേരളത്തിലെ #1 സർട്ടിഫൈഡ് ITAD & ഇ-വേസ്റ്റ് റീസൈക്ലർ",
      "hero.subtitle": "NIST/DoD ഹാർഡ് ഡ്രൈവ് ഷ്രെഡിംഗ് • DPDP ആക്ട് 2023 പാലിക്കൽ • കൊച്ചിയിൽ സൗജന്യ പിക്കപ്പ്",
      "hero.cta.quote": "സൗജന്യ വില നേടുക",
      "hero.cta.call": "ഇപ്പോൾ വിളിക്കുക",
      "trust.google": "ഗൂഗിൾ റേറ്റിംഗ്",
      "trust.kspcb": "KSPCB അംഗീകൃതം",
      "trust.nist": "NIST സർട്ടിഫൈഡ്",
      "nav.services": "സേവനങ്ങൾ",
      "nav.blog": "ബ്ലോഗ്",
      "nav.locations": "സ്ഥലങ്ങൾ",
      "nav.sell": "ഇലക്ട്രോണിക്സ് വിൽക്കുക",
    }
  },
  ta: {
    translation: {
      "hero.title": "கேரளாவின் #1 சான்றளிக்கப்பட்ட ITAD & இ-கழிவு மறுசுழற்சி",
      "hero.subtitle": "NIST/DoD ஹார்ட் டிரைவ் ஷ்ரெடிங் • DPDP சட்டம் 2023 இணக்கம் • கொச்சியில் இலவச சேகரிப்பு",
      "hero.cta.quote": "இலவச மேற்கோள் பெறுக",
      "hero.cta.call": "இப்போது அழைக்கவும்",
      "trust.google": "கூகிள் மதிப்பீடு",
      "trust.kspcb": "KSPCB அங்கீகரிக்கப்பட்டது",
      "trust.nist": "NIST சான்றிதழ்",
      "nav.services": "சேவைகள்",
      "nav.blog": "வலைப்பதிவு",
      "nav.locations": "இடங்கள்",
      "nav.sell": "மின்னணு சாதனங்களை விற்க",
    }
  },
  hi: {
    translation: {
      "hero.title": "केरल का #1 प्रमाणित ITAD और ई-कचरा रीसाइक्लर",
      "hero.subtitle": "NIST/DoD हार्ड ड्राइव श्रेडिंग • DPDP अधिनियम 2023 अनुपालन • कोच्चि में मुफ्त पिकअप",
      "hero.cta.quote": "मुफ्त कोटेशन प्राप्त करें",
      "hero.cta.call": "अभी कॉल करें",
      "trust.google": "गूगल रेटिंग",
      "trust.kspcb": "KSPCB अधिकृत",
      "trust.nist": "NIST प्रमाणित",
      "nav.services": "सेवाएं",
      "nav.blog": "ब्लॉग",
      "nav.locations": "स्थान",
      "nav.sell": "इलेक्ट्रॉनिक्स बेचें",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
