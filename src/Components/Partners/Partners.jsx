import { Title, Blocs, Logo } from "../../styled-components/Partners";

import "../../App.css";

const Partners = () => {
  return (
    <>
      <Title>Nos partenaires </Title>
      <Blocs id="partners">
        {myPartners.map(partner => {
          return (
            <Logo
              key={partner.id}
              src={partner.url}
              alt={partner.name}
              id={partner.id}
            />
          );
        })}
      </Blocs>
    </>
  );
};
export default Partners;
