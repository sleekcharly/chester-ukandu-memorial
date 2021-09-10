import React from "react";
import Head from "next/head";
import HomeComponent from "../components/HomeComponent";
import Layout from "../components/layout/layout";
import { getSession } from "next-auth/client";

export default function Home({ session }) {
  return (
    <Layout>
      <HomeComponent session={session} />
    </Layout>
  );
}

// get providers
export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);

  return {
    props: { session },
  };
}
