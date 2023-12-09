import styles from "./introduction.module.scss";

import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { Icon } from "@/components/shared/icons";

interface Link {
  icon: string;
  label: string;
}

interface Props {
  titles: string[];
  prefix: string;
  name: string;
  summary: string;
  links: Link[];
}

export const Introduction = ({
  titles,
  prefix,
  name,
  summary,
  links,
}: Props) => {
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
