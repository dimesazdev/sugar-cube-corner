import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { Cube } from "./Cube";

type BurstCube = {
  color: string;
  left: string;
  top: string;
  x: string;
  y: string;
  rotate: number;
  size: number;
  delay: string;
};

const burstCubes: BurstCube[] = [
  {
    color: "var(--pink)",
    left: "10%",
    top: "12%",
    x: "-18px",
    y: "-20px",
    rotate: -18,
    size: 13,
    delay: "0ms",
  },
  {
    color: "var(--yellow)",
    left: "26%",
    top: "-6%",
    x: "-10px",
    y: "-28px",
    rotate: 14,
    size: 15,
    delay: "35ms",
  },
  {
    color: "var(--mint)",
    left: "46%",
    top: "6%",
    x: "4px",
    y: "-26px",
    rotate: -8,
    size: 12,
    delay: "70ms",
  },
  {
    color: "var(--sky)",
    left: "68%",
    top: "-4%",
    x: "14px",
    y: "-24px",
    rotate: 20,
    size: 14,
    delay: "25ms",
  },
  {
    color: "var(--lavender)",
    left: "90%",
    top: "18%",
    x: "20px",
    y: "-12px",
    rotate: -24,
    size: 13,
    delay: "55ms",
  },
  {
    color: "var(--coral)",
    left: "8%",
    top: "78%",
    x: "-18px",
    y: "8px",
    rotate: 16,
    size: 14,
    delay: "80ms",
  },
  {
    color: "var(--yellow)",
    left: "52%",
    top: "92%",
    x: "2px",
    y: "18px",
    rotate: -16,
    size: 12,
    delay: "45ms",
  },
  {
    color: "var(--pink)",
    left: "86%",
    top: "74%",
    x: "18px",
    y: "10px",
    rotate: 12,
    size: 15,
    delay: "95ms",
  },
];

type CubeBurstLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

type CubeBurstButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

function CubeBurstParticles() {
  return (
    <span className="cube-burst-particles" aria-hidden="true">
      {burstCubes.map((cube, index) => (
        <span
          key={`${cube.color}-${index}`}
          className="cube-burst-particle"
          style={
            {
              "--burst-left": cube.left,
              "--burst-top": cube.top,
              "--burst-x": cube.x,
              "--burst-y": cube.y,
              "--burst-delay": cube.delay,
            } as CSSProperties
          }
        >
          <Cube color={cube.color} size={cube.size} rotate={cube.rotate} />
        </span>
      ))}
    </span>
  );
}

export function CubeBurstLink({ children, className = "", ...props }: CubeBurstLinkProps) {
  return (
    <a {...props} className={`cube-burst-trigger ${className}`}>
      <span className="cube-burst-label">{children}</span>
      <CubeBurstParticles />
    </a>
  );
}

export function CubeBurstButton({
  children,
  className = "",
  type = "button",
  ...props
}: CubeBurstButtonProps) {
  return (
    <button {...props} type={type} className={`cube-burst-trigger ${className}`}>
      <span className="cube-burst-label">{children}</span>
      <CubeBurstParticles />
    </button>
  );
}
