import styled from "@emotion/styled";

const LanguagesContainer = styled.div`
  display: flex;
  padding: 0;
  & > :not(:last-child) {
    margin-right: 0.65em;
  }
  ${({ theme }) =>
    theme.mixins.forDesktop(`
      border-bottom: ${theme.border.default};
      width: 100%;
      height: 64px;
      justify-content: center;

      & > :not(:last-child) {
        border-right: ${theme.border.default};
        margin: 0  
      }
    `)}
`;

const LanguageButton = styled.button`
  ${({ theme }) => theme.mixins.defaultButton()};

  ${({ theme }) =>
    theme.mixins.forDesktop(`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 15px;
      font-size: ${theme.fontSize.smaller};
`)}
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
