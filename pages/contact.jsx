import Link from "next/link";
import Navbar from '../components/Navbar'
import Head from 'next/head'

function Contact() {
    return (
        <>
            <Head> <title>Contact</title> </Head>
            <Navbar/>
            
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Contact</h1>
                        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere deleniti dolorem magni. Hic itaque esse dignissimos quis voluptatibus optio, ipsa, sit necessitatibus, quibusdam doloremque voluptatem illo alias non. Fugiat, molestias.</p>

                        <ul className="contact-links">
                            <li className="contact-item">Email: aam@omanagement.id</li>
                            <li className="contact-item">Phone: 08252522552</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
