import styled from "styled-components";
import { Colors, Devices } from "./Theme";

const FooterEl = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${Colors.White};
  padding: 1rem 2rem;
`;

const Socials = styled.div`
  display: flex;
  font-size: 1.5rem;
  gap: 1.5rem;
`;
const CopyRight = styled.small`
  font-size: 0.9rem;
`;
const Links = styled.div`
  color: lightgray;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media ${Devices.Tablet} {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterEl>
      <CopyRight>
        Copyright &copy; 2023 CryptoNft All rights reserved.
      </CopyRight>
      <Links>
        <a href="#">Help Center</a>
        <a href="#">Terms&Condition</a>
        <a href="#">Privacy&Policy</a>
      </Links>
    </FooterEl>
  );
}
