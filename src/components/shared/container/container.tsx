import React from "react";
import styles from "./container.module.scss";

import { createClassName } from "@/utils";

interface Props {
  as?: "div" | "section";
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  id?: string;
  size?: "md" | "lg";
  spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
}

export const Container = ({
  as = "div",
  className,
  contentClassName,
  children,
  id,
  size = "md",
  spacing = "none",
}: Props) => {
  const cn = createClassName([
    styles.container,
    className,
    styles[`spacing-${spacing}`],
  ]);

  const contentCn = createClassName([
    styles.content,
    styles[`size-${size}`],
    contentClassName,
  ]);

  return (
    <div id={id} className={cn}>
      <Content as={as} contentClassName={contentCn} id={id}>
        {children}
      </Content>
    </div>
  );
};

const Content = ({ as = "div", contentClassName, children }: Props) => {
  return React.createElement(as, { className: contentClassName }, children);
};
