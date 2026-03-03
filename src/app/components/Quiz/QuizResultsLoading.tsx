const QuizResultsLoading = ({ length=5 }: { length?: number }) => {
  return (
    <div className="min-h-screen p-6 bg-background text-foreground pt-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="rounded-3xl p-8 shadow-2xl border bg-card border-border space-y-8">
          <div className="h-8 w-1/3 mx-auto animate-pulse rounded-md bg-muted" />

          <div className="flex justify-center gap-12">
            <div className="w-36 h-36 rounded-full animate-pulse bg-muted" />

            <div className="space-y-4">
              <div className="h-12 w-32 rounded-full animate-pulse bg-muted" />
              <div className="h-6 w-24 mx-auto animate-pulse rounded-md bg-muted" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="h-16 animate-pulse rounded-md bg-muted" />
            <div className="h-16 animate-pulse rounded-md bg-muted" />
            <div className="h-16 animate-pulse rounded-md bg-muted" />
          </div>
        </div>

        <div className="rounded-3xl p-8 shadow-xl border bg-card border-border space-y-6">
          <div className="h-7 w-48 animate-pulse rounded-md bg-muted" />

          {Array.from({ length }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-muted/40 p-6 space-y-4"
            >
              <div className="h-5 w-3/4 animate-pulse rounded-md bg-muted" />
              <div className="h-4 w-1/2 animate-pulse rounded-md bg-muted" />
              <div className="h-4 w-1/3 animate-pulse rounded-md bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizResultsLoading;
