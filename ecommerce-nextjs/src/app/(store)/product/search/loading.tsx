import { Skeleton } from "@/app/components/(skeleton)";

export default function Loading() {
    return (
        <Skeleton count={6} rows={2} height={380} backgroundColor="bg-zinc-50/10" className={"px-10 mt-10"} />
    );
  }