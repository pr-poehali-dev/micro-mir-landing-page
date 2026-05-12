interface GearButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  label?: string;
}

function GearSVG({ size, teeth, className }: { size: number; teeth: number; className: string }) {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 2;
  const innerR = outerR * 0.72;
  const holeR  = outerR * 0.28;
  const toothH = outerR - innerR;
  const toothW = (2 * Math.PI * innerR) / teeth * 0.38;

  const pts: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const angle = (i / teeth) * 2 * Math.PI - Math.PI / 2;
    const nextAngle = ((i + 1) / teeth) * 2 * Math.PI - Math.PI / 2;
    const mid = angle + (nextAngle - angle) / 2;
    const halfW = toothW / 2 / innerR;

    // valley left
    pts.push(`${cx + innerR * Math.cos(angle - halfW * 0.5)},${cy + innerR * Math.sin(angle - halfW * 0.5)}`);
    // tooth left base
    pts.push(`${cx + innerR * Math.cos(angle + halfW * 0.3)},${cy + innerR * Math.sin(angle + halfW * 0.3)}`);
    // tooth left top
    pts.push(`${cx + (innerR + toothH) * Math.cos(mid - halfW * 0.55)},${cy + (innerR + toothH) * Math.sin(mid - halfW * 0.55)}`);
    // tooth right top
    pts.push(`${cx + (innerR + toothH) * Math.cos(mid + halfW * 0.55)},${cy + (innerR + toothH) * Math.sin(mid + halfW * 0.55)}`);
    // tooth right base
    pts.push(`${cx + innerR * Math.cos(nextAngle - halfW * 0.3)},${cy + innerR * Math.sin(nextAngle - halfW * 0.3)}`);
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className}>
      {/* Gear body */}
      <polygon
        points={pts.join(' ')}
        fill="none"
        stroke="#d4830a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Filled gear body background */}
      <polygon
        points={pts.join(' ')}
        fill="#0d0b09"
        opacity="0.8"
      />
      {/* Spoke lines */}
      {[0, 1, 2, 3].map((n) => {
        const a = (n / 4) * Math.PI * 2;
        return (
          <line
            key={n}
            x1={cx + holeR * Math.cos(a)}
            y1={cy + holeR * Math.sin(a)}
            x2={cx + innerR * 0.85 * Math.cos(a)}
            y2={cy + innerR * 0.85 * Math.sin(a)}
            stroke="#d4830a"
            strokeWidth="1"
            opacity="0.5"
          />
        );
      })}
      {/* Center hole */}
      <circle cx={cx} cy={cy} r={holeR} fill="#0d0b09" stroke="#d4830a" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={holeR * 0.35} fill="#d4830a" opacity="0.6" />
    </svg>
  );
}

export default function GearButton({ direction, onClick, label }: GearButtonProps) {
  const isPrev = direction === 'prev';

  return (
    <button
      onClick={onClick}
      className="gear-btn group relative flex items-center gap-0 select-none"
      aria-label={label || (isPrev ? 'Предыдущий' : 'Следующий')}
    >
      {/* ── PREV: big gear left + small gear right ── */}
      {isPrev && (
        <div className="relative flex items-center">
          {/* big */}
          <div className="gear-spin-ccw">
            <GearSVG size={56} teeth={12} className="" />
          </div>
          {/* small — meshed, sits at right edge of big */}
          <div className="gear-spin-cw -ml-1 mt-3">
            <GearSVG size={36} teeth={8} className="" />
          </div>
          {/* Arrow inside big gear */}
          <div className="absolute left-[4px] top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="#d4830a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}

      {/* Label */}
      {label && (
        <span className="font-mono-ibm text-[10px] tracking-[0.25em] text-muted-foreground uppercase mx-3 group-hover:text-[#d4830a] transition-colors">
          {label}
        </span>
      )}

      {/* ── NEXT: small gear left + big gear right ── */}
      {!isPrev && (
        <div className="relative flex items-center">
          {/* small */}
          <div className="gear-spin-cw mt-3">
            <GearSVG size={36} teeth={8} className="" />
          </div>
          {/* big */}
          <div className="gear-spin-ccw -ml-1">
            <GearSVG size={56} teeth={12} className="" />
          </div>
          {/* Arrow inside big gear */}
          <div className="absolute right-[4px] top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4L12 9L7 14" stroke="#d4830a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
    </button>
  );
}
