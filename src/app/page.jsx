import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Account from "./components/Account";
import Review from "./components/Review";
import Calltoaction from "./components/Calltoaction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Account />
      <Calltoaction />
      <Review />
    </main>
  );
}
