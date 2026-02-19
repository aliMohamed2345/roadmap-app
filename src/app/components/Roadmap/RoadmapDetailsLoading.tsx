"use client";

const RoadmapDetailsLoading = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-10 animate-pulse">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 hidden sm:block">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5">
            <div className="absolute top-0 left-0 h-1 w-full bg-muted" />

            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-muted" />
              <div className="h-5 w-24 rounded bg-muted" />
            </div>

            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-6 w-full rounded bg-muted" />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
            <div className="absolute top-0 left-0 h-1 w-full bg-muted" />

            <div className="h-10 w-2/3 rounded-md bg-muted mb-4" />
            <div className="space-y-2 mb-6">
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-5/6 rounded bg-muted" />
            </div>

            <div className="flex gap-3">
              <div className="h-10 w-28 rounded-xl bg-muted" />
              <div className="h-10 w-32 rounded-xl bg-muted" />
            </div>
          </div>

          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-muted" />

              <div className="flex items-center justify-between mb-4">
                <div className="h-6 w-40 rounded bg-muted" />
                <div className="h-6 w-20 rounded-full bg-muted" />
              </div>

              <div className="space-y-2 mb-4">
                <div className="h-4 w-full rounded bg-muted" />
                <div className="h-4 w-4/5 rounded bg-muted" />
              </div>

              <div className="space-y-3">
                <div className="h-12 w-full rounded-xl bg-muted" />
                <div className="h-12 w-full rounded-xl bg-muted" />
                <div className="h-12 w-full rounded-xl bg-muted" />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center">
            <div className="absolute top-0 left-0 h-1 w-full bg-muted" />

            <div className="h-28 w-28 rounded-full bg-muted mx-auto mb-4" />

            <div className="h-4 w-32 rounded bg-muted mx-auto mb-4" />
            <div className="h-4 w-40 rounded bg-muted mx-auto mb-2" />
            <div className="h-4 w-28 rounded bg-muted mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapDetailsLoading;
