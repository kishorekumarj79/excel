import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .title-actions {
    /* Handled in styled component now */
  }

  .delete-btn {
    padding: 3px;
    background: none;
    border: none;
    color: #dc2626;
    cursor: pointer;
    border-radius: 3px;
  }
  .delete-btn:hover {
    background-color: #fee2e2;
  }
  .delete-btn:disabled {
    color: #d1d5db;
    cursor: not-allowed;
  }

 
  .btn-green {
    background-color: #16a34a;
  }
  .btn-green:hover {
    background-color: #15803d;
  }
  .btn-blue {
    background-color: #2563eb;
  }
  .btn-blue:hover {
    background-color: #1d4ed8;
  }
  .btn-purple {
    background-color: #9333ea;
  }
  .btn-purple:hover {
    background-color: #7e22ce;
  }
  .btn-orange {
    background-color: #ea580c;
  }
  .btn-orange:hover {
    background-color: #c2410c;
  }

  /* Add mobile-specific global styles if needed for other components */
  @media (max-width: 767px) {
    body {
      font-size: 14px;
    }
  }
`;