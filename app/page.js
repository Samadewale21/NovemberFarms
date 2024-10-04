import Image from "next/image";
import { NavbarDemo } from "@/components/NavbarDemo";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { GlobeDemo } from "@/components/GlobeDemo";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <NavbarDemo />
        <GlobeDemo />  
        <VideoPlayer />
        <AppleCardsCarouselDemo />
        <WobbleCardDemo />
      </main>
    </div>
  );
}
