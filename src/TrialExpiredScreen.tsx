import { useState, useEffect } from "react";
import { DEVELOPER_CONFIG } from "./developerConfig";

interface TrialExpiredScreenProps {
  onUnlock?: () => void;
}

export default function TrialExpiredScreen({ onUnlock }: TrialExpiredScreenProps) {
  const [lang, setLang] = useState<"ar" | "fr">("ar");
  const [copied, setCopied] = useState(false);
  const [showTechDetails, setShowTechDetails] = useState(false);

  useEffect(() => {
    document.title =
      lang === "ar"
        ? "الفترة التجريبية المجانية قد انتهت | يرجى التواصل مع المبرمج"
        : "Période d'essai expirée | Contacter le développeur";
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const handleCopyRequest = async () => {
    const textToCopy =
      lang === "ar"
        ? `السلام عليكم،\nبخصوص الموقع التجريبي لمؤسسة ابن رشد (معرّف الخدمة: ${DEVELOPER_CONFIG.projectId})، نود التواصل لتسوية وتفعيل النسخة الكاملة للموقع.`
        : `Bonjour,\nConcernant le site de démonstration École Ibn Rochd (ID: ${DEVELOPER_CONFIG.projectId}), nous souhaitons vous contacter pour l'activation définitive du site.`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    } catch (e) {
      console.error(e);
    }
  };

  const getWhatsAppLink = () => {
    const phone = DEVELOPER_CONFIG.whatsapp || DEVELOPER_CONFIG.phone.replace(/[^0-9]/g, "");
    const msg = encodeURIComponent(
      lang === "ar"
        ? `السلام عليكم، بخصوص تفعيل موقع مؤسسة ابن رشد (ID: ${DEVELOPER_CONFIG.projectId})`
        : `Bonjour, concernant l'activation du site École Ibn Rochd (ID: ${DEVELOPER_CONFIG.projectId})`
    );
    return phone ? `https://wa.me/${phone}?text=${msg}` : `https://wa.me/?text=${msg}`;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      lang === "ar"
        ? `طلب تفعيل موقع مؤسسة ابن رشد (${DEVELOPER_CONFIG.projectId})`
        : `Demande d'activation — Site École Ibn Rochd (${DEVELOPER_CONFIG.projectId})`
    );
    const body = encodeURIComponent(
      lang === "ar"
        ? `السلام عليكم أخي عبد القادر،\n\nنود التواصل بخصوص الموقع التجريبي لمؤسسة ابن رشد (معرف الخدمة: ${DEVELOPER_CONFIG.projectId}) لإنهاء إجراءات التفعيل والتشغيل الدائم.\n\nمع التحية.`
        : `Bonjour,\n\nNous vous contactons concernant le site École Ibn Rochd (ID: ${DEVELOPER_CONFIG.projectId}) afin de finaliser l'activation et le lancement officiel.\n\nCordialement.`
    );
    return `mailto:${DEVELOPER_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col justify-between relative overflow-hidden font-arabic select-none selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-[-10%] start-[20%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] end-[15%] w-[450px] h-[450px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] start-[-10%] w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top Bar Header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold shadow-lg shadow-amber-500/5">
            <span className="font-latin text-sm font-extrabold tracking-wider">IR</span>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-200 leading-tight">
              {lang === "ar" ? "مؤسسة ابن رشد الخاصة" : "École Ibn Rochd"}
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
              <span>{lang === "ar" ? "عين تموشنت" : "Aïn Témouchent"}</span>
              <span className="text-slate-600">•</span>
              <span className="font-latin text-[11px] text-amber-400/90 font-medium">demo02</span>
            </div>
          </div>
        </div>

        {/* Language switcher */}
        <div className="flex items-center bg-slate-900/80 border border-slate-700/50 rounded-full p-1 text-xs font-medium shadow-inner">
          <button
            onClick={() => setLang("ar")}
            className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
              lang === "ar"
                ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            العربية
          </button>
          <button
            onClick={() => setLang("fr")}
            className={`px-3 py-1.5 rounded-full transition-all duration-200 font-latin ${
              lang === "fr"
                ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Français
          </button>
        </div>
      </header>

      {/* Main Expired Notice Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-[#0a101d]/90 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80 backdrop-blur-2xl relative overflow-hidden">
          {/* Subtle top edge gold highlight line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          {/* Central Expired Icon Graphic */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-amber-500/30 flex items-center justify-center shadow-xl">
                {/* Hourglass & Lock Icon */}
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Pulsing Alert Pip */}
              <div className="absolute -bottom-1 -end-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/20 border border-rose-500/50">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
                </span>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {lang === "ar" ? "تنبيه النظام: انتهاء الصلاحية التجريبية" : "Alerte système : Période d'essai terminée"}
            </span>
          </div>

          {/* Primary Main Headline */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-center text-white tracking-tight leading-snug mb-3">
            {lang === "ar" ? (
              <>
                الفترة التجريبية المجانية{" "}
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                  قد انتهت
                </span>
              </>
            ) : (
              <>
                La période d'essai gratuit{" "}
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                  a expiré
                </span>
              </>
            )}
          </h1>

          {/* Required Explicit Message */}
          <p className="text-center text-base sm:text-xl font-medium text-amber-200/90 mb-6 leading-relaxed">
            {lang === "ar"
              ? "يرجى التواصل مع المبرمج لتفعيل النسخة الكاملة للموقع"
              : "Veuillez contacter le développeur pour activer la version finale"}
          </p>

          {/* Descriptive Notice Box */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 sm:p-5 mb-8 text-slate-300 text-xs sm:text-sm leading-relaxed text-center sm:text-start">
            {lang === "ar" ? (
              <p>
                تم تعليق الوصول إلى محتوى هذا الموقع التجريبي نظراً لانتهاء المهلة الزمنية المحددة للمعاينة.
                لتسليم الموقع النهائي، ربط النطاق الرسمي، أو استمرار الخدمة، يُرجى التكرم بالتواصل مباشرة مع مطور ومبرمج الموقع.
              </p>
            ) : (
              <p className="font-latin">
                L'accès à cette démonstration en ligne a été suspendu suite à l'expiration de la période d'essai. Pour
                valider le projet, configurer le nom de domaine officiel et lancer la version définitive, veuillez
                joindre directement le développeur du site.
              </p>
            )}
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {/* WhatsApp Contact Button */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-900/30 hover:scale-[1.02] active:scale-[0.99]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.78 14.07c-.24.67-1.4 1.25-1.92 1.33-.52.08-1.18.11-1.92-.12-.45-.14-1.04-.34-1.8-.67-3.19-1.39-5.26-4.64-5.42-4.85-.16-.22-1.3-1.74-1.3-3.32 0-1.58.82-2.35 1.11-2.67.29-.32.63-.4.84-.4.21 0 .42 0 .61.01.2.01.47-.08.73.55.26.63.89 2.18.97 2.34.08.16.13.35.03.56-.11.21-.16.35-.32.53-.16.19-.34.42-.48.56-.16.16-.33.33-.14.66.19.32.84 1.38 1.8 2.24 1.24 1.1 2.28 1.45 2.61 1.61.32.16.51.14.7-.08.19-.22.82-.95 1.04-1.28.22-.32.45-.27.75-.16.31.11 1.95.92 2.28 1.09.34.16.56.24.64.38.08.14.08.82-.16 1.49z" />
              </svg>
              <span>{lang === "ar" ? "التواصل عبر واتساب" : "Contacter via WhatsApp"}</span>
            </a>

            {/* Email Contact Button */}
            <a
              href={getMailtoLink()}
              className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white border border-slate-700/80 font-semibold text-sm transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.99]"
            >
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{lang === "ar" ? "إرسال بريد إلكتروني" : "Envoyer un e-mail"}</span>
            </a>
          </div>

          {/* Copy Request Message Button */}
          <div className="mb-6">
            <button
              onClick={handleCopyRequest}
              className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-200 ${
                copied
                  ? "bg-emerald-950/60 border-emerald-500/50 text-emerald-300"
                  : "bg-slate-900/60 hover:bg-slate-800/80 border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{lang === "ar" ? "تم نسخ رسالة الطلب بنجاح!" : "Message copié avec succès !"}</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                  <span>{lang === "ar" ? "نسخ نص رسالة طلب التفعيل" : "Copier le texte de demande d'activation"}</span>
                </>
              )}
            </button>
          </div>

          {/* Technical Diagnostics Accordion */}
          <div className="border-t border-slate-800/80 pt-4">
            <button
              onClick={() => setShowTechDetails(!showTechDetails)}
              className="w-full flex items-center justify-between text-xs text-slate-500 hover:text-slate-300 transition-colors py-1"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                {lang === "ar" ? "بيانات المرجع الفني والسيرفر" : "Références techniques & serveur"}
              </span>
              <svg
                className={`w-3.5 h-3.5 transform transition-transform ${showTechDetails ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showTechDetails && (
              <div className="mt-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/60 font-mono text-[11px] text-slate-400 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="text-slate-300">{DEVELOPER_CONFIG.projectName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service ID:</span>
                  <span className="text-amber-400 font-semibold">{DEVELOPER_CONFIG.projectId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="text-rose-400">TRIAL_SUSPENDED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Host:</span>
                  <span className="text-slate-300">Render Static Cloud (demo02-kggp.onrender.com)</span>
                </div>
                {DEVELOPER_CONFIG.developerName && (
                  <div className="flex justify-between pt-1 border-t border-slate-900">
                    <span className="text-slate-500">Developer:</span>
                    <span className="text-slate-300">{DEVELOPER_CONFIG.developerName}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 text-center text-xs text-slate-600">
        <p>
          {lang === "ar"
            ? "جميع الحقوق محفوظة للمطور © 2026 — تم تطوير وتصميم الموقع بواسطة المبرمج"
            : "Tous droits réservés au développeur © 2026 — Conception et développement web sur mesure"}
        </p>
      </footer>
    </div>
  );
}
