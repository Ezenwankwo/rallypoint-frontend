import Head from "next/head";
import Navbar from "../components/navbar";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";

export default function Contact() {
    return (
        <>
        <Head>
            <title>Rally Point Consult - Contact</title>
            <meta
            name="description"
            content="We develop communications strategy for startups and small businesses."
            />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
    
        <Navbar />
        <ContactForm />
        <Footer />
        </>
    );
}