import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimatedLeftNav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 1rem;

  img {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 0;
    margin-bottom: 0;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 1rem 1rem 1.6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 0 1.6rem;
    flex-direction: row;
    height: 7rem;
  }
`;

export const AnimatedRightNav = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  gap: 1rem;
`;

export const AnimatedContainer = styled(motion.header)``;

export const ImageLogo = styled(motion.img)``;
