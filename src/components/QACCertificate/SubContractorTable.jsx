import React from 'react';
import { Trash2 } from 'lucide-react';
import { TableWrapper, CustomGridTable, GridHeaderCell, GridDataCell, CellInput, ActionCell } from './SubContractorStyle';

export default function SubContractorTable({ editable, rows, columns, onChange, onDeleteRow }) {
  return (
    <TableWrapper>
      <CustomGridTable className="footer-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <GridHeaderCell key={col.key} style={{ width: col.width }}> {col.name} </GridHeaderCell>
          ))}
          {editable && <GridHeaderCell style={{ width: 60 }}>Action</GridHeaderCell>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <GridDataCell key={col.key} style={{ width: col.width }}>
                {editable ? (
                  <CellInput
                    type="text"
                    value={row[col.key] || ''}
                    onChange={(e) => onChange(row.id, col.key, e.target.value)}
                  />
                ) : (
                  <span>{row[col.key] || ''}</span>
                )}
              </GridDataCell>
            ))}
            {editable && (
              <ActionCell>
                <button onClick={() => onDeleteRow(row.id)} className="delete-btn" disabled={rows.length <= 1}>
                  <Trash2 size={14} />
                </button>
              </ActionCell>
            )}
          </tr>
        ))}
      </tbody>
    </CustomGridTable>
    </TableWrapper>
  );
}