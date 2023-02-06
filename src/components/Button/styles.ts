import styled, { css } from "styled-components";

import { ButtonProps } from ".";

const variants = {
  secondary: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.textPink};

    :hover {
      background: ${({ theme }) => theme.colors.textPink};
      color: ${({ theme }) => theme.colors.textWhite};
    }
  `,

  danger: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.error};

    :hover {
      background: ${({ theme }) => theme.colors.error};
      color: ${({ theme }) => theme.colors.textPink};
    }
  `,

  adding: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.textPink};
    color: ${({ theme }) => theme.colors.textPink};

    :hover {
      border: 0.1rem solid ${({ theme }) => theme.colors.textWhite};
      background: ${({ theme }) => theme.colors.textWhite};
      color: ${({ theme }) => theme.colors.textPink};
    }
  `,
};

export const Container = styled.button<ButtonProps>`
  ${({ theme, variant, color, background }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${background || theme.colors.background};
    border: 0;
    padding: 0.8rem 2.4rem;
    border-radius: ${theme.radii.small};
    color: ${color || theme.colors.textPink};
    transition: ${theme.transition.default};
    font-size: ${theme.fontSizes.default};

    * {
      transition: ${theme.transition.default};
    }

    ${variant && variants[variant]};

    :disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`;
