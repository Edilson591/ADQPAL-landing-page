import styled from "styled-components";

export const ContainerTables = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  text-align: left;
  font-weight: 600;
  max-width: 400px;
  margin: 0 auto;

  caption {
    caption-side: top;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1rem;
  }
  tbody {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #e2e2e2;
  }
`;

export const StyledTableHeaderCell = styled.th`
  padding: 12px 15px;
  color: white;
  font-size: 18px;
`;

export const StyledTableCell = styled.td`
  padding: 12px 15px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 6px 8px;
  }
`;
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    padding: 6px 8px;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({theme}) => theme.colors.primary};
  }
  

  @media (max-width: 768px) {
    width: 100%;
    padding: 6px 8px;
    margin-bottom: 10px;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 12px 15px;
  color: white;
  font-size: 18px;

  @media (max-width: 768px) {
    padding: 6px 8px;
    width: 100%;
  }
`;

export const TableCell = styled.td`
  padding: 12px 15px;
  font-size: 16px;
  color: rgba(0,0,0,0.6);

  @media (max-width: 768px) {
    padding: 6px 8px;
    width: 100%;
  }
`;
