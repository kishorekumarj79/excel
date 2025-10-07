import React, { useState } from 'react';
import { DataGrid } from 'react-data-grid';
import 'react-data-grid/lib/styles.css';
import { Plus, Trash2 } from 'lucide-react';

export default function QACCertificates() {
  const [headerRows, setHeaderRows] = useState([
    {
      id: 1,
      subContractor: 'ARABIAN RUBBER INDUSTRIES LLC',
      poNo: '62892',
      poDate: '12-MAR-2024',
      fromDate: 'MM/YYYY',
      toDate: 'MM/YYYY',
      projectDescription: 'XXXXXXXX',
      department: 'Mechanical / Piping / Brownfield',
      qacNo: '',
      qacIssuedDate: 'DD/MM/YYYY',
      serviceProgress: 'XXX',
      certification: 'PROGRESS / FINAL',
      jobNo: 'XXXX',
      currency: 'AED'
    }
  ]);

  const [rows, setRows] = useState([
    { 
      id: 1, 
      slNo: 1, 
      poItemNo: 1, 
      activityDescription: '', 
      poQty: '', 
      poUnit: '', 
      poUnitRate: '', 
      poTotalAmount: '-', 
      prevQty: '', 
      prevAmount: '-', 
      thisMonthQty: '', 
      thisMonthAmount: '-', 
      cumQty: '-', 
      cumAmount: '-', 
      remarks: '',
      overridden: { poTotalAmount: false, prevAmount: false, thisMonthAmount: false, cumQty: false, cumAmount: false }
    },
    { 
      id: 2, 
      slNo: 2, 
      poItemNo: 2, 
      activityDescription: '', 
      poQty: '', 
      poUnit: '', 
      poUnitRate: '', 
      poTotalAmount: '-', 
      prevQty: '', 
      prevAmount: '-', 
      thisMonthQty: '', 
      thisMonthAmount: '-', 
      cumQty: '-', 
      cumAmount: '-', 
      remarks: '',
      overridden: { poTotalAmount: false, prevAmount: false, thisMonthAmount: false, cumQty: false, cumAmount: false }
    }
  ]);

  // Sub Contractor Footer
  const [subContractorRows, setSubContractorRows] = useState([
    { id: 1, name: 'XXXXX', designation: '', signature: '', date: '03-10-2025' }
  ]);

  // Verified By Requestor
  const [verifiedRows, setVerifiedRows] = useState([
    { id: 1, name: '', designation: '', signature: '', date: '' }
  ]);

  // Reviewed By Cost Controller
  const [reviewedRows, setReviewedRows] = useState([
    { id: 1, name: 'John', designation: 'Projects Cost Controller', signature: '', date: '' }
  ]);

  // Certified By
  const [certifiedRows, setCertifiedRows] = useState([
    { id: 1, name: 'Mani', designation: 'CFO', signature: '', date: '' }
  ]);

  const [attachmentRows, setAttachmentRows] = useState([
    { id: 1, no: 1, description: 'Proof showing the Service has been completed. Egs(Delivery Note, Timesheet, Reports, Other supporting documents etc.)' },
    { id: 2, no: 2, description: '' },
    { id: 3, no: 3, description: 'Purchase Order' }
  ]);

  // Header Columns without action
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

  // Main Data Grid Columns
  const calculateRow = (row) => {
    const qty = parseFloat(row.poQty) || 0;
    const rate = parseFloat(row.poUnitRate) || 0;
    const prevQtyNum = parseFloat(row.prevQty) || 0;
    const thisQtyNum = parseFloat(row.thisMonthQty) || 0;

    let poTotalAmount;
    if (row.overridden?.poTotalAmount) {
      poTotalAmount = row.poTotalAmount;
    } else {
      poTotalAmount = (qty > 0 && rate > 0) ? (qty * rate).toFixed(2) : '-';
    }

    let prevAmount;
    if (row.overridden?.prevAmount) {
      prevAmount = row.prevAmount;
    } else {
      if (prevQtyNum > 0 && rate > 0) {
        prevAmount = (prevQtyNum * rate).toFixed(2);
      } else {
        prevAmount = row.prevAmount || '-';
      }
    }

    let thisMonthAmount;
    if (row.overridden?.thisMonthAmount) {
      thisMonthAmount = row.thisMonthAmount;
    } else {
      if (thisQtyNum > 0 && rate > 0) {
        thisMonthAmount = (thisQtyNum * rate).toFixed(2);
      } else {
        thisMonthAmount = row.thisMonthAmount || '-';
      }
    }

    const cumPrevNum = parseFloat(prevAmount) || 0;
    const cumThisNum = parseFloat(thisMonthAmount) || 0;
    const calculatedCumAmt = cumPrevNum + cumThisNum;

    let cumAmount;
    if (row.overridden?.cumAmount) {
      cumAmount = row.cumAmount;
    } else {
      cumAmount = (calculatedCumAmt > 0) ? calculatedCumAmt.toFixed(2) : '-';
    }

    const calculatedCumQty = prevQtyNum + thisQtyNum;

    let cumQty;
    if (row.overridden?.cumQty) {
      cumQty = row.cumQty;
    } else {
      cumQty = (calculatedCumQty > 0) ? calculatedCumQty.toFixed(2) : '-';
    }

    return {
      ...row,
      poTotalAmount,
      prevAmount,
      thisMonthAmount,
      cumQty,
      cumAmount
    };
  };

  const handleRowsChange = (newRows) => {
    const updatedRows = newRows.map(row => calculateRow(row));
    setRows(updatedRows);
  };

  const addRow = () => {
    const newId = Math.max(...rows.map(r => r.id), 0) + 1;
    const newSlNo = rows.length + 1;
    setRows([...rows, {
      id: newId,
      slNo: newSlNo,
      poItemNo: newSlNo,
      activityDescription: '',
      poQty: '',
      poUnit: '',
      poUnitRate: '',
      poTotalAmount: '-',
      prevQty: '',
      prevAmount: '-',
      thisMonthQty: '',
      thisMonthAmount: '-',
      cumQty: '-',
      cumAmount: '-',
      remarks: '',
      overridden: { poTotalAmount: false, prevAmount: false, thisMonthAmount: false, cumQty: false, cumAmount: false }
    }]);
  };

  const deleteRow = (id) => {
    if (rows.length > 1) {
      const updatedRows = rows.filter(row => row.id !== id).map((row, idx) => ({
        ...row,
        slNo: idx + 1,
        poItemNo: idx + 1
      }));
      setRows(updatedRows);
    }
  };

  const deleteHeaderRow = (id) => {
    if (headerRows.length > 1) {
      setHeaderRows(prev => prev.filter(r => r.id !== id));
    }
  };

  const deleteSubContractorRow = (id) => {
    if (subContractorRows.length > 1) {
      setSubContractorRows(prev => prev.filter(r => r.id !== id));
    }
  };

  const deleteVerifiedRow = (id) => {
    if (verifiedRows.length > 1) {
      setVerifiedRows(prev => prev.filter(r => r.id !== id));
    }
  };

  const deleteReviewedRow = (id) => {
    if (reviewedRows.length > 1) {
      setReviewedRows(prev => prev.filter(r => r.id !== id));
    }
  };

  const deleteCertifiedRow = (id) => {
    if (certifiedRows.length > 1) {
      setCertifiedRows(prev => prev.filter(r => r.id !== id));
    }
  };

  const deleteAttachmentRow = (id) => {
    if (attachmentRows.length > 1) {
      const updatedRows = attachmentRows.filter(row => row.id !== id).map((row, idx) => ({ ...row, no: idx + 1 }));
      setAttachmentRows(updatedRows);
    }
  };

  const columns = [
    { key: 'slNo', name: 'SL NO', width: 70, cellClass: 'cell-center cell-gray', editable: false },
    { key: 'poItemNo', name: 'PO ITEM NO.', width: 100, cellClass: 'cell-center cell-gray', editable: false },
    { key: 'activityDescription', name: 'ACTIVITY DESCRIPTION', width: 280, editable: true },
    { key: 'poQty', name: 'QTY', width: 90, editable: true, cellClass: 'cell-right' },
    { key: 'poUnit', name: 'UNIT', width: 90, editable: true, cellClass: 'cell-center' },
    { key: 'poUnitRate', name: 'UNIT RATE', width: 110, editable: true, cellClass: 'cell-right' },
    { key: 'poTotalAmount', name: 'TOTAL AMOUNT', width: 130, cellClass: 'cell-right cell-gray', editable: true },
    { key: 'prevQty', name: 'QTY', width: 90, editable: true, cellClass: 'cell-right' },
    { key: 'prevAmount', name: 'AMOUNT', width: 130, editable: true, cellClass: 'cell-right' },
    { key: 'thisMonthQty', name: 'QTY', width: 90, editable: true, cellClass: 'cell-right' },
    { key: 'thisMonthAmount', name: 'AMOUNT', width: 130, editable: true, cellClass: 'cell-right' },
    { key: 'cumQty', name: 'QTY', width: 90, cellClass: 'cell-right cell-gray', editable: true },
    { key: 'cumAmount', name: 'AMOUNT', width: 130, cellClass: 'cell-right cell-gray', editable: true },
    { key: 'remarks', name: 'REMARKS', width: 180, editable: true },
    {
      key: 'action',
      name: '',
      width: 60,
      renderCell: ({ row }) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <button onClick={() => deleteRow(row.id)} className="delete-btn" disabled={rows.length <= 1}>
            <Trash2 size={14} />
          </button>
        </div>
      )
    }
  ];

  // Footer columns without action
  const footerColumns = [
    { key: 'name', name: 'Name', width: 200 },
    { key: 'designation', name: 'Designation', width: 250 },
    { key: 'signature', name: 'Signature', width: 150 },
    { key: 'date', name: 'Date', width: 150 }
  ];

  // Attachment columns without action
  const attachmentColumns = [
    { key: 'no', name: 'No.', width: 60 },
    { key: 'description', name: 'Attachment Description', width: 1000 }
  ];

  const addHeaderRow = () => {
    const newId = Math.max(...headerRows.map(r => r.id), 0) + 1;
    setHeaderRows([...headerRows, { id: newId, subContractor: '', poNo: '', poDate: '', fromDate: '', toDate: '', projectDescription: '', department: '', qacNo: '', qacIssuedDate: '', serviceProgress: '', certification: '', jobNo: '', currency: '' }]);
  };

  const addSubContractorRow = () => {
    const newId = Math.max(...subContractorRows.map(r => r.id), 0) + 1;
    setSubContractorRows([...subContractorRows, { id: newId, name: '', designation: '', signature: '', date: '' }]);
  };

  const addVerifiedRow = () => {
    const newId = Math.max(...verifiedRows.map(r => r.id), 0) + 1;
    setVerifiedRows([...verifiedRows, { id: newId, name: '', designation: '', signature: '', date: '' }]);
  };

  const addReviewedRow = () => {
    const newId = Math.max(...reviewedRows.map(r => r.id), 0) + 1;
    setReviewedRows([...reviewedRows, { id: newId, name: '', designation: '', signature: '', date: '' }]);
  };

  const addCertifiedRow = () => {
    const newId = Math.max(...certifiedRows.map(r => r.id), 0) + 1;
    setCertifiedRows([...certifiedRows, { id: newId, name: '', designation: '', signature: '', date: '' }]);
  };

  const addAttachmentRow = () => {
    const newId = Math.max(...attachmentRows.map(r => r.id), 0) + 1;
    const newNo = attachmentRows.length + 1;
    setAttachmentRows([...attachmentRows, { id: newId, no: newNo, description: '' }]);
  };

  const totalWithoutVAT = rows.reduce((sum, row) => {
    const cumAmount = parseFloat(row.cumAmount);
    return sum + (isNaN(cumAmount) ? 0 : cumAmount);
  }, 0).toFixed(2);

  const handleHeaderChange = (rowId, key, value) => {
    setHeaderRows(prev => prev.map(row => row.id === rowId ? { ...row, [key]: value } : row));
  };

  const handleSubContractorChange = (rowId, key, value) => {
    setSubContractorRows(prev => prev.map(row => row.id === rowId ? { ...row, [key]: value } : row));
  };

  const handleVerifiedChange = (rowId, key, value) => {
    setVerifiedRows(prev => prev.map(row => row.id === rowId ? { ...row, [key]: value } : row));
  };

  const handleReviewedChange = (rowId, key, value) => {
    setReviewedRows(prev => prev.map(row => row.id === rowId ? { ...row, [key]: value } : row));
  };

  const handleCertifiedChange = (rowId, key, value) => {
    setCertifiedRows(prev => prev.map(row => row.id === rowId ? { ...row, [key]: value } : row));
  };

  const handleAttachmentChange = (rowId, key, value) => {
    setAttachmentRows(prev => prev.map(row => row.id === rowId ? { ...row, [key]: value } : row));
  };

  return (
    <div className="qac-container">
      <div className="qac-wrapper">
        <div className="title-section">
          <div className="logo-box">Logo</div>
          <h1 className="main-title">QUANTITY & AMOUNT CERTIFICATE (GENERAL QAC)</h1>
          <div style={{ width: '130px' }}></div>
        </div>

        <div className="section-border">
          <div className="section-header header-bg">
            <h2 className="section-title">HEADER INFORMATION</h2>
            <button onClick={addHeaderRow} className="add-btn btn-green">
              <Plus size={16} /> Add Header Row
            </button>
          </div>
          <table className="custom-grid-table header-table">
            <thead>
              <tr>
                {headerColumns.map((col) => (
                  <th key={col.key} style={{ width: col.width }} className="grid-header-cell"> {col.name} </th>
                ))}
                <th style={{ width: 60 }} className="grid-header-cell">Action</th>
              </tr>
            </thead>
            <tbody>
              {headerRows.map((row) => (
                <tr key={row.id}>
                  {headerColumns.map((col) => (
                    <td key={col.key} style={{ width: col.width }} className="grid-data-cell">
                      <input
                        type="text"
                        value={row[col.key] || ''}
                        onChange={(e) => handleHeaderChange(row.id, col.key, e.target.value)}
                        className="cell-input"
                      />
                    </td>
                  ))}
                  <td style={{ width: 60 }} className="grid-data-cell action-cell">
                    <button onClick={() => deleteHeaderRow(row.id)} className="delete-btn" disabled={headerRows.length <= 1}>
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section-border">
          <div className="section-header data-bg">
            <h2 className="section-title">PO DATA & CERTIFICATION</h2>
            <button onClick={addRow} className="add-btn btn-blue">
              <Plus size={16} /> Add Row
            </button>
          </div>
          
          <table className="main-data-table">
            <thead>
              <tr className="header-row-1">
                <th rowSpan="2" className="header-cell">SL NO</th>
                <th rowSpan="2" className="header-cell">PO ITEM NO.</th>
                <th rowSpan="2" className="header-cell wide-cell">ACTIVITY DESCRIPTION</th>
                <th colSpan="4" className="header-cell header-group">PO Data</th>
                <th colSpan="2" className="header-cell header-group">PREVIOUS CUMULATIVE</th>
                <th colSpan="2" className="header-cell header-group">THIS MONTH</th>
                <th colSpan="2" className="header-cell header-group">CUMULATIVE</th>
                <th rowSpan="2" className="header-cell">REMARKS</th>
                <th rowSpan="2" className="header-cell action-cell"></th>
              </tr>
              <tr className="header-row-2">
                <th className="header-cell sub-header">QTY</th>
                <th className="header-cell sub-header">UNIT</th>
                <th className="header-cell sub-header">UNIT RATE</th>
                <th className="header-cell sub-header">TOTAL AMOUNT</th>
                <th className="header-cell sub-header">QTY</th>
                <th className="header-cell sub-header">AMOUNT</th>
                <th className="header-cell sub-header">QTY</th>
                <th className="header-cell sub-header">AMOUNT</th>
                <th className="header-cell sub-header">QTY</th>
                <th className="header-cell sub-header">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="data-row">
                  <td className="data-cell cell-center cell-gray">{row.slNo}</td>
                  <td className="data-cell cell-center cell-gray">{row.poItemNo}</td>
                  <td className="data-cell wide-cell">
                    <input
                      type="text"
                      value={row.activityDescription}
                      onChange={(e) => {
                        const newRows = rows.map(r => r.id === row.id ? { ...r, activityDescription: e.target.value } : r);
                        handleRowsChange(newRows);
                      }}
                      className="cell-input"
                    />
                  </td>
                  <td className="data-cell">
                    <input
                      type="number"
                      step="0.01"
                      value={row.poQty}
                      onChange={(e) => {
                        const newRows = rows.map(r => r.id === row.id ? { ...r, poQty: e.target.value } : r);
                        handleRowsChange(newRows);
                      }}
                      className="cell-input cell-right"
                    />
                  </td>
                  <td className="data-cell">
                    <input
                      type="text"
                      value={row.poUnit}
                      onChange={(e) => {
                        const newRows = rows.map(r => r.id === row.id ? { ...r, poUnit: e.target.value } : r);
                        handleRowsChange(newRows);
                      }}
                      className="cell-input cell-center"
                    />
                  </td>
                  <td className="data-cell">
                    <input
                      type="number"
                      step="0.01"
                      value={row.poUnitRate}
                      onChange={(e) => {
                        const newRows = rows.map(r => r.id === row.id ? { ...r, poUnitRate: e.target.value } : r);
                        handleRowsChange(newRows);
                      }}
                      className="cell-input cell-right"
                    />
                  </td>
                  <td className="data-cell cell-right cell-gray">
                    <input
                      type="number"
                      step="0.01"
                      value={row.poTotalAmount}
                      onChange={(e) => {
                        const newRows = rows.map(r => 
                          r.id === row.id 
                            ? { 
                                ...r, 
                                poTotalAmount: e.target.value,
                                overridden: { ...r.overridden, poTotalAmount: true }
                              } 
                            : r
                        );
                        handleRowsChange(newRows);
                      }}
                      className="cell-input cell-right"
                    />
                  </td>
                  <td className="data-cell">
                    <input
                      type="number"
                      step="0.01"
                      value={row.prevQty}
                      onChange={(e) => {
                        const newRows = rows.map(r => r.id === row.id ? { ...r, prevQty: e.target.value } : r);
                        handleRowsChange(newRows);
                      }}
                      className="cell-input cell-right"
                    />
                  </td>
                  <td className="data-cell">
                    <input
                      type="number"
                      step="0.01"
                      value={row.prevAmount}
                      onChange={(e) => {
                        const newRows = rows.map(r => 
                          r.id === row.id 
                            ? { 
                                ...r, 
                                prevAmount: e.target.value,
                                overridden: { ...r.overridden, prevAmount: true }
                              } 
                            : r
                        );
                        handleRowsChange(newRows);
                      }}
                      className="cell-input cell-right"
                    />
                  </td>
                  <td className="data-cell">
                    <input
                      type="number"
                      step="0.01"
                      value={row.thisMonthQty}
                      onChange={(e) => {
                        const newRows = rows.map(r => r.id === row.id ? { ...r, thisMonthQty: e.target.value } : r);
                        handleRowsChange(newRows);
                      }}
                      className="cell-input cell-right"
                    />
                  </td>
                  <td className="data-cell">
                    <input
                      type="number"
                      step="0.01"
                      value={row.thisMonthAmount}
                      onChange={(e) => {
                        const newRows = rows.map(r => 
                          r.id === row.id 
                            ? { 
                                ...r, 
                                thisMonthAmount: e.target.value,
                                overridden: { ...r.overridden, thisMonthAmount: true }
                              } 
                            : r
                        );
                        handleRowsChange(newRows);
                      }}
                      className="cell-input cell-right"
                    />
                  </td>
                  <td className="data-cell cell-right cell-gray">
                    <input
                      type="number"
                      step="0.01"
                      value={row.cumQty}
                      onChange={(e) => {
                        const newRows = rows.map(r => 
                          r.id === row.id 
                            ? { 
                                ...r, 
                                cumQty: e.target.value,
                                overridden: { ...r.overridden, cumQty: true }
                              } 
                            : r
                        );
                        handleRowsChange(newRows);
                      }}
                      className="cell-input cell-right"
                    />
                  </td>
                  <td className="data-cell cell-right cell-gray">
                    <input
                      type="number"
                      step="0.01"
                      value={row.cumAmount}
                      onChange={(e) => {
                        const newRows = rows.map(r => 
                          r.id === row.id 
                            ? { 
                                ...r, 
                                cumAmount: e.target.value,
                                overridden: { ...r.overridden, cumAmount: true }
                              } 
                            : r
                        );
                        handleRowsChange(newRows);
                      }}
                      className="cell-input cell-right"
                    />
                  </td>
                  <td className="data-cell">
                    <input
                      type="text"
                      value={row.remarks}
                      onChange={(e) => {
                        const newRows = rows.map(r => r.id === row.id ? { ...r, remarks: e.target.value } : r);
                        setRows(newRows);
                      }}
                      className="cell-input"
                    />
                  </td>
                  <td className="data-cell action-cell">
                    <button onClick={() => deleteRow(row.id)} className="delete-btn" disabled={rows.length <= 1}>
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="total-row">
          <div className="total-label">Total WITHOUT VAT</div>
          <div className="total-fill"></div>
          <div className="total-zero">0.0</div>
          <div className="total-amount">{totalWithoutVAT}</div>
        </div>

        <div className="footer-section">
          <div className="footer-column">
            <div className="footer-title">Sub Contractor / Supplier:</div>
            <div className="footer-subtitle">Prepared by :</div>
            <table className="custom-grid-table footer-table">
              <thead>
                <tr>
                  {footerColumns.map((col) => (
                    <th key={col.key} style={{ width: col.width }} className="grid-header-cell"> {col.name} </th>
                  ))}
                  <th style={{ width: 60 }} className="grid-header-cell">Action</th>
                </tr>
              </thead>
              <tbody>
                {subContractorRows.map((row) => (
                  <tr key={row.id}>
                    {footerColumns.map((col) => (
                      <td key={col.key} style={{ width: col.width }} className="grid-data-cell">
                        <input
                          type="text"
                          value={row[col.key] || ''}
                          onChange={(e) => handleSubContractorChange(row.id, col.key, e.target.value)}
                          className="cell-input"
                        />
                      </td>
                    ))}
                    <td style={{ width: 60 }} className="grid-data-cell action-cell">
                      <button onClick={() => deleteSubContractorRow(row.id)} className="delete-btn" disabled={subContractorRows.length <= 1}>
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={addSubContractorRow} className="add-btn btn-green small-btn">
              <Plus size={12} /> Add
            </button>
          </div>

          <div className="footer-column">
            <div className="footer-title">ARM / Verification / Certification</div>
            <div className="footer-subtitle">Verified By: Requestor</div>
            <table className="custom-grid-table footer-table">
              <thead>
                <tr>
                  {footerColumns.map((col) => (
                    <th key={col.key} style={{ width: col.width }} className="grid-header-cell"> {col.name} </th>
                  ))}
                  <th style={{ width: 60 }} className="grid-header-cell">Action</th>
                </tr>
              </thead>
              <tbody>
                {verifiedRows.map((row) => (
                  <tr key={row.id}>
                    {footerColumns.map((col) => (
                      <td key={col.key} style={{ width: col.width }} className="grid-data-cell">
                        <input
                          type="text"
                          value={row[col.key] || ''}
                          onChange={(e) => handleVerifiedChange(row.id, col.key, e.target.value)}
                          className="cell-input"
                        />
                      </td>
                    ))}
                    <td style={{ width: 60 }} className="grid-data-cell action-cell">
                      <button onClick={() => deleteVerifiedRow(row.id)} className="delete-btn" disabled={verifiedRows.length <= 1}>
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={addVerifiedRow} className="add-btn btn-blue small-btn">
              <Plus size={12} /> Add
            </button>
            
            <div className="footer-subtitle" style={{ marginTop: '15px' }}>Reviewed By: Cost Controller</div>
            <table className="custom-grid-table footer-table">
              <thead>
                <tr>
                  {footerColumns.map((col) => (
                    <th key={col.key} style={{ width: col.width }} className="grid-header-cell"> {col.name} </th>
                  ))}
                  <th style={{ width: 60 }} className="grid-header-cell">Action</th>
                </tr>
              </thead>
              <tbody>
                {reviewedRows.map((row) => (
                  <tr key={row.id}>
                    {footerColumns.map((col) => (
                      <td key={col.key} style={{ width: col.width }} className="grid-data-cell">
                        <input
                          type="text"
                          value={row[col.key] || ''}
                          onChange={(e) => handleReviewedChange(row.id, col.key, e.target.value)}
                          className="cell-input"
                        />
                      </td>
                    ))}
                    <td style={{ width: 60 }} className="grid-data-cell action-cell">
                      <button onClick={() => deleteReviewedRow(row.id)} className="delete-btn" disabled={reviewedRows.length <= 1}>
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={addReviewedRow} className="add-btn btn-purple small-btn">
              <Plus size={12} /> Add
            </button>
          </div>

          <div className="footer-column">
            <div className="footer-title" style={{ visibility: 'hidden' }}>.</div>
            <div className="footer-subtitle">Certified By:</div>
            <table className="custom-grid-table footer-table">
              <thead>
                <tr>
                  {footerColumns.map((col) => (
                    <th key={col.key} style={{ width: col.width }} className="grid-header-cell"> {col.name} </th>
                  ))}
                  <th style={{ width: 60 }} className="grid-header-cell">Action</th>
                </tr>
              </thead>
              <tbody>
                {certifiedRows.map((row) => (
                  <tr key={row.id}>
                    {footerColumns.map((col) => (
                      <td key={col.key} style={{ width: col.width }} className="grid-data-cell">
                        <input
                          type="text"
                          value={row[col.key] || ''}
                          onChange={(e) => handleCertifiedChange(row.id, col.key, e.target.value)}
                          className="cell-input"
                        />
                      </td>
                    ))}
                    <td style={{ width: 60 }} className="grid-data-cell action-cell">
                      <button onClick={() => deleteCertifiedRow(row.id)} className="delete-btn" disabled={certifiedRows.length <= 1}>
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={addCertifiedRow} className="add-btn btn-orange small-btn">
              <Plus size={12} /> Add
            </button>
          </div>
        </div>

        <div className="section-border">
          <div className="section-header attach-bg">
            <h2 className="section-title">ATTACHMENTS</h2>
            <button onClick={addAttachmentRow} className="add-btn btn-orange">
              <Plus size={16} /> Add Attachment
            </button>
          </div>
          <table className="custom-grid-table attach-table">
            <thead>
              <tr>
                {attachmentColumns.map((col) => (
                  <th key={col.key} style={{ width: col.width }} className="grid-header-cell"> {col.name} </th>
                ))}
                <th style={{ width: 60 }} className="grid-header-cell">Action</th>
              </tr>
            </thead>
            <tbody>
              {attachmentRows.map((row) => (
                <tr key={row.id}>
                  {attachmentColumns.map((col) => (
                    <td key={col.key} style={{ width: col.width }} className="grid-data-cell">
                      {col.key === 'no' ? (
                        <span className="cell-center cell-gray">{row[col.key]}</span>
                      ) : (
                        <input
                          type="text"
                          value={row[col.key] || ''}
                          onChange={(e) => handleAttachmentChange(row.id, col.key, e.target.value)}
                          className="cell-input"
                        />
                      )}
                    </td>
                  ))}
                  <td style={{ width: 60 }} className="grid-data-cell action-cell">
                    <button onClick={() => deleteAttachmentRow(row.id)} className="delete-btn" disabled={attachmentRows.length <= 1}>
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .qac-container { width: 100%; min-height: 100vh; background-color: white; padding: 20px; overflow-x: auto; }
        .qac-wrapper { border: 2px solid #000; min-width: 1600px; }
        .title-section { display: flex; align-items: center; justify-content: space-between; padding: 15px; background-color: #f3f4f6; border-bottom: 2px solid #000; }
        .logo-box { width: 130px; height: 65px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #000; }
        .main-title { font-size: 20px; font-weight: bold; text-align: center; flex: 1; margin: 0; color: #000; }
        .section-border { border-bottom: 2px solid #000; }
        .section-header { padding: 10px; display: flex; justify-content: space-between; align-items: center; }
        .header-bg { background-color: #e0f2fe; }
        .data-bg { background-color: #dbeafe; }
        .attach-bg { background-color: #fed7aa; }
        .section-title { font-weight: bold; margin: 0; font-size: 14px; color: #000; }
        
        .main-data-table { width: 100%; border-collapse: collapse; }
        .header-row-1 th, .header-row-2 th { background-color: #f3f4f6; border: 1px solid #000; padding: 8px 4px; font-size: 11px; font-weight: 600; color: #000; text-align: center; }
        .header-group { background-color: #e5e7eb; font-weight: 700; }
        .sub-header { background-color: #f9fafb; }
        .data-row { }
        .data-cell { border: 1px solid #ddd; padding: 6px 8px; height: 35px; font-size: 12px; color: #000; vertical-align: middle; }
        .wide-cell { width: 280px; }
        .action-cell { width: 60px; text-align: center; padding: 4px; }
        .cell-input { width: 100%; height: 100%; border: none; padding: 4px 8px; font-size: 12px; color: #000; background: transparent; box-sizing: border-box; }
        .cell-input:focus { outline: 2px solid #2563eb; outline-offset: -2px; background-color: #eff6ff; }
        .cell-center { text-align: center; }
        .cell-right { text-align: right; }
        .cell-gray { background-color: #f9fafb !important; font-weight: 500; }
        
        .custom-grid-table { width: 100%; border-collapse: collapse; font-size: 12px; }
        .grid-header-cell { border: 1px solid #000; padding: 8px 4px; background-color: #f3f4f6; font-weight: 600; text-align: left; vertical-align: middle; color: #000; }
        .grid-data-cell { border: 1px solid #ddd; padding: 4px; height: 35px; vertical-align: middle; color: #000; }
        .header-table .grid-data-cell { background-color: #e0f2fe; }
        .footer-table .grid-data-cell { background-color: #f9fafb; }
        .attach-table .grid-data-cell { background-color: #fed7aa; }
        
        .add-btn { display: flex; align-items: center; gap: 6px; padding: 6px 12px; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; }
        .small-btn { padding: 4px 8px; font-size: 11px; margin-top: 8px; }
        .btn-green { background-color: #16a34a; } .btn-green:hover { background-color: #15803d; }
        .btn-blue { background-color: #2563eb; } .btn-blue:hover { background-color: #1d4ed8; }
        .btn-purple { background-color: #9333ea; } .btn-purple:hover { background-color: #7e22ce; }
        .btn-orange { background-color: #ea580c; } .btn-orange:hover { background-color: #c2410c; }
        
        .total-row { display: flex; background-color: #fef3c7; border-bottom: 2px solid #000; padding: 10px; }
        .total-label { width: 450px; font-weight: bold; color: #000; text-align: center; border-right: 1px solid #000; padding-right: 10px; }
        .total-fill { flex: 1; text-align: center; color: #000; border-right: 1px solid #000; }
        .total-zero { width: 90px; text-align: center; font-weight: 600; color: #000; border-right: 1px solid #000; padding: 0 10px; }
        .total-amount { width: 130px; text-align: right; font-weight: bold; font-size: 16px; color: #000; padding-right: 10px; }
        
        .footer-section { display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 2px solid #000; }
        .footer-column { padding: 15px; border-right: 1px solid #000; }
        .footer-column:last-child { border-right: none; }
        .footer-title { font-weight: bold; margin-bottom: 8px; font-size: 13px; color: #000; }
        .footer-subtitle { font-weight: 600; margin-bottom: 5px; margin-top: 5px; font-size: 12px; color: #000; }
        
        .delete-btn { padding: 3px; background: none; border: none; color: #dc2626; cursor: pointer; border-radius: 3px; }
        .delete-btn:hover { background-color: #fee2e2; }
        .delete-btn:disabled { color: #d1d5db; cursor: not-allowed; }
        
        .rdg { border: none !important; font-size: 11px; }
        .rdg-cell { border-right: 1px solid #ddd !important; border-bottom: 1px solid #ddd !important; padding: 4px 6px; color: #000; }
        .rdg-header-row { background-color: #f3f4f6; font-weight: 600; }
        .rdg-header-row .rdg-cell { border-right: 1px solid #000 !important; border-bottom: 2px solid #000 !important; color: #000; }
      `}</style>
    </div>
  );
}