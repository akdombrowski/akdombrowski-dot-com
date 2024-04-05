export interface BlogURLObj {
  title: string;
  url: string;
  tag: string[];
  author: string;
}

export const BLOG_URLS: BlogURLObj[] = [
  {
    title: "What is a Webhook and How to Use It",
    url: "https://www.pingidentity.com/en/resources/blog/post/what-is-a-webhook.html",
    tag: ["webhook", "ping"],
    author: "Anthony Dombrowski",
  },
  {
    title:
      "PKCE Dust: Securing Your OAuth 2.0 Authorization Code Grant Type Flow",
    url: "https://www.pingidentity.com/en/resources/blog/post/pkce-dust-securing-your-oauth-2-0-authorization-code-grant-type.html",
    tag: [
      "pkce",
      "cybersecurity",
      "oauth",
      "grant types",
      "authz code",
      "standards",
    ],
    author: "Anthony Dombrowski",
  },
  {
    title:
      "What Are The Oauth 2.0 Grant Types? Part IV: Resource Owner Credentials",
    url: "https://www.pingidentity.com/en/resources/blog/post/what-are-the-oauth-2-0-grant-types-part-iv-resource-owner-creds.html",
    tag: [
      "cybersecurity",
      "oauth",
      "grant types",
      "resource owner credentials",
      "standards",
    ],
    author: "Anthony Dombrowski",
  },
  {
    title: "What Are OAuth 2.0 Grant Types? Part III: Client Credentials",
    url: "https://www.pingidentity.com/en/resources/blog/post/oauth-2-0-grant-types-client-credentials.html",
    tag: [
      "cybersecurity",
      "oauth",
      "grant types",
      "client credentials",
      "standards",
    ],
    author: "Anthony Dombrowski",
  },
  {
    title: "What Are OAuth 2.0 Grant Types? Part 2: Implicit Flow",
    url: "https://www.pingidentity.com/en/resources/blog/post/what-are-oauth-2-0-grant-types-part-2-implicit-flow.html",
    tag: ["cybersecurity", "oauth", "grant types", "implicit", "standards"],
    author: "Anthony Dombrowski",
  },
  {
    title: "What Are OAuth 2.0 Grant Types? Part I: Authorization Code Flow",
    url: "https://www.pingidentity.com/en/resources/blog/post/what-are-oauth-2-0-grant-types-part-1-authorization-code-flow.html",
    tag: ["cybersecurity", "oauth", "grant types", "authz code", "standards"],
    author: "Anthony Dombrowski",
  },
];

export const HELPED_BLOG_URLS: BlogURLObj[] = [
  {
    title: "Create a Secure App and Great UX with Passwordless Authentication",
    url: "https://www.pingidentity.com/en/resources/blog/post/create-a-secure-app-and-great-ux-with-passwordless-authentication.html",
    tag: ["helped"],
    author: "Andrew Morales",
  },
  {
    title: "Sign In with Apple",
    url: "https://www.pingidentity.com/en/resources/blog/post/sign-in-with-apple.html",
    tag: ["helped", "ghost writer"],
    author: "Sascha Preibisch",
  },
  {
    title:
      "How to Enable Social Provider Authentication in PingOne for Customers",
    url: "https://www.pingidentity.com/en/resources/blog/post/social-provider-authentication.html",
    tag: ["helped", "ghost writer"],
    author: "Andrew Morales",
  },
  {
    title: "Token Introspection with PingOne for Customers",
    url: "https://www.pingidentity.com/en/resources/blog/post/token-introspection-pingone-for-customers.html",
    tag: ["helped"],
    author: "Jason Evans",
  },
  {
    title: "Importing Users into PingOne for Customers",
    url: "https://www.pingidentity.com/en/resources/blog/post/importing-users-into-pingone-for-customers.html",
    tag: ["helped"],
    author: "Jason Hatchett",
  },
  {
    title: "Access Denied: Token Revocation",
    url: "https://www.pingidentity.com/en/resources/blog/post/access-denied-token-revocation.html",
    tag: ["helped"],
    author: "Jason Hatchett",
  },
];

export default BLOG_URLS;
