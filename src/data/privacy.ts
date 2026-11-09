export const privacyPolicy = {
  lastUpdated: "November 8, 2026",
  websiteCollectsPersonalInformation: true,
  contactEmail: "sksiam827@gmail.com" as string | null,
  sections: [
    {
      title: "Information on this website",
      body: "Browsing and APK downloads do not require an account. If you choose Google sign-in, our sign-in service processes your Google account identity, including email and basic identity information, to create and maintain your account. We do not create a separate user profile or store preferences. The app owner has stated that the Android app does not collect personal information; this website's optional sign-in is separate.",
    },
    {
      title: "Downloading the APK",
      body: "The Download APK button requests the real SO PLAYER APK through this website. The website retrieves the file from Google Drive without opening a separate Drive page. Our hosting service and Google may process technical information needed to deliver the file. Installation is controlled by Android and requires your approval.",
    },
    {
      title: "Support and account requests",
      body: "If you email support, we receive your email address and message to respond to your request. Contact support to request account deletion or ask about information held for sign-in. Google also processes sign-in information under its own privacy terms.",
    },
    {
      title: "Your choices",
      body: "You can browse this website without submitting personal information. Downloading and installing the APK and signing in with Google are optional.",
    },
  ],
} as const;