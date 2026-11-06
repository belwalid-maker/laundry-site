"use strict";

/* =========================================================
   Rim Pressing — site interactions & translations

   Default language: French. English and Arabic versions are
   available from the language switch in the header.
   ========================================================= */

const siteConfig = {
  phoneNumber: "212522983778", // digits only, including country code
  whatsappNumber: "212649320942", // separate WhatsApp number
  displayPhone: "05 22 98 37 78", // shown next to the call button
  displayWhatsApp: "06 49 32 09 42", // shown next to the WhatsApp icon
};

const translations = {
  fr: {
    "meta.title": "Rim Pressing — Pressing & nettoyage à Casablanca",
    "meta.description":
      "Rim Pressing à Casablanca : lavage, repassage et nettoyage à sec avec collecte et livraison gratuites. Réservez votre collecte sur WhatsApp.",
    "meta.ogTitle": "Rim Pressing — Pressing & nettoyage à Casablanca",
    "meta.ogDescription":
      "Un pressing soigné à Casablanca, avec collecte et livraison gratuites. Votre linge revient frais, plié et prêt à porter.",

    "brand.home": "Rim Pressing — accueil",
    "skip": "Aller au contenu",
    "nav.primary": "Navigation principale",
    "nav.services": "Services",
    "nav.how": "Comment ça marche",
    "nav.prices": "Tarifs",
    "nav.contact": "Contact",
    "nav.menuOpen": "Ouvrir le menu",
    "nav.menuClose": "Fermer le menu",
    "whatsapp.floatLabel": "Discuter avec Rim Pressing sur WhatsApp",
    "lang.label": "Choisir la langue",
    "header.cta": "Réserver une collecte",

    "hero.eyebrow": "Pressing & nettoyage à Casablanca",
    "hero.title": "Du linge frais.<br><span>Zéro tracas.</span>",
    "hero.lede":
      "Un pressing de confiance à Casablanca, avec collecte et livraison gratuites — votre linge revient net, repassé et prêt à porter.",
    "hero.cta": "Réserver une collecte",
    "hero.secondary": "Découvrir les services",
    "hero.benefitsLabel": "Nos avantages",
    "hero.point1": "Collecte & livraison gratuites",
    "hero.point2": "Prêt sous 24 à 48 h",
    "hero.point3": "Un soin pour chaque tissu",
    "hero.pickupLabel": "Collecte prévue",
    "hero.pickupTime": "Aujourd’hui · 18 h",
    "hero.readyLabel": "Frais & pliés",
    "hero.readyValue": "Prêts à livrer",

    "specialties.label": "Soin attentif pour",
    "specialties.daily": "Linge du quotidien",
    "specialties.workwear": "Chemises & tenues de travail",
    "specialties.delicate": "Tissus délicats",
    "specialties.home": "Linge de maison",

    "services.eyebrow": "Nos services",
    "services.title": "Tout ce dont<br>votre linge a besoin.",
    "services.copy":
      "Chaque article est facturé à la pièce — jamais au kilo. Collecte et livraison gratuites.",
    "services.wash.title": "Nettoyage à sec & lavage",
    "services.wash.desc":
      "À l’eau ou à sec, selon la matière de chaque vêtement.",
    "services.iron.title": "Repassage",
    "services.iron.desc":
      "Des finitions nettes et impeccables pour chemises, pantalons et robes.",
    "services.dry.title": "Nettoyage à sec",
    "services.dry.desc":
      "Un soin professionnel et délicat pour costumes, manteaux et tissus fragiles.",
    "services.home.title": "Linge de maison",
    "services.home.desc":
      "Draps, serviettes, nappes et rideaux, lavés et soigneusement repassés.",
    "services.bedding.title": "Couvertures & couettes",
    "services.bedding.desc":
      "Couvertures, couvre-lits et oreillers nettoyés en profondeur.",
    "services.tags.shirts": "Chemises",
    "services.tags.suits": "Costumes",
    "services.tags.dresses": "Robes",
    "services.tags.coats": "Manteaux",
    "services.tags.djellabas": "Djellabas",
    "services.viewPrices": "Voir les tarifs",
    "services.special.title": "Un article particulier ?",
    "services.special.desc":
      "Caftan, robe de soirée, pièce délicate… Écrivez-nous, on vous conseille.",
    "services.special.cta": "Écrivez-nous",
    "services.popular": "Le plus demandé",
    "services.askWhatsapp": "Demander un devis sur WhatsApp",
    "services.note":
      "Tous nos prix sont à la pièce. Le tarif final dépend du tissu et de la finition.",
    "common.from": "Dès",
    "common.perItem": "/ pièce",

    "how.eyebrow": "Comment ça marche",
    "how.title": "Déposez votre linge,<br>on s’occupe du reste.",
    "how.copy":
      "Dépôt en boutique uniquement. Nous enregistrons votre linge, en prenons soin et vous prévenons dès qu’il est prêt à être récupéré.",
    "how.step1.label": "Étape 01",
    "how.step1.title": "Déposez",
    "how.step1.desc":
      "Passez au pressing avec votre linge. Nous l’enregistrons et vous remettons un ticket de dépôt.",
    "how.step2.label": "Étape 02",
    "how.step2.title": "On s’en occupe",
    "how.step2.desc":
      "Nettoyage, repassage ou soin délicat selon chaque tissu. Votre commande est généralement prête sous 24 à 48 h.",
    "how.step3.label": "Étape 03",
    "how.step3.title": "Récupérez",
    "how.step3.desc":
      "Nous vous prévenons par WhatsApp quand c’est prêt. Présentez votre ticket pour récupérer votre linge.",
    "how.ticket.sample": "Exemple",
    "how.ticket.title": "Ticket de dépôt",
    "how.ticket.droppedOff": "Déposé",
    "how.ticket.today": "Aujourd’hui",
    "how.ticket.ready": "Prêt",
    "how.ticket.within": "Sous 48 h",
    "how.ticket.total": "Total",
    "how.ticket.thanks": "Merci de votre visite",

    "pricing.eyebrow": "Nos tarifs",
    "pricing.title": "Tarifs lavage",
    "pricing.copy":
      "Une sélection de 15 articles parmi les plus demandés. Prix en dirhams, par article.",
    "pricing.caption": "Tarifs lavage par article",
    "pricing.article": "Article",
    "pricing.column": "Lavage",
    "pricing.note":
      "Prix indicatifs, selon l’article et son état. Devis précis en boutique. Un autre article ? Demandez-nous son prix sur WhatsApp.",
    "pricing.cta": "Demander un devis",
    "items.shirt": "Chemise",
    "items.tshirt": "T-shirt",
    "items.sweater": "Pull",
    "items.trousers": "Pantalon",
    "items.skirt": "Jupe",
    "items.dress": "Robe",
    "items.jacket": "Veste",
    "items.coat": "Manteau",
    "items.suit": "Costume",
    "items.set": "Ensemble",
    "items.djellaba": "Djellaba",
    "items.caftan": "Caftan",
    "items.sheet": "Drap",
    "items.blanket": "Couverture",
    "items.tablecloth": "Nappe",

    "area.eyebrow": "Zone de collecte",
    "area.title": "Autour de Maarif,<br>à 0–3 km.",
    "area.copy":
      "Nous collectons vos articles dans un rayon d’environ 0 à 3 km autour de Maarif.",
    "area.label": "Secteurs desservis",
    "area.note":
      "Votre quartier n’apparaît pas dans la liste ? Écrivez-nous pour vérifier s’il fait partie de notre zone.",
    "area.cta": "Réserver une collecte",
    "area.maarif": "Maarif",
    "area.gauthier": "Gauthier",
    "area.racine": "Racine",
    "area.bourgogne": "Bourgogne",
    "area.cil": "CIL",
    "area.oasis": "Oasis",
    "area.anfa": "Anfa",

    "contact.address":
      "103 rue Ibn Habous<br>Résid. Siham<br>Maarif, Casablanca - Maroc",
    "contact.eyebrow": "Quand vous voulez",
    "contact.title": "Votre linge,<br>on s’en occupe.",
    "contact.copy":
      "Écrivez-nous sur WhatsApp et nous organiserons votre première collecte. Sans formulaire, sans stress — juste du linge frais.",
    "contact.cta": "Discuter sur WhatsApp",
    "contact.note":
      "Nous répondons dès que possible pendant les horaires d’ouverture.",
    "contact.call": "Appelez-nous",
    "contact.emailLabel": "E-mail",
    "contact.hoursLabel": "Horaires d’ouverture",
    "contact.hours": "Lun–Sam, 8h–20h",
    "contact.deliveryLabel": "Collecte & livraison",
    "contact.delivery": "Gratuites, directement chez vous",

    "location.eyebrow": "Nous trouver",
    "location.title": "Passez au pressing.",
    "location.directions": "Voir l’itinéraire",
    "location.mapTitle":
      "Carte de Rim Pressing — 103 rue Ibn Habous, Résid. Siham, Maarif, Casablanca",

    "footer.about":
      "Pressing et nettoyage à Casablanca, avec collecte et livraison gratuites. Du linge frais, des journées plus légères.",
    "footer.chat": "Écrivez-nous sur WhatsApp",
    "footer.socialLabel": "Retrouvez-nous en ligne",
    "footer.telecontactAria": "Voir Rim Pressing sur Télécontact (pages jaunes)",
    "footer.annuaireAria": "Voir Rim Pressing sur Annuaire Horaire",
    "footer.googleAria": "Rechercher Rim Pressing sur Google",
    "footer.servicesHeading": "Services",
    "footer.exploreHeading": "Découvrir",
    "footer.visitHeading": "Nous trouver",
    "footer.hours": "Lun–Sam, 8h–20h<br>Dimanche fermé",
    "footer.rights": "Tous droits réservés.",
    "footer.tagline": "Du linge frais. Des journées plus légères.",
  },

  en: {
    "meta.title": "Rim Pressing — Laundry & Dry Cleaning in Casablanca",
    "meta.description":
      "Rim Pressing in Casablanca offers expert wash & fold, ironing and dry cleaning with free pickup and delivery. Book in a minute on WhatsApp.",
    "meta.ogTitle": "Rim Pressing — Laundry & Dry Cleaning in Casablanca",
    "meta.ogDescription":
      "Expert laundry care in Casablanca with free pickup and delivery. Returned fresh, folded and ready to wear.",

    "brand.home": "Rim Pressing — home",
    "skip": "Skip to content",
    "nav.primary": "Main navigation",
    "nav.services": "Services",
    "nav.how": "How it works",
    "nav.prices": "Prices",
    "nav.contact": "Contact",
    "nav.menuOpen": "Open menu",
    "nav.menuClose": "Close menu",
    "whatsapp.floatLabel": "Chat with Rim Pressing on WhatsApp",
    "lang.label": "Choose language",
    "header.cta": "Book pickup",

    "hero.eyebrow": "Laundry & dry cleaning in Casablanca",
    "hero.title": "Fresh clothes.<br><span>Zero hassle.</span>",
    "hero.lede":
      "Expert laundry care in Casablanca with free pickup and delivery — returned crisp, clean and ready for your week.",
    "hero.cta": "Book a pickup",
    "hero.secondary": "View services",
    "hero.benefitsLabel": "Service benefits",
    "hero.point1": "Free pickup & delivery",
    "hero.point2": "24–48h turnaround",
    "hero.point3": "Care for every fabric",
    "hero.pickupLabel": "Pickup scheduled",
    "hero.pickupTime": "Today · 6:00 PM",
    "hero.readyLabel": "Fresh & folded",
    "hero.readyValue": "Ready for delivery",

    "specialties.label": "Thoughtful care for",
    "specialties.daily": "Everyday laundry",
    "specialties.workwear": "Shirts & workwear",
    "specialties.delicate": "Delicate fabrics",
    "specialties.home": "Bedding & linen",

    "services.eyebrow": "Our services",
    "services.title": "Everything your<br>laundry needs.",
    "services.copy":
      "Every item is priced individually — never by weight. Pickup and delivery are free.",
    "services.wash.title": "Dry cleaning & laundry",
    "services.wash.desc":
      "Washed or dry-cleaned, depending on each garment’s fabric.",
    "services.iron.title": "Ironing & Pressing",
    "services.iron.desc":
      "Crisp collars, sharp lines and a professional finish for shirts, trousers and dresses.",
    "services.dry.title": "Dry Cleaning",
    "services.dry.desc":
      "Gentle, professional care for suits, coats, evening wear and delicate fabrics.",
    "services.home.title": "Home linen",
    "services.home.desc":
      "Sheets, towels, tablecloths and curtains, washed and neatly pressed.",
    "services.bedding.title": "Duvets & blankets",
    "services.bedding.desc":
      "Duvets, bedspreads and pillows, cleaned thoroughly.",
    "services.tags.shirts": "Shirts",
    "services.tags.suits": "Suits",
    "services.tags.dresses": "Dresses",
    "services.tags.coats": "Coats",
    "services.tags.djellabas": "Djellabas",
    "services.viewPrices": "View prices",
    "services.special.title": "Something special?",
    "services.special.desc":
      "A caftan, evening dress or delicate piece? Message us and we’ll advise.",
    "services.special.cta": "Message us",
    "services.popular": "Most popular",
    "services.askWhatsapp": "Ask about this service on WhatsApp",
    "services.note":
      "All prices are per item. Final pricing depends on the fabric and finish.",
    "common.from": "From",
    "common.perItem": "/ item",

    "how.eyebrow": "How it works",
    "how.title": "Drop off your laundry,<br>we’ll take care of the rest.",
    "how.copy":
      "In-store drop-off only. We log your items in, take care of them and message you when they’re ready to collect.",
    "how.step1.label": "Step 01",
    "how.step1.title": "Drop off",
    "how.step1.desc":
      "Come to the shop with your laundry. We log it in and give you a drop-off ticket.",
    "how.step2.label": "Step 02",
    "how.step2.title": "We take care of it",
    "how.step2.desc":
      "Cleaning, ironing or delicate care for each fabric. Your order is usually ready within 24–48 hours.",
    "how.step3.label": "Step 03",
    "how.step3.title": "Collect",
    "how.step3.desc":
      "We’ll message you on WhatsApp when it’s ready. Show your ticket to collect your laundry.",
    "how.ticket.sample": "Sample",
    "how.ticket.title": "Drop-off ticket",
    "how.ticket.droppedOff": "Dropped off",
    "how.ticket.today": "Today",
    "how.ticket.ready": "Ready",
    "how.ticket.within": "Within 48h",
    "how.ticket.total": "Total",
    "how.ticket.thanks": "Thank you for your visit",

    "pricing.eyebrow": "Our prices",
    "pricing.title": "Laundry prices",
    "pricing.copy":
      "A selection of 15 of our most requested items. Prices in dirhams, per item.",
    "pricing.caption": "Laundry prices per item",
    "pricing.article": "Item",
    "pricing.column": "Laundry",
    "pricing.note":
      "Indicative prices, depending on the item and its condition. Exact quote at the shop. Another item? Ask us for its price on WhatsApp.",
    "pricing.cta": "Ask for a quote",
    "items.shirt": "Shirt",
    "items.tshirt": "T-shirt",
    "items.sweater": "Sweater",
    "items.trousers": "Trousers",
    "items.skirt": "Skirt",
    "items.dress": "Dress",
    "items.jacket": "Jacket",
    "items.coat": "Coat",
    "items.suit": "Suit",
    "items.set": "Two-piece set",
    "items.djellaba": "Djellaba",
    "items.caftan": "Caftan",
    "items.sheet": "Bed sheet",
    "items.blanket": "Blanket",
    "items.tablecloth": "Tablecloth",

    "area.eyebrow": "Service area",
    "area.title": "Around Maarif,<br>within 0–3 km.",
    "area.copy":
      "We collect from homes within roughly 0–3 km of Maarif.",
    "area.label": "Areas covered",
    "area.note":
      "Don’t see your neighbourhood? Message us to check if it’s within our area.",
    "area.cta": "Book a pickup",
    "area.maarif": "Maarif",
    "area.gauthier": "Gauthier",
    "area.racine": "Racine",
    "area.bourgogne": "Bourgogne",
    "area.cil": "CIL",
    "area.oasis": "Oasis",
    "area.anfa": "Anfa",

    "contact.address":
      "103 rue Ibn Habous<br>Résid. Siham<br>Maarif, Casablanca - Maroc",
    "contact.eyebrow": "Ready when you are",
    "contact.title": "Let’s cross laundry<br>off your list.",
    "contact.copy":
      "Send us a message on WhatsApp and we’ll arrange your first pickup. No forms, no fuss — just fresh clothes.",
    "contact.cta": "Chat on WhatsApp",
    "contact.note":
      "We’ll reply as soon as we can during opening hours.",
    "contact.call": "Call us",
    "contact.emailLabel": "Email",
    "contact.hoursLabel": "Opening hours",
    "contact.hours": "Mon–Sat, 8:00–20:00",
    "contact.deliveryLabel": "Pickup & delivery",
    "contact.delivery": "Free, right to your door",

    "location.eyebrow": "Find us",
    "location.title": "Drop by the pressing.",
    "location.directions": "Get directions",
    "location.mapTitle":
      "Map showing Rim Pressing at 103 rue Ibn Habous, Résid. Siham, Maarif, Casablanca",

    "footer.about":
      "Laundry & dry cleaning in Casablanca with free pickup and delivery. Fresh clothes, lighter days.",
    "footer.chat": "Chat with us on WhatsApp",
    "footer.socialLabel": "Find us online",
    "footer.telecontactAria": "View Rim Pressing on Telecontact (Yellow Pages)",
    "footer.annuaireAria": "View Rim Pressing on Annuaire Horaire",
    "footer.googleAria": "Search for Rim Pressing on Google",
    "footer.servicesHeading": "Services",
    "footer.exploreHeading": "Explore",
    "footer.visitHeading": "Visit us",
    "footer.hours": "Mon–Sat, 8:00–20:00<br>Sunday closed",
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Fresh clothes. Lighter days.",
  },

  ar: {
    "meta.title": "ريم بريسينغ — غسيل وتنظيف جاف في الدار البيضاء",
    "meta.description":
      "تقدم ريم بريسينغ في الدار البيضاء خدمات الغسيل والكي والتنظيف الجاف مع استلام وتوصيل مجانيين. احجز استلامك عبر واتساب خلال دقيقة.",
    "meta.ogTitle": "ريم بريسينغ — غسيل وتنظيف جاف في الدار البيضاء",
    "meta.ogDescription":
      "عناية احترافية بملابسك في الدار البيضاء مع استلام وتوصيل مجانيين. تعود ملابسك نظيفة ومنعشة وجاهزة للارتداء.",

    "brand.home": "ريم بريسينغ — الرئيسية",
    "skip": "انتقل إلى المحتوى",
    "nav.primary": "التنقل الرئيسي",
    "nav.services": "الخدمات",
    "nav.how": "كيف نعمل",
    "nav.prices": "الأسعار",
    "nav.contact": "اتصل بنا",
    "nav.menuOpen": "فتح القائمة",
    "nav.menuClose": "إغلاق القائمة",
    "whatsapp.floatLabel": "تحدث مع ريم بريسينغ على واتساب",
    "lang.label": "اختر اللغة",
    "header.cta": "احجز استلامًا",

    "hero.eyebrow": "غسيل وتنظيف جاف في الدار البيضاء",
    "hero.title": "ملابس منعشة.<br><span>بلا عناء.</span>",
    "hero.lede":
      "خدمة غسيل موثوقة في الدار البيضاء، مع استلام وتوصيل مجانيين — تعود ملابسك نظيفة ومكوية وجاهزة لارتدائها.",
    "hero.cta": "احجز استلامًا",
    "hero.secondary": "اكتشف الخدمات",
    "hero.benefitsLabel": "مزايا الخدمة",
    "hero.point1": "استلام وتوصيل مجانيان",
    "hero.point2": "جاهز خلال 24–48 ساعة",
    "hero.point3": "عناية بكل نوع قماش",
    "hero.pickupLabel": "تم جدولة الاستلام",
    "hero.pickupTime": "اليوم · 6 مساءً",
    "hero.readyLabel": "منعشة ومطوية",
    "hero.readyValue": "جاهز للتوصيل",

    "specialties.label": "نعتني بـ",
    "specialties.daily": "الغسيل اليومي",
    "specialties.workwear": "القمصان وملابس العمل",
    "specialties.delicate": "الأقمشة الحساسة",
    "specialties.home": "مفارش المنزل",

    "services.eyebrow": "خدماتنا",
    "services.title": "كل ما يحتاجه<br>غسيلك.",
    "services.copy":
      "كل قطعة تُحسب على حدة — أبدًا بالوزن. الاستلام والتوصيل مجانيان.",
    "services.wash.title": "تنظيف جاف وغسيل",
    "services.wash.desc":
      "غسيل بالماء أو تنظيف جاف، حسب نوع قماش كل قطعة.",
    "services.iron.title": "كي الملابس",
    "services.iron.desc":
      "لمسات نهائية أنيقة ومتقنة للقمصان والسراويل والفساتين.",
    "services.dry.title": "التنظيف الجاف",
    "services.dry.desc":
      "عناية مهنية ولطيفة بالبدلات والمعاطف وملابس السهرة والأقمشة الحساسة.",
    "services.home.title": "مفارش المنزل",
    "services.home.desc":
      "شراشف ومناشف ومفارش طاولات وستائر، تُغسل وتُكوى بعناية.",
    "services.bedding.title": "اللحف والأغطية",
    "services.bedding.desc":
      "لحف وأغطية أسرّة ووسائد تُنظّف بعمق.",
    "services.tags.shirts": "القمصان",
    "services.tags.suits": "البدلات",
    "services.tags.dresses": "الفساتين",
    "services.tags.coats": "المعاطف",
    "services.tags.djellabas": "الجلابيب",
    "services.viewPrices": "عرض الأسعار",
    "services.special.title": "قطعة مميزة؟",
    "services.special.desc":
      "قفطان أو فستان سهرة أو قطعة حساسة؟ راسلنا وسنقدم لك النصيحة.",
    "services.special.cta": "راسلنا",
    "services.popular": "الأكثر طلبًا",
    "services.askWhatsapp": "اطلب عرض سعر عبر واتساب",
    "services.note":
      "جميع أسعارنا لكل قطعة. السعر النهائي يعتمد على القماش والتشطيب.",
    "common.from": "من",
    "common.perItem": "/ قطعة",

    "how.eyebrow": "كيف نعمل",
    "how.title": "سلّم ملابسك،<br>ونحن نتولى الباقي.",
    "how.copy":
      "التسليم في المحل فقط. نسجّل ملابسك، نعتني بها، ونخبرك عندما تصبح جاهزة للاستلام.",
    "how.step1.label": "الخطوة 01",
    "how.step1.title": "سلّم",
    "how.step1.desc":
      "تفضل إلى المحل مع ملابسك. نسجّلها ونمنحك بطاقة تسليم.",
    "how.step2.label": "الخطوة 02",
    "how.step2.title": "نعتني بها",
    "how.step2.desc":
      "تنظيف أو كي أو عناية خاصة حسب نوع كل قماش. طلبك جاهز عادةً خلال 24 إلى 48 ساعة.",
    "how.step3.label": "الخطوة 03",
    "how.step3.title": "استلم",
    "how.step3.desc":
      "سنراسلك على واتساب عندما يصبح جاهزًا. قدّم بطاقة التسليم لاستلام ملابسك.",
    "how.ticket.sample": "نموذج",
    "how.ticket.title": "بطاقة التسليم",
    "how.ticket.droppedOff": "تم التسليم",
    "how.ticket.today": "اليوم",
    "how.ticket.ready": "جاهز",
    "how.ticket.within": "خلال 48 ساعة",
    "how.ticket.total": "المجموع",
    "how.ticket.thanks": "شكرًا لزيارتكم",

    "pricing.eyebrow": "أسعارنا",
    "pricing.title": "أسعار الغسيل",
    "pricing.copy":
      "مجموعة من 15 قطعة من أكثر القطع طلبًا. الأسعار بالدرهم لكل قطعة.",
    "pricing.caption": "أسعار الغسيل لكل قطعة",
    "pricing.article": "القطعة",
    "pricing.column": "الغسيل",
    "pricing.note":
      "الأسعار تقريبية وتختلف حسب القطعة وحالتها. السعر الدقيق في المحل. قطعة أخرى؟ اطلب سعرها عبر واتساب.",
    "pricing.cta": "اطلب عرض سعر",
    "items.shirt": "قميص",
    "items.tshirt": "تي شيرت",
    "items.sweater": "سترة صوفية",
    "items.trousers": "بنطال",
    "items.skirt": "تنورة",
    "items.dress": "فستان",
    "items.jacket": "جاكيت",
    "items.coat": "معطف",
    "items.suit": "بدلة",
    "items.set": "طقم",
    "items.djellaba": "جلابة",
    "items.caftan": "قفطان",
    "items.sheet": "شرشف",
    "items.blanket": "بطانية",
    "items.tablecloth": "مفرش طاولة",

    "area.eyebrow": "منطقة الاستلام",
    "area.title": "حول المعاريف،<br>ضمن 0–3 كم.",
    "area.copy":
      "نستلم من المنازل على مسافة تقارب 0 إلى 3 كم حول المعاريف.",
    "area.label": "الأحياء التي نخدمها",
    "area.note":
      "لا ترى حيّك في القائمة؟ راسلنا للتحقق مما إذا كان داخل نطاق خدمتنا.",
    "area.cta": "احجز استلامًا",
    "area.maarif": "المعاريف",
    "area.gauthier": "غوتييه",
    "area.racine": "راسين",
    "area.bourgogne": "بورغون",
    "area.cil": "سيل",
    "area.oasis": "الوازيس",
    "area.anfa": "أنفا",

    "contact.address":
      "103 شارع ابن حبوس<br>إقامة سهام<br>المعاريف، الدار البيضاء - المغرب",
    "contact.eyebrow": "متى ما أردت",
    "contact.title": "ملابسك،<br>ونحن نتولى الباقي.",
    "contact.copy":
      "راسلنا على واتساب وسنرتّب أول عملية استلام لك. بلا استمارات ولا تعقيد — فقط ملابس نظيفة.",
    "contact.cta": "تحدث معنا على واتساب",
    "contact.note":
      "نرد في أقرب وقت ممكن خلال ساعات العمل.",
    "contact.call": "اتصل بنا",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.hoursLabel": "ساعات العمل",
    "contact.hours": "الاثنين–السبت، 8:00–20:00",
    "contact.deliveryLabel": "الاستلام والتوصيل",
    "contact.delivery": "مجانيان، حتى باب منزلك",

    "location.eyebrow": "أين تجدنا",
    "location.title": "تفضل بزيارة المحل.",
    "location.directions": "الاتجاهات",
    "location.mapTitle":
      "خريطة موقع ريم بريسينغ — 103 شارع ابن حبوس، إقامة سهام، المعاريف، الدار البيضاء",

    "footer.about":
      "غسيل وتنظيف جاف في الدار البيضاء، مع استلام وتوصيل مجانيين. ملابس منعشة وأيام أخف.",
    "footer.chat": "راسلنا على واتساب",
    "footer.socialLabel": "تجدنا أيضًا على",
    "footer.telecontactAria": "شاهد ريم بريسينغ على Télécontact (الصفحات الصفراء)",
    "footer.annuaireAria": "شاهد ريم بريسينغ على Annuaire Horaire",
    "footer.googleAria": "ابحث عن ريم بريسينغ على Google",
    "footer.servicesHeading": "الخدمات",
    "footer.exploreHeading": "استكشف",
    "footer.visitHeading": "زورونا",
    "footer.hours": "الاثنين–السبت، 8:00–20:00<br>الأحد مغلق",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.tagline": "ملابس منعشة. أيام أخف.",
  },
};

const whatsappMessages = {
  fr: {
    default:
      "Bonjour Rim Pressing ! Je souhaite réserver une collecte. Quels créneaux sont disponibles ?",
    service: (serviceName) =>
      `Bonjour Rim Pressing ! Je souhaite des informations sur le service « ${serviceName} ». Quels créneaux de collecte sont disponibles ?`,
    quote:
      "Bonjour Rim Pressing ! Je souhaite un devis pour mon linge. Pouvez-vous me communiquer vos tarifs ?",
  },
  en: {
    default:
      "Hello Rim Pressing! I'd like to book a laundry pickup. What times are available?",
    service: (serviceName) =>
      `Hello Rim Pressing! I'd like to ask about ${serviceName}. Could you let me know the next available pickup time?`,
    quote:
      "Hello Rim Pressing! I'd like a quote for my laundry. Could you share your prices?",
  },
  ar: {
    default:
      "مرحبًا ريم بريسينغ! أرغب في حجز استلام للغسيل. ما الأوقات المتاحة؟",
    service: (serviceName) =>
      `مرحبًا ريم بريسينغ! أرغب في معرفة المزيد عن خدمة «${serviceName}». ما مواعيد الاستلام المتاحة؟`,
    quote:
      "مرحبًا ريم بريسينغ! أرغب في الحصول على عرض سعر لغسيل ملابسي. هل يمكنكم إرسال الأسعار؟",
  },
};

const phoneDigits = siteConfig.phoneNumber.replace(/\D/g, "");
const whatsappDigits = siteConfig.whatsappNumber.replace(/\D/g, "");
const languageStorageKey = "rimPressingLanguage";

let currentLanguage = getStoredLanguage();

function getStoredLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    return storedLanguage === "en" ||
      storedLanguage === "fr" ||
      storedLanguage === "ar"
      ? storedLanguage
      : "fr";
  } catch (error) {
    return "fr";
  }
}

function translate(key) {
  return (
    translations[currentLanguage]?.[key] ?? translations.fr[key] ?? ""
  );
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
}

function updateWhatsAppLinks() {
  const messages = whatsappMessages[currentLanguage] ?? whatsappMessages.fr;

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const serviceKey = link.dataset.serviceKey;
    let message = messages.default;

    if (serviceKey === "quote") {
      message = messages.quote;
    } else if (serviceKey) {
      message = messages.service(translate(`services.${serviceKey}.title`));
    }

    link.href = buildWhatsAppUrl(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-phone]").forEach((link) => {
    link.textContent = siteConfig.displayPhone;

    if (link instanceof HTMLAnchorElement) {
      link.href = `tel:+${phoneDigits}`;
    }
  });

  document.querySelectorAll("[data-whatsapp-number]").forEach((element) => {
    element.textContent = siteConfig.displayWhatsApp;
  });
}

function syncMenuLabel() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  if (!header || !toggle) return;

  const isOpen = header.classList.contains("nav-open");
  toggle.setAttribute(
    "aria-label",
    translate(isOpen ? "nav.menuClose" : "nav.menuOpen")
  );
}

function applyLanguage(language, { persist = true } = {}) {
  currentLanguage = translations[language] ? language : "fr";
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.lang = currentLanguage;

  document.title = translate("meta.title");

  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector(
    'meta[property="og:description"]'
  );

  description?.setAttribute("content", translate("meta.description"));
  ogTitle?.setAttribute("content", translate("meta.ogTitle"));
  ogDescription?.setAttribute("content", translate("meta.ogDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      translate(element.dataset.i18nAriaLabel)
    );
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", translate(element.dataset.i18nTitle));
  });

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    const isActive = button.dataset.setLang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  syncMenuLabel();
  updateWhatsAppLinks();

  if (persist) {
    try {
      window.localStorage.setItem(languageStorageKey, currentLanguage);
    } catch (error) {
      // Language switching still works when storage is unavailable.
    }
  }
}

function setupLanguageSwitch() {
  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.setLang);
    });
  });
}

function setupMobileNavigation() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.getElementById("site-nav");

  if (!header || !toggle || !nav) return;

  const setMenuState = (isOpen, returnFocus = false) => {
    header.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      translate(isOpen ? "nav.menuClose" : "nav.menuOpen")
    );

    if (!isOpen && returnFocus) {
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => {
    setMenuState(!header.classList.contains("nav-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      setMenuState(false, true);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) setMenuState(false);
  });
}

function setupStickyHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;

  let ticking = false;

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateHeader);
    },
    { passive: true }
  );

  updateHeader();
}

function setCurrentYear() {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

function setupAnalyticsTracking() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const link = target.closest("a");
    if (!link) return;

    const href = (link.getAttribute("href") || "").trim();
    let eventName = "";

    if (href.toLowerCase().startsWith("tel:")) {
      eventName = "click_phone";
    } else if (
      link.hasAttribute("data-whatsapp") ||
      /wa\.me|whatsapp\.com/i.test(href)
    ) {
      eventName = "click_whatsapp";
    } else if (
      /google\.[a-z.]+\/maps|maps\.google\.|maps\.app\.goo\.gl/i.test(href)
    ) {
      eventName = "click_directions";
    }

    if (eventName && typeof window.gtag === "function") {
      window.gtag("event", eventName);
    }
  });
}

setupLanguageSwitch();
setupMobileNavigation();
setupStickyHeader();
setCurrentYear();
setupAnalyticsTracking();
applyLanguage(currentLanguage, { persist: false });
