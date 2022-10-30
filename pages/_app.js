import { ThemeProvider } from "next-themes";
import Script from 'next/script';
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3PPL9VQKC1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3PPL9VQKC1');
        `}
      </Script>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;