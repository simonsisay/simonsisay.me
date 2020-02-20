import React from "react";
import Image from "gatsby-image/withIEPolyfill";
import { StaticQuery, graphql } from "gatsby";

const GatsbyImage = ({ filename, style, alt }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.allImageSharp.edges.find(file =>
          file.node.fluid.src.includes(filename)
        ).node.fluid;

        if (!image) {
          return null;
        }

        return <Image alt={alt} fluid={image} style={style} />;
      }}
    />
  );
};

export default GatsbyImage;
