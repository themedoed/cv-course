import * as React from "react";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import WebFont from "webfontloader";

const pageStyles = {
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "25px",
  lineHeight: "35px",
  maxWidth: "1336px",
  padding: "0 20px",
  margin: "0 auto",
  boxSizing: "border-box",
};

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "50px",
};

const nameStyles = {
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "40px",
  marginTop: "40px",
};

const roleStyles = {
  fontSize: "35px",
  lineHeight: "37px",
  paddingTop: "10px",
};

const informStyles = {
  marginTop: "30px",
  display: "flex",
  justifyContent: "space-between",
};

const maininfromStyles = {
  maxWidth: "800px"
}

const itemStyles = {
  marginBottom: "30px",
};

const subtitleStyles = {
  fontSize: "18px",
  margintop: "20px",
  letterSpacing: "5px",
  color: "#73808D",
  textTransform: "uppercase",
};

const baldinfoStyles = {
  fontWeight: "700",
};

const dateStyles = {
  color: "#73808D",
  fontSize: "20px",
};

const extrainfromStyles = {
  marginTop: "35px",
  marginLeft: "10px",
  color: "#73808D",
  maxWidth: "300px"
};

const extraitemStyles = {
  marginBottom: "30px"
}

const extrasubtStyles = {
  fontWeight: 600
}

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

  return (
    <main style={pageStyles}>
      <div style={headerStyles}>
        <div>
          <div style={nameStyles}>{info.Name}</div>
          <div style={roleStyles}>{info.Role}</div>
        </div>
        <img src={info.Photo.localFile.url} alt="photo" />
      </div>
      <div style={informStyles}>
        <div style={maininfromStyles}>
          <div style={itemStyles}>
            <div style={subtitleStyles}>Experience</div>
            <div style={baldinfoStyles}>{info.Exp_Role}</div>
            <div>{info.Exp_Place}</div>
            <div style={dateStyles}>{info.Exp_Date}</div>
            <div>
              {info.Exp_Portf}
            </div>
          </div>
          <div style={itemStyles}>
            <div style={subtitleStyles}>Courses and training</div>
            <div style={baldinfoStyles}>{info.Courses_Name}</div>
            <div>{info.Courses_Place}</div>
            <div style={dateStyles}>{info.Courses_Date}</div>
          </div>
          <div style={itemStyles}>
            <div style={subtitleStyles}>education</div>
            <div style={baldinfoStyles}>{info.Education_Name1}</div>
            <div>{info.Education_Place1}</div>
            <div style={dateStyles}>{info.Education_Date1}</div>
            <div style={baldinfoStyles}>{info.Education_Name2}</div>
            <div>{info.Education_Place2}</div>
            <div style={dateStyles}>{info.Education_Date2}</div>
          </div>
        </div>
        <div style={extrainfromStyles}>
          <div style={extraitemStyles}>
          <div style={extrasubtStyles}>Tools & Technologies</div>
          {info.Tools}
          </div>
          <div style={extraitemStyles}>
          <div style={extrasubtStyles}>Languages</div>
          {info.Languages}
          </div>
          <div style={extraitemStyles}>
          <div style={extrasubtStyles}>Extra Skills</div>
          {info.Extra_skills}
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
