import Image from "next/image";

import styles from "./introduction.module.scss";

import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { Icon } from "@/components/shared/icons";

interface Link {
  href: string;
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
    <Container
      id="about"
      as="section"
      spacing="md"
      contentClassName={styles.introduction}
    >
      <header>
        <div className={styles.greetings}>
          <div>
            <Image
              alt=""
              className={styles.pfp}
              src="/assets/me.jpg"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className={styles.text}>
              <span>{prefix}</span>
              <h1>{name}</h1>
            </div>
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
              href={link.href}
              icon={<Icon icon={link.icon} />}
              label={link.label}
              target="_blank"
              variant="outlined"
            />
          ))}
        </div>
      </header>
    </Container>
  );
};
