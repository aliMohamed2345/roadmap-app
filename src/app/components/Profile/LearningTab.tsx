import { progressData } from "@/app/data"
const LearningTab = () => {
  return (
       <div className="space-y-4">
                    {progressData.roadmap.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-border bg-muted/60 p-5 hover:border-primary transition"
                      >
                        <p className="font-semibold mb-2">
                          Roadmap: {item.roadmap}
                        </p>
    
                        <p className="text-sm text-muted-foreground">
                          Completed Sections: {item.completedSections.length} /{" "}
                          {item.numberOfAllSections}
                        </p>
                      </div>
                    ))}
                  </div>
  )
}

export default LearningTab