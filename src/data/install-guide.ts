import scanStart from "@/assets/install-scan-start.png.asset.json";
import scanProgress from "@/assets/install-scan-progress.png.asset.json";
import scanResult from "@/assets/install-scan-result.png.asset.json";
import previousStep1 from "@/assets/install-step-1.png";
import previousStep2 from "@/assets/install-step-2.png";
import previousStep3 from "@/assets/install-step-3.png";

export type GuideLanguage = "bn" | "en";

export const guideCopy = {
  bn: {
    heading: "কীভাবে", highlight: "ইনস্টল করবেন", primary: "Play Protect দিয়ে স্ক্যান ও ইনস্টল",
    intro: "ডাউনলোড করা APK খুলুন। ফোনে নিচের পর্দাগুলো দেখালে ধাপগুলো অনুসরণ করুন।",
    archive: "আগের ইনস্টলের ছবি", archiveIntro: "কিছু ফোনে অন্যরকম পর্দা দেখা যেতে পারে।",
    caution: "আগে Play Protect দিয়ে স্ক্যান করুন। ক্ষতিকর অ্যাপের সতর্কতা এলে ইনস্টল করবেন না। পর্দা ও অনুমতি ফোনভেদে আলাদা হতে পারে।",
    step: "ধাপ", zoomIn: "বড় করুন", zoomOut: "ছোট করুন",
  },
  en: {
    heading: "How to", highlight: "Install", primary: "Scan and install with Play Protect",
    intro: "Open the downloaded APK. Follow these steps if your phone shows the screens below.",
    archive: "Previous installation screenshots", archiveIntro: "Some phones may show a different installation screen.",
    caution: "Scan with Play Protect first. Do not install if it warns that the app is harmful. Screens and permissions vary by phone.",
    step: "Step", zoomIn: "Zoom in", zoomOut: "Zoom out",
  },
};

export const scanSteps = [
  { id: "scan-start", src: scanStart.url, title: { bn: "Scan app-এ ট্যাপ করুন", en: "Tap Scan app" }, text: { bn: "“App scan recommended” দেখালে “Scan app”-এ ট্যাপ করে Google Play Protect-এর পরীক্ষা শুরু করুন।", en: "If you see “App scan recommended”, tap “Scan app” to start the Google Play Protect check." } },
  { id: "scan-progress", src: scanProgress.url, title: { bn: "স্ক্যান শেষ হওয়া পর্যন্ত অপেক্ষা করুন", en: "Wait for the scan to finish" }, text: { bn: "“Scanning…” দেখালে অপেক্ষা করুন। এই সময় “Cancel and don’t install”-এ ট্যাপ করলে প্রক্রিয়া বন্ধ হবে।", en: "Wait while “Scanning…” is displayed. Tapping “Cancel and don’t install” stops the process." } },
  { id: "scan-result", src: scanResult.url, title: { bn: "ফলাফল দেখে Install-এ ট্যাপ করুন", en: "Review the result and tap Install" }, text: { bn: "আপনার ফোনে “This app looks safe” দেখালে এবং অ্যাপটির উৎস বিশ্বাস করলে “Install”-এ ট্যাপ করুন। ফোনের চাওয়া অনুমতি দিয়ে ইনস্টল শেষ করুন।", en: "If your phone shows “This app looks safe” and you trust the source, tap “Install”. Complete any permissions requested by your phone." } },
];

export const previousSteps = [
  { id: "previous-details", src: previousStep1, title: { bn: "More details পর্দা", en: "More details screen" }, text: { bn: "আগের ছবিতে “More details” দেখানো আছে। ইনস্টলের আগে “Scan app” দিয়ে পরীক্ষা করাই ভালো।", en: "The earlier screenshot shows “More details”. Use “Scan app” to check the APK before installing." } },
  { id: "previous-option", src: previousStep2, title: { bn: "অন্য ইনস্টল অপশন", en: "Alternative installation option" }, text: { bn: "কিছু ফোনে “Install without scanning” দেখা যায়। এটি স্ক্যান ছাড়া এগোয়; আগে স্ক্যান করুন এবং ক্ষতিকর অ্যাপের সতর্কতা উপেক্ষা করবেন না।", en: "Some phones show “Install without scanning”. This skips the scan; scan first and never ignore a harmful-app warning." } },
  { id: "previous-complete", src: previousStep3, title: { bn: "ফোনের অনুমতি ও শেষ ধাপ", en: "Phone confirmation and final step" }, text: { bn: "ফোন পাসওয়ার্ড বা ফিঙ্গারপ্রিন্ট চাইতে পারে। ইনস্টল সফল হলে “App installed” দেখাবে; তখন অ্যাপ খুলতে পারবেন।", en: "Your phone may request a password or fingerprint. When installation succeeds, “App installed” appears and you can open the app." } },
];