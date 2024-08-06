import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/styles/customeStyleMui";
import Header from "@/layout/header/Header";
import ContactIcons from "@/components/page/contacts/ContactIcons";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Footer from "@/layout/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100vh"
        >
          <Header />
          <Box className="md:my-[70px] xs:my-[60px] relative">
            <Component {...pageProps} />
            <ContactIcons />
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </Provider>
    </ThemeProvider>
  );
}
