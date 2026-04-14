import { cn } from '@/lib/utils';

interface WaterBottleProps {
  fillPercentage?: number;
  className?: string;
}

export function WaterBottle({
  fillPercentage = 0,
  className,
}: WaterBottleProps) {
  const clampedFill = Math.min(100, Math.max(0, fillPercentage));

  return (
    <div className={cn('relative', className)}>
      <div className="relative w-48 h-80 md:w-56 md:h-96">
        {/* Bottle cap */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-secondary rounded-t-lg border-2 border-border" />

        {/* Bottle neck */}
        <div className="absolute top-7 left-1/2 -translate-x-1/2 w-12 h-6 bg-card border-x-2 border-border" />

        {/* Bottle body */}
        <div className="absolute top-12 inset-x-0 bottom-0 bg-card rounded-3xl border-2 border-border overflow-hidden shadow-lg">
          {/* Water fill */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-primary/80 transition-all duration-700 ease-out"
            style={{ height: `${clampedFill}%` }}>
            {/* Wave effect */}
            <div className="absolute top-0 left-0 right-0 h-4 overflow-hidden">
              <svg
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                className="w-full h-full animate-[wave_3s_ease-in-out_infinite]">
                <path
                  d="M0 5 Q 25 0, 50 5 T 100 5 V 10 H 0 Z"
                  fill="currentColor"
                  className="text-primary/80"
                />
              </svg>
            </div>
          </div>

          {/* Measurement lines */}
          <div className="absolute inset-y-4 right-3 flex flex-col justify-between">
            {[100, 75, 50, 25].map((mark) => (
              <div key={mark} className="flex items-center gap-1">
                <span className="text-[10px] text-muted-foreground font-medium">
                  {mark}%
                </span>
                <div className="w-2 h-px bg-border" />
              </div>
            ))}
          </div>
        </div>

        {/* Reflection */}
        <div className="absolute top-16 left-4 w-3 h-32 bg-foreground/5 rounded-full blur-sm" />
      </div>

      {/* Label */}
      <div className="mt-4 text-center">
        <p className="text-3xl font-bold text-primary">{clampedFill}%</p>
        <p className="text-sm text-muted-foreground">of daily goal</p>
      </div>
    </div>
  );
}
