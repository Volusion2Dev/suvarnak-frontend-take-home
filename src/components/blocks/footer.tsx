import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  align-items: center;
  background: #102a43;
  border-bottom: 2px solid #102a43;
  color: #f0f4f8;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Footer: React.SFC = () => {
  return (
    <Container data-testid="footer">┬ęCopyright 2020, Curbside Store</Container>
  );
};

export default Footer;
