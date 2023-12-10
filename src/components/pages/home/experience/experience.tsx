import styles from "./experience.module.scss";

import { Container } from "@/components/shared/container";
import { ExperienceItem, Props as ExperienceItemProps } from "./item/item";

interface Prop {
  header: string;
  items: ExperienceItemProps[];
}

export const Experience = ({ header, items }: Prop) => {
  return (
    <Container
      id="experience"
      as="section"
      spacing="md"
      contentClassName={styles.experience}
    >
      <h2>{header}</h2>
      <ul className={styles.items}>
        {items.map((item) => (
          <ExperienceItem key={item.date + item.header} {...item} />
        ))}
      </ul>
    </Container>
  );
};
