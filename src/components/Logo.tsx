interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

/**
 * Логотип МИКРОМИР:
 * — чёрный фон, жирные белые буквы одного размера
 * — красная лупа поверх букв "ОМ" (позиции 4–5 в слове МИКРОМИР)
 */
export default function Logo({ size = 'md', onClick }: LogoProps) {
  const fontSize = size === 'sm' ? 13 : size === 'lg' ? 22 : 17;
  const letterW  = size === 'sm' ? 10 : size === 'lg' ? 17 : 13;
  const padX     = size === 'sm' ? 6  : size === 'lg' ? 10 : 8;
  const padY     = size === 'sm' ? 4  : size === 'lg' ? 7  : 5;
  const text     = 'МИКРОМИР';

  // Ширина и высота блока
  const totalW = padX * 2 + letterW * text.length + (text.length - 1) * 1.5;
  const totalH = fontSize + padY * 2;

  // Позиция буквы О (индекс 4) и М (индекс 5) в строке МИКРОМИР
  // М=0 И=1 К=2 Р=3 О=4 М=5 И=6 Р=7
  const oIdx = 4;
  const mIdx = 5;
  const letterStep = letterW + 1.5;
  const oX = padX + oIdx * letterStep;
  const mX = padX + mIdx * letterStep;
  const omCenterX = (oX + mX + letterW) / 2;
  const omCenterY = totalH / 2;

  // Лупа — круг охватывает обе буквы ОМ
  const lupaR   = size === 'sm' ? 11 : size === 'lg' ? 19 : 15;
  const lupaStroke = size === 'sm' ? 2   : size === 'lg' ? 3  : 2.5;
  // Ручка лупы — вправо-вниз
  const handleLen = lupaR * 0.65;
  const handleAngle = Math.PI / 4; // 45°
  const hx1 = omCenterX + lupaR * Math.cos(handleAngle);
  const hy1 = omCenterY + lupaR * Math.sin(handleAngle);
  const hx2 = hx1 + handleLen * Math.cos(handleAngle);
  const hy2 = hy1 + handleLen * Math.sin(handleAngle);

  const Tag = onClick ? 'button' : 'div';

  return (
    <Tag
      onClick={onClick}
      className={onClick ? 'cursor-pointer group select-none' : 'select-none'}
      style={{ lineHeight: 0 }}
    >
      <svg
        width={totalW}
        height={totalH}
        viewBox={`0 0 ${totalW} ${totalH}`}
        style={{ display: 'block' }}
      >
        {/* Чёрный фон */}
        <rect x={0} y={0} width={totalW} height={totalH} fill="#0d0b09" />

        {/* Буквы МИКРОМИР — белые, жирные, одинакового размера */}
        <text
          x={padX}
          y={padY + fontSize * 0.82}
          fontFamily="'Oswald', sans-serif"
          fontWeight="700"
          fontSize={fontSize}
          fill="#ffffff"
          letterSpacing="1.5"
          dominantBaseline="auto"
        >
          {text}
        </text>

        {/* Красная лупа поверх ОМ */}
        {/* Полупрозрачный красный залив внутри линзы */}
        <circle
          cx={omCenterX}
          cy={omCenterY}
          r={lupaR}
          fill="#cc1c1c"
          fillOpacity="0.18"
        />
        {/* Обводка лупы */}
        <circle
          cx={omCenterX}
          cy={omCenterY}
          r={lupaR}
          fill="none"
          stroke="#cc1c1c"
          strokeWidth={lupaStroke}
        />
        {/* Блик — маленькая дуга в левом верхнем секторе */}
        <path
          d={`M ${omCenterX - lupaR * 0.55} ${omCenterY - lupaR * 0.3}
              A ${lupaR * 0.62} ${lupaR * 0.62} 0 0 1 ${omCenterX - lupaR * 0.15} ${omCenterY - lupaR * 0.65}`}
          fill="none"
          stroke="#ff4444"
          strokeWidth={lupaStroke * 0.7}
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Ручка лупы */}
        <line
          x1={hx1} y1={hy1}
          x2={hx2} y2={hy2}
          stroke="#cc1c1c"
          strokeWidth={lupaStroke * 1.15}
          strokeLinecap="round"
        />
      </svg>
    </Tag>
  );
}
