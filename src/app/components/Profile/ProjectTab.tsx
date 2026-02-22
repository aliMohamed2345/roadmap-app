import { progressData } from "@/app/data"
const ProjectTab = () => {
  return (
     <div className="space-y-4">
                    {progressData.project.map((project) => (
                      <div
                        key={project.project}
                        className="rounded-2xl border border-border bg-muted/60 p-5 hover:border-primary transition"
                      >
                        <p className="font-semibold mb-2">
                          Project: {project.project}
                        </p>
    
                        <p className="text-sm text-muted-foreground">
                          Completed Steps: {project.completedCount} /{" "}
                          {project.totalSteps}
                        </p>
                      </div>
                    ))}
                  </div>
  )
}

export default ProjectTab