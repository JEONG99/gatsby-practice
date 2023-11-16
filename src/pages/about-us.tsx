import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const AboutUs = () => {
  return (
    <Layout title="About Us">
      <p>We are the happies sticker store.</p>
    </Layout>
  );
};

export default AboutUs;

export const Head = () => <Seo title="About Us" />;
