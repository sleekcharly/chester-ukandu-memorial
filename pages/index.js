import React from "react";
import Head from "next/head";
import HomeComponent from "../components/HomeComponent";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
}
