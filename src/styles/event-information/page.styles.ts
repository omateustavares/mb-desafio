'use client';

import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: ${({ theme }) => theme.fontSizes.large};
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 100vh;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const Content = styled.div`
  @media (min-width: 768px) {
    max-width: 110rem;
    display: flex;

    > div {
      max-width: 90rem;
      margin-right: 2rem;
    }
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPink};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 500;
  align-items: center;
  display: flex;

  svg {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    margin-right: 0.8rem;
    margin-bottom: 0.2rem;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.default};
  }
`;

export const DateAndTime = styled.div`
  margin: 1rem 0 2rem;
`;

export const LocalContent = styled.div`
  margin: 1rem 0 2rem;
`;

export const Local = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;
`;

export const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;
`;

export const Time = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;
`;

export const Informations = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const DescriptionContent = styled.div`
  margin: 1rem 0 2rem;
`;

export const Resume = styled.p`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 1.5rem;
  margin: 1rem 0;
`;

export const CardPayment = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5rem;

  background: ${({ theme }) => theme.colors.backgroundSecondary};
  flex-direction: column;

  > button {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    display: flex;
    height: 100vh auto;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radii.default};
    width: 100%;

    > button {
      width: 60%;
      margin-bottom: 1rem;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0 1rem;
  gap: 2rem;

  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
