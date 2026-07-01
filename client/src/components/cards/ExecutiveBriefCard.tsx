import Card from "../ui/Card";
import Button from "../ui/Button";

interface ExecutiveBriefCardProps {
  greeting: string;
  headline: string;
  description: string;
  actionLabel: string;
  confidence: number;
  updatedAt: string;
}

export default function ExecutiveBriefCard({
  greeting,
  headline,
  description,
  actionLabel,
  confidence,
  updatedAt,
}: ExecutiveBriefCardProps) {
  return (
    <Card
      variant="elevated"
      className="p-10"
    >
      <div className="space-y-8">

        <div>

          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            {greeting}
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            {headline}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-400">
            {description}
          </p>

        </div>

        <div className="flex items-center gap-4">

          <Button>
            {actionLabel}
          </Button>

          <span className="text-sm text-slate-500">
            Confidence {confidence}%
          </span>

          <span className="text-sm text-slate-400">
            •
          </span>

          <span className="text-sm text-slate-500">
            Updated {updatedAt}
          </span>

        </div>

      </div>
    </Card>
  );
}