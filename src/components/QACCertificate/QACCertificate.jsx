import React, { useEffect, useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import HeaderSection from './HeaderSection';
import PODataSection from './PODataSection';
import TotalRow from './TotalRow';
import FooterSection from './FooterSection';
import AttachmentsSection from './AttachmentsSection';
import { GlobalStyle } from './QACGlobalStyles';
import {
  QacContainer,
  QacWrapper,
  TitleSection,
  LogoBox,
  MainTitle,
  TitleActions,
  BtnBlue
} from './QACStyledComponents';
import { useQACStore } from '../../stores/useQACStore';
import LoaderContainer from '../Loader/LoaderContainer';

import logo from '../../assets/nature-27.jpg';

const RoleSelector = ({ role, onRoleChange }) => (
  <select
    value={role}
    onChange={(e) => onRoleChange(e.target.value)}
  >
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
);

export default function QACCertificate() {
  const [role, setRole] = useState('user');

  const {
    isLoading,
    loadData,
    headerRows,
    rows,
    subContractorRows,
    verifiedRows,
    reviewedRows,
    certifiedRows,
    attachmentRows,
    handleRowsChange,
    addRow,
    deleteRow,
    totalWithoutVAT,
    addHeaderRow,
    deleteHeaderRow,
    handleHeaderChange,
    addSubContractorRow,
    deleteSubContractorRow,
    handleSubContractorChange,
    addVerifiedRow,
    deleteVerifiedRow,
    handleVerifiedChange,
    addReviewedRow,
    deleteReviewedRow,
    handleReviewedChange,
    addCertifiedRow,
    deleteCertifiedRow,
    handleCertifiedChange,
    addAttachmentRow,
    addAttachmentWithFile,
    deleteAttachmentRow,
    handleAttachmentChange,
    saveData
  } = useQACStore();

  const isAdmin = role === 'admin';
  const isEditable = isAdmin; // For non-PO sections
  const poEditable = true; // PO always editable for user and admin

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return (
      <QacContainer>
        <QacWrapper>
          <LoaderContainer />
        </QacWrapper>
      </QacContainer>
    );
  }

  return (
    <>
      <GlobalStyle />
      <QacContainer>
        <QacWrapper>
          <TitleSection>
            <LogoBox>
              <img
                src={logo}
                alt="Company Logo"
              />
            </LogoBox>

            <MainTitle>
              QUANTITY & AMOUNT CERTIFICATE (GENERAL QAC)
            </MainTitle>

            <TitleActions>
              <RoleSelector role={role} onRoleChange={setRole} />
              <BtnBlue onClick={saveData} className="btn-blue">
                Save
              </BtnBlue>
            </TitleActions>
          </TitleSection>

          <HeaderSection
            editable={isEditable}
            headerRows={headerRows}
            onAddHeaderRow={addHeaderRow}
            onDeleteHeaderRow={deleteHeaderRow}
            onHeaderChange={handleHeaderChange}
          />

          <PODataSection
            editable={poEditable}
            rows={rows}
            onRowsChange={handleRowsChange}
            onAddRow={addRow}
            onDeleteRow={deleteRow}
          />

          <TotalRow totalWithoutVAT={totalWithoutVAT()} />

          <FooterSection
            editable={isEditable}
            subContractorRows={subContractorRows}
            verifiedRows={verifiedRows}
            reviewedRows={reviewedRows}
            certifiedRows={certifiedRows}
            onAddSubContractorRow={addSubContractorRow}
            onDeleteSubContractorRow={deleteSubContractorRow}
            onSubContractorChange={handleSubContractorChange}
            onAddVerifiedRow={addVerifiedRow}
            onDeleteVerifiedRow={deleteVerifiedRow}
            onVerifiedChange={handleVerifiedChange}
            onAddReviewedRow={addReviewedRow}
            onDeleteReviewedRow={deleteReviewedRow}
            onReviewedChange={handleReviewedChange}
            onAddCertifiedRow={addCertifiedRow}
            onDeleteCertifiedRow={deleteCertifiedRow}
            onCertifiedChange={handleCertifiedChange}
          />

          <AttachmentsSection
            editable={isEditable}
            attachmentRows={attachmentRows}
            onAddAttachmentWithFile={addAttachmentWithFile}
            onDeleteAttachmentRow={deleteAttachmentRow}
            onAttachmentChange={handleAttachmentChange}
          />
        </QacWrapper>
      </QacContainer>
    </>
  );
}