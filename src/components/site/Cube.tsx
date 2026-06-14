type Props = {
  color: string;
  size?: number;
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function Cube({ color, size = 80, rotate = -8, className, style }: Props) {
  const s = size;
  const top = `oklch(from ${color} calc(l + 0.06) c h)`;
  const right = `oklch(from ${color} calc(l - 0.12) c h)`;
  return (
    <div
      className={className}
      style={{
        width: s,
        height: s,
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(0 8px 16px rgb(0 0 0 / 0.08))",
        ...style,
      }}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
        <polygon points="20,30 50,15 80,30 50,45" fill={top} />
        <polygon points="20,30 50,45 50,85 20,70" fill={color} />
        <polygon points="80,30 50,45 50,85 80,70" fill={right} />
      </svg>
    </div>
  );
}
