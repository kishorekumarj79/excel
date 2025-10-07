import styled from "styled-components";

  export const CustomGridTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
  `;

   export const GridHeaderCell = styled.th`
    border: 1px solid #000;
    padding: 8px 4px;
    background-color: #f3f4f6;
    font-weight: 600;
    text-align: left;
    vertical-align: middle;
    color: #000;
  `;

  export const GridDataCell = styled.td`
    border: 1px solid #ddd;
    padding: 4px;
    height: 35px;
    vertical-align: middle;
    color: #000;
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