import * as Collapsible from "@radix-ui/react-collapsible";
import { Minimize2 } from "lucide-react";
import { UploadWidgetTitle } from "./upload-widget-title";
export function UploadWidgetMinimizedButton() {
  return (
    <Collapsible.Trigger className="w-full bg-white/opacity py-3 px-5 flex items-center justify-between">
      <UploadWidgetTitle />

      <Minimize2 strokeWidth={1.5} className="size-4 text-zinc-400 group-hover:text-zinc-100"/>
    </Collapsible.Trigger>
  );
}
