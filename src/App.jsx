import { useState } from 'react'
import styled from 'styled-components';

//J'ai utilisé cette solution car elle est la plus utilisée aujourd'hui elle permet de facilement récupérer les éléments.

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
  color: red;
  border: 5px solid white;
  border-radius: 60px;
  background-color: #D0D0D0;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

const Title = styled.h1`
color:#202D3B;
font-size: 40px;
text-shadow: 1px 0.5px;
`;

const Ul = styled.ul`
color: #202D3B;
font-size: 20px;
text-shadow: 1px 0.2px;
display: flex;
`;

const Li = styled.li`
color: #202D3B;
font-size: 20px;
margin-right: 10px;
list-style: none;
`;

function App() {


  return (
    <>
      <Container>
        <Ul>
          <Li>Présentation</Li>
          <Li>Nos offres</Li>
          <Li>Contact</Li>
        </Ul>
        <img src="https://www.stickees.com/files/lifestyle/gadgets/4413-dell-display-front-sticker.png" alt="Pc" />
        <Title>Le grand magazin Hardware</Title>
      </Container>

    </>
  )
}

export default App
