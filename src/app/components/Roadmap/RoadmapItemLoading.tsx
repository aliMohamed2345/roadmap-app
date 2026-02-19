const RoadmapItemSkeletonLoading = ({ length = 12 }: { length?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center my-5">
      {Array.from({ length }).map((_, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 animate-pulse w-full"
        >
          <div className="absolute top-0 left-0 h-1 w-full bg-muted" />

          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="h-6 w-2/3 rounded-md bg-muted" />

            <div className="h-7 w-20 rounded-full bg-muted" />
          </div>

          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-11/12 rounded bg-muted" />
            <div className="h-4 w-8/12 rounded bg-muted" />
          </div>

          <div className="h-px w-full bg-border my-5" />

          <div className="h-12 w-full sm:w-40 rounded-xl bg-muted" />
        </div>
      ))}
    </div>
  );
};

export default RoadmapItemSkeletonLoading;
