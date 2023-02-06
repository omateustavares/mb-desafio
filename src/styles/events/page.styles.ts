import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const Content = styled(motion.div)`
  max-width: 110rem;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
