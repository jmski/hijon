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
  product,
  banner,
  social,
  store,
  resource,
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
    product,
    banner,
    social,
    store,
    resource,
  ],
};
