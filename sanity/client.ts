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

/**
 * import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}

 */
