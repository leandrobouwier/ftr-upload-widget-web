import { ImageUp } from "lucide-react";

export function UploadWidgetUploadItem(){
    return(
        <div className="p-3 rounded-lg flex flex-col gap-3 shadow-shape-content bg-white/opacity relative overflow-hidden">
            <div className="flex flex-col gap-1">
                <span className="text-xs font-medium flex items-center gap-1">
                    <ImageUp className="size-3 text-zinc-300" strokeWidth={1.5} />
                    <span className="text-xxs">screenshot.png</span>
                </span>
                <span></span>
            </div>
        </div>
    )
}