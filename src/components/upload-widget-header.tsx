import { Minimize2 } from "lucide-react"
import { Button } from "./ui/button"

export function UploadWidgetHeader(){
    return(
        <div className="w-full p-4 py-2 bg-white/opacity border-zinc-800 border-b flex items-center justify-between">
            <span className="text-sm font-medium">Upload files </span>
            <Button size="icon" className="-mr-2">
                <Minimize2 strokeWidth={1.5} className="size-4" />
            </Button>
        </div>
    )
}