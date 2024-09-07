import { DarkModeProvider } from '@/app/context/DarkModeContext';
import '../styles/global.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <DarkModeProvider><Component {...pageProps} /></DarkModeProvider>;
}

export default MyApp;