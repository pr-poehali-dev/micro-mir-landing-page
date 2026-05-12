interface WheelButtonProps {
  label: string;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'ghost';
}

/**
 * Кнопка в виде спортивного литого диска.
 * Колесо вращается при hover, замирает при отпускании.
 */
export default function WheelButton({ label, onClick, size = 'md', variant = 'primary' }: WheelButtonProps) {
  const r     = size === 'sm' ? 18 : size === 'lg' ? 28 : 22;   // внешний радиус
  const spoke = 5;                                                 // количество спиц
  const hubR  = r * 0.22;
  const rimW  = r * 0.13;
  const svgSz = (r + 4) * 2;
  const cx    = svgSz / 2;
  const cy    = svgSz / 2;

  // Строим 5-спицевый лит (Y-shape spoke pattern — спортивный)
  const spokes = Array.from({ length: spoke }, (_, i) => {
    const angle = (i / spoke) * 2 * Math.PI - Math.PI / 2;
    const spokeW = 0.22; // половина угловой ширины спицы (рад)
    const outerR = r - rimW * 0.5;
    const innerR = hubR;

    // Спица — трапеция (шире у обода, уже у ступицы)
    const o1x = cx + outerR * Math.cos(angle - spokeW * 0.55);
    const o1y = cy + outerR * Math.sin(angle - spokeW * 0.55);
    const o2x = cx + outerR * Math.cos(angle + spokeW * 0.55);
    const o2y = cy + outerR * Math.sin(angle + spokeW * 0.55);
    const i1x = cx + innerR * Math.cos(angle - spokeW * 0.25);
    const i1y = cy + innerR * Math.sin(angle - spokeW * 0.25);
    const i2x = cx + innerR * Math.cos(angle + spokeW * 0.25);
    const i2y = cy + innerR * Math.sin(angle + spokeW * 0.25);

    return `M${i1x},${i1y} L${o1x},${o1y} L${o2x},${o2y} L${i2x},${i2y} Z`;
  });

  const amber   = '#d4830a';
  const dark    = '#0d0b09';
  const chrome  = variant === 'primary' ? amber : '#5a5a5a';
  const textCol = variant === 'primary' ? dark  : '#d4830a';
  const rimFill = variant === 'primary' ? `${amber}22` : '#1a1a1a';

  const wheelId = `wheel-${label.replace(/\s+/g, '')}`;

  const labelFontSize = size === 'sm' ? 10 : size === 'lg' ? 13 : 11;
  const labelTracking = '0.18em';

  return (
    <button
      onClick={onClick}
      className="wheel-btn group flex items-center gap-3 select-none"
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
    >
      {/* ─── SVG Wheel ─── */}
      <svg
        width={svgSz}
        height={svgSz}
        viewBox={`0 0 ${svgSz} ${svgSz}`}
        className="wheel-svg"
        style={{
          filter: variant === 'primary'
            ? 'drop-shadow(0 0 6px rgba(212,131,10,0.35))'
            : 'drop-shadow(0 0 4px rgba(90,90,90,0.3))',
        }}
      >
        <g
          style={{
            transformOrigin: `${cx}px ${cy}px`,
            animation: 'wheelSpin 3s linear infinite',
          }}
          className="wheel-rotor"
        >
          {/* Outer tyre */}
          <circle cx={cx} cy={cy} r={r + 2} fill="none" stroke="#222" strokeWidth={4} />
          {/* Tyre tread marks */}
          {Array.from({ length: 24 }, (_, i) => {
            const a = (i / 24) * 2 * Math.PI;
            const tx1 = cx + (r + 0.5) * Math.cos(a);
            const ty1 = cy + (r + 0.5) * Math.sin(a);
            const tx2 = cx + (r + 3) * Math.cos(a);
            const ty2 = cy + (r + 3) * Math.sin(a);
            return <line key={i} x1={tx1} y1={ty1} x2={tx2} y2={ty2} stroke="#333" strokeWidth="1.2" />;
          })}

          {/* Rim circle */}
          <circle cx={cx} cy={cy} r={r} fill={rimFill} stroke={chrome} strokeWidth={rimW} />

          {/* Inner rim ring */}
          <circle cx={cx} cy={cy} r={r * 0.78} fill="none" stroke={chrome} strokeWidth="0.7" opacity="0.4" />

          {/* Spokes */}
          {spokes.map((d, i) => (
            <path key={i} d={d} fill={chrome} opacity="0.9" />
          ))}

          {/* Spoke shadow between spokes */}
          {Array.from({ length: spoke }, (_, i) => {
            const a = ((i + 0.5) / spoke) * 2 * Math.PI - Math.PI / 2;
            return (
              <path
                key={`gap-${i}`}
                d={`M${cx},${cy} L${cx + r * 0.95 * Math.cos(a - 0.28)},${cy + r * 0.95 * Math.sin(a - 0.28)}
                    A${r * 0.95} ${r * 0.95} 0 0 1 ${cx + r * 0.95 * Math.cos(a + 0.28)},${cy + r * 0.95 * Math.sin(a + 0.28)} Z`}
                fill={dark}
                opacity="0.6"
              />
            );
          })}

          {/* Hub */}
          <circle cx={cx} cy={cy} r={hubR} fill={dark} stroke={chrome} strokeWidth="1.5" />
          {/* Hub center dot */}
          <circle cx={cx} cy={cy} r={hubR * 0.35} fill={chrome} opacity="0.7" />
          {/* Hub bolt holes */}
          {Array.from({ length: 5 }, (_, i) => {
            const a = (i / 5) * 2 * Math.PI;
            const bx = cx + hubR * 0.62 * Math.cos(a);
            const by = cy + hubR * 0.62 * Math.sin(a);
            return <circle key={i} cx={bx} cy={by} r={hubR * 0.13} fill={chrome} opacity="0.5" />;
          })}
        </g>
      </svg>

      {/* ─── Label ─── */}
      <span
        className="font-oswald font-bold uppercase group-hover:tracking-wider transition-all duration-300"
        style={{
          fontSize: labelFontSize + 'px',
          letterSpacing: labelTracking,
          color: variant === 'primary' ? amber : '#8a8a8a',
        }}
      >
        {label}
      </span>

      <style>{`
        @keyframes wheelSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .wheel-btn:hover .wheel-rotor {
          animation-duration: 0.6s !important;
          filter: brightness(1.2);
        }
        .wheel-btn:not(:hover) .wheel-rotor {
          animation-duration: 3s;
        }
      `}</style>
    </button>
  );
}
