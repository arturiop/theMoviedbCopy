import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "../styles/threme/index";
import { ReactQueryDevtools } from "react-query/devtools";
import { getData } from "../api";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: getData,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CSSReset />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
export default MyApp;

// theme={theme}
