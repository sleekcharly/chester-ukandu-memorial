import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { db } from "../../../firebase";

export default NextAuth({
  // conigure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
    // ... add more providers here
  ],

  // set custom pages
  pages: {
    signIn: "/auth/signin",
  },

  // set adapter
  adapter: FirebaseAdapter(db),
});
