import styled from "styled-components";
import DeskImg from "../images/illustration-editor-desktop.svg";

const Details = () => {
  return (
    <>
      <Head>Designed for the future</Head>
      <Detail>
        <Img src={DeskImg} alt="desk" />
        <Section>
          <DetailSection>
            <PHead>Introducing an extensible editor</PHead>
            <Para>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </Para>
          </DetailSection>
          <DetailSection>
            <PHead>Robust content management</PHead>
            <Para>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </Para>
          </DetailSection>
        </Section>
      </Detail>
    </>
  );
};


const Detail = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row-reverse nowrap;
  overflow: hidden;
  h1 {
    color: var(--very-dark-blueheadings);
  }
  p {
    color: var(--very-dark-grayish-bluebodycopy);
  }
  @media (max-width:40em){
   flex-flow: column nowrap;
   text-align:center;
   margin-top:2rem;
   margin-bottom: 12.5rem;
  }
`;

const Img = styled.img`
  position: relative;
  justify-self: flex-end;
  width: 50vw;
  height: 80vh;
  right: -20rem;
  @media (max-width:40em){
   right :inherit ;
   width:70%;
   height:40vh;
  }
`;

const Head = styled.h1`
  text-align: center;
  margin-top: 5rem;
  color: var(--very-dark-blueheadings);
`;

const Section = styled.div`
  min-width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
`;

const DetailSection = styled.div`
  width: 40vw;
  @media (max-width:40em){
   width:70%; 
  }
`;

const PHead = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
`;

const Para = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  padding-right: 8vmax;
  margin: 2rem 0;
  line-height: 2.5rem;
  @media (max-width:40em){
   padding:0; 
  }
`;


export{ Details,Img,Detail,Section,DetailSection,PHead,Para};