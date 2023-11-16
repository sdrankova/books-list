import BestSellersList from '../best-sellers-list/BestSellersList';


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
            <BestSellersList />
        </div>
    );
}