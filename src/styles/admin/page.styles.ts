import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;

  flex-direction: column;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: auto;

  margin-bottom: 1rem;

  thead tr th {
    text-align: left;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.borderGray};
  }

  tr th {
    text-transform: uppercase;
    font: 1rem 500 Visby, sans-serif;
  }

  th,
  td {
    padding: 14px 14px;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.borderGray};
  }

  tbody tr {
    border-bottom: 1px solid ${(props) => props.theme.colors.borderGray};
  }

  thead tr {
    border-bottom: 1px solid ${(props) => props.theme.colors.borderGray};
  }

  thead tr th:nth-child(4) {
    text-align: center;

    min-width: 100px;
  }

  tbody tr td:nth-child(4) {
    display: flex;

    justify-content: center;
    align-items: center;
  }
`;

export const ContainerTable = styled.div`
  display: flex;

  width: 100%;
  overflow: auto;
`;

export const Pagination = styled.div`
  display: flex;
  width: 100%;

  justify-content: flex-end;

  margin: 32px 0;

  > div + div {
    margin-left: 16px;
    background: red;
  }
`;

export const Actions = styled.div`
  svg:last-child {
    margin-left: 1rem;
  }

  svg {
    cursor: pointer;
  }
`;

export const ButtonContent = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;
