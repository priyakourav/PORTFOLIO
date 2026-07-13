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