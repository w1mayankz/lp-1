import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { CaseStudies } from './components/sections/CaseStudies';

function App() {
  return (
    <main className="w-full min-h-screen bg-[#EFEFEF] font-sans selection:bg-[#F26522] selection:text-white">
      <Hero />
      <About />
      <CaseStudies />
    </main>
  );
}

export default App;
