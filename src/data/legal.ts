export interface LegalSection {
  title: string;
  body: string;
}

export const termsSections: LegalSection[] = [
  { title: "About this website", body: "SK SO PLAYER is the website for the SO PLAYER Android app. It provides app information, original screenshots, guides and owner-supplied APK files. Browsing and APK downloads are free and do not require sign-in. These terms cover the website and its download guides." },
  { title: "Your content and permissions", body: "Only download or share content you own or have permission to use. Respect copyright, creator rights, applicable laws and the terms of the source platform. A download option does not grant permission to copy or redistribute a video or song. Do not use the service to bypass paid access, digital rights protection or restrictions on private content." },
  { title: "Independent platform names", body: "YouTube, Facebook, Instagram and TikTok are mentioned to describe supported workflows. Their names and trademarks belong to their respective owners. This website does not claim that these platforms sponsor, endorse or operate SO PLAYER." },
  { title: "APK downloads and installation", body: "APK files come from the app owner. The website may deliver a file through a temporary storage link or an original Drive source. You control whether to download, scan, install and grant permissions. A website cannot silently install an app on your phone. Compatibility, available formats and source access can vary." },
  { title: "External websites and availability", body: "External downloader links lead to independent services. Their content, availability and privacy practices are not controlled by this website. Features may change when source platforms change. The website does not promise uninterrupted access or that every video can be downloaded." },
  { title: "Privacy and support", body: "Read the Privacy Policy for website sign-in, file delivery and visitor analytics information. For questions, app concerns, account requests or copyright concerns, email the support address shown below. Include the relevant page or content link and enough detail to investigate; do not send passwords or sensitive documents." },
];

export const safetySections: LegalSection[] = [
  { title: "Start with the original file", body: "Use this website's Download APK button and check the version shown before downloading. The latest file and earlier releases have separate selections. A complete file should not be empty; if a download fails or the file is incomplete, delete it and try again rather than installing it." },
  { title: "Keep Android protection enabled", body: "Let Google Play Protect check the APK and follow Android's warning messages. Do not disable scanning to bypass a warning. If a risk is reported, stop installation and contact support. An original file or a passed scan is not a guarantee that an app is free of every risk." },
  { title: "Review installation and permissions", body: "After the download finishes, open the APK from your phone's downloads and review Android's installation prompt. Only allow installation from a source you trust. Review app permissions and grant access only when needed. Menu names and installation steps vary by Android version and device." },
  { title: "When installation fails", body: "Check that the download completed, your phone has enough free space and your Android version is compatible. Android may reject an update if its signature differs from the installed app. Do not uninstall an existing app without considering the possible loss of its local data. Contact support with the version and error message." },
  { title: "Download responsibly", body: "Only save videos and audio when you have permission and the source platform allows it. Quality and format options depend on the source. External download services have their own terms, so review them before sharing a link or personal information." },
];