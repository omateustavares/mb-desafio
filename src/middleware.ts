import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ token }) {
      if (token) true;
      return !!token;
    },
  },
});
export const config = { matcher: ["/user/:path*"] };
