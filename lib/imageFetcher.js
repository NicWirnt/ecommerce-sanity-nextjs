import React from 'react';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

import sanityClient from "@sanity/client";


const configuredSanityClient = sanityClient({
  projectId: "jk4q9d4s",
  dataset: "production",
  apiVersion: "2023-07-05",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const Page = ({ mySanityData }) => {
	const imageProps = useNextSanityImage(configuredSanityClient, mySanityData.image);

	return (
		<Img
			{...imageProps}
			style={{ width: '100%', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
			sizes="(max-width: 800px) 100vw, 800px"
			placeholder="blur"
			blurDataURL={mySanityData.image.asset.metadata}
		/>
	);
};

// Replace this with your logic for fetching data from the Sanity API.
export const getServerSideProps = async function (context) {
	const { slug = '' } = context.query;

	const data = await configuredSanityClient.fetch(
		`{
			"mySanityData": *[_type == "banner" ]{
				image {
					asset->{
						...,
						metadata
					}
				}
			}
		}`,
		{ slug }
	);

	return { props: data };
};

export default Page;