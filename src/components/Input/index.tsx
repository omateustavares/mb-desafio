import {
  ElementRef,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";
import { Container, Error, Label, Wrapper } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  variant?: "default" | "search";
  error?: FieldError;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    defaultValue,
    label,
    variant = "default",
    error,
    ...rest
  }: InputProps,
  ref
) => {
  return (
    <>
      <Container>
        <Label>{label}</Label>
        <Wrapper variant={variant} error={!!error}>
          <input ref={ref} name={name} defaultValue={defaultValue} {...rest} />
        </Wrapper>
        {error && <Error>{error.message}</Error>}
      </Container>
    </>
  );
};

export const NewInput = forwardRef(Input);
