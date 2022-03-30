import * as React from "react";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const Header = () => {
  const { allStrapiVova } = useStaticQuery(graphql`
    query HeaderQuery {
      allStrapiVova {
        nodes {
          Photo {
            localFile {
              url
            }
          }
          Role
          Name
        }
      }
    }
  `);
  let info = allStrapiVova.nodes[0];

  const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
  `;

  const Name = styled.div`
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    margin-top: 40px;
  `;

  const Role = styled.div`
    font-size: 35px;
    line-height: 37px;
    padding-top: 10px;
  `;
  return (
    <HeaderInner>
      <div>
        <Name>{info.Name}</Name>
        <Role>{info.Role}</Role>
      </div>
      <img src={info.Photo.localFile.url} alt="photo" />
    </HeaderInner>
  );
};

export default Header;
