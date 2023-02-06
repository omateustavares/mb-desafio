import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Hero = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.2rem;

  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.radii.default};

  img {
    max-width: 30rem;
    margin-bottom: 1rem;
  }
`;

export const Heading = styled.h2`
  margin: 1rem 0 1rem;
  color: ${({ theme }) => theme.colors.textWhite};
  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const Text = styled.h3`
  margin: 1rem 0 2rem;
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: ${({ theme }) => theme.fontSizes.default};
`;
