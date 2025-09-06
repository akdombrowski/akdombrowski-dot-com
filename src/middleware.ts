export { auth as middleware } from "@/auth";

export const config = {
	matcher: [
		"/((?!_next|static|favicon.ico).*)",
	],
};
