import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
      <HeaderWrapper>
        <nav className="navbar-header">
          <a href="" className="navbar-brand text-light">
            WordBeater
          </a>
        </nav>
      </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  color: #f8f9fa;
  background-color: #343a40;
  height: 150px;
  padding: 20px;
`;

export default Header;
