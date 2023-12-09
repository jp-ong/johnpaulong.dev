import styles from "./skills.module.scss";

import { Container } from "@/components/shared/container";

interface StackItem {
  label: string;
}

interface Stack {
  header: string;
  items: StackItem[];
}

interface Props {
  header: string;
  stacks: Stack[];
}

export const Skills = ({ header, stacks }: Props) => {
  return (
    <Container as="section" spacing="md" contentClassName={styles.skills}>
      <h2>{header}</h2>
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
