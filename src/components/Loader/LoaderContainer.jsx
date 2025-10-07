const LoaderContainer = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
    padding: '40px'
  }}>
    <div style={{
      position: 'relative',
      width: '80px',
      height: '80px',
      marginBottom: '24px'
    }}>
      {/* Outer rotating ring */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        border: '4px solid #e0e7ff',
        borderTop: '4px solid #4f46e5',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      
      {/* Inner pulsing circle */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '50%',
        backgroundColor: '#4f46e5',
        borderRadius: '50%',
        animation: 'pulse 1.5s ease-in-out infinite'
      }} />
    </div>
    
    {/* Loading text with gradient */}
    <div style={{
      fontSize: '18px',
      fontWeight: '600',
      background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #4f46e5)',
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'gradient 2s linear infinite',
      marginBottom: '8px'
    }}>
      Loading QAC Certificate
    </div>
    
    {/* Subtitle */}
    <div style={{
      fontSize: '14px',
      color: '#64748b',
      textAlign: 'center'
    }}>
      Please wait while we prepare your document...
    </div>
    
    {/* Animated dots */}
    <div style={{
      display: 'flex',
      gap: '8px',
      marginTop: '20px'
    }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#4f46e5',
            borderRadius: '50%',
            animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`
          }}
        />
      ))}
    </div>
    
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          opacity: 0.5;
          transform: translate(-50%, -50%) scale(0.8);
        }
      }
      
      @keyframes gradient {
        0% { background-position: 0% center; }
        100% { background-position: 200% center; }
      }
      
      @keyframes bounce {
        0%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-12px);
        }
      }
    `}</style>
  </div>
);


export default LoaderContainer;