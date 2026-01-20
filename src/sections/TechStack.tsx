import { BiLogoTypescript } from 'react-icons/bi';
import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiExpress,
  SiMui,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { GlowBox } from '../components/GlowBox';
import { SectionTitle } from '../components/SectionTitle';

export const TechStack = () => {
  const techs = [
  {
    heading: 'Stack Principal',
    items: [
      {
        title: 'React JS',
        icon: <FaReact color="rgb(97, 219, 251)" />,
        color: 'rgb(97, 219, 251, 0.6)',
      },
      {
        title: 'TypeScript',
        icon: <BiLogoTypescript color="rgb(0, 122, 204)" />,
        color: 'rgba(0, 122, 204, 0.6)',
      },
      {
        title: 'Vite',
        icon: <SiVite color="rgb(189, 147, 249)" />,
        color: 'rgb(189, 147, 249, 0.6)',
      },
      {
        title: 'Next JS',
        icon: <TbBrandNextjs color="rgb(255, 255, 255)" />,
        color: 'rgba(255, 255, 255, 0.4)',
      },
      {
        title: 'Node JS',
        icon: <FaNodeJs color="rgb(104, 160, 99)" />,
        color: 'rgb(104, 160, 99)',
      },
      {
        title: 'Express JS',
        icon: <SiExpress color="rgba(255, 255, 255)" />,
        color: 'rgba(255, 255, 255, 0.4)',
      },
    ],
  },
  {
    heading: 'UI & Estilos',
    items: [
      {
        title: 'Tailwind CSS',
        icon: <SiTailwindcss color="rgb(6, 182, 212)" />,
        color: 'rgb(6, 182, 212, 0.7)',
      },
      {
        title: 'Material UI',
        icon: <SiMui color="rgb(0, 127, 255)" />,
        color: 'rgb(0, 127, 255, 0.6)',
      },
      {
        title: 'Bootstrap',
        icon: <FaBootstrap color="rgb(125, 17, 248)" />,
        color: 'rgb(125, 17, 248, 0.75)',
      },
    ],
  },
  {
    heading: 'Bases de Datos',
    items: [
      {
        title: 'Supabase',
        icon: <SiSupabase color="rgb(62, 207, 142)" />,
        color: 'rgb(62, 207, 142, 0.7)',
      },
      {
        title: 'PostgreSQL',
        icon: <SiPostgresql color="rgb(49, 130, 189)" />,
        color: 'rgb(49, 130, 189, 0.7)',
      },
      {
        title: 'MySQL',
        icon: <SiMysql color="rgb(0, 122, 158)" />,
        color: 'rgb(0, 122, 158, 0.75)',
      },
    ],
  },
];

  return (
    <section className="tech-stack" id="tech-stack">
      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div key={index}>
            <p>{tech.heading}</p>
            <div className="tech-row">
              {tech.items.map((item, index) => (
                <GlowBox key={index} icon={item.icon} color={item.color} title={item.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <SectionTitle title="Tech" subTitle="STACK" />
      </div>
    </section>
  );
};
