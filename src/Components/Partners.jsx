import React from "react";
import { myPartners } from "../assets/partners";

import {
  Bloc1,
  Logo15,
  Main,
  Title,
  CategoryTitle,
} from "../styled-components/Partners";

const Partners = () => {
  console.log(myPartners.filter((part) => part.name === "MainLogo"));
  return (
    <Main>
      <Title>Nos partenaires et nos clients</Title>
      {myPartners
        .filter((part) => part.name === "MainLogo")
        .map((partner) => {
          return (
            <Bloc1>
              {partner.logos.map((logo) => {
                return <Logo15 src={logo.src} alt={logo.alt} />;
              })}
            </Bloc1>
          );
        })}
      {myPartners
        .filter((part) => part.name != "MainLogo")
        .map((partner) => {
          return (
            <Bloc1>
              {partner.name ? (
                <CategoryTitle>{partner.name}</CategoryTitle>
              ) : (
                ""
              )}

              {partner.logos.map((logo) => {
                return <Logo15 src={logo.src} alt={logo.alt} />;
              })}
            </Bloc1>
          );
        })}
    </Main>
  );
};

export default Partners;