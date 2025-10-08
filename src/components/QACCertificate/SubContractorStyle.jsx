import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  position: relative;
  isolation: isolate;

  @media (min-width: 768px) {
    overflow-x: visible;
  }
`;

export const CustomGridTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  min-width: 800px;
`;

export const GridHeaderCell = styled.th`
  border: 1px solid #000;
  padding: 8px 4px;
  background-color: #f3f4f6;
  font-weight: 600;
  text-align: left;
  vertical-align: middle;
  color: #000;
  white-space: nowrap;
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 11px;
  }
`;

export const GridDataCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  min-height: 44px;
  vertical-align: middle;
  color: #000;

  @media (min-width: 768px) {
    padding: 4px;
    min-height: 35px;
  }
`;

export const CellInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 8px;
  font-size: 14px;
  color: #000;
  background: transparent;
  box-sizing: border-box;
  min-height: 44px;

  &.cell-right {
    text-align: right;
  }
  &.cell-center {
    text-align: center;
  }
  &:focus {
    outline: 2px solid #2563eb;
    outline-offset: -2px;
    background-color: #eff6ff;
  }

  @media (min-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;
    min-height: auto;
  }
`;

export const DataCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  min-height: 44px;
  font-size: 12px;
  color: #000;
  vertical-align: middle;

  &.cell-center {
    text-align: center;
  }
  &.cell-right {
    text-align: right;
  }
  &.cell-gray {
    background-color: #f9fafb !important;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    padding: 6px 8px;
    min-height: 35px;
  }
`;

export const ActionCell = styled(DataCell)`
  min-width: 50px;
  text-align: center;
  padding: 8px 4px;

  @media (min-width: 768px) {
    min-width: 60px;
    padding: 4px;
  }
`;