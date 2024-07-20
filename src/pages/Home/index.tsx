import { useEffect } from "react";

import { Banners } from "./sections/Banners";
import { About } from "./sections/About";
import { Services } from "./sections/OurServices";
import { Products } from "./sections/Products";
import { FeedbackSection } from "./sections/FeedbackSection";

import { ScrollIcons } from "../../components/ScrollIcons";


export function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return(
    <div>
      <ScrollIcons />
      <Banners />
      <About />
      <Services />
      <Products />
      <FeedbackSection />
    </div>
  )
}