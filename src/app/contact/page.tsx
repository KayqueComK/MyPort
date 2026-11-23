import ContactClient from "@/components/contact/ContactClient";
import { getGitHubContributions } from "@/lib/github-contributions";

export const revalidate = 3600;

export default async function ContactPage() {
  const contributions = await getGitHubContributions("KayqueComK");
  const fallbackEndDate = new Date().toISOString().slice(0, 10);

  return (
    <ContactClient
      contributions={contributions}
      fallbackEndDate={fallbackEndDate}
    />
  );
}
