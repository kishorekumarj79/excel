import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { SectionBorder, SectionHeader, SectionTitle, AddBtn, TableWrapper, MainDataTable, HeaderRow1, HeaderRow2, HeaderCell, DataRow, DataCell, ActionCell, CellInput } from './PoDataSectionStyle';

export default function PODataSection({ editable, rows, onRowsChange, onAddRow, onDeleteRow }) {
  const handleInputChange = (rowId, key, value, overriddenKey = null) => {
    const newRows = rows.map(r => 
      r.id === rowId 
        ? overriddenKey 
          ? { ...r, [key]: value, overridden: { ...r.overridden, [overriddenKey]: true } }
          : { ...r, [key]: value }
        : r
    );
    onRowsChange(newRows);
  };

  const renderCellContent = (row, key, overriddenKey = null, className = '') => {
    if (!editable) {
      return <span className={className}>{row[key]}</span>;
    }
    return (
      <CellInput
        type={['poQty', 'poUnitRate', 'poTotalAmount', 'prevQty', 'prevAmount', 'thisMonthQty', 'thisMonthAmount', 'cumQty', 'cumAmount'].includes(key) ? 'number' : 'text'}
        step={['poQty', 'poUnitRate', 'poTotalAmount', 'prevQty', 'prevAmount', 'thisMonthQty', 'thisMonthAmount', 'cumQty', 'cumAmount'].includes(key) ? '0.01' : undefined}
        value={row[key]}
        onChange={(e) => handleInputChange(row.id, key, e.target.value, overriddenKey)}
        className={className}
      />
    );
  };

  return (
    <SectionBorder>
      <SectionHeader className="data-bg">
        <SectionTitle>PO DATA & CERTIFICATION</SectionTitle>
        {editable && (
          <AddBtn onClick={onAddRow} className="btn-blue">
            <Plus size={16} /> Add Row
          </AddBtn>
        )}
      </SectionHeader>

      <TableWrapper>
        <MainDataTable>
        <thead>
          <HeaderRow1>
            <HeaderCell rowSpan="2">SL NO</HeaderCell>
            <HeaderCell rowSpan="2">PO ITEM NO.</HeaderCell>
            <HeaderCell rowSpan="2" className="wide-cell">ACTIVITY DESCRIPTION</HeaderCell>
            <HeaderCell colSpan="4" className="header-group">PO Data</HeaderCell>
            <HeaderCell colSpan="2" className="header-group">PREVIOUS CUMULATIVE</HeaderCell>
            <HeaderCell colSpan="2" className="header-group">THIS MONTH</HeaderCell>
            <HeaderCell colSpan="2" className="header-group">CUMULATIVE</HeaderCell>
            <HeaderCell rowSpan="2">REMARKS</HeaderCell>
            {editable && <HeaderCell rowSpan="2" className="action-cell"></HeaderCell>}
          </HeaderRow1>
          <HeaderRow2>
            <HeaderCell className="sub-header">QTY</HeaderCell>
            <HeaderCell className="sub-header">UNIT</HeaderCell>
            <HeaderCell className="sub-header">UNIT RATE</HeaderCell>
            <HeaderCell className="sub-header">TOTAL AMOUNT</HeaderCell>
            <HeaderCell className="sub-header">QTY</HeaderCell>
            <HeaderCell className="sub-header">AMOUNT</HeaderCell>
            <HeaderCell className="sub-header">QTY</HeaderCell>
            <HeaderCell className="sub-header">AMOUNT</HeaderCell>
            <HeaderCell className="sub-header">QTY</HeaderCell>
            <HeaderCell className="sub-header">AMOUNT</HeaderCell>
          </HeaderRow2>
        </thead>
        <tbody>
          {rows.map((row) => (
            <DataRow key={row.id}>
              <DataCell className="cell-center cell-gray">{row.slNo}</DataCell>
              <DataCell className="cell-center cell-gray">{row.poItemNo}</DataCell>
              <DataCell className="wide-cell">
                {renderCellContent(row, 'activityDescription')}
              </DataCell>
              <DataCell className="cell-right">
                {renderCellContent(row, 'poQty', null, 'cell-right')}
              </DataCell>
              <DataCell className="cell-center">
                {renderCellContent(row, 'poUnit', null, 'cell-center')}
              </DataCell>
              <DataCell className="cell-right">
                {renderCellContent(row, 'poUnitRate', null, 'cell-right')}
              </DataCell>
              <DataCell className="cell-right cell-gray">
                {renderCellContent(row, 'poTotalAmount', 'poTotalAmount', 'cell-right')}
              </DataCell>
              <DataCell className="cell-right">
                {renderCellContent(row, 'prevQty', null, 'cell-right')}
              </DataCell>
              <DataCell className="cell-right">
                {renderCellContent(row, 'prevAmount', 'prevAmount', 'cell-right')}
              </DataCell>
              <DataCell className="cell-right">
                {renderCellContent(row, 'thisMonthQty', null, 'cell-right')}
              </DataCell>
              <DataCell className="cell-right">
                {renderCellContent(row, 'thisMonthAmount', 'thisMonthAmount', 'cell-right')}
              </DataCell>
              <DataCell className="cell-right cell-gray">
                {renderCellContent(row, 'cumQty', 'cumQty', 'cell-right')}
              </DataCell>
              <DataCell className="cell-right cell-gray">
                {renderCellContent(row, 'cumAmount', 'cumAmount', 'cell-right')}
              </DataCell>
              <DataCell>
                {renderCellContent(row, 'remarks')}
              </DataCell>
              {editable && (
                <ActionCell>
                  <button onClick={() => onDeleteRow(row.id)} className="delete-btn" disabled={rows.length <= 1}>
                    <Trash2 size={14} />
                  </button>
                </ActionCell>
              )}
            </DataRow>
          ))}
        </tbody>
      </MainDataTable>
      </TableWrapper>
    </SectionBorder>
  );
}