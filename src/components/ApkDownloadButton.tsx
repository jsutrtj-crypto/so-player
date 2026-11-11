import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getApkDownloadUrl, latestVersion, type AppVersion } from "@/data/versions";

export function ApkDownloadButton({ version = latestVersion, className, onClick }: { version?: AppVersion; className?: string; onClick?: () => void }) {
  const url = getApkDownloadUrl(version);
  const content = <><Download className="size-4 shrink-0" aria-hidden="true" />Download APK</>;
  const classes = cn("btn-glow h-auto min-h-11 rounded-xl px-5 py-3 font-bold text-primary-foreground hover:brightness-105", className);
  return url ? <Button asChild className={classes}><a href={url} onClick={onClick}>{content}</a></Button> :
    <Button className={classes} onClick={() => toast.info("The APK download is not available yet.")}>{content}</Button>;
}