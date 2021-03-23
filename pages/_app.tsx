import Layout from "../components/Layout";
import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import Head from 'next/head'
import theme from '../utils/theme'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'

const MyApp = ({ Component, pageProp }) => {
  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProp} />
      </Layout>
    </ThemeProvider>
    </>
  );
};

export default MyApp;
