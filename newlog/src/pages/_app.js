import "@/styles/globals.css";
import addCatigoryProvider from "@/Components/addCatigoryProvider";
export default function App({ Component, pageProps }) {
  return (
    <addCatigoryProvider>
      <Component {...pageProps} />;
    </addCatigoryProvider>
  );
}
