import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ValueProvider } from "../hook/useFormValues"

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ValueProvider>
      <Component {...pageProps} />
    </ValueProvider>
  </>
}

export default MyApp
