export const privacyPolicy = {
  lastUpdated: "November 21, 2026",
  websiteCollectsPersonalInformation: true,
  contactEmail: "sksiam827@gmail.com" as string | null,
  sections: [
    {
      title: "Information on this website",
      body: "Browsing and APK downloads do not require an account. Optional Google sign-in processes your Google identity, including email and basic account information, through Google and Lovable Cloud to create and maintain your website account. A sign-in session is stored in your browser so you can stay signed in; signing out clears that session. This website does not create a separate profile or store account preferences. This policy describes the website, not a verified audit of the Android app's data practices.",
    },
    {
      title: "Downloading the APK",
      body: "The latest uploaded APK and some older releases are delivered from the website's private file storage using temporary download links. Other older releases are retrieved from the owner's original Google Drive files without opening a Drive page. Lovable Cloud and, for Drive-hosted releases, Google process technical requests needed to deliver the file. Installation is controlled by Android and requires your approval.",
    },
    {
      title: "Cookie-free visitor analytics",
      body: "Page visits, time on page, page speed and errors are recorded for every visitor, without cookies and without identifying anyone. Button and link clicks are also recorded. Lovable analytics stores nothing on your device, does not keep IP addresses and cannot recognise returning visitors. It records pages visited, referral sources, country, browser, operating system, device type, time spent, loading speed and errors. Detailed data is kept for 90 days and daily summaries for one year. Lovable collects this data for us. Lovable's privacy policy explains how it handles it: https://lovable.dev/privacy. The website also reports technical errors to help diagnose problems.",
    },
    {
      title: "External services and links",
      body: "The website loads Manrope fonts from Google Fonts, which receives the network request and related technical information. External downloader links open independent websites; those services operate under their own privacy terms. We do not control their tracking, content or availability. No advertising pixels or embedded third-party video players are currently included in the website code.",
    },
    {
      title: "Android app information",
      body: "The app owner previously stated that the Android app does not collect personal information. The uploaded APK's permissions, advertising services and third-party data handling have not been independently audited here. Check the app's permission prompts and contact support for app-specific information before granting access. Do not interpret this website policy as a guarantee about the app's data handling.",
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