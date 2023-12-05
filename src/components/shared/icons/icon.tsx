import { GitHubIcon, LinkedInIcon } from ".";

export enum Icons {
  github = "github",
  linkedin = "linkedin",
}

interface Props {
  icon: Icons | string;
}

export const Icon = ({ icon }: Props) => {
  switch (icon) {
    case Icons.github:
      return <GitHubIcon />;
    case Icons.linkedin:
      return <LinkedInIcon />;
    default:
      return null;
  }
};
