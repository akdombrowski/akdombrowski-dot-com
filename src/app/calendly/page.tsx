import { auth } from "@/auth";

import NotLoggedInPage from "@/app/calendly/NotLoggedInPage";
import LoggedInPage from "@/app/calendly/LoggedInPage";

export default async function CalendlyPage() {
  const session = await auth();

  if (!session) {
    return <NotLoggedInPage />;
  }

  return <LoggedInPage />;
}
