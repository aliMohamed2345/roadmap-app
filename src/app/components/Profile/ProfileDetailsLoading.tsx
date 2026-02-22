const ProfileDetailsLoading = () => {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="grid gap-4">
        {Array.from({ length :4}).map((_, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 w-full"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 h-1 w-full bg-muted" />

            {/* Header Row */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="space-y-2 w-2/3">
                <div className="h-5 w-full rounded-md bg-muted" />
                <div className="h-4 w-3/4 rounded bg-muted" />
              </div>

              <div className="h-7 w-16 rounded-full bg-muted" />
            </div>

            {/* Content Lines */}
            <div className="space-y-2 mb-5">
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-11/12 rounded bg-muted" />
            </div>

            {/* Footer Button Skeleton */}
            <div className="h-11 w-36 rounded-xl bg-muted" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDetailsLoading;
