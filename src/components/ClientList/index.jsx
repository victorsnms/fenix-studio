import LogoList from "../LogoList";
import Logo1 from "../../images/clientLogos/AMC+_Logo.png";
import Logo2 from "../../images/clientLogos/Disney+_logo.png";
import Logo3 from "../../images/clientLogos/globofilmes_Logo.png";
import Logo4 from "../../images/clientLogos/HBOmax_Logo.png";
import Logo5 from "../../images/clientLogos/Hulu_Logo.png";
import Logo6 from "../../images/clientLogos/Netflix_logo.png";
import Logo7 from "../../images/clientLogos/Paramount+_Logo.png";
import Logo8 from "../../images/clientLogos/Paris_logo.png";
import Logo9 from "../../images/clientLogos/Primevideo_Logo.png";
import Logo10 from "../../images/clientLogos/Sony_logo.png";
import Logo11 from "../../images/clientLogos/Starz_logo.png";
import Logo12 from "../../images/clientLogos/Telecine_Logo.png";
import { TrustedContainer } from "./ClientListElements";
import { useContext } from "react";
import { CommonContext } from "../../providers/CommonContext";

const imgPathArray = [
  { path: Logo1, alt: "AMC+" },
  { path: Logo2, alt: "Disney+" },
  { path: Logo3, alt: "Globo Filmes" },
  { path: Logo4, alt: "HBO Max" },
  { path: Logo5, alt: "Hulu" },
  { path: Logo6, alt: "Netflix" },
  { path: Logo7, alt: "Paramount" },
  { path: Logo8, alt: "Paris" },
  { path: Logo9, alt: "Prime Video" },
  { path: Logo10, alt: "Sony" },
  { path: Logo11, alt: "Starz" },
  { path: Logo12, alt: "Telecine" },
];

const ClientList = ({ noTrusted = false, noBackground = false }) => {
  const { t } = useContext(CommonContext);

  return (
    <>
      <LogoList imgPathArray={imgPathArray} noBackground={noBackground}>
        {!noTrusted && <TrustedContainer>{t("clients.trustedMessage")}</TrustedContainer>}
      </LogoList>
    </>
  );
};
export default ClientList;
