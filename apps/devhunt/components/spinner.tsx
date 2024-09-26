import { cn } from "lib/utils";

export default function Spinner({ className = "" }) {
  return (
    <div
      className={cn(
        "transform -translate-x-1/2 spinner w-14 h-14 sm:w-24 sm:h-24 rounded-full border-t-4 border-r-2 border-t-[#3e91f0] border-r-transparent box-border inline-block",
        className
      )}
    />
  );
}
