import styled, { css } from "styled-components";
import media from "styled-media-query";

interface WrapperProps {
  variant: "default" | "search";
  error: boolean;
}

const wrapperModifiers = {
  default: css`
    border: 1px solid #b4b4bb ${media.lessThan("medium")`
        width: 7rem;
    `};
  `,

  search: css`
    background: #ededf0;
    svg {
      display: flex;
    }
  `,
};

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radii.default};
  font-size: 0.875rem;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.textWhite};
  margin: 0.1rem 0;

  > svg {
    display: none;
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.error};
    `}

  input {
    width: 100%;
    border: none;
    font-size: 1rem;
    flex: 1;
    background: ${({ theme }) => theme.colors.backgroundSecondary};

    color: ${({ theme }) => theme.colors.textWhite};
    font-size: ${({ theme }) => theme.fontSizes.default};
    color-scheme: ${({ theme }) => theme.colors.textWhite};

    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
      size: 1.5rem;
      color: ${({ theme }) => theme.colors.textWhite};
    }
  }

  ${({ variant }) => css`
    ${!!variant && wrapperModifiers[variant]}
  `}
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textWhite};

  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const Error = styled.span`
  margin-bottom: 1rem;
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.fontSizes.default};
  `}
`;
