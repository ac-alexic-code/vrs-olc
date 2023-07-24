import styled from "@emotion/styled";
import Button from "../button/Button";

const LanguagesContainer = styled.div`
  display: flex;
  & > :not(:last-child) {
    margin-right: 0.65em;
  }
`;

const LanguageButton = styled.button`
  ${({ theme }) => theme.mixins.defaultButton()};
`;

const LanguageButtons: React.FC = () => {
  return (
    <LanguagesContainer>
      <LanguageButton>pl</LanguageButton>
      <LanguageButton>en</LanguageButton>
    </LanguagesContainer>
  );
};

export default LanguageButtons;
