import React from "react";
import styled from "styled-components";

export default function Gradients() {
  return (
    <Container>
      <Button></Button>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: inherit;
  height: 500%;
  background: linear-gradient(
    #000729 10%,
    rgb(255, 188, 188, 0.6),
    70%,
    #000729 90%
  );
`;

const Button = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: linear-gradient(#ffb9c5 10%, #ff9fc2 30%, #ffbfba 80%, #fffcac);
`;
