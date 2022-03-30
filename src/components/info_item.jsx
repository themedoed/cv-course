import * as React from "react";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const InfoItem = (props) => {

  const InfoName = styled.div`
    font-weight: 700;
  `;

  const InfoDate = styled.div`
    color: #73808d;
    font-size: 20px;
  `;

  return (
    <div>
      <InfoName>{props.name}</InfoName>
      {props.place}
      <InfoDate>{props.date}</InfoDate>
      {props.add}
    </div>
  );
};

export default InfoItem;
