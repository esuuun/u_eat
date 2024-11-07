import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "../../../../lib/authOptions";
const handler = NextAuth(AuthOptions);

export {handler as GET, handler as POST};