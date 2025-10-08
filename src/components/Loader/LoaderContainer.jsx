import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0.8);
  }
`;

const gradient = keyframes`
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
`;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-12px);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;

  @media (min-width: 640px) {
    padding: 40px;
  }

  @media (min-width: 1024px) {
    padding: 60px;
  }

  @media (min-width: 1440px) {
    padding: 80px;
  }
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 20px;

  @media (min-width: 640px) {
    width: 80px;
    height: 80px;
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) {
    width: 120px;
    height: 120px;
    margin-bottom: 36px;
  }

  @media (min-width: 1440px) {
    width: 140px;
    height: 140px;
    margin-bottom: 40px;
  }
`;

const OuterRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid #e0e7ff;
  border-top: 3px solid #4f46e5;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  @media (min-width: 640px) {
    border-width: 4px;
  }

  @media (min-width: 1024px) {
    border-width: 6px;
  }

  @media (min-width: 1440px) {
    border-width: 7px;
  }
`;

const InnerCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background-color: #4f46e5;
  border-radius: 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const LoadingText = styled.div`
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(90deg, #4f46e5, #7c3aed, #4f46e5);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradient} 2s linear infinite;
  margin-bottom: 8px;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
    margin-bottom: 14px;
  }

  @media (min-width: 1440px) {
    font-size: 28px;
    margin-bottom: 16px;
  }
`;

const SubtitleText = styled.div`
  font-size: 12px;
  color: #64748b;
  text-align: center;
  max-width: 90%;
  padding: 0 10px;

  @media (min-width: 640px) {
    font-size: 14px;
    max-width: 100%;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 16px;

  @media (min-width: 640px) {
    gap: 8px;
    margin-top: 20px;
  }

  @media (min-width: 1024px) {
    gap: 12px;
    margin-top: 28px;
  }

  @media (min-width: 1440px) {
    gap: 14px;
    margin-top: 32px;
  }
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  background-color: #4f46e5;
  border-radius: 50%;
  animation: ${bounce} 1.4s ease-in-out ${props => props.$delay}s infinite;

  @media (min-width: 640px) {
    width: 8px;
    height: 8px;
  }

  @media (min-width: 1024px) {
    width: 12px;
    height: 12px;
  }

  @media (min-width: 1440px) {
    width: 14px;
    height: 14px;
  }
`;

const LoaderContainer = () => (
  <LoaderWrapper>
    <SpinnerContainer>
      <OuterRing />
      <InnerCircle />
    </SpinnerContainer>

    <LoadingText>
      Loading QAC Certificate
    </LoadingText>

    <SubtitleText>
      Please wait while we prepare your document...
    </SubtitleText>

    <DotsContainer>
      {[0, 1, 2].map((i) => (
        <Dot key={i} $delay={i * 0.16} />
      ))}
    </DotsContainer>
  </LoaderWrapper>
);

export default LoaderContainer;
