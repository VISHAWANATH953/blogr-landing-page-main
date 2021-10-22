import styled from "styled-components";
import ImgF from "../images/illustration-phones.svg";
import BgImg from "../images/bg-pattern-circles.svg";

const Mobile = () => {
  return (
    <Mobiles>
      <SecImg>
        <Img src={ImgF} alt="mobile" />
      </SecImg>
      <SecPara>
        <Head>State of the Art Infrastructure</Head>
        <P>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </P>
      </SecPara>
    </Mobiles>
  );
};

export default Mobile;

const Mobiles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  background: var(--very-dark-desaturated-blue) url(${BgImg}) no-repeat;
  background-size: 50%;
  background-position: -40% 102%;
  background-blend-mode: screen;
  width: 100%;
  color: #fff;
  border-radius: 0 8rem;
  @media (max-width: 40em) {
    flex-flow: column nowrap;
  }
`;

const SecImg = styled.div`
  justify-content: center;
  display: grid;
  width: auto;
  height: 110%;
  transform: scale(1.4);
  @media (max-width: 40em) {
    transform: scale(3);
  }
`;

const SecPara = styled.div`
  width: 50vw;
  height: 110%;
  @media (max-width: 40em) {
    text-align: center;
    width: 70%;
    margin-block: 10rem;
  }
`;

const Img = styled.img`
  width: 18.5vw;
  height: 100%;
`;

const Head = styled.h1``;

const P = styled.p`
  margin-right: 18rem;
  margin-top: 2rem;
  vertical-align: middle;
  @media (max-width: 40em) {
    margin-block: 2rem;
    margin-right: 0;
  }
`;
