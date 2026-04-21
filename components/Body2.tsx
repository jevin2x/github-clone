import Image from "next/image";

export default function Body2() {
  return (
    <div className="w-full flex flex-col items-center text-white bg-black">

      

      {/* HERO SECTION */}
      <div className="w-full flex items-center justify-center py-20">

        <div className="flex flex-col items-center justify-center text-center gap-6">

          {/* IMAGE HERE */}
          <Image
            src="/copilot.png"   // put file inside /public folder
            alt="workflow illustration"
            width={430}
            height={350}
            className="rounded-xl"
          />

          <h1 className="text-[44px] leading-tight m-0">
            Accelerate your entire workflow
          </h1>

          <p className="text-white text-[22px] m-0">
            From your first line of code to final deployment, GitHub <br />
            provides AI and automation tools to help you build and ship <br />
            better software faster.
          </p>

        </div>

      </div>

      {/*video*/}
       <div className="bg-white/50 w-[1200px] min-h-[600px] flex items-center justify-center pt-6 px-6 rounded-t-[30px] shadow-[0_0_30px_rgba(139,92,246,0.8),0_0_60px_rgba(56,189,248,0.8),0_0_90px_rgba(139,92,246,0.6)]">

      <div className="w-full flex items-center justify-center py-10">

      <video
        className="w-[500px] rounded-xl"
        muted
        playsInline
        autoPlay
        loop
        poster="https://images.ctfassets.net/8aevphvgewt8/4bHtN4pOZ8cVOdnQH3K83b/e350fd3eb337cddbf008093ea047a76b/hero_poster_desktop.webp"
      >
        <source
          src="https://videos.ctfassets.net/8aevphvgewt8/490cvTcPE95XqUKGA4C2Kn/427a8803b029857c58167cce0e855191/github-copilot-agent-mode.mp4"
          type="video/mp4"
        />
      </video>

   

      </div>
      </div>
      

    </div>
  );
}
