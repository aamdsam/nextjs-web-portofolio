import Link from "next/link";
import Navbar from '../components/Navbar'
import Head from 'next/head'

function About() {
    return (
        <>
            <Head> <title>About</title> </Head>
            <Navbar/>
            
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Profile</h1>
                        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere deleniti dolorem magni. Hic itaque esse dignissimos quis voluptatibus optio, ipsa, sit necessitatibus, quibusdam doloremque voluptatem illo alias non. Fugiat, molestias.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
