import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;
