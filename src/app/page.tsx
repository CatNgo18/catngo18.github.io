import Experience from "@/components/Sections/Experience";
import Main from "../components/Sections/Main";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import { input, ThemeProvider, timelineConnector } from "./MTailwind";
import About from "@/components/Sections/About";

function App() {
  const theme = {
    timelineConnector: {
      styles: {
        base: {
          line: {
            background: "!bg-background-dark"
          }
        }
      }
    },
    input: {
      defaultProps: {
        color: "custom"
      },
      styles: {
        variants: {
          outlined: {
            colors: {
              input: {
                custom: {
                  color: "text-text",
                  borderColor: "border-text",
                  borderColorFocused: "focus:border-text",
                }
              },
              label: {
                custom: {
                  color: "text-text peer-focus:text-text",
                  after: "after:border-text peer-focus:after:border-text",
                }
              }
            }
          }
        }
      }
    }
  }

  return (
    <div className="flex flex-col *:z-10 items-center">
        <ThemeProvider value={theme}>
          <div className="absolute bg-accent w-full h-96 z-0 *:z-0 gradient-mask-b-0 *:blur-xl">      
            <div className="absolute bg-primary -top-4 aspect-square w-1/3 min-w-60 rounded-full"/>
            <div className="absolute bg-secondary top-4 left-1/4 aspect-square w-1/3 min-w-60 rounded-full"/>
            <div className="absolute bg-primary -bottom-4 right-0 aspect-square w-1/3 min-w-60 rounded-full"/>
            <div className="absolute bg-secondary right-1/4 bottom-4 aspect-square w-1/3 min-w-60 rounded-full"/>
          </div>
          <Main/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
        </ThemeProvider>
    </div>
  );
}
 
export default App