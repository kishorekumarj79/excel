// components/QACCertificate/HeaderSection.jsx
import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { SectionBorder, SectionHeader, SectionTitle, AddBtn, CustomGridTable, GridHeaderCell, GridDataCell, CellInput } from './HeaderSectionStyle';

const headerColumns = [
  { key: 'subContractor', name: 'Sub Contractor / Supplier', width: 300 },
  { key: 'poNo', name: 'PO No.', width: 100 },
  { key: 'poDate', name: 'PO Date', width: 120 },
  { key: 'fromDate', name: 'From (Month/Year)', width: 120 },
  { key: 'toDate', name: 'To (Month/Year)', width: 120 },
  { key: 'projectDescription', name: 'Project Description', width: 200 },
  { key: 'department', name: 'Department', width: 200 },
  { key: 'qacNo', name: 'QAC No.', width: 100 },
  { key: 'qacIssuedDate', name: 'QAC Issued Date', width: 120 },
  { key: 'serviceProgress', name: 'Service Progress (%)', width: 120 },
  { key: 'certification', name: 'Certification', width: 150 },
  { key: 'jobNo', name: 'Job No', width: 100 },
  { key: 'currency', name: 'Currency', width: 100 }
];

export default function HeaderSection({ editable, headerRows, onAddHeaderRow, onDeleteHeaderRow, onHeaderChange }) {
  return (
    <SectionBorder>
      <SectionHeader className="header-bg">
        <SectionTitle>HEADER INFORMATION</SectionTitle>
        {editable && (
          <AddBtn onClick={onAddHeaderRow} className="btn-green">
            <Plus size={16} /> Add Header Row
          </AddBtn>
        )}
      </SectionHeader>
      <div className="table-wrapper">
        <CustomGridTable className="header-table">
          <thead>
            <tr>
              {headerColumns.map((col) => (
                <GridHeaderCell key={col.key} style={{ width: col.width }}> {col.name} </GridHeaderCell>
              ))}
              {editable && <GridHeaderCell style={{ width: 60 }}>Action</GridHeaderCell>}
            </tr>
          </thead>
          <tbody>
            {headerRows.map((row) => (
              <tr key={row.id}>
                {headerColumns.map((col) => (
                  <GridDataCell key={col.key} style={{ width: col.width }}>
                    {editable ? (
                      <CellInput
                        type="text"
                        value={row[col.key] || ''}
                        onChange={(e) => onHeaderChange(row.id, col.key, e.target.value)}
                      />
                    ) : (
                      <span>{row[col.key] || ''}</span>
                    )}
                  </GridDataCell>
                ))}
                {editable && (
                  <GridDataCell style={{ width: 60 }} className="action-cell">
                    <button onClick={() => onDeleteHeaderRow(row.id)} className="delete-btn" disabled={headerRows.length <= 1}>
                      <Trash2 size={14} />
                    </button>
                  </GridDataCell>
                )}
              </tr>
            ))}
          </tbody>
        </CustomGridTable>
      </div>
    </SectionBorder>
  );
}