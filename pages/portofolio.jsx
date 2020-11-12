import Link from "next/link";
import Navbar from '../components/Navbar'
import Head from 'next/head'

function Portofolio() {
    return (
        <>
            <Head> <title>Portofolio</title> </Head>
            <Navbar/>
            
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Portofolio</h1>
                        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere deleniti dolorem magni. Hic itaque esse dignissimos quis voluptatibus optio, ipsa, sit necessitatibus, quibusdam doloremque voluptatem illo alias non. Fugiat, molestias.</p>

                        <div className="portofolio-wrapper">
                            <div className="portofolio-item">
                                <img src="/1.png" className="portofolio-image"/>
                                <h4 className="portofolio-name">Simklinik Omanagemenet</h4>
                                <div className="portofolio-category">Web Dev</div>
                            </div>

                            <div className="portofolio-item">
                                <img src="/2.png" className="portofolio-image"/>
                                <h4 className="portofolio-name">Absensi Kegiatan Online</h4>
                                <div className="portofolio-category">Web Dev</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portofolio;
