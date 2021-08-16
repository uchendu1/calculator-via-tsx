import React from "react";
import styled from "styled-components";
import { Button, ButtonType } from "./Button";

const Container = styled.div`
  flex: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: 90px repeat(5, 80px);
`;

const Display = styled.div`
  border-radius: 8px;
  background: #fff;
  font-size: 40px;
  grid-column-end: span 4;
  display: flex;
  justify-content: flex-end;
  padding: 12px 14px;
`;

export const Calculator: React.FC = () => {
  return (
    <Container>
      <Grid>
        <Display>45 </Display>
        <Button label="AC" position={[0, 1]} width={2} />
        <Button label="Oooop!" position={[2, 1]} width={3} />
        <Button label="-" position={[3, 2]} />
        <Button label="+" position={[3, 3]} />
        <Button label="=" position={[3, 4]} height={2} />

        <Button type={ButtonType.Number} label="9" position={[2, 2]} />
        <Button type={ButtonType.Number} label="8" position={[1, 2]} />
        <Button type={ButtonType.Number} label="7" position={[0, 2]} />
        <Button type={ButtonType.Number} label="6" position={[2, 3]} />
        <Button type={ButtonType.Number} label="5" position={[1, 3]} />
        <Button type={ButtonType.Number} label="4" position={[0, 3]} />
        <Button type={ButtonType.Number} label="3" position={[2, 4]} />
        <Button type={ButtonType.Number} label="2" position={[1, 4]} />
        <Button type={ButtonType.Number} label="2" position={[0, 4]} />

        <Button label="0" position={[0, 5]} width={3} />
      </Grid>
    </Container>
  );
};
