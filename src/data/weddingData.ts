export interface EventDetail {
  id: string;
  nameHindi: string;
  nameEnglish: string;
  dateStr: string;
  dateFormatted: string;
  dayHindi: string;
  dayEnglish: string;
  timeText: string;
  venueHindi: string;
  venueEnglish: string;
  descriptionHindi: string;
  iconType: 'tilak' | 'haldi' | 'mehndi' | 'wedding';
  accentColor: string;
  note?: string;
}

export interface WeddingConfig {
  couple: {
    groom: {
      nameHindi: string;
      nameEnglish: string;
      fatherHindi: string;
      fatherEnglish: string;
      motherHindi: string;
      motherEnglish: string;
      villageHindi: string;
      villageEnglish: string;
      districtHindi: string;
      districtEnglish: string;
      stateHindi: string;
      stateEnglish: string;
      addressHindi: string;
      addressEnglish: string;
    };
    bride: {
      nameHindi: string;
      nameEnglish: string;
      fatherHindi: string;
      fatherEnglish: string;
      motherHindi: string;
      motherEnglish: string;
      villageHindi: string;
      villageEnglish: string;
      districtHindi: string;
      districtEnglish: string;
      stateHindi: string;
      stateEnglish: string;
      addressHindi: string;
      addressEnglish: string;
    };
  };
  weddingDate: {
    isoDate: string; // "2026-12-09T15:00:00+05:30"
    displayDateHindi: string;
    displayDateEnglish: string;
    dayHindi: string;
    dayEnglish: string;
    baraatDepartureTime: string;
    transportHindi: string;
    transportEnglish: string;
    baraatInvitationHindi: string;
  };
  contacts: Array<{
    name: string;
    relationshipHindi: string;
    phone: string;
    whatsappNumber: string;
  }>;
  locations: {
    departure: {
      titleHindi: string;
      titleEnglish: string;
      addressHindi: string;
      addressEnglish: string;
      mapQuery: string;
    };
    destination: {
      titleHindi: string;
      titleEnglish: string;
      addressHindi: string;
      addressEnglish: string;
      mapQuery: string;
    };
  };
  events: EventDetail[];
  familyInvitation: {
    headingHindi: string;
    mainHostHindi: string;
    familyHindi: string;
    blessingQuoteHindi: string;
  };
  rsvp: {
    whatsappPrefill: string;
  };
}

export const WEDDING_DATA: WeddingConfig = {
  couple: {
    groom: {
      nameHindi: "अविनाश कन्नौजिया",
      nameEnglish: "Avinash Kannaujia",
      fatherHindi: "श्री अमीचन्द्र कन्नौजिया",
      fatherEnglish: "Shri Amichandra Kannaujia",
      motherHindi: "स्वर्गीय गुलाबी देवी",
      motherEnglish: "Late Gulabi Devi",
      villageHindi: "ग्राम व पोस्ट: सिंघोरा",
      villageEnglish: "Gram & Post: Singhora",
      districtHindi: "गाजीपुर",
      districtEnglish: "Ghazipur",
      stateHindi: "उत्तर प्रदेश",
      stateEnglish: "Uttar Pradesh",
      addressHindi: "ग्राम व पोस्ट सिंघोरा, जनपद गाजीपुर, उत्तर प्रदेश",
      addressEnglish: "Village & Post Singhora, District Ghazipur, Uttar Pradesh",
    },
    bride: {
      nameHindi: "दीपांजली कन्नौजिया",
      nameEnglish: "Deepanjali Kannaujia",
      fatherHindi: "श्री सतीश कन्नौजिया",
      fatherEnglish: "Shri Satish Kannaujia",
      motherHindi: "श्रीमती नयन देवी",
      motherEnglish: "Smt. Nayan Devi",
      villageHindi: "ग्राम व पोस्ट: वाजिदपुर",
      villageEnglish: "Gram & Post: Wajidpur",
      districtHindi: "गाजीपुर",
      districtEnglish: "Ghazipur",
      stateHindi: "उत्तर प्रदेश",
      stateEnglish: "Uttar Pradesh",
      addressHindi: "ग्राम व पोस्ट वाजिदपुर, जनपद गाजीपुर, उत्तर प्रदेश",
      addressEnglish: "Village & Post Wajidpur, District Ghazipur, Uttar Pradesh",
    },
  },
  weddingDate: {
    isoDate: "2026-12-09T15:00:00+05:30",
    displayDateHindi: "09 दिसम्बर 2026",
    displayDateEnglish: "09 December 2026",
    dayHindi: "बुधवार",
    dayEnglish: "Wednesday",
    baraatDepartureTime: "सायं 3:00 बजे",
    transportHindi: "निजी साधनों द्वारा",
    transportEnglish: "Private Vehicles",
    baraatInvitationHindi: "बारात हमारे निवास स्थान – सिंघोरा से निजी साधनों द्वारा सायं 3 बजे ग्राम व पोस्ट – वाजिदपुर के लिए प्रस्थान करेगी, जिसमें आप सादर आमंत्रित हैं।",
  },
  contacts: [
    {
      name: "श्री अमीचन्द्र कन्नौजिया",
      relationshipHindi: "वर के पिता",
      phone: "8707885776",
      whatsappNumber: "918707885776",
    },
    {
      name: "श्री अमीचन्द्र कन्नौजिया",
      relationshipHindi: "सम्पर्क सूत्र",
      phone: "7021248038",
      whatsappNumber: "917021248038",
    },
  ],
  locations: {
    departure: {
      titleHindi: "वर निवास (प्रस्थान स्थल)",
      titleEnglish: "Groom's Residence (Departure)",
      addressHindi: "ग्राम व पोस्ट सिंघोरा, जनपद गाजीपुर, उत्तर प्रदेश",
      addressEnglish: "Gram & Post Singhora, District Ghazipur, Uttar Pradesh",
      mapQuery: "Singhora, Ghazipur, Uttar Pradesh",
    },
    destination: {
      titleHindi: "वधु निवास (शुभ विवाह स्थल)",
      titleEnglish: "Bride's Residence (Wedding Venue)",
      addressHindi: "ग्राम व पोस्ट वाजिदपुर, जनपद गाजीपुर, उत्तर प्रदेश",
      addressEnglish: "Gram & Post Wajidpur, District Ghazipur, Uttar Pradesh",
      mapQuery: "Wajidpur, Ghazipur, Uttar Pradesh",
    },
  },
  events: [
    {
      id: "tilak",
      nameHindi: "तिलक उत्सव एवं प्रीतिभोज",
      nameEnglish: "Tilak Ceremony & Manglik Bhoj",
      dateStr: "2026-12-05",
      dateFormatted: "05 दिसम्बर 2026",
      dayHindi: "शनिवार",
      dayEnglish: "Saturday",
      timeText: "मंगलिक कार्यक्रम एवं प्रीतिभोज",
      venueHindi: "निज निवास – ग्राम व पोस्ट सिंघोरा, गाजीपुर (उ.प्र.)",
      venueEnglish: "Residence – Gram & Post Singhora, Ghazipur (U.P.)",
      descriptionHindi: "शुभ तिलक समारोह एवं मंगलिक कार्यक्रम के पावन अवसर पर सपरिवार सादर आमंत्रित हैं।",
      iconType: "tilak",
      accentColor: "#C5A15B",
    },
    {
      id: "haldi",
      nameHindi: "हल्दी रस्म",
      nameEnglish: "Haldi Ceremony",
      dateStr: "2026-12-07",
      dateFormatted: "07 दिसम्बर 2026",
      dayHindi: "सोमवार",
      dayEnglish: "Monday",
      timeText: "समय एवं अन्य विवरण शीघ्र साझा किए जाएंगे",
      venueHindi: "वर निवास – ग्राम सिंघोरा, गाजीपुर",
      venueEnglish: "Groom's Residence – Gram Singhora, Ghazipur",
      descriptionHindi: "उबटन और हल्दी की महक संग खुशियों का शुभारम्भ।",
      iconType: "haldi",
      accentColor: "#E5B942",
    },
    {
      id: "mehndi",
      nameHindi: "मेहंदी उत्सव",
      nameEnglish: "Mehndi Ceremony",
      dateStr: "2026-12-08",
      dateFormatted: "08 दिसम्बर 2026",
      dayHindi: "मंगलवार",
      dayEnglish: "Tuesday",
      timeText: "समय एवं अन्य विवरण शीघ्र साझा किए जाएंगे",
      venueHindi: "वर निवास – ग्राम सिंघोरा, गाजीपुर",
      venueEnglish: "Groom's Residence – Gram Singhora, Ghazipur",
      descriptionHindi: "हाथों में रचेगी सतरंगी हिना, गूंजेगी मंगल गीतों की तान।",
      iconType: "mehndi",
      accentColor: "#5E8457",
    },
    {
      id: "vivah",
      nameHindi: "शुभ विवाह (पाणिग्रहण संस्कार)",
      nameEnglish: "Shubh Vivah / Wedding Ceremony",
      dateStr: "2026-12-09",
      dateFormatted: "09 दिसम्बर 2026",
      dayHindi: "बुधवार",
      dayEnglish: "Wednesday",
      timeText: "बारात प्रस्थान: सायं 3:00 बजे",
      venueHindi: "ग्राम व पोस्ट वाजिदपुर, गाजीपुर (उ.प्र.)",
      venueEnglish: "Gram & Post Wajidpur, Ghazipur (U.P.)",
      descriptionHindi: "पवित्र अग्नि के सात फेरे एवं सात वचनों के साथ दाम्पत्य जीवन का मंगलमय प्रारम्भ।",
      iconType: "wedding",
      accentColor: "#741C29",
      note: "बारात हमारे निवास स्थान – सिंघोरा से निजी साधनों द्वारा सायं 3 बजे ग्राम व पोस्ट – वाजिदपुर के लिए प्रस्थान करेगी।"
    },
  ],
  familyInvitation: {
    headingHindi: "!! स्नेहाकांक्षी !!",
    mainHostHindi: "श्री अमीचन्द्र कन्नौजिया",
    familyHindi: "समस्त कन्नौजिया परिवार",
    blessingQuoteHindi: "आपकी गरिमामयी उपस्थिति एवं पावन शुभाशीर्वाद हमारे कुल-परिवार के लिए अत्यंत सौभाग्य एवं गौरव का विषय होगा।",
  },
  rsvp: {
    whatsappPrefill: "नमस्कार! अविनाश एवं दीपांजली के शुभ विवाह समारोह में सम्मिलित होने के लिए हम अपनी उपस्थिति की पुष्टि करना चाहते हैं।",
  },
};
