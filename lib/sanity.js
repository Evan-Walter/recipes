import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
} from 'next-sanity';
import { PortableText as PortableTextComponent } from '@portabletext/react';

const config = {
  projectId: 'sxlgrj9q',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = (props, config) => (
  <PortableTextComponent components={{}} {...props} {...config} />
);
