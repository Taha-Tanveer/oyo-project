// pages/_app.js or pages/_app.tsx

import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

// Import the CSS file without specifying the 'dist' folder


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
