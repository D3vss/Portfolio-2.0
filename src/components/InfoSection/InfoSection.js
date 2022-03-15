import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";
import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImageWrapper,
  Img,
} from "./InfoSection.elements";
function InfoSection({
  lightBg,
  imgStart,
  topline,
  heading,
  subtitle,
  buttonLabel,
  primary,
  toplineLight,
  headingLight,
  subtitleLight,
  big,
  img,
  alt,
  start,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine toplineLight={toplineLight}>{topline}</TopLine>
                <Heading headingLight={headingLight}>{heading}</Heading>
                {/* <Subtitle subtitleLight={subtitleLight}>{subtitle}</Subtitle> */}
                <Link to="/get-in-touch">
                  <Button big={big} primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImageWrapper>
                <Img src={img} alt={alt} />
              </ImageWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
