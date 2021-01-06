import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { myBlocs } from "../../assets/timeline";
import {
  Main,
  TimelineContainer,
  Line,
  BlocContainer,
  BlocItems,
  Title,
  Paragraph,
  LastContainer,
  LastSentence,
} from "../../styled-components/Timeline";

const Timeline = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Main>
      <TimelineContainer>
        <Line></Line>
        <BlocContainer>
          {myBlocs.map(bloc => (
            <BlocItems data-aos="zoom-out-down" key={bloc.id} id={bloc.id}>
              <Title id={bloc.id}>{bloc.title}</Title>
              <Paragraph>{bloc.text}</Paragraph>
            </BlocItems>
          ))}
        </BlocContainer>
      </TimelineContainer>
      <LastContainer>
        <LastSentence data-aos="zoom-out-down">
          Nous leur offrons bien plus !
        </LastSentence>
      </LastContainer>
    </Main>
  );
};

export default Timeline;
