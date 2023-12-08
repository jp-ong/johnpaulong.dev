import styles from "./experience.module.scss";

import { Container } from "@/components/shared/container";
import { ExperienceItem } from "./item/item";

export const Experience = () => {
  const experienceItems = [
    {
      date: "March 20, 2023",
      title: "Title Lorem Ipsum",
      subtitle: "Subtitle",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio qui enim explicabo accusamus non quae numquam maxime. Ipsa laudantium quisquam, aliquam adipisci a dicta magni nemo veniam quas voluptate quaerat necessitatibus, maxime delectus natus beatae unde excepturi error reiciendis possimus.",
    },
    {
      date: "February 20, 2023",
      title: "Title Lorem Ipsum",
      subtitle: "Subtitle",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio qui enim explicabo accusamus non quae numquam maxime. Ipsa laudantium quisquam, aliquam adipisci a dicta magni nemo veniam quas voluptate quaerat necessitatibus, maxime delectus natus beatae unde excepturi error reiciendis possimus.",
    },
  ];

  return (
    <Container as="section" spacing="md" contentClassName={styles.experience}>
      <h2>Work Experiences</h2>
      <ul className={styles.items}>
        {experienceItems.map((item) => (
          <ExperienceItem key={item.date + item.title} {...item} />
        ))}
      </ul>
    </Container>
  );
};
