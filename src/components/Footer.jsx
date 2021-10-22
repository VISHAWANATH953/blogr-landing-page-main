import styled from "styled-components";
import logo from "../images/logo.svg";

const Footer = () => {
  return <Foot>
       <Logo src={logo}/> 
       <Sec>
           <Op>Product</Op>
           <Op>Overviw</Op>
           <Op>Pricing</Op>
           <Op>Marketplace</Op>
           <Op>Features</Op>
           <Op>Integrations</Op> 
       </Sec>
       <Sec>
           <Op>Company</Op>
           <Op>About</Op>
           <Op>Team</Op>
           <Op>Blog</Op>
           <Op>Careers</Op>
       </Sec>
       <Sec>
           <Op>Connect</Op>
           <Op>Contact</Op>
           <Op>Newsletter</Op>
           <Op>LinkedIn</Op>
       </Sec>
  </Foot>;
};

export default Footer;

const Foot = styled.footer`
  width: 100%;
  padding: 5vmax;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow:row wrap;
  background: var(--very-dark-black-bluefooterback);
  color:var(--grayish-bluefootertext);
  @media (max-width:40em){
    text-align:center;
    align-items: center;
    align-content:center;
    flex-flow:column wrap;
  }
`;

const Logo = styled.img``;

const Sec = styled.ul`
  list-style-type: none;
  line-height: 2.75rem;
  font-weight:600;
  margin-block:2rem;
`;

const Op = styled.li``;
