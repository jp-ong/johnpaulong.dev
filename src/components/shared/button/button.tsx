import Link from "next/link";

import styles from "./button.module.scss";

import { createClassName } from "@/utils";
import { HTMLAttributeAnchorTarget } from "react";

interface Props {
  label: string;
  download?: boolean;
  href?: string;
  icon?: React.ReactNode;
  maxWidth?: boolean;
  onClick?: () => void;
  target?: HTMLAttributeAnchorTarget;
  variant?: "contained" | "outlined" | "flat";
}

export const Button = ({
  label,
  href,
  icon,
  maxWidth,
  onClick,
  target,
  variant = "flat",
}: Props) => {
  const cn = createClassName([
    styles.button,
    maxWidth && styles["max-width"],
    styles[variant],
  ]);

  return href ? (
    <Link className={cn} href={href} target={target}>
      {icon}
      <span>{label}</span>
    </Link>
  ) : (
    <button className={cn} onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  );
};
