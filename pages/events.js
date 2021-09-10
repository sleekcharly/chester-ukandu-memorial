import { getSession } from "next-auth/client";
import React from "react";
import EventComponent from "../components/EventComponent";
import Layout from "../components/layout/layout";

function Events({ session }) {
  return (
    <Layout>
      <EventComponent session={session} />
    </Layout>
  );
}

export default Events;

// get providers
export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);

  return {
    props: { session },
  };
}
