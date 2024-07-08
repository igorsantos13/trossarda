import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Twitch Streamer / Content Creator</span>
            <h1 className="h1 mb-6">
              Hi I'm <br /> <span className="text-accent">Trossarda</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quisquam alias ab voluptatum iure fugit mollitia sit. Et, fugiat temporibus sequi maiores eaque distinctio, veniam sint molestiae neque rem dicta!
            </p>

            {/* socials */}
            <div className="mb-8 xl:mb-0 xl:mb flex flex-col xl:flex-row items-center gap-8">
              <Socials containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
            </div>

          </div>
          {/* streamer photo */}
          <div className="order-1 xl:order-none mb-8j xl:mb-0">
            <Photo />

          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
