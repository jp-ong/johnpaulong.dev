import Image from "next/image";
import Link from "next/link";

import styles from "./sidebar.module.scss";

import { Button } from "../button";
import { Icon } from "../icons";
import { getContent } from "@/api";

export const Sidebar = async () => {
  const content = await getContent();

  if (!content) {
    return null;
  }

  const { global } = content;

  return (
    <aside className={styles.sidebar}>
      <header>
        <div className={styles.pfp}>
          <Image
            alt=""
            src="/assets/me.jpg"
            width={0}
            height={0}
            sizes="100vw"
            draggable={false}
          />
        </div>
        <div>
          <small>At present,</small>
          <h1>{global.currentPosition}</h1>
          <h2>{global.currentCompany}</h2>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <Link href="#about">About Me</Link>
          </li>
          <li>
            <Link href="#skills">Technical Skills</Link>
          </li>
          <li>
            <Link href="#experience">Work Experiences</Link>
          </li>
        </ul>
      </nav>
      <footer>
        <div className={styles.addresses}>
          {global.addresses.map((address) => (
            <address key={address.label}>
              <Icon icon={address.icon} />
              <span>{address.label}</span>
            </address>
          ))}
        </div>
        <Button
          variant="contained"
          label="Download Resume"
          href="/resume.pdf"
          target="_blank"
          maxWidth
        />
        {/* <Button variant="outlined" label="Send a Message" maxWidth /> */}
      </footer>
    </aside>
  );
};
