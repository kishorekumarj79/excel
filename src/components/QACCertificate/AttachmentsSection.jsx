import React, { useRef } from 'react';
import { Plus, Trash2, Paperclip } from 'lucide-react';
import { SectionBorder, SectionHeader, SectionTitle, AddBtn, CustomGridTable, GridHeaderCell, GridDataCell, CellInput } from './AttachmentSectionStyle';

const attachmentColumns = [
  { key: 'no', name: 'No.', width: 60 },
  { key: 'description', name: 'Attachment Description', width: 1000 }
];

export default function AttachmentsSection({ editable, attachmentRows, onAddAttachmentWithFile, onDeleteAttachmentRow, onAttachmentChange }) {
  const fileInputRef = useRef(null);

  const handleAddAttachment = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      onAddAttachmentWithFile(file.name, file);
    }
    event.target.value = ''; 
  };

  return (
    <SectionBorder>
      <SectionHeader className="attach-bg">
        <SectionTitle>ATTACHMENTS</SectionTitle>
        {editable && (
          <AddBtn onClick={handleAddAttachment} className="btn-orange">
            <Plus size={16} /> Add Attachment
          </AddBtn>
        )}
      </SectionHeader>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        accept="*/*"
      />
      <CustomGridTable className="attach-table">
        <thead>
          <tr>
            {attachmentColumns.map((col) => (
              <GridHeaderCell key={col.key} style={{ width: col.width }}> {col.name} </GridHeaderCell>
            ))}
            {editable && <GridHeaderCell style={{ width: 60 }}>Action</GridHeaderCell>}
          </tr>
        </thead>
        <tbody>
          {attachmentRows.map((row) => (
            <tr key={row.id}>
              {attachmentColumns.map((col) => (
                <GridDataCell key={col.key} style={{ width: col.width }}>
                  {col.key === 'no' ? (
                    <span className="cell-center cell-gray">{row[col.key]}</span>
                  ) : editable ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {row.file && <Paperclip size={16} />}
                      <CellInput
                        type="text"
                        value={row[col.key] || ''}
                        onChange={(e) => onAttachmentChange(row.id, col.key, e.target.value)}
                      />
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {row.file && <Paperclip size={16} />}
                      <span>{row[col.key] || ''}</span>
                    </div>
                  )}
                </GridDataCell>
              ))}
              {editable && (
                <GridDataCell style={{ width: 60 }} className="action-cell">
                  <button onClick={() => onDeleteAttachmentRow(row.id)} className="delete-btn" disabled={attachmentRows.length <= 1}>
                    <Trash2 size={14} />
                  </button>
                </GridDataCell>
              )}
            </tr>
          ))}
        </tbody>
      </CustomGridTable>
    </SectionBorder>
  );
}