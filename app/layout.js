import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Priya Kourav | Aspiring Software Developer",
  description:
    "Portfolio of Priya Kourav, a B.Tech Artificial Intelligence & Machine Learning student passionate about software development, full-stack web development, AI, and building real-world applications.",
  authors: [{ name: "Priya Kourav" }],
  creator: "Priya Kourav",
  keywords: [
    "Priya Kourav",
    "Software Developer",
    "Portfolio",
    "Full Stack Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "MERN",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}