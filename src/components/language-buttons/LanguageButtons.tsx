import styled from "@emotion/styled";

const LanguagesContainer = styled.div`
  display: flex;
  padding: 0;
  & :not(:last-child) {
    margin-right: 10px;
  }
  ${({ theme }) =>
    theme.mixins.forDesktop(`
      border-bottom: ${theme.border.default};
      width: 100%;
      height: 40px;
      justify-content: center;
      

      & :not(:last-child) {
        border-right: ${theme.border.default};
        margin: 0  
      }
    `)}
`;

const LanguageButton = styled.button`
  ${({ theme }) => `
    ${theme.mixins.defaultButton()};

    ${theme.mixins.forDesktop(`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 15px;
      font-size: 0.75rem;
      ${theme.mixins.defaultHover()}
    `)}
  `}
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
