"use client";

const ProjectDetailsLoading = ({ length = 5 }: { length?: number }) => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-5xl animate-pulse">
      <div className="relative rounded-3xl border border-border bg-card/70 p-8 shadow-lg mb-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-1 w-full bg-muted" />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
            <div className="space-y-4 w-full">
              <div className="h-10 w-2/3 rounded-md bg-muted" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-muted" />
                <div className="h-4 w-5/6 rounded bg-muted" />
              </div>
            </div>

            <div className="h-8 w-24 rounded-full bg-muted shrink-0" />
          </div>

          <div className="flex flex-wrap gap-3">
            {Array.from({ length }).map((_, i) => (
              <div key={i} className="h-6 w-20 rounded-full bg-muted" />
            ))}

            <div className="ml-auto h-6 w-24 rounded bg-muted" />
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-lg mb-12">
        <div className="flex justify-between mb-4">
          <div className="h-4 w-24 rounded bg-muted" />
          <div className="h-4 w-20 rounded bg-muted" />
        </div>

        <div className="h-3 w-full rounded-full bg-muted" />
      </div>

      <div>
        <div className="h-8 w-48 rounded bg-muted mb-6" />

        <div className="flex flex-col gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-border bg-card/70 p-6"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-muted" />

              <div className="flex gap-5 items-start">
                <div className="h-7 w-7 rounded-full bg-muted shrink-0" />

                <div className="space-y-3 w-full">
                  <div className="h-5 w-2/3 rounded bg-muted" />
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-muted" />
                    <div className="h-4 w-4/5 rounded bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsLoading;
