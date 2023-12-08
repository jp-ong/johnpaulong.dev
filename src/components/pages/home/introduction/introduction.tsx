import styles from "./introduction.module.scss";

import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { Icon } from "@/components/shared/icons";

type Link = {
  icon: string;
  label: string;
};

export const Introduction = () => {
  const titles = [
    "Full Stack JavaScript Developer",
    "React Developer",
    "Flutter Developer",
  ];

  const prefix = "Hello, I'm";

  const name = "John Paul Ong";

  const summary =
    "An Information Technology graduate located in Metro Manila, Philippines, with expertise in Web Development. I excel in translating project requirements and intricate designs into streamlined and aesthetically pleasing systems. I prioritize delivering elegant and efficient solutions, both for clients and fellow developers.";

  const links: Link[] = [
    {
      icon: "github",
      label: "GitHub",
    },
    { icon: "linkedin", label: "LinkedIn" },
  ];

  return (
    <Container as="section" spacing="md" contentClassName={styles.introduction}>
      <header>
        <div className={styles.greeting}>
          <div>
            <span>{prefix}</span>
            <h1>{name}</h1>
          </div>
          <p>
            {titles.map((title) => (
              <span key={title} className={styles.title}>
                {title}
              </span>
            ))}
          </p>
        </div>
        <p>{summary}</p>
        <div className={styles.cta}>
          {links.map((link) => (
            <Button
              key={link.icon}
              icon={<Icon icon={link.icon} />}
              label={link.label}
              variant="outlined"
            />
          ))}
        </div>
      </header>
    </Container>
  );
};
