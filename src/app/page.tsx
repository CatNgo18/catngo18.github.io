import Experience from "@/components/Sections/Experience";
import Main from "../components/Sections/Main";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import { accordion, ThemeProvider, timelineConnector } from "./MTailwind";

function App() {
  const theme = {
    accordion: {
      styles: {
        base: {
          container: {
            width: "w-[90vw] md:w-[60vw]",
          }
        }
      }
    },
    timelineConnector: {
      styles: {
        base: {
          line: {
            background: "bg-secondary"
          }
        }
      }
    }
  }

  return (
    <div className="flex flex-col *:z-10">
        <ThemeProvider value={theme}>
          <div className="absolute bg-accent w-full h-96 z-0 *:z-0 gradient-mask-b-0 *:blur-xl">      
            <div className="absolute bg-primary -top-4 aspect-square w-1/3 min-w-60 rounded-full"/>
            <div className="absolute bg-[#FFDA57] top-4 left-1/4 aspect-square w-1/3 min-w-60 rounded-full"/>
            <div className="absolute bg-primary -bottom-4 right-0 aspect-square w-1/3 min-w-60 rounded-full"/>
            <div className="absolute bg-[#FFDA57] right-1/4 bottom-4 aspect-square w-1/3 min-w-60 rounded-full"/>
          </div>
          <Main/>
          <Experience/>
          <Projects/>
          <Contact/>
        </ThemeProvider>
    </div>
  );
}
 
export default App