import { type SchemaTypeDefinition } from "sanity";
import {
  services,
  brands,
  contact,
  experiences,
  skills,
  testimonials,
  workExperience,
  works,
  abouts,
} from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    services,
    brands,
    contact,
    experiences,
    skills,
    testimonials,
    workExperience,
    works,
    abouts,
  ],
};
