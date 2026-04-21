import Navbar from "@/components/Navbar";
import Body from "@/components/Body";
import Body2 from "@/components/Body2";

export default function Home() {
  return (
    <main>

      <Navbar />

      <div className="flex flex-col m-0 p-0 gap-0">
      <Body />
      <Body2 />
      </div>
   
      

      
    </main>
  );
}
