import {
  zip as _zip,
  zipObject as _zipObject,
  zipWith as _zipWith,
  fill as _fill,
} from "lodash";

export interface IBlogLink {
  title: string;
  url: string;
}

export const blogLinks = () => {
  const links = [];
  const names = [];
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/create-a-secure-app-and-great-ux-with-passwordless-authentication.html"
  );
  names.push(
    "Create a Secure App and Great UX with Passwordless Authentication"
  );
  links.push(
    "https://www.pingidentity.com/en/resources/blog/search/category/developers/page/1.html"
  );
  names.push("Developers Blog");
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/social-provider-authentication.html"
  );
  names.push(
    "How to Enable Social Provider Authentication in PingOne for Customers"
  );
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/importing-users-into-pingone-for-customers.html"
  );
  names.push("Importing Users into PingOne for Customers");
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/pkce-dust-securing-your-oauth-2-0-authorization-code-grant-type.html"
  );
  names.push(
    "PKCE Dust: Securing Your OAuth 2.0 Authorization Code Grant Type Flow"
  );
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/sign-in-with-apple.html"
  );
  names.push("Sign In with Apple");
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/token-introspection-pingone-for-customers.html"
  );
  names.push("Token Introspection with PingOne for Customers");
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/what-are-oauth-2-0-grant-types-part-2-implicit-flow.html"
  );
  names.push("What Are OAuth 2.0 Grant Types? Part 2: Implicit Flow");
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/what-are-oauth-2-0-grant-types-part-1-authorization-code-flow.html"
  );
  names.push("What Are OAuth 2.0 Grant Types? Part I: Authorization Code Flow");
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/oauth-2-0-grant-types-client-credentials.html"
  );
  names.push("What Are OAuth 2.0 Grant Types? Part III: Client Credentials");
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/what-are-the-oauth-2-0-grant-types-part-iv-resource-owner-creds.html"
  );
  names.push(
    "What Are The Oauth 2.0 Grant Types? Part IV: Resource Owner Credentials"
  );
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/what-is-a-webhook.html"
  );
  names.push("What is a Webhook and How to Use It");
  links.push(
    "https://www.pingidentity.com/en/resources/blog/post/access-denied-token-revocation.html"
  );
  names.push("Access Denied: Token Revocation");

  // const title = _fill(Array(names.length), "title");
  // const url = _fill(Array(links.length), "url");

  // const titles = _zip(title, names);
  // const urls = _zip(url, links);

  // const blogs = _zipObject(names, links);
  const blogs = _zipWith(names, links, (n, l) => {
    return { title: n, url: l };
  });

  return blogs;
};

export default blogLinks;
