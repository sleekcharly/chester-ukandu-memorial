import { getSession } from "next-auth/client";
import React from "react";
import Layout from "../components/layout/layout";
import MemoriesComponent from "../components/MemoriesComponent";

function memories() {
  return (
    <Layout>
      <MemoriesComponent />
    </Layout>
  );
}

export default memories;

// get providers
export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);

  return {
    props: { session },
  };
}
