import Hero from "../sections/Hero";
import Problem from "../sections/Problem";
import Solution from "../sections/Solution";
import Impact from "../sections/Impact";
import Contact from "../sections/Contact";

export default function Home({ navigateTo }) {
  return (
    <>
      {/* Hero Section */}
      <Hero navigateTo={navigateTo} />

      {/* Problem Section */}
      <Problem />

      {/* Solution Section */}
      <Solution />

      {/* Impact Section */}
      <Impact navigateTo={navigateTo} />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
