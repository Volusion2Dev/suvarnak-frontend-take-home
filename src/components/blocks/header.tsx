import React from "react";
import styled from "styled-components";
import { Icon } from "@blueprintjs/core";

const Container = styled.header`
  align-items: center;
  border-bottom: 2px solid #102a43;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Name = styled.input`
  background: none;
  border: none;
  box-shadow: none;
  color: #d64545;
  font-size: 30px;
  font-weight: bold;
`;

const Header: React.SFC = () => {
  return (
    <Container data-testid="header">
      <Name placeholder="Store Name" defaultValue="Curbside Store" />
      <Icon icon="shopping-cart" intent="success" iconSize={28} />
    </Container>
  );
};

export default Header;
