import TentangWebsiteSection from "../components/about-sections/TentangWebsiteSection";
import FAQSection from "../components/about-sections/FAQSection";
import HeadOfficeSection from "../components/about-sections/HeadOfficeSection";
import TeamSection from "../components/about-sections/TeamSection";
import Container from "../components/ui/container";

export default function AboutPage() {
  return (
    <>
      <Container>
        <TentangWebsiteSection />
      </Container>
      <Container>
        <FAQSection />
      </Container>
      <Container className=" bg-primary-10/20">
        <HeadOfficeSection />
      </Container>
      <Container>
        <TeamSection />
      </Container>
    </>
  );
}
