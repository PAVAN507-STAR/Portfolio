import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { roboto } from "@/app/font";
import Hello from "@/components/hello";
import NavBar from "@/components/nav-bar";
import { ProgressBar, ProgressBarProvider } from "@/components/progress-bar";
import SideBar from "@/components/side-bar";
import { WebVitals } from "@/components/web-vitals";
import config from "@/config";
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const {
  title,
  description,
  author,
  keywords,
  googleAnalyticId,
  googleTagManagerId,
  openGraph,
  about,
  avatar,
  status,
} = config;

const { firstName, lastName, middleName, preferredName } = about;

export const metadata: Metadata = {
  title: title,
  description: description,
  authors: [{ name: author }],
  creator: author,
  keywords: keywords,
  openGraph: {
    url: openGraph.url,
    type: "website",
    siteName: openGraph.siteName,
    title: openGraph.title,
    description: openGraph.description,
    images: openGraph.images,
  },
  manifest: "/manifest.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "Hugo ChunHo Lin (1chooo) | Open Source Enthusiast",
    description:
      "I'm Chun-Ho (Hugo) Lin, a graduate with a Bachelor's degree from National Central University (NCU) 🐿️, driven by a sincere passion for Software Engineering 💻.",
    images: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-background text-text-primary`}>
        <ProgressBarProvider>
          <WebVitals gaId={googleAnalyticId} />
          <ProgressBar className="fixed top-0 h-1 bg-yellow-500">
            <Hello />
            <main>
              <SideBar
                avatar={avatar}
                firstName={firstName}
                lastName={lastName}
                middleName={middleName}
                preferredName={preferredName}
                status={status}
              />
              <div className="main-content">
                <NavBar />
                {children}
              </div>
            </main>
          </ProgressBar>
        </ProgressBarProvider>
      </body>
      <GoogleAnalytics gaId={googleAnalyticId} />
      <GoogleTagManager gtmId={googleTagManagerId} />
    </html>
  );
}
