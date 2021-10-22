import styled from "styled-components";
import { Detail, Section, DetailSection, Para, Img, PHead } from "./Details";
import Lapi from "../images/illustration-laptop-mobile.svg";

const DetailsSec = () => {
  return (
    <SecDetails>
      <SecImg src={Lapi} alt="desk" />
      <Section>
        <DetailSection>
          <PHead> Free, open, simple</PHead>
          <Para>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </Para>
        </DetailSection>
        <DetailSection>
          <PHead>Powerful tooling</PHead>
          <Para>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </Para>
        </DetailSection>
      </Section>
    </SecDetails>
  );
};

export default DetailsSec;

const SecDetails = styled(Detail)`
  padding-block:5vmax;
  flex-flow: row nowrap;
  @media (max-width:40em){
   flex-flow:column nowrap; 
  }
`;

const SecImg = styled(Img)`
  right: inherit;
  left: -20rem;
  height:30vmax;
  @media (max-width:40em){
   left:inherit; 
   margin-bottom: 2rem;
  }
`;
