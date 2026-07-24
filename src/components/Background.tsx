export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ zIndex: 0 }}>
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Ambient red glow bottom-left */}
      <div
        className="blob absolute"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(196,0,33,0.12) 0%, transparent 70%)',
          bottom: '-100px',
          left: '-100px',
          animationDelay: '0s',
          animationDuration: '14s',
        }}
      />

      {/* Ambient glow top-right */}
      <div
        className="blob absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(196,0,33,0.08) 0%, transparent 70%)',
          top: '10%',
          right: '-80px',
          animationDelay: '5s',
          animationDuration: '18s',
        }}
      />

      {/* Light beam 1 */}
      <div
        className="light-beam"
        style={{ left: '20%', animationDelay: '0s', animationDuration: '10s' }}
      />
      <div
        className="light-beam"
        style={{ left: '60%', animationDelay: '4s', animationDuration: '12s' }}
      />
    </div>
  );
}
