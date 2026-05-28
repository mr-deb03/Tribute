import Loader from "@/components/atmosphere/Loader";
import CursorGlow from "@/components/atmosphere/CursorGlow";
import ScrollProgress from "@/components/atmosphere/ScrollProgress";
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import Qualities from "@/components/sections/Qualities";
import Gallery from "@/components/sections/Gallery";
import Letter from "@/components/sections/Letter";
import Finale from "@/components/sections/Finale";

export default function Page() {
  return (
    <main className="relative">
      {/* Global atmosphere */}
      <Loader />
      <CursorGlow />
      <ScrollProgress />

      {/* Story sections */}
      <Hero />
      <Timeline />
      <Qualities />
      <Gallery />
      <Letter />
      <Finale />
    </main>
  );
}
