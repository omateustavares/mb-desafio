import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { PrismaAdapter } from "../teste";
import jwt from "jsonwebtoken";

export function buildNextAuthOptions(
  req: NextApiRequest | NextPageContext["req"],
  res: NextApiResponse | NextPageContext["res"]
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: { secret: process.env.NEXTAUTH_SECRET, maxAge: 60 * 60 * 24 * 7 }, // 7 days
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
          },
        },
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            username: "",
            email: profile.email,
            avatar_url: profile.picture,
          };
        },
      }),
    ],

    theme: {
      colorScheme: "dark",
    },
    callbacks: {
      async session({ session }) {
        return {
          ...session,
        };
      },
    },
  };
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, buildNextAuthOptions(req, res));
}
