import Link from 'next/link';
import Image from 'next/image';

import { Skill } from '@/common/types/types';
import { Icon } from '@/components/icon/icon';
import styles from './styles.module.scss';

const About = () => {
  const skills: Skill[] = [
    { title: 'Go', iconName: 'golang', href: 'https://www.go.dev/' },
    { title: 'Rust', iconName: 'rust', href: 'https://www.rust-lang.org/' },
    { title: 'TypeScript', iconName: 'typescript', href: 'https://www.typescriptlang.org/' },
    { title: 'Next.js', iconName: 'nextjs', href: 'https://nextjs.org/' },
    { title: 'React', iconName: 'react', href: 'https://react.dev/' },
    { title: 'Vue', iconName: 'vue', href: 'https://vuejs.org/' },
    { title: 'Svelte', iconName: 'svelte', href: 'https://svelte.dev/' },
    { title: 'TailwindCSS', iconName: 'tailwindcss', href: 'https://tailwindcss.com/' },
    { title: 'Sass', iconName: 'sass', href: 'https://sass-lang.com/' },
    { title: 'Gulp', iconName: 'gulp', href: 'https://gulpjs.com/' },
    { title: 'Figma', iconName: 'figma', href: 'https://www.figma.com/' },
    { title: 'GraphQL', iconName: 'graphql', href: 'https://graphql.org/' },
    { title: 'MongoDB', iconName: 'mongodb', href: 'https://mongodb.com/' },
    { title: 'MySQL', iconName: 'mysql', href: 'https://mysql.com/' },
    { title: 'Sequelize', iconName: 'sequelize', href: 'https://sequelize.org/' },
    { title: 'Firebase', iconName: 'firebase', href: 'https://firebase.google.com/' },
    { title: 'Docker', iconName: 'docker', href: 'https://docker.com/' },
    { title: 'AWS', iconName: 'aws', href: 'https://aws.amazon.com/' },
    { title: 'Azure', iconName: 'azure', href: 'https://azure.microsoft.com/' },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <Image
          className={styles.img}
          src="/img/about.png"
          width={550}
          height={320}
          alt="Picture with characters from anime and video games"
        />

        <div className={styles.content}>
          <h2 className={styles.title}>About <span>Me</span></h2>
          <p className={styles.text}>Greetings! I&apos;m <span>Osvald Laudrisen</span>, a dedicated fullstack developer driven by my love for crafting fully responsive and user-centric websites. My expertise lies in both backend and frontend technologies, including <span>Go</span>, <span>Rust</span>, <span>Solidity</span>, <span>PHP</span>, <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>. Currently, I&apos;m deeply engaged with <span>gin</span>, <span>Next.js</span>, and <span>TypeScript</span>, pushing the boundaries of what can be achieved. I maintain a perpetual commitment to honing my skills and keeping pace with the ever-evolving landscape of industry trends.</p>
        </div>
      </div>

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <ul className={styles.skillsList}>
          {skills.map(skill => (
            <li key={skill.title}>
              <Link
                className={styles.skillsLink}
                href={skill.href}
                title={skill.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  aria-label={skill.title + ' logo'}
                  name={skill.iconName}
                  size={50}
                />    
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { About };