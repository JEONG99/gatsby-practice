import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

interface IProductDetailProps {
  data: Queries.ProductDetailQuery;
}

const ProductDetail = ({ data }: IProductDetailProps) => {
  const image = getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!);

  return (
    <Layout title={data.contentfulStickerPack?.name!}>
      <GatsbyImage
        image={image as IGatsbyImageData}
        alt={data.contentfulStickerPack?.name!}
      />
      <h4>${data.contentfulStickerPack?.price}</h4>
    </Layout>
  );
};

export default ProductDetail;

export const query = graphql`
  query ProductDetail($slug: String) {
    contentfulStickerPack(slug: { eq: $slug }) {
      name
      price
      preview {
        gatsbyImageData(height: 400, placeholder: BLURRED)
      }
    }
  }
`;
