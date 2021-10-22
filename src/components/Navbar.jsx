import styled from "styled-components";
import LogoImg from "../images/logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <Logo src={LogoImg} />
      <Ul>
        <Li>Product</Li>
        <Li>Company</Li>
        <Li>Connect</Li>
      </Ul>
      <BtnUl>
        <BtnLi>
          <Btn>Login</Btn>
        </BtnLi>
        <BtnLi>
          <Btn>Sign Up</Btn>
        </BtnLi>
      </BtnUl>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
  margin: 2rem;
`;

const Logo = styled.img`
  padding: 0 5vmax;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row nowrap;
  list-style-type: none;
  @media (max-width:40em){
   display:none; 
  }
`;

const Li = styled.li`
  margin: 0 1rem;
`;

const BtnUl = styled(Ul)`
  position: absolute;
  right: 0;
  padding: 0 5vmax;
  @media (max-width:40em){
   display:none; 
  }
`;

const BtnLi = styled(Li)``;

const Btn = styled.button`
  background: transparent;
  color: #fff;
  padding: 1vmax 1.5vmax;
  border-radius: 1.5rem;
  border: 0.1rem solid #fff;
  outline: none;
`;

const BtnSec = styled(Btn)``;

export { Navbar, Btn, BtnSec };
