const ProfileDetailsLoading = () => {
  return (
    <div className="pt-24 px-6 pb-12 text-foreground space-y-8 animate-pulse">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-xl p-8">
        <div className="absolute inset-0 opacity-20 bg-linear-to-r from-neon-cyan via-neon-purple to-neon-pink" />

        <div className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="h-32 w-32 rounded-2xl bg-muted shrink-0" />

          <div className="flex-1 text-center md:text-left space-y-3">
            <div className="h-8 w-48 bg-muted rounded-md mx-auto md:mx-0" />
            <div className="h-4 w-32 bg-muted rounded-md mx-auto md:mx-0" />
            <div className="h-4 w-64 bg-muted rounded-md mx-auto md:mx-0" />
            <div className="h-4 w-24 bg-muted rounded-md mx-auto md:mx-0" />

            <div className="flex flex-wrap justify-center md:justify-start gap-5 text-sm text-muted-foreground">
              <div className="h-4 w-40 bg-muted rounded-md" />
            </div>
          </div>

          <div className="h-10 w-32 bg-muted rounded-xl" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-6 shadow-lg space-y-5">
          <div className="h-6 w-32 bg-muted rounded-md" />
          <div className="space-y-4">
            <div className="h-12 w-full bg-muted rounded-2xl" />
            <div className="h-12 w-full bg-muted rounded-2xl" />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="flex gap-2 rounded-2xl border border-border bg-card/80 backdrop-blur p-2 text-sm shadow-sm">
            <div className="h-8 w-20 bg-muted rounded-xl" />
            <div className="h-8 w-20 bg-muted rounded-xl" />
            <div className="h-8 w-20 bg-muted rounded-xl" />
          </div>

          <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-6 space-y-5 shadow-lg">
            <div className="h-20 w-full bg-muted rounded-xl" />
            <div className="h-20 w-full bg-muted rounded-xl" />
            <div className="h-20 w-full bg-muted rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsLoading;
