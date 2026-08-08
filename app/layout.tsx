import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Frontis Tech | Operations & Technology Partner",
    template: "%s | Frontis Tech",
  },
  description:
    "Frontis Tech LLC is a full-service operations and technology partner: customer acquisition, back-office support, talent solutions, performance marketing, and software development. Connections That Convert.",
  openGraph: {
    siteName: site.shortName,
    type: "website",
    url: site.url,
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "Frontis Tech: Connections That Convert" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2660",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-ink antialiased">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
