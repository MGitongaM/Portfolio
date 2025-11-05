import HeaderSection from "@/components/homePage/headerSection";
import HeadShotSection from "@/components/homePage/headShotSection";
import ProjectsSection from "@/components/homePage/projectsSection";


export default function Home() {
  return (
   <>
    <main className="bg-gray-400 text-slate-900 overflow-hidden">
    <HeaderSection/>  
    <HeadShotSection/>
    <ProjectsSection/>
    </main>   
   </>
  );
}
