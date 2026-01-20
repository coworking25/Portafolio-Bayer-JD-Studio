import './i18n';
import { MouseTrail } from './components/MouseTrail';
import { ScrollBar } from './components/ScrollBar';
import { AboutMe } from './sections/AboutMe';
import { InfoSection } from './sections/InfoSection';
import { TechStack } from './sections/TechStack';
import { Contact } from './sections/Contact';
import './styles/about-me.css';
import './styles/floating-button.css';
import './styles/glow-box.css';
import './styles/info-section.css';
import './styles/mouse-trail.css';
import './styles/tech-stack.css';
import './styles/text-hover.css';
import './styles/title.css';
import './styles/contact.css';
import './styles/language-switcher.css';

function App() {
  return (
    <>
      <ScrollBar />
      <MouseTrail />
      <InfoSection />
      <AboutMe />
      <TechStack />
      <Contact />
    </>
  );
}

export default App;
