import Experience from "@/components/Sections/Experience";
import Main from "../components/Sections/Main";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <Main/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}
 
export default App