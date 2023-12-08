import styles from "./skills.module.scss";

import { Container } from "@/components/shared/container";

export const Skills = () => {
  const stacks = [
    {
      header: "Frontend Development",
      items: [
        { label: "HTML5" },
        { label: "CSS3" },
        { label: "JavaScript" },
        { label: "ReactJS" },
        { label: "NextJS" },
      ],
    },
    {
      header: "Backend Development",
      items: [{ label: "NodeJS" }, { label: "ExpressJS" }, { label: "NestJS" }],
    },
    {
      header: "Mobile Development",
      items: [{ label: "Flutter" }],
    },
    {
      header: "Database",
      items: [{ label: "MongoDB" }, { label: "PostgreSQL" }],
    },
    {
      header: "Tools",
      items: [{ label: "Git" }, { label: "GitHub" }, { label: "Figma" }],
    },
  ];
  return (
    <Container as="section" spacing="md" contentClassName={styles.skills}>
      <h2>Technical Skills</h2>
      {stacks.map((stack) => (
        <div key={stack.header} className={styles.stack}>
          <h3>{stack.header}</h3>
          <ul>
            {stack.items.map((item) => (
              <li key={item.label}>
                <div className={styles.logo}></div>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
};
