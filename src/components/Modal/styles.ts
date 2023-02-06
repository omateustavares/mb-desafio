import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

export const Container = styled(motion.div)`
  width: clamp(50%, 700px, 90%);
  height: min(50%, 300px);

  margin: auto;
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPink};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 500;
  align-items: center;
  display: flex;
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2.4rem;
    width: 100%;

    label {
      width: 100%;
      margin-bottom: 2rem;

      input {
        width: 100%;
        padding: 0.8rem 1.2rem;
        border: 0;
        border-radius: ${theme.radii.small};
        background: ${({ theme }) => theme.colors.background};
        color: ${theme.colors.textWhite};
      }
    }
  `}
`;
