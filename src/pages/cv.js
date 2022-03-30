import * as React from "react";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import WebFont from "webfontloader";
import Header from "../components/header";
import InfoItem from "../components/info_item";
import ExtraInfoItem from "../components/extrainfo_item";
import NavBtn from "../components/nav_btn";

const IndexPage = () => {
  const { allStrapiVova } = useStaticQuery(graphql`
    query MyQuery {
      allStrapiVova {
        nodes {
          Courses_Date
          Courses_Name
          Courses_Place
          Education_Date1
          Education_Date2
          Education_Name1
          Education_Name2
          Education_Place1
          Education_Place2
          Exp_Date
          Exp_Place
          Exp_Portf
          Exp_Role
          Extra_skills
          Languages
          Tools
        }
      }
    }
  `);
  let info = allStrapiVova.nodes[0];

  WebFont.load({
    google: {
      families: ["Inter"],
    },
  });

  const Page = styled.div`
    font-family: "Inter";
    font-weight: 400;
    font-size: 25px;
    line-height: 35px;
    max-width: 1336px;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
  `;

  const Info = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  `;

  const Subtitle = styled.div`
    font-size: 18px;
    margin-top: 30px;
    letter-spacing: 5px;
    color: #73808d;
    text-transform: uppercase;
  `;

  const MainInfo = styled.div`
    max-width: 800px;
  `;

  const ExtraInfo = styled.div`
    margin-left: 10px;
    color: #73808d;
    max-width: 300px;
  `;

  const NavBtnWrapper = styled.div`
    margin-top: 50px;
  `;

  return (
    <Page>
      <Header />
      <Info>
        <MainInfo>
          <Subtitle>Experience</Subtitle>
          <InfoItem
            name={info.Exp_Role}
            place={info.Exp_Place}
            date={info.Exp_Date}
            add={info.Exp_Portf}
          />

          <Subtitle>Courses and training</Subtitle>
          <InfoItem
            name={info.Courses_Name}
            place={info.Courses_Place}
            date={info.Courses_Date}
          />

          <Subtitle>education</Subtitle>
          <InfoItem
            name={info.Education_Name1}
            place={info.Education_Place1}
            date={info.Education_Date1}
          />
          <InfoItem
            name={info.Education_Name2}
            place={info.Education_Place2}
            date={info.Education_Date2}
          />
        </MainInfo>
        <ExtraInfo>
          <ExtraInfoItem name="Tools & Technologies" tools={info.Tools} />
          <ExtraInfoItem name="Languages" tools={info.Languages} />
          <ExtraInfoItem name="Extra Skills" tools={info.Extra_skills} />
          
          <NavBtnWrapper>
            <NavBtn page="/" text="Home Page" />
          </NavBtnWrapper>
        </ExtraInfo>
      </Info>
    </Page>
  );
};

export default IndexPage;
