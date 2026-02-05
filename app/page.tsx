import HeaderSection from "@/components/homePage/headerSection";
import HeadShotSection from "@/components/homePage/headShotSection";
import ProjectsSection from "@/components/homePage/projectsSection";


export default function Home() {
  return (
   <>
    {/* <main className="bg-gray-4000 text-slate-900 overflow-hidden"> */}
    <main className="bg-[#280905] text-slate-100 overflow-hidden">
    <HeaderSection/>  
    <HeadShotSection/>
    <ProjectsSection/>
    </main>   
   </>
  );
}
