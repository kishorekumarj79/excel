import styled from "styled-components";


  export const SectionBorder = styled.div`
    border-bottom: 2px solid #000;
  `;

  export const SectionHeader = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  export const SectionTitle = styled.h2`
    font-weight: bold;
    margin: 0;
    font-size: 14px;
    color: #000;
  `;

  export const AddBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
  `;


    export const MainDataTable = styled.table`
    width: 100%;
    border-collapse: collapse;
  `;

  export const HeaderRow1 = styled.tr`
    th {
      background-color: #f3f4f6;
      border: 1px solid #000;
      padding: 8px 4px;
      font-size: 11px;
      font-weight: 600;
      color: #000;
      text-align: center;
    }
    .header-group {
      background-color: #e5e7eb;
      font-weight: 700;
    }
  `;

  export const HeaderRow2 = styled.tr`
    th {
      background-color: #f9fafb;
      border: 1px solid #000;
      padding: 8px 4px;
      font-size: 11px;
      font-weight: 600;
      color: #000;
      text-align: center;
    }
    .sub-header {
      background-color: #f9fafb;
    }
  `;

  export const HeaderCell = styled.th`
    background-color: #f3f4f6;
    border: 1px solid #000;
    padding: 8px 4px;
    font-size: 11px;
    font-weight: 600;
    color: #000;
    text-align: center;
    &.header-group {
      background-color: #e5e7eb;
      font-weight: 700;
    }
    &.sub-header {
      background-color: #f9fafb;
    }
  `;


    export const DataRow = styled.tr``;

  export const DataCell = styled.td`
    border: 1px solid #ddd;
    padding: 6px 8px;
    height: 35px;
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
  `;

  export const ActionCell = styled(DataCell)`
    width: 60px;
    text-align: center;
    padding: 4px;
  `;

    export const CellInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    padding: 4px 8px;
    font-size: 12px;
    color: #000;
    background: transparent;
    box-sizing: border-box;
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
  `;
