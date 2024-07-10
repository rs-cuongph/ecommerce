import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/styles/customeStyleMui";
import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box className="md:my-[90px] xs:my-[60px]">
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
