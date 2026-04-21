import Link from "next/link";
import Image from "next/image";

const bodyItems = [
  { name: "Code", path: "/code" },
  { name: "Plan", path: "/plan" },
  { name: "Collaborate", path: "/collaborate" },
  { name: "Automate", path: "/automate" },
  { name: "Secure", path: "/secure" },
];

export default function Body() {
  return (
    <div className="w-full flex flex-col items-center text-white">

      {/* HERO SECTION */}
      <div className="w-full flex items-center justify-center py-20 px-4 md:px-0">

        <div className="flex flex-col items-center justify-center text-center gap-6">

          <h1 className="text-[32px] md:text-[60px] leading-tight m-0">
            The future of building <br /> happens together
          </h1>

          <p className="text-white text-[14px] md:text-[18px] m-0">
            Tools and trends evolve, but collaboration endures. With GitHub,
            <br className="hidden md:block" />
            developers, agents, and code come together on one platform.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap gap-[10px] items-center">

            <div className="flex items-center bg-white rounded-md overflow-hidden px-[5px] py-[2px] h-[50px] md:h-[60px] w-full md:w-auto">

              <input
                type="text"
                placeholder="Enter your email"
                className="w-full md:w-[260px] h-[40px] md:h-[48px] text-black placeholder-gray-600 px-2 md:px-4"
              />

              <button className="w-[140px] md:w-[204px] bg-green-700 py-[10px] md:py-[14px] px-[16px] md:px-[32px] font-bold whitespace-nowrap text-sm md:text-base">
                Sign up for Github
              </button>

            </div>

            <button className="w-full md:w-[190px] border border-white rounded-sm px-[20px] py-[8px] font-bold whitespace-nowrap">
              Try Github Copilot
            </button>

          </div>

        </div>

      </div>

      {/* VIDEO SECTION */}
      <div className="w-full flex flex-col items-center justify-center mt-[10vh] md:mt-[35vh] px-4">

        <div className="bg-white/50 w-full md:w-[1200px] flex items-center justify-center pt-6 px-4 md:px-6 rounded-t-[30px] shadow-[0_0_30px_rgba(139,92,246,0.8),0_0_60px_rgba(56,189,248,0.8),0_0_90px_rgba(139,92,246,0.6)]">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-t-lg"
          >
            <source
              src="https://github.githubassets.com/assets/code-1_desktop-6d44c7cb53b4aebb.mp4"
              type="video/mp4"
            />
          </video>

        </div>

      </div>

      {/* BODY2 SECTION */}
      <div className="w-full bg-black flex flex-col items-center text-white shadow-[inset_0_40px_40px_-40px_rgba(139,92,246,0.6)]">

        <div className="flex flex-col gap-4 items-center pt-10 px-4">

          <div className="border border-white/20 flex flex-wrap gap-2 py-[10px] rounded-full w-full md:w-[682px] min-h-[56px] items-center justify-center">

            {bodyItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`text-sm md:text-lg transition px-4 md:px-8 py-1 rounded-full ${
                  item.name === "Code"
                    ? "border border-white/30 bg-white/20"
                    : "hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>

          <h1 className="text-[14px] md:text-[18px] text-gray-500 text-center whitespace-normal md:whitespace-nowrap">
            Write, test, and fix code quickly with GitHub Copilot, from simple boilerplate to complex features.
          </h1>

        </div>

        <div className="w-full mt-10 px-4">
          <Image
            src="/Brands.png"
            alt="brands"
            width={1920}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <hr className="border-white w-full opacity-20 mt-6" />

      </div>

    </div>
  );
}
