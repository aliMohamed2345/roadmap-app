"use client";

const QuizDetailsLoading = ({ length = 5 }: { length?: 5 }) => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 animate-pulse">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10">
          <div className="h-10 w-2/3 rounded-md bg-muted mb-4" />
          <div className="space-y-2 mb-4">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-5/6 rounded bg-muted" />
          </div>
          <div className="h-8 w-32 rounded-full bg-muted" />
        </div>

        <div className="mb-10 rounded-2xl bg-card border border-border p-6 shadow-lg">
          <div className="flex justify-between mb-4">
            <div className="h-4 w-24 rounded bg-muted" />
            <div className="h-4 w-32 rounded bg-muted" />
          </div>
          <div className="h-3 w-full rounded-full bg-muted" />
        </div>

        <div className="flex flex-col gap-8">
          {Array.from({ length }).map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-muted" />

              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-muted" />
                <div className="h-6 w-2/3 rounded bg-muted" />
              </div>

              <div className="space-y-3">
                <div className="h-12 w-full rounded-xl bg-muted" />
                <div className="h-12 w-full rounded-xl bg-muted" />
                <div className="h-12 w-full rounded-xl bg-muted" />
                <div className="h-12 w-full rounded-xl bg-muted" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-card border border-border p-4 shadow-md">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
            <div className="h-10 w-28 rounded-lg bg-muted" />
            <div className="h-10 w-36 rounded-lg bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetailsLoading;
