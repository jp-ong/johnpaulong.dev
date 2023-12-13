import { GitHubIcon, LinkedInIcon } from ".";
import { EnvelopeIcon } from "./envelope";
import { MapPinIcon } from "./map-pin";
import { PhoneIcon } from "./phone";

export enum Icons {
  GITHUB = "github",
  LINKEDIN = "linkedin",
  ENVELOPE = "envelope",
  PHONE = "phone",
  MAP_PIN = "map-pin",
}

interface Props {
  icon: Icons | string;
}

export const Icon = ({ icon }: Props) => {
  switch (icon) {
    case Icons.GITHUB:
      return <GitHubIcon />;
    case Icons.LINKEDIN:
      return <LinkedInIcon />;
    case Icons.ENVELOPE:
      return <EnvelopeIcon />;
    case Icons.PHONE:
      return <PhoneIcon />;
    case Icons.MAP_PIN:
      return <MapPinIcon />;
    default:
      return null;
  }
};
