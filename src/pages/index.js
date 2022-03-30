import * as React from "react";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import WebFont from "webfontloader";

const IndexPage = () => {
  const { allStrapiVova } = useStaticQuery(graphql`
    query MyQuery {
      allStrapiVova {
        nodes {
          Photo {
            localFile {
              url
            }
          }
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
          Role
          Tools
          Name
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

  const Header = styled.div`
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

  const Info = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  `;

  const MainInfo = styled.div`
    max-width: 800px;
  `;

  const InfoItem = styled.div`
    margin-bottom: 30px;
  `;

  const Subtitle = styled.div`
    font-size: 18px;
    margin-top: 20px;
    letter-spacing: 5px;
    color: #73808d;
    text-transform: uppercase;
  `;

  const InfoName = styled.div`
    font-weight: 700;
  `;

  const InfoDate = styled.div`
    color: #73808d;
    font-size: 20px;
  `;

  const ExtraInfo = styled.div`
    margin-top: 35px;
    margin-left: 10px;
    color: #73808d;
    max-width: 300px;
  `;

  const ExtraInfoItem = styled.div`
    margin-bottom: 30px;
  `;

  const ExtraInfoItemSubtitle = styled.div`
    font-weight: 600;
  `;

  return (
    <Page>
      <Header>
        <div>
          <Name>{info.Name}</Name>
          <Role>{info.Role}</Role>
        </div>
        <img src={info.Photo.localFile.url} alt="photo" />
      </Header>
      <Info>
        <MainInfo>
          <InfoItem>
            <Subtitle>Experience</Subtitle>
            <InfoName>{info.Exp_Role}</InfoName>
            <div>{info.Exp_Place}</div>
            <InfoDate>{info.Exp_Date}</InfoDate>
            <div>{info.Exp_Portf}</div>
          </InfoItem>
          <InfoItem>
            <Subtitle>Courses and training</Subtitle>
            <InfoName>{info.Courses_Name}</InfoName>
            <div>{info.Courses_Place}</div>
            <InfoDate>{info.Courses_Date}</InfoDate>
          </InfoItem>
          <InfoItem>
            <Subtitle>education</Subtitle>
            <InfoName>{info.Education_Name1}</InfoName>
            <div>{info.Education_Place1}</div>
            <InfoDate>{info.Education_Date1}</InfoDate>
            <InfoName>{info.Education_Name2}</InfoName>
            <div>{info.Education_Place2}</div>
            <InfoDate>{info.Education_Date2}</InfoDate>
          </InfoItem>
        </MainInfo>
        <ExtraInfo>
          <ExtraInfoItem>
            <ExtraInfoItemSubtitle>Tools & Technologies</ExtraInfoItemSubtitle>
            {info.Tools}
          </ExtraInfoItem>
          <ExtraInfoItem>
            <ExtraInfoItemSubtitle>Languages</ExtraInfoItemSubtitle>
            {info.Languages}
          </ExtraInfoItem>
          <ExtraInfoItem>
            <ExtraInfoItemSubtitle>Extra Skills</ExtraInfoItemSubtitle>
            {info.Extra_skills}
          </ExtraInfoItem>
        </ExtraInfo>
      </Info>
    </Page>
  );
};

export default IndexPage;
