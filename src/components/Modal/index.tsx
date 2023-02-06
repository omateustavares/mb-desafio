import { useEffect } from "react";
import { stateLogger } from "./state-logger";
import Backdrop from "./Backdrop";
import { Container, Form, Title } from "./styles";
import { DROP_IN } from "./animations";

type Props = {
  handleClose: () => void;
  text: string;
};

const Modal = ({ handleClose, text }: Props) => {
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  return (
    <Backdrop onClick={handleClose}>
      <Container
        onClick={(e) => e.stopPropagation()}
        variants={DROP_IN}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {text}
      </Container>
    </Backdrop>
  );
};

export default Modal;
