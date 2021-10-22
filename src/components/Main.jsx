import styled from "styled-components";
import { Navbar, Btn, BtnSec } from "./Navbar";
import BackGImg from "../images/bg-pattern-intro.svg";

const Main = () => {
  return (
    <Home>
      <Navbar />
      <Content>
        <Head>A modern publishing platform</Head>
        <Para>Grow your audience and build your online brand</Para>
        <Ul>
          <Btn>Start fro Free</Btn>
          <BtnSec>Learn More</BtnSec>
        </Ul>
      </Content>
    </Home>
  );
};

export default Main;

const Home = styled.div`
  position: relative;
  color: #fff;
  background: linear-gradient(45deg, var(--very-light-red), var(--light-red));
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  border-radius: 0 0 0 15rem;
  z-index: 1;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    top: 0vw;
    right: -20vw;
    left: 0;
    bottom: 0;
    background: url(${BackGImg}) no-repeat
      center;
    background-size: cover;
    z-index: -1;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  height: 40vh;
`;

const Head = styled.h1`
text-align:center;
`;

const Para = styled.p`
  margin-top: 1rem;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row nowrap;
  button {
    margin: 1rem;
  }
`;
