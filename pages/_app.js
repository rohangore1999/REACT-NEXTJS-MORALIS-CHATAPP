import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
      {/* MoralisProvider is same as our AuthProvider of Next-Auth, HOC give all the functionality to its children */}
      <Component {...pageProps} />
    </MoralisProvider>
  )

}

export default MyApp
