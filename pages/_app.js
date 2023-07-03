import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import "../styles/globals.css"
import "../styles/Home.module.css"

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider
            initializeOnMount={false}
            appId="6767a288-aeae-4283-9292-38c4a266cf50"
        >
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
