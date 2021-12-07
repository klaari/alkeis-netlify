import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>ALKEIS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <video autoPlay muted loop playsInline className="video">
                    <source src="/videos/alkeis_04.mp4" type="video/mp4" />
                </video>
            </main>
        </div>
    );
}
