import React from 'react'

export default function Banner() {
    return (
        <>
            <section id="hero">
                <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active" style={{ backgroundImage: "url(/img/slide/slide-1.jpg)" }}>
                            <div className="container">
                                <h2>Welcome to <span>Medicio</span></h2>
                                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
                                    Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
                                    deleniti vel.</p>
                                <a href="#about" className="btn-get-started scrollto">Read More</a>
                            </div>
                        </div>

                        <div className="carousel-item" style={{ backgroundImage: "url(/img/slide/slide-2.jpg)" }}>
                            <div className="container">
                                <h2>Lorem Ipsum Dolor</h2>
                                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
                                    Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
                                    deleniti vel.</p>
                                <a href="#about" className="btn-get-started scrollto">Read More</a>
                            </div>
                        </div>

                        <div className="carousel-item" style={{ backgroundImage: "url(/img/slide/slide-3.jpg)" }}>
                            <div className="container">
                                <h2>Sequi ea ut et est quaerat</h2>
                                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
                                    Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
                                    deleniti vel.</p>
                                <a href="#about" className="btn-get-started scrollto">Read More</a>
                            </div>
                        </div>

                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>

                </div>
            </section>
        </>
    )
}
