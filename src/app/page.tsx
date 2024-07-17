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
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Twitch Streamer / Content Creator</span>
            <h1 className="h1 mb-6">
              Olá <span className="wave">👋</span> eu sou a <br /> <span className="text-accent">Trossarda</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Streamer e influencer da <Link href={'https://www.r10team.com/'} className="text-accent">R10 Team</Link> na <Link className="text-semibold text-purple-600" href={'https://twitch.tv/trossarda'}>Twitch</Link> de EA FC e variedades, lives segunda, quarta e sexta, às 13h.
            </p>

            {/* socials */}
            <div className="mb-8 xl:mb-0 xl:mb flex flex-col xl:flex-row items-center gap-8">
              <Socials containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
            </div>

          </div>
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
