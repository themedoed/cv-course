import * as React from "react";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Link } from "gatsby";

const NavBtn = (props) => {

    const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 30px;
    padding: 15px 35px;
    background-color: #b3b3b3;
    border-radius: 15px;
    border: 2px solid black;
    transition: all 0.5s;

    &:hover {
      background-color: #e6e6e6;
    }
  `;

  return (
    <div>
      <NavLink to={props.page}>{props.text}</NavLink>
    </div>
  );
};

export default NavBtn;
