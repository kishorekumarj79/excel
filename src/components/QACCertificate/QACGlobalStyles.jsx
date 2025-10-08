import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    -webkit-text-size-adjust: 100%;
    touch-action: pan-y;
  }

  .delete-btn {
    padding: 8px;
    background: none;
    border: none;
    color: #dc2626;
    cursor: pointer;
    border-radius: 3px;
    min-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .delete-btn:hover {
    background-color: #fee2e2;
  }
  .delete-btn:disabled {
    color: #d1d5db;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    .delete-btn {
      padding: 3px;
      min-width: auto;
      min-height: auto;
    }
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

  @media (max-width: 767px) {
    body {
      font-size: 14px;
    }
  }
`;