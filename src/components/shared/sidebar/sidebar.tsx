import Image from "next/image";
import Link from "next/link";

import styles from "./sidebar.module.scss";

import { Button } from "../button";
import { GitHubIcon } from "../icons";

export const Sidebar = () => {
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
          <h1>Software Engineer</h1>
          <h2>UBX Philippines Corporation</h2>
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
          <address>
            <GitHubIcon />
            <span>jpong5202@gmail.com</span>
          </address>
          <address>
            <GitHubIcon />
            <span>jong@ubx.ph</span>
          </address>
          <address>
            <GitHubIcon />
            <span>+639173243289</span>
          </address>
          <address>
            <GitHubIcon />
            <span>Manila City, NCR, Philippines</span>
          </address>
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
