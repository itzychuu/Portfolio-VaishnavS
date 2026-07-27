export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ zIndex: 0 }}>
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* ── TOP THIRD ── */}
      {/* Red glow — top-left */}
      <div
        className="blob absolute"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(169,28,38,0.18) 0%, transparent 70%)',
          top: '-180px',
          left: '-160px',
          animationDelay: '0s',
          animationDuration: '14s',
        }}
      />
      {/* Teal glow — top-right */}
      <div
        className="blob absolute"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(24,143,135,0.15) 0%, transparent 70%)',
          top: '-100px',
          right: '-120px',
          animationDelay: '5s',
          animationDuration: '18s',
        }}
      />

      {/* ── MID THIRD ── */}
      {/* Teal glow — mid-left */}
      <div
        className="blob absolute"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(24,143,135,0.10) 0%, transparent 70%)',
          top: '38%',
          left: '-120px',
          animationDelay: '3s',
          animationDuration: '20s',
        }}
      />
      {/* Red glow — mid-right */}
      <div
        className="blob absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(169,28,38,0.10) 0%, transparent 70%)',
          top: '45%',
          right: '-100px',
          animationDelay: '8s',
          animationDuration: '16s',
        }}
      />

      {/* ── BOTTOM THIRD ── */}
      {/* Red glow — bottom-left */}
      <div
        className="blob absolute"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(169,28,38,0.14) 0%, transparent 70%)',
          bottom: '-100px',
          left: '-120px',
          animationDelay: '6s',
          animationDuration: '17s',
        }}
      />
      {/* Teal glow — bottom-right */}
      <div
        className="blob absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(24,143,135,0.12) 0%, transparent 70%)',
          bottom: '-80px',
          right: '-100px',
          animationDelay: '11s',
          animationDuration: '22s',
        }}
      />

      {/* Light beams */}
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

