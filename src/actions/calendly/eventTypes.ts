"use server";

import type { Session } from "next-auth";

export interface CalendlyEventType {
  active: boolean;
  admin_managed: boolean;
  booking_method: string;
  color: string;
  created_at: string;
  custom_questions: any; //[Array],
  deleted_at?: string;
  description_html?: string;
  description_plain?: string;
  duration: 15;
  internal_note?: string;
  kind: "solo";
  locations?: string;
  name: "15 Minute Meeting";
  pooling_type?: string;
  position: 0;
  profile: any; //[Object],
  scheduling_url: string;
  secret: boolean;
  slug: string;
  type: string;
  updated_at: string;
  uri: string;
}

export async function getAllEventTypes(session: Session): Promise<{
  eventTypes: CalendlyEventType[] | null;
  msg?: string;
  error?: Error;
}> {
  try {
    const userURI = session.calendlyAccount?.uri;
    if (userURI) {
      const res = await fetch(
        `https://api.calendly.com/event_types/?user=${userURI}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.access_token}`,
          },
        },
      );

      if (res.ok) {
        const body = await res.json();
        return { eventTypes: body.collection };
      }

      const bodyText = await res.text();
      throw new Error("response NOT ok", {
        cause: { status: res.status, statusText: res.statusText, bodyText },
      });
    } else {
      throw new Error("no uuser uri found on session", {
        cause: { session },
      });
    }
  } catch (e) {
    console.error("couldn't fetch routing forms", "\n", e);
    return {
      eventTypes: null,
      msg: "couldn't fetch routing forms",
      error: e as Error,
    };
  }
}

export default async function getActiveEventTypes(
  session: Session,
): Promise<{ [key: string]: CalendlyEventType } | { error: string }> {
  const allEventTypes = await getAllEventTypes(session);
  if (allEventTypes.eventTypes) {
    let activeEventTypes = {};
    for (const event of allEventTypes.eventTypes) {
      if (event.active) {
        const name = event.name;
        activeEventTypes = { ...activeEventTypes, [name]: { ...event } };
      }
    }
    return activeEventTypes;
  }

  return { error: "no event types returned" };
}
