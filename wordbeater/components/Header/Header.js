import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Link>WordBeater</Link>
      </NavWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  color: #f8f9fa;
  background-color: #343a40;
  height: 50px;
`;

const NavWrapper = styled.nav``;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default Header;
