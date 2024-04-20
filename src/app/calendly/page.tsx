import NotLoggedInPage from "@/app/calendly/NotLoggedInPage";
import LoggedInPage from "@/app/calendly/LoggedInPage";

import { auth } from "@/auth";

export default async function CalendlyPage() {
  const session = await auth();
  if (!session) {
    return <NotLoggedInPage />;
  }
  return <LoggedInPage session={session} />;
}
