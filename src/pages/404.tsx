import React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page Not Found: 404</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="Not found" />;
