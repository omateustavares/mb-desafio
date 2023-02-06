import { ThemeProvider } from "styled-components";

import type { AppProps } from "next/app";

import { SessionProvider, useSession } from "next-auth/react";
import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/themes/default";
import { EventsProvider } from "../hooks/Events";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StyledJsxRegistry from "../lib/registry";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider>
      <EventsProvider>
      <StyledJsxRegistry>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <ToastContainer />
          <Component {...pageProps} />
        </ThemeProvider>
        </StyledJsxRegistry>
      </EventsProvider>
    </SessionProvider>
  );
}
