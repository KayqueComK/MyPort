import type { ContributionDay } from "@/components/ui/contribution-skyline";

interface ContributionsApiResponse {
  contributions?: Array<{ date?: unknown; count?: unknown }>;
}

export async function getGitHubContributions(
  username: string
): Promise<ContributionDay[] | undefined> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
      {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(5000),
      }
    );
    if (!res.ok) return undefined;
    const json = (await res.json()) as ContributionsApiResponse;
    if (!Array.isArray(json.contributions) || json.contributions.length === 0) {
      return undefined;
    }
    const days: ContributionDay[] = [];
    for (const item of json.contributions) {
      if (
        typeof item?.date === "string" &&
        typeof item?.count === "number" &&
        Number.isFinite(item.count)
      ) {
        days.push({ date: item.date, count: item.count });
      }
    }
    return days.length > 0 ? days : undefined;
  } catch {
    return undefined;
  }
}
