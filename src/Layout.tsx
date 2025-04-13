import SectionWrapper from "./components/SectionWrapper";
import AllProjects from "./pages/AllProjects";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/Home";
import PreviousWorks from "./pages/PreviousWorks";
import ServicesWithLines from "./pages/Services";
import MySkills from "./pages/Skills";

const RootLayout = () => {
  return (
    <main className="px-6 md:px-20 lg:px-28 py-10 bg-[#111111] text-white">
      <SectionWrapper>
        <HomePage />
      </SectionWrapper>

      <div className="hidden md:block">
        <SectionWrapper>
          <PreviousWorks />
        </SectionWrapper>
      </div>

      <div className="md:hidden">
        <SectionWrapper>
          <AllProjects />
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <ServicesWithLines />
      </SectionWrapper>

      <SectionWrapper>
        <MySkills />
      </SectionWrapper>

      <SectionWrapper>
        <ContactUs />
      </SectionWrapper>
    </main>
  );
};

export default RootLayout;
