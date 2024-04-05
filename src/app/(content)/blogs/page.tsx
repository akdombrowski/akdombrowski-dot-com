import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import {
  BLOG_URLS,
  HELPED_BLOG_URLS,
  type BlogURLObj,
} from "@/components/blogs/BlogURLs";

const DEBUG = false;

export default function Blogs() {
  const numBlogs = BLOG_URLS.length;
  const numHelpedBlogs = HELPED_BLOG_URLS.length;

  if (DEBUG) {
    console.log("numBlogs:", numBlogs);
    console.log("numHelpedBlogs:", numHelpedBlogs);
    console.log(
      "( numBlogs === numHelpedBlogs )",
      "=",
      "(",
      numBlogs,
      "===",
      numHelpedBlogs,
      ")",
    );
  }
  const blogLink = (blogs: BlogURLObj[]) => {
    return blogs.map((blog) => {
      return (
        <Grid id="blogs-grid" key={`blog-${blog.title}`} xs={12}>
          <Link href={blog.url} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              color="white"
              fontWeight={100}
              fontSize="1rem"
            >
              {blog.title}
            </Typography>
          </Link>
        </Grid>
      );
    });
  };

  return (
    <Grid
      id="blogs-gridContainer"
      xs={12}
      container
      rowSpacing={{ xs: 2, md: 3 }}
    >
      <Grid id="blogs-grid" xs={12}>
        <Typography variant="h3" color="primary.light" fontWeight={900}>
          Authored by me:
        </Typography>
      </Grid>
      {blogLink(BLOG_URLS)}
    </Grid>
  );
}
