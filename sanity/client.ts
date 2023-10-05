import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
import { projectId, dataset, useCdn, apiVersion, token } from "./env";

export const client = createClient({
  projectId,
  dataset,
  useCdn,
  apiVersion,
  token,
});

export const urlFor = (source: any) => {
  return ImageUrlBuilder(client).image(source);
};
