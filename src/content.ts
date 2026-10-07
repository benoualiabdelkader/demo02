export type Lang = "ar" | "fr";
export type L = Record<Lang, string>;

/** Coordonnées à confirmer par l'établissement : laisser vide tant que non fournies. */
export const CONTACT = {
  phone: "", // ex. "+213XXXXXXXXX" — à confirmer
  whatsapp: "", // ex. "213XXXXXXXXX" — à confirmer
  email: "",
};

export const nav: { id: string; label: L }[] = [
  { id: "accueil", label: { fr: "Accueil", ar: "الرئيسية" } },
  { id: "notre-ecole", label: { fr: "Notre école", ar: "مدرستنا" } },
  { id: "programmes", label: { fr: "Programmes", ar: "البرامج" } },
  { id: "activites", label: { fr: "Activités", ar: "الأنشطة" } },
  { id: "galerie", label: { fr: "Galerie", ar: "المعرض" } },
  { id: "admission", label: { fr: "Admission", ar: "التسجيل" } },
  { id: "contact", label: { fr: "Contact", ar: "اتصال" } },
];

export const t = {
  brandLatin: "École Ibn Rochd",
  brandAr: "ابن رشد",
  brandFull: { fr: "Établissement d'enseignement privé", ar: "مؤسسة التعليم الخاصة ابن رشد" } as L,
  city: { fr: "Aïn Témouchent, Algérie", ar: "عين تموشنت، الجزائر" } as L,
  demoBadge: { fr: "Démo de présentation", ar: "نسخة عرض تجريبية" } as L,
  heroEyebrow: { fr: "Aïn Témouchent · Algérie", ar: "عين تموشنت · الجزائر" } as L,
  heroTitle: {
    fr: "Donner à chaque élève les repères pour avancer avec confiance.",
    ar: "نمنح كل تلميذ المعالم التي يتقدّم بها بثقة.",
  } as L,
  heroText: {
    fr: "Une école privée qui accompagne chaque élève avec exigence, attention et ouverture. Découvrez l'établissement et échangez directement avec l'administration.",
    ar: "مؤسسة تعليم خاصة ترافق كل تلميذ بالجدّية والاهتمام والانفتاح. تعرّفوا على المؤسسة وتواصلوا مباشرة مع الإدارة.",
  } as L,
  ctaAdmission: { fr: "Préparer l'inscription", ar: "تحضير التسجيل" } as L,
  ctaDiscover: { fr: "Découvrir l'école", ar: "اكتشفوا المدرسة" } as L,
  confirmed: { fr: "Information à confirmer par l'administration", ar: "معلومة تؤكدها الإدارة" } as L,
  adminNote: {
    fr: "Informations disponibles auprès de l'administration — nous vous invitons à échanger directement avec l'établissement.",
    ar: "المعلومات متوفرة لدى الإدارة — ندعوكم إلى التواصل مباشرة مع المؤسسة.",
  } as L,

  intro: {
    kicker: { fr: "Notre école", ar: "مدرستنا" } as L,
    title: {
      fr: "Un cadre sérieux et chaleureux, au cœur d'Aïn Témouchent.",
      ar: "إطار جاد ودافئ في قلب عين تموشنت.",
    } as L,
    p1: {
      fr: "École Ibn Rochd est un établissement d'enseignement privé installé à Aïn Témouchent. Son nom rend hommage à Ibn Rochd (Averroès), penseur du savoir et de la raison.",
      ar: "مؤسسة ابن رشد مؤسسة تعليم خاصة بعين تموشنت. يحمل اسمها تحية لابن رشد، المفكّر الذي ارتبط اسمه بالعلم والعقل.",
    } as L,
    p2: {
      fr: "Ce site de démonstration présente la manière dont l'école pourrait raconter son projet aux familles. Les détails pratiques (niveaux, horaires, tarifs) sont à valider avec la direction.",
      ar: "يعرض هذا الموقع التجريبي كيف يمكن للمدرسة أن تقدّم مشروعها للأسر. التفاصيل العملية (المستويات، الأوقات، التعريفات) تُؤكَّد مع الإدارة.",
    } as L,
    quote: {
      fr: "Exigence, attention, ouverture.",
      ar: "الجدّية، الاهتمام، الانفتاح.",
    } as L,
  },

  features: {
    kicker: { fr: "Nos engagements", ar: "التزاماتنا" } as L,
    title: { fr: "Trois repères pour accompagner les familles.", ar: "ثلاثة معالم لمرافقة الأسر." } as L,
    items: [
      {
        n: "01",
        title: { fr: "Exigence", ar: "الجدّية" },
        text: {
          fr: "Un cadre de travail clair, où l'effort et la rigueur sont encouragés avec bienveillance.",
          ar: "إطار عمل واضح يُشجَّع فيه الجهد والصرامة بروح ودّية.",
        },
      },
      {
        n: "02",
        title: { fr: "Attention", ar: "الاهتمام" },
        text: {
          fr: "Une écoute de chaque élève et un dialogue ouvert avec les parents.",
          ar: "إصغاء لكل تلميذ وحوار مفتوح مع الأولياء.",
        },
      },
      {
        n: "03",
        title: { fr: "Ouverture", ar: "الانفتاح" },
        text: {
          fr: "Une approche bilingue arabe / français, tournée vers la curiosité et le monde.",
          ar: "مقاربة ثنائية اللغة عربية / فرنسية، تنفتح على الفضول والعالم.",
        },
      },
    ] as { n: string; title: L; text: L }[],
  },

  programs: {
    kicker: { fr: "Programmes", ar: "البرامج" } as L,
    title: { fr: "Des parcours lisibles, à préciser avec la direction.", ar: "مسارات واضحة، تُحدَّد مع الإدارة." } as L,
    lead: {
      fr: "Les niveaux et cycles proposés ne sont pas affichés ici : ils seront renseignés par l'école. Voici les axes pédagogiques présentés dans cette démo.",
      ar: "لا تُعرض المستويات والأطوار هنا: ستُدرجها المدرسة. فيما يلي المحاور البيداغوجية التي تعرضها هذه النسخة.",
    } as L,
    items: [
      {
        title: { fr: "Langues", ar: "اللغات" },
        text: {
          fr: "Place donnée à la maîtrise de l'arabe et du français, à l'oral comme à l'écrit.",
          ar: "اهتمام بإتقان العربية والفرنسية، شفهيًا وكتابيًا.",
        },
      },
      {
        title: { fr: "Sciences et raisonnement", ar: "العلوم والاستدلال" },
        text: {
          fr: "Une démarche qui valorise la curiosité, la méthode et la résolution de problèmes.",
          ar: "منهج يثمّن الفضول والمنهجية وحلّ المشكلات.",
        },
      },
      {
        title: { fr: "Méthode de travail", ar: "منهجية العمل" },
        text: {
          fr: "Organisation, autonomie et suivi pour que chaque élève progresse à son rythme.",
          ar: "التنظيم والاستقلالية والمتابعة ليتقدّم كل تلميذ بإيقاعه.",
        },
      },
      {
        title: { fr: "Éducation et citoyenneté", ar: "التربية والمواطنة" },
        text: {
          fr: "Respect, responsabilité et vie collective au quotidien.",
          ar: "الاحترام والمسؤولية والحياة الجماعية في الحياة اليومية.",
        },
      },
    ] as { title: L; text: L }[],
  },

  activities: {
    kicker: { fr: "Activités", ar: "الأنشطة" } as L,
    title: { fr: "La vie de l'école, au-delà de la classe.", ar: "حياة المدرسة خارج القسم." } as L,
    lead: {
      fr: "Exemples d'axes de vie scolaire. Le calendrier et les activités réellement proposées seront communiqués par l'administration.",
      ar: "أمثلة على محاور الحياة المدرسية. أما الرزنامة والأنشطة المقدَّمة فعلًا فتُعلنها الإدارة.",
    } as L,
    items: [
      { fr: "Lecture et expression", ar: "القراءة والتعبير" },
      { fr: "Découverte scientifique", ar: "الاكتشاف العلمي" },
      { fr: "Arts et créativité", ar: "الفنون والإبداع" },
      { fr: "Sport et bien-être", ar: "الرياضة والرفاه" },
    ] as L[],
  },

  gallery: {
    kicker: { fr: "Galerie", ar: "المعرض" } as L,
    title: { fr: "Aperçu visuel de l'ambiance.", ar: "لمحة بصرية عن الأجواء." } as L,
    note: {
      fr: "Visuels éducatifs génériques, à remplacer par les photos de l'école.",
      ar: "صور تعليمية عامة، تُستبدل بصور المدرسة.",
    } as L,
    overlay: { fr: "Visuel à personnaliser", ar: "صورة قابلة للتخصيص" } as L,
    close: { fr: "Fermer", ar: "إغلاق" } as L,
  },

  admission: {
    kicker: { fr: "Admission", ar: "التسجيل" } as L,
    title: { fr: "Préparer l'inscription, étape par étape.", ar: "تحضير التسجيل خطوة بخطوة." } as L,
    lead: {
      fr: "Les modalités exactes (dossier, dates, tarifs) relèvent de l'administration. Voici un parcours indicatif des échanges.",
      ar: "الشروط الدقيقة (الملف، التواريخ، التعريفات) من اختصاص الإدارة. هذا مسار إرشادي للتواصل.",
    } as L,
    steps: [
      {
        q: { fr: "Prendre contact", ar: "التواصل" },
        a: {
          fr: "Écrire ou appeler l'établissement pour exprimer votre intérêt et poser vos questions.",
          ar: "الكتابة أو الاتصال بالمؤسسة للتعبير عن اهتمامكم وطرح أسئلتكم.",
        },
      },
      {
        q: { fr: "Échanger avec la direction", ar: "لقاء الإدارة" },
        a: {
          fr: "Un échange permet de présenter le projet de l'école et de comprendre les attentes de la famille.",
          ar: "لقاء يتيح عرض مشروع المدرسة وفهم انتظارات الأسرة.",
        },
      },
      {
        q: { fr: "Constituer le dossier", ar: "تكوين الملف" },
        a: {
          fr: "La liste des pièces à fournir est communiquée par l'administration.",
          ar: "قائمة الوثائق المطلوبة تقدّمها الإدارة.",
        },
      },
      {
        q: { fr: "Confirmation", ar: "التأكيد" },
        a: {
          fr: "Les conditions d'inscription et les prochaines étapes sont confirmées directement par l'établissement.",
          ar: "شروط التسجيل والخطوات اللاحقة تؤكدها المؤسسة مباشرة.",
        },
      },
    ] as { q: L; a: L }[],
  },

  family: {
    kicker: { fr: "Familles", ar: "الأسر" } as L,
    title: { fr: "Un dialogue ouvert avec les parents.", ar: "حوار مفتوح مع الأولياء." } as L,
    text: {
      fr: "L'école souhaite construire une relation de confiance avec les familles : communication claire, disponibilité et suivi du parcours de l'élève. Les modalités de communication seront précisées par l'établissement.",
      ar: "تسعى المدرسة إلى بناء علاقة ثقة مع الأسر: تواصل واضح، وتوفّر، ومتابعة لمسار التلميذ. وستحدّد المؤسسة طرق التواصل.",
    } as L,
  },

  news: {
    kicker: { fr: "Actualités", ar: "الأخبار" } as L,
    title: { fr: "Espace actualités (démo)", ar: "فضاء الأخبار (تجريبي)" } as L,
    text: {
      fr: "Cet espace accueillera les annonces officielles de l'école. Aucune actualité n'est publiée dans cette démo afin de ne pas présenter d'événement non confirmé.",
      ar: "سيستقبل هذا الفضاء إعلانات المدرسة الرسمية. لا يُنشر أي خبر في هذه النسخة حتى لا تُعرض أحداث غير مؤكدة.",
    } as L,
    empty: { fr: "Aucune annonce pour le moment", ar: "لا توجد إعلانات حاليًا" } as L,
  },

  contact: {
    kicker: { fr: "Contact", ar: "اتصال" } as L,
    title: { fr: "Parlons de votre enfant.", ar: "لنتحدث عن ابنكم." } as L,
    address: { fr: "Aïn Témouchent, Algérie", ar: "عين تموشنت، الجزائر" } as L,
    addressLabel: { fr: "Adresse", ar: "العنوان" } as L,
    phoneLabel: { fr: "Téléphone", ar: "الهاتف" } as L,
    phoneTbc: { fr: "Numéro à confirmer par l'école", ar: "الرقم تؤكده المدرسة" } as L,
    waLabel: { fr: "WhatsApp (canal à confirmer)", ar: "واتساب (قناة تؤكدها المدرسة)" } as L,
    waStatus: { fr: "Canal à confirmer", ar: "القناة تؤكدها المدرسة" } as L,
    name: { fr: "Nom et prénom", ar: "الاسم الكامل" } as L,
    contactField: { fr: "E-mail ou téléphone", ar: "البريد أو الهاتف" } as L,
    message: { fr: "Votre message", ar: "رسالتكم" } as L,
    send: { fr: "Envoyer (démo)", ar: "إرسال (تجريبي)" } as L,
    success: {
      fr: "Merci. Message validé localement : cette démo n'envoie rien à une boîte réelle.",
      ar: "شكرًا. تم التحقق من الرسالة محليًا: هذه النسخة التجريبية لا ترسل شيئًا إلى بريد فعلي.",
    } as L,
  },

  footer: {
    note: {
      fr: "Démo de présentation. Marque provisoire — à remplacer par le logo officiel.",
      ar: "نسخة عرض تجريبية. علامة مؤقتة — تُستبدل بالشعار الرسمي.",
    } as L,
    top: { fr: "Retour en haut", ar: "العودة للأعلى" } as L,
  },
};

export const galleryItems: { src: string; alt: L; caption: L }[] = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=70",
    alt: { fr: "Élèves apprenant autour d'un livre", ar: "تلاميذ يتعلمون حول كتاب" },
    caption: { fr: "Apprendre ensemble", ar: "نتعلّم معًا" },
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=70",
    alt: { fr: "Salle de classe lumineuse", ar: "قاعة دراسة مضيئة" },
    caption: { fr: "Un cadre de travail serein", ar: "إطار عمل هادئ" },
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=70",
    alt: { fr: "Enseignant et élèves en classe", ar: "معلّم وتلاميذ في القسم" },
    caption: { fr: "L'attention de l'enseignant", ar: "اهتمام المعلّم" },
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=70",
    alt: { fr: "Livres empilés et matériel d'étude", ar: "كتب ولوازم دراسة" },
    caption: { fr: "Le goût de lire", ar: "حب القراءة" },
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=70",
    alt: { fr: "Enfants en activité de classe", ar: "أطفال في نشاط صفي" },
    caption: { fr: "Curiosité et découverte", ar: "فضول واكتشاف" },
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=70",
    alt: { fr: "Groupe d'élèves qui travaillent ensemble", ar: "مجموعة تلاميذ يعملون معًا" },
    caption: { fr: "Travail d'équipe", ar: "العمل الجماعي" },
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1800&q=75";
