const AdminPageLoading = () => {
  return (
    <div className="pt-20 mx-auto px-2 container animate-pulse">
      <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
        <div className="w-17.5 h-17.5 rounded-xl bg-muted shrink-0" />
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <div className="h-8 w-48 rounded-lg bg-muted" />
          <div className="h-5 w-72 rounded-lg bg-muted" />
        </div>
      </div>

      <div className="relative w-full max-w-xl mx-auto mt-10 bg-card border border-border rounded-2xl p-1.5 shadow-sm grid grid-cols-4 gap-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-1 sm:px-3 rounded-xl ${i === 0 ? "bg-muted" : ""}`}
          >
            <div className="w-4 h-4 rounded bg-muted-foreground/20 shrink-0" />
            <div className="h-3 w-12 rounded bg-muted-foreground/20" />
          </div>
        ))}
      </div>

      <div className="space-y-6 my-10">
        <div className="flex justify-between items-center">
          <div className="h-7 w-32 rounded-lg bg-muted" />
          <div className="h-9 w-32 rounded-lg bg-muted" />
        </div>

        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border bg-card border-border shadow-sm"
          >
            <div className="flex sm:items-center justify-between p-5 flex-col sm:flex-row items-end gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-muted shrink-0" />
                <div className="flex flex-col gap-2">
                  <div className="h-5 w-48 rounded-lg bg-muted" />
                  <div className="h-3.5 w-24 rounded-lg bg-muted" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-lg bg-muted" />
                <div className="w-7 h-7 rounded-lg bg-muted" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPageLoading;
