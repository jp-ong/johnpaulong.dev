import mongoose from "mongoose";

import { Experience } from "@/components/pages/home";

interface Introduction {
  titles: string[];
  prefix: string;
  name: string;
  summary: string;
  links: {
    icon: string;
    label: string;
  }[];
}

interface Skills {
  header: string;
  stacks: {
    header: string;
    items: {
      label: string;
    }[];
  }[];
}

interface Experience {
  header: string;
  items: {
    header: string;
    subheader: string;
    date: string;
    body: string;
  }[];
}

export interface Content extends mongoose.Document {
  version: string;
  introduction: Introduction;
  skills: Skills;
  experience: Experience;
}

const IntroductionSchema = new mongoose.Schema<Introduction>({
  titles: [String],
  prefix: String,
  name: String,
  summary: String,
  links: [
    {
      icon: String,
      label: String,
    },
  ],
});

export const SkillsSchema = new mongoose.Schema<Skills>({
  header: String,
  stacks: [{ header: String, items: [{ label: String }] }],
});

export const ExperienceSchema = new mongoose.Schema<Experience>({
  header: String,
  items: [{ header: String, subheader: String, date: String, body: String }],
});

const ContentSchema = new mongoose.Schema<Content>({
  version: String,
  introduction: IntroductionSchema,
  skills: SkillsSchema,
  experience: ExperienceSchema,
});

export default mongoose.models.Content ||
  mongoose.model<Content>("Content", ContentSchema, "content");
