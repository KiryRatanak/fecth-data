import { Skeleton } from "./ui/skeleton";

export default function LoadingCard() {
    return (
        <div>

            {[...Array(8)].map((_, index) => (
                <div key={index} className="flex flex-col space-y-3">
                    <Skeleton className="h-31.25 w-62.5 rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-62.5" />
                        <Skeleton className="h-4 w-50" />
                    </div>
                </div>
            ))}


        </div>
    )
}