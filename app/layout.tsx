import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { META_THEME_COLORS, SITE_INFO, X_HANDLE } from "@/config/site";

import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: META_THEME_COLORS.light },
    { media: "(prefers-color-scheme: dark)", color: META_THEME_COLORS.dark },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s | ${SITE_INFO.name}`,
    default: SITE_INFO.name,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [{ name: SITE_INFO.name }],
  creator: X_HANDLE,
  publisher: SITE_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_INFO.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    creator: X_HANDLE,
    images: [SITE_INFO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-background text-foreground relative">
            {children}
            <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-16 bg-background/50 backdrop-blur-md
             mask-[linear-gradient(to_top,black_20%,transparent_100%)] " />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
