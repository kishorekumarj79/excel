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