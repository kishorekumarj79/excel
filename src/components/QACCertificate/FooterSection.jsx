import React from 'react';
import { FooterSectionStyled, FooterColumn, FooterTitle, FooterSubtitle, SmallBtn } from './FooterSectionStyle';
import SubContractorTable from './SubContractorTable';
import VerifiedByTable from './VerifiedByTable';
import ReviewedByTable from './ReviewedByTable';
import CertifiedByTable from './CertifiedByTable';
import { Plus } from 'lucide-react';

const footerColumns = [
  { key: 'name', name: 'Name', width: 200 },
  { key: 'designation', name: 'Designation', width: 250 },
  { key: 'signature', name: 'Signature', width: 150 },
  { key: 'date', name: 'Date', width: 150 }
];

export default function FooterSection({
  editable,
  subContractorRows,
  verifiedRows,
  reviewedRows,
  certifiedRows,
  onAddSubContractorRow,
  onDeleteSubContractorRow,
  onSubContractorChange,
  onAddVerifiedRow,
  onDeleteVerifiedRow,
  onVerifiedChange,
  onAddReviewedRow,
  onDeleteReviewedRow,
  onReviewedChange,
  onAddCertifiedRow,
  onDeleteCertifiedRow,
  onCertifiedChange
}) {
  return (
    <FooterSectionStyled style={{ display: 'flex' }}>
      <FooterColumn style={{ flex: 1 }}>
        <FooterTitle>Sub Contractor / Supplier:</FooterTitle>
        <FooterSubtitle>Prepared by :</FooterSubtitle>
        <SubContractorTable
          editable={editable}
          rows={subContractorRows}
          columns={footerColumns}
          onChange={onSubContractorChange}
          onDeleteRow={onDeleteSubContractorRow}
        />
        {editable && (
          <SmallBtn onClick={onAddSubContractorRow} className="btn-green">
            <Plus size={12} /> Add
          </SmallBtn>
        )}
      </FooterColumn>

      <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
        <FooterTitle style={{ textAlign: 'center' }}>Customer / Verification / Certification</FooterTitle>
                <hr style={{ width: '100%', border: 'none', height: '1px', backgroundColor: 'black', margin: '0px 0' }} />
        <div style={{ display: 'flex', width: '100%' }}>
          <FooterColumn style={{ flex: 1 }}>
            <FooterSubtitle>Verified By: Requestor</FooterSubtitle>
            <VerifiedByTable
              editable={editable}
              rows={verifiedRows}
              columns={footerColumns}
              onChange={onVerifiedChange}
              onDeleteRow={onDeleteVerifiedRow}
            />
            {editable && (
              <SmallBtn onClick={onAddVerifiedRow} className="btn-blue">
                <Plus size={12} /> Add
              </SmallBtn>
            )}
            
            <FooterSubtitle style={{ marginTop: '15px' }}>Reviewed By: Cost Controller</FooterSubtitle>
            <ReviewedByTable
              editable={editable}
              rows={reviewedRows}
              columns={footerColumns}
              onChange={onReviewedChange}
              onDeleteRow={onDeleteReviewedRow}
            />
            {editable && (
              <SmallBtn onClick={onAddReviewedRow} className="btn-purple">
                <Plus size={12} /> Add
              </SmallBtn>
            )}
          </FooterColumn>

          <FooterColumn style={{ flex: 1 }}>
            <FooterSubtitle>Certified By:</FooterSubtitle>
            <CertifiedByTable
              editable={editable}
              rows={certifiedRows}
              columns={footerColumns}
              onChange={onCertifiedChange}
              onDeleteRow={onDeleteCertifiedRow}
            />
            {editable && (
              <SmallBtn onClick={onAddCertifiedRow} className="btn-orange">
                <Plus size={12} /> Add
              </SmallBtn>
            )}
          </FooterColumn>
        </div>
      </div>
    </FooterSectionStyled>
  );
}