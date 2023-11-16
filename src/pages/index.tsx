import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

const IndexPage = ({ data }: PageProps<Queries.StickersQuery>) => {
  return (
    <Layout title="Welcome to DevStickers">
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((sticker, i) => {
          const image = getImage(sticker.preview?.gatsbyImageData!);
          return (
            <article key={i}>
              <GatsbyImage
                image={image as IGatsbyImageData}
                alt={sticker.name!}
              />
              <Link to={`/products/${sticker.slug}`}>
                <h2>{sticker.name}</h2>
                <h4>${sticker.price}</h4>
              </Link>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        name
        price
        slug
        preview {
          gatsbyImageData(height: 400, placeholder: BLURRED)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
