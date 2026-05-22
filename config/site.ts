export type NavItem = {
  title: string;
  href: string;
};

export const SITE_INFO = {
  url: process.env.APP_URL || "https://wiggleicon.com",
  name: "WiggleIcon | Interactive Animated Icons",
  description:
    "Discover WiggleIcon, a library of beautiful, interactive icons that move when you interact with them. Perfect for modern web applications.",
  ogImage: "/og-image-v2.png",
  keywords: [
    "icons",
    "animated icons",
    "interactive icons",
    "react icons",
    "svg icons",
    "ui design",
    "web development",
  ],
};

export const X_HANDLE = "@wiggleicon";
export const GITHUB_USERNAME = "wiggleicon";
export const SOURCE_CODE_GITHUB_REPO = "wiggleicon/wiggleicon";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/wiggleicon/wiggleicon";

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#0a0a0a",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Icons",
    href: "/icons",
  },
  {
    title: "Documentation",
    href: "/docs",
  },
];

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
];
