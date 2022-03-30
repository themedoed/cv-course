import * as React from "react";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const ExtraInfoItem = (props) => {
  
  const ExtraInfoItemSubtitle = styled.div`
    font-weight: 600;
    margin-top: 36px;
  `;

  return (
    <div>
      <ExtraInfoItemSubtitle>{props.name}</ExtraInfoItemSubtitle>
      {props.tools}
    </div>
  );
};

export default ExtraInfoItem;
