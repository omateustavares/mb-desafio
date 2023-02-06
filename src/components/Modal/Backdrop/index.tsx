import { ReactNode, useEffect } from "react";

import { motion } from "framer-motion";
import { stateLogger } from "../state-logger";
import { Container } from "./styles";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

const Backdrop = ({ children, onClick }: Props) => {
  useEffect(() => {
    stateLogger("Backdrop", true);
    return () => stateLogger("Backdrop", false);
  }, []);

  return (
    <Container
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Container>
  );
};

export default Backdrop;
