"use client";
import "client-only";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Link from "next/link";
import fetcher from "@/actions/fetcher";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthorizeBtn() {
  const { data, error, isLoading } = useSWR(`/api/stats`, fetcher);
  const [authURL, setAuthURL] = useState<string | null>(null);
  const router = useRouter();
  const captureAuthURL = (url: string) => {
    setAuthURL(url);
  };
  useEffect(() => {
    if (!isLoading) {
      console.log("data", data);
      console.log("error", error);
    }
  }, [data, error, isLoading]);

  const signIn = () => {
    if (data?.authURL) {
      captureAuthURL(data.authURL);
    }
  };

  return (
    <Grid
      container
      size={12}
    >
      <Grid size={12}>
        <Button
          variant="contained"
          sx={{ p: 2 }}
          onClick={() => signIn()}
        >
          <Typography
            textTransform="capitalize"
            sx={{ my: "auto" }}
            variant="h2"
          >
            Authorize
          </Typography>
        </Button>
      </Grid>
      <Grid size={12}>
        <Typography
          sx={{}}
          variant="appBarText"
        >
          {authURL}
        </Typography>
      </Grid>
    </Grid>
  );
}
