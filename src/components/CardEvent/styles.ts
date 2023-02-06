import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.main)``;

export const Card = styled(motion.div)`
  border-radius: ${({ theme }) => theme.radii.default};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem;
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    max-width: 25rem;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textWhite};

  margin: 1rem 0 1rem;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.textWhite};
    font-weight: 400;
  }
`;

export const DateAndTime = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.textWhite};
  font-weight: 500;
  margin: 1rem 0 1rem;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;

  svg {
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }

  span {
    margin: 0;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;
