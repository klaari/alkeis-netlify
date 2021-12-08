import React from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

const videoPortrait = '/videos/alkeis_09_1080x1920px.mp4';
const videoLandscape = '/videos/alkeis_09_1920x1080px.mp4';

export default function Home() {

    return (
        <div className="container">
            <Head>
                <title>ALKEIS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <video autoPlay muted loop playsInline className="video">
                    <source src={videoLandscape} type="video/mp4" />
                </video>
            </main>
        </div>
    );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
