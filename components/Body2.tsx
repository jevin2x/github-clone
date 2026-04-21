import Image from "next/image";

export default function Body2() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      <div className="particles absolute inset-0 bg-center bg-[length:900px] opacity-80 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">

        <div className="w-full flex items-center justify-center py-12 md:py-20 px-4">

          <div className="flex flex-col items-center justify-center text-center gap-6">

            <Image
              src="/copilot.png"
              alt="workflow illustration"
              width={430}
              height={350}
              className="rounded-xl w-[260px] md:w-[430px] h-auto"
            />

            <h1 className="text-[28px] md:text-[44px] leading-tight m-0">
              Accelerate your entire workflow
            </h1>

            <p className="text-white text-[14px] md:text-[22px] m-0 px-4 md:px-0">
              From your first line of code to final deployment, GitHub <br className="hidden md:block" />
              provides AI and automation tools to help you build and ship <br className="hidden md:block" />
              better software faster.
            </p>

          </div>

        </div>

        {/* VIDEO SECTION */}
        <div className="relative w-full flex items-center justify-center px-4">

          <div className="absolute -top-10 md:-top-20 left-1/2 -translate-x-1/2 w-[300px] md:w-[900px] h-[180px] md:h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.9),transparent_70%)] blur-3xl pointer-events-none"></div>

          <div className="bg-white/20 w-full md:w-[1200px] min-h-[300px] md:min-h-[600px] flex items-center justify-center pt-4 md:pt-6 px-4 md:px-6 rounded-t-[20px] md:rounded-t-[30px] shadow-[inset_0_-80px_120px_-40px_rgba(56,189,248,0.6)]">

            <video
              className="w-[260px] md:w-[460px] rounded-xl p-[8px] md:p-[10px] bg-white/30 shadow-[0_0_60px_rgba(139,92,246,0.35)]"
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

    </div>
  );
}
