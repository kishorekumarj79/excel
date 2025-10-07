// stores/useQACStore.js
import { create } from 'zustand';

export const useQACStore = create((set, get) => ({
  config: {
    headerRows: [
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
    ],
    rows: [
      { 
        id: 1, 
        slNo: 1, 
        poItemNo: 1, 
        activityDescription: 'Supply and Installation of Rubber Seals for Piping', 
        poQty: '100', 
        poUnit: 'Nos', 
        poUnitRate: '50.00', 
        poTotalAmount: '5000.00', 
        prevQty: '40', 
        prevAmount: '2000.00', 
        thisMonthQty: '20', 
        thisMonthAmount: '1000.00', 
        cumQty: '60.00', 
        cumAmount: '3000.00', 
        remarks: 'As per PO specifications',
        overridden: { poTotalAmount: false, prevAmount: false, thisMonthAmount: false, cumQty: false, cumAmount: false }
      },
      { 
        id: 2, 
        slNo: 2, 
        poItemNo: 2, 
        activityDescription: 'Fabrication of Rubber Gaskets for Mechanical Joints', 
        poQty: '50', 
        poUnit: 'Sets', 
        poUnitRate: '120.50', 
        poTotalAmount: '6025.00', 
        prevQty: '15', 
        prevAmount: '1807.50', 
        thisMonthQty: '10', 
        thisMonthAmount: '1205.00', 
        cumQty: '25.00', 
        cumAmount: '3012.50', 
        remarks: 'Custom sizes confirmed',
        overridden: { poTotalAmount: false, prevAmount: false, thisMonthAmount: false, cumQty: false, cumAmount: false }
      },
      { 
        id: 3, 
        slNo: 3, 
        poItemNo: 3, 
        activityDescription: 'Supply of Insulation Rubber Sheets', 
        poQty: '200', 
        poUnit: 'Sqm', 
        poUnitRate: '25.75', 
        poTotalAmount: '5150.00', 
        prevQty: '80', 
        prevAmount: '2060.00', 
        thisMonthQty: '40', 
        thisMonthAmount: '1030.00', 
        cumQty: '120.00', 
        cumAmount: '3090.00', 
        remarks: 'Thickness 5mm',
        overridden: { poTotalAmount: false, prevAmount: false, thisMonthAmount: false, cumQty: false, cumAmount: false }
      }
    ],
    subContractorRows: [
      { id: 1, name: 'XXXXX', designation: '', signature: '', date: '03-10-2025' }
    ],
    verifiedRows: [
      { id: 1, name: '', designation: '', signature: '', date: '' }
    ],
    reviewedRows: [
      { id: 1, name: 'John', designation: 'Projects Cost Controller', signature: '', date: '' }
    ],
    certifiedRows: [
      { id: 1, name: 'Mani', designation: 'CFO', signature: '', date: '' }
    ],
    attachmentRows: [
      { id: 1, no: 1, description: 'Proof showing the Service has been completed. Egs(Delivery Note, Timesheet, Reports, Other supporting documents etc.)', file: null },
      { id: 2, no: 2, description: '', file: null },
      { id: 3, no: 3, description: 'Purchase Order', file: null }
    ]
  },
  isLoading: true, // Initial loading state

  // Load data function - for now uses config, later replace with API call
  loadData: async () => {
    set({ isLoading: true });
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In real scenario: const response = await fetch('/api/qac-data'); const data = await response.json();
    // Then set all states from data
    set((state) => ({
      ...state,
      headerRows: state.config.headerRows,
      rows: state.config.rows,
      subContractorRows: state.config.subContractorRows,
      verifiedRows: state.config.verifiedRows,
      reviewedRows: state.config.reviewedRows,
      certifiedRows: state.config.certifiedRows,
      attachmentRows: state.config.attachmentRows,
      isLoading: false
    }));
  },

  // States from config, filled dynamically
  headerRows: [],
  rows: [],
  subContractorRows: [],
  verifiedRows: [],
  reviewedRows: [],
  certifiedRows: [],
  attachmentRows: [],

  // Calculate row function
  calculateRow: (row) => {
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
  },

  // Actions
  setHeaderRows: (headerRows) => set({ headerRows }),
  setRows: (rows) => set({ rows }),
  setSubContractorRows: (subContractorRows) => set({ subContractorRows }),
  setVerifiedRows: (verifiedRows) => set({ verifiedRows }),
  setReviewedRows: (reviewedRows) => set({ reviewedRows }),
  setCertifiedRows: (certifiedRows) => set({ certifiedRows }),
  setAttachmentRows: (attachmentRows) => set({ attachmentRows }),

  handleRowsChange: (newRows) => {
    const { calculateRow } = get();
    const updatedRows = newRows.map(row => calculateRow(row));
    set({ rows: updatedRows });
  },

  addRow: () => {
    const { rows } = get();
    const newId = Math.max(...rows.map(r => r.id), 0) + 1;
    const newSlNo = rows.length + 1;
    set({ rows: [...rows, {
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
    }] });
  },

  deleteRow: (id) => {
    const { rows } = get();
    if (rows.length > 1) {
      const updatedRows = rows.filter(row => row.id !== id).map((row, idx) => ({
        ...row,
        slNo: idx + 1,
        poItemNo: idx + 1
      }));
      set({ rows: updatedRows });
    }
  },

  totalWithoutVAT: () => {
    const { rows } = get();
    return rows.reduce((sum, row) => {
      const cumAmount = parseFloat(row.cumAmount);
      return sum + (isNaN(cumAmount) ? 0 : cumAmount);
    }, 0).toFixed(2);
  },

  addHeaderRow: () => {
    const { headerRows } = get();
    const newId = Math.max(...headerRows.map(r => r.id), 0) + 1;
    set({ headerRows: [...headerRows, { id: newId, subContractor: '', poNo: '', poDate: '', fromDate: '', toDate: '', projectDescription: '', department: '', qacNo: '', qacIssuedDate: '', serviceProgress: '', certification: '', jobNo: '', currency: '' }] });
  },

  deleteHeaderRow: (id) => {
    const { headerRows } = get();
    if (headerRows.length > 1) {
      set({ headerRows: headerRows.filter(r => r.id !== id) });
    }
  },

  handleHeaderChange: (rowId, key, value) => {
    const { headerRows } = get();
    set({ headerRows: headerRows.map(row => row.id === rowId ? { ...row, [key]: value } : row) });
  },

  addSubContractorRow: () => {
    const { subContractorRows } = get();
    const newId = Math.max(...subContractorRows.map(r => r.id), 0) + 1;
    set({ subContractorRows: [...subContractorRows, { id: newId, name: '', designation: '', signature: '', date: '' }] });
  },

  deleteSubContractorRow: (id) => {
    const { subContractorRows } = get();
    if (subContractorRows.length > 1) {
      set({ subContractorRows: subContractorRows.filter(r => r.id !== id) });
    }
  },

  handleSubContractorChange: (rowId, key, value) => {
    const { subContractorRows } = get();
    set({ subContractorRows: subContractorRows.map(row => row.id === rowId ? { ...row, [key]: value } : row) });
  },

  addVerifiedRow: () => {
    const { verifiedRows } = get();
    const newId = Math.max(...verifiedRows.map(r => r.id), 0) + 1;
    set({ verifiedRows: [...verifiedRows, { id: newId, name: '', designation: '', signature: '', date: '' }] });
  },

  deleteVerifiedRow: (id) => {
    const { verifiedRows } = get();
    if (verifiedRows.length > 1) {
      set({ verifiedRows: verifiedRows.filter(r => r.id !== id) });
    }
  },

  handleVerifiedChange: (rowId, key, value) => {
    const { verifiedRows } = get();
    set({ verifiedRows: verifiedRows.map(row => row.id === rowId ? { ...row, [key]: value } : row) });
  },

  addReviewedRow: () => {
    const { reviewedRows } = get();
    const newId = Math.max(...reviewedRows.map(r => r.id), 0) + 1;
    set({ reviewedRows: [...reviewedRows, { id: newId, name: '', designation: '', signature: '', date: '' }] });
  },

  deleteReviewedRow: (id) => {
    const { reviewedRows } = get();
    if (reviewedRows.length > 1) {
      set({ reviewedRows: reviewedRows.filter(r => r.id !== id) });
    }
  },

  handleReviewedChange: (rowId, key, value) => {
    const { reviewedRows } = get();
    set({ reviewedRows: reviewedRows.map(row => row.id === rowId ? { ...row, [key]: value } : row) });
  },

  addCertifiedRow: () => {
    const { certifiedRows } = get();
    const newId = Math.max(...certifiedRows.map(r => r.id), 0) + 1;
    set({ certifiedRows: [...certifiedRows, { id: newId, name: '', designation: '', signature: '', date: '' }] });
  },

  deleteCertifiedRow: (id) => {
    const { certifiedRows } = get();
    if (certifiedRows.length > 1) {
      set({ certifiedRows: certifiedRows.filter(r => r.id !== id) });
    }
  },

  handleCertifiedChange: (rowId, key, value) => {
    const { certifiedRows } = get();
    set({ certifiedRows: certifiedRows.map(row => row.id === rowId ? { ...row, [key]: value } : row) });
  },

  addAttachmentRow: () => {
    const { attachmentRows } = get();
    const newId = Math.max(...attachmentRows.map(r => r.id), 0) + 1;
    const newNo = attachmentRows.length + 1;
    set({ attachmentRows: [...attachmentRows, { id: newId, no: newNo, description: '', file: null }] });
  },

  addAttachmentWithFile: (description, file) => {
    const { attachmentRows } = get();
    const newId = Math.max(...attachmentRows.map(r => r.id), 0) + 1;
    const newNo = attachmentRows.length + 1;
    set({ attachmentRows: [...attachmentRows, { id: newId, no: newNo, description, file }] });
  },

  deleteAttachmentRow: (id) => {
    const { attachmentRows } = get();
    if (attachmentRows.length > 1) {
      const updatedRows = attachmentRows.filter(row => row.id !== id).map((row, idx) => ({ ...row, no: idx + 1 }));
      set({ attachmentRows: updatedRows });
    }
  },

  handleAttachmentChange: (rowId, key, value) => {
    const { attachmentRows } = get();
    set({ attachmentRows: attachmentRows.map(row => row.id === rowId ? { ...row, [key]: value } : row) });
  },

  handleAttachmentFileSelect: (rowId, file) => {
    const { attachmentRows } = get();
    set({ attachmentRows: attachmentRows.map(row => row.id === rowId ? { ...row, file } : row) });
  },

  // Save function to log all data to console
  saveData: () => {
    const state = get();
    console.log('Saving QAC Data:', {
      headerRows: state.headerRows,
      rows: state.rows,
      subContractorRows: state.subContractorRows,
      verifiedRows: state.verifiedRows,
      reviewedRows: state.reviewedRows,
      certifiedRows: state.certifiedRows,
      attachmentRows: state.attachmentRows,
      totalWithoutVAT: state.totalWithoutVAT()
    });
  }
}));