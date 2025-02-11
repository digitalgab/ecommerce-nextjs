interface SkeletonProps {
  count: number;
  height: number;
  className: string;
  backgroundColor: string;
  rows: number;
}

export function Skeleton({
  count,
  height,
  className,
  backgroundColor,
  rows,
}: SkeletonProps) {
  const numCols = Math.ceil(count / rows);

  return (
    <div>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className={`flex gap-4 m-5 ${className}`}>
          {Array.from({ length: numCols }).map((_, colIndex) => {
            const index = rowIndex * numCols + colIndex;
            return (
              index < count && (
                <div
                  key={index}
                  className={`${backgroundColor} animate-pulse rounded-md`}
                  style={{ height, width: `${100 / numCols}%` }}
                />
              )
            );
          })}
        </div>
      ))}
    </div>
  );
}