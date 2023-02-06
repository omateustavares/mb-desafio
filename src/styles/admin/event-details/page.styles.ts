import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  padding: 2rem;
`;

export const Content = styled.div`
  width: 100vw;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.radii.default};

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const Form = styled.form`
  button {
    margin-top: 2rem;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: grid;
    flex-direction: column;
    width: 100%;
    grid-template-columns: 30ch;
    grid-gap: 1.5rem;
  }
`;
