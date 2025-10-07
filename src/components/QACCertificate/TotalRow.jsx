import React from 'react';
import { TotalRowStyled, TotalLabel, TotalFill, TotalAmount } from './TotalRowStyle';

export default function TotalRow({ totalWithoutVAT }) {
  return (
    <TotalRowStyled>
      <TotalLabel>Total WITHOUT VAT</TotalLabel>
      <TotalFill></TotalFill>
      <TotalAmount>{totalWithoutVAT}</TotalAmount>
    </TotalRowStyled>
  );
}