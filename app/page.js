import Image from "next/image";
import { NavbarDemo } from "@/components/NavbarDemo";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { GlobeDemo } from "@/components/GlobeDemo";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 pb-8 sm:p-8 md:p-12 lg:p-16 gap-8 sm:gap-12 lg:gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <NavbarDemo />
      </header>
      <main className="flex flex-col gap-4 sm:gap-8 items-center sm:items-start w-full max-w-5xl">
        <div className="w-full">
          <GlobeDemo />
        </div>
        <div className="w-full">
          <VideoPlayer />
        </div>
        <div className="w-full">
          <AppleCardsCarouselDemo />
        </div>
        <div className="w-full">
          <WobbleCardDemo />
        </div>
      </main>
      <footer className="w-full text-center">
        {/* Optional footer content here */}
      </footer>
    </div>
  );
}
