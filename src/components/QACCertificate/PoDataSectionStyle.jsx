import styled from "styled-components";

export const SectionBorder = styled.div`
  border-bottom: 2px solid #000;
`;

export const SectionHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SectionTitle = styled.h2`
  font-weight: bold;
  margin: 0;
  font-size: 13px;
  color: #000;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  white-space: nowrap;

  @media (min-width: 768px) {
    padding: 6px 12px;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  width: 100%;
`;

export const MainDataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 1200px;
`;

export const HeaderRow1 = styled.tr`
  th {
    background-color: #f3f4f6;
    border: 1px solid #000;
    padding: 6px 4px;
    font-size: 10px;
    font-weight: 600;
    color: #000;
    text-align: center;
    white-space: nowrap;
  }
  .header-group {
    background-color: #e5e7eb;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    th {
      padding: 8px 4px;
      font-size: 11px;
    }
  }
`;

export const HeaderRow2 = styled.tr`
  th {
    background-color: #f9fafb;
    border: 1px solid #000;
    padding: 6px 4px;
    font-size: 10px;
    font-weight: 600;
    color: #000;
    text-align: center;
    white-space: nowrap;
  }
  .sub-header {
    background-color: #f9fafb;
  }

  @media (min-width: 768px) {
    th {
      padding: 8px 4px;
      font-size: 11px;
    }
  }
`;

export const HeaderCell = styled.th`
  background-color: #f3f4f6;
  border: 1px solid #000;
  padding: 6px 4px;
  font-size: 10px;
  font-weight: 600;
  color: #000;
  text-align: center;
  white-space: nowrap;

  &.header-group {
    background-color: #e5e7eb;
    font-weight: 700;
  }
  &.sub-header {
    background-color: #f9fafb;
  }
  &.wide-cell {
    min-width: 200px;
  }
  &.action-cell {
    min-width: 50px;
  }

  @media (min-width: 768px) {
    padding: 8px 4px;
    font-size: 11px;
  }
`;


export const DataRow = styled.tr``;

export const DataCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  min-height: 44px;
  font-size: 12px;
  color: #000;
  vertical-align: middle;
  white-space: nowrap;

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
  &.wide-cell {
    min-width: 200px;
    white-space: normal;
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
