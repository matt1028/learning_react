import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App



//below is the code for js
// import '../styles/global.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
