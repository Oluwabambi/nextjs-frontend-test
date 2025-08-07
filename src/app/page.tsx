import { Metadata } from "next";
import HomePage from "@/components/Home/HomePage";

export const metadata: Metadata = {
  title: "Go54 - Web Hosting Company",
};

export default function Home() {
  return <HomePage />
}
