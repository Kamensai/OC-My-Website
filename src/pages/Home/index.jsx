import AboutMe from '../../components/AboutMe';
import Contact from '../../components/Contact';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import WelcomeBanner from '../../components/WelcomeBanner';

function Home() {
  return (
    <section className="home">
      <WelcomeBanner />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
}

export default Home;
