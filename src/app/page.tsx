import MainText from "@/components/MainText";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* text */}
          <MainText />
          {/* streamer photo */}
          <div className="order-1 xl:order-none mb-8j xl:mb-0">
            <Photo fill/>

          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
