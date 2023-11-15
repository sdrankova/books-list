import styles from './IndexPage.module.css'


export default function IndexPage() {
    return (
        <div className="hero_area">
            <section className=" slider_section position-relative">
                <div className="side_heading">
                    <h5>
                        G
                        o
                        o
                        d
                        B
                        o
                        o
                        k
                        s
                    </h5>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 offset-md-1">
                            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="img-box b-1">
                                            <img src="images/books.png" alt="" />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className=" col-md-5 offset-md-1">
                            <div className="detail-box">
                                <h1>
                                    Good Books
                                </h1>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                    alteration in some form, by injected humour, or randomised words
                                </p>

                                <div className="btn-box">
                                    <a href="" className="btn-1">
                                        Log In
                                    </a>
                                    <a href="" className="btn-2">
                                        Register
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="wrapper">
                <h1>Top 10  Best-Selling Books of All Time</h1>
                <cite>Source: <a href="https://www.theguardian.com/music/2021/nov/30/the-50-best-albums-of-2021">The Guardian</a></cite>
                <ol reversed start="10">
                    <li>
                        <span>Mdou Moctar</span>
                        <span>Afrique Victime</span>
                    </li>
                    <li>
                        <img src="https://assets.codepen.io/85648/arlo-parks.jpg" alt="Arlo Parks album cover" />
                        <span>Arlo Parks</span>
                        <span>Collapsed in Sunbeams</span>
                    </li>
                    <li>
                        <span>Olivia Rodrigo</span>
                        <span>Sour</span>
                    </li>
                    <li>
                        <span>Dry Cleaning</span>
                        <span>New Long Leg</span>
                    </li>
                    <li>
                        <span>Sault</span>
                        <span>Nine</span>
                    </li>
                    <li>
                        <span>Tyler, the Creator</span>
                        <span>Call Me If You Get Lost</span>
                    </li>
                    <li>
                        <img src="https://assets.codepen.io/85648/weather-station.webp" alt="the weather station album cover" />
                        <span>The Weather Station</span>
                        <span>Ignorance</span>
                    </li>
                    <li>
                        <span>Little Simz</span>
                        <span>Sometimes I Might Be Introvert</span>
                    </li>
                    <li>
                        <img src="https://assets.codepen.io/85648/wolf-alice.webp" alt="Wolf Alic album cover" />
                        <span>Wolf Alice</span>
                        <span>Blue Weekend</span>
                    </li>
                    <li>
                        <img src="https://assets.codepen.io/85648/self-esteem.jpg" alt="Self Esteem album cover" />
                        <span>Self Esteem</span>
                        <span>Prioritise Pleasure</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}