import React from 'react'
import Banner from './Banner'

export default function Home() {
    return (
        <>

            <Banner />

            <main id="main">
                <section id="featured-services" className="featured-services">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="fas fa-heartbeat"></i></div>
                                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon"><i className="fas fa-pills"></i></div>
                                    <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon"><i className="fas fa-thermometer"></i></div>
                                    <h4 className="title"><a href="">Magni Dolores</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon"><i className="fas fa-dna"></i></div>
                                    <h4 className="title"><a href="">Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="cta" className="cta">
                    <div className="container" data-aos="zoom-in">

                        <div className="text-center">
                            <h3>In an emergency? Need help now?</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.</p>
                            <a className="cta-btn scrollto" href="#appointment">Make an Make an Appointment</a>
                        </div>

                    </div>
                </section>


                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>About Us</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-right">
                                <img src="/img/about.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                                        pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="counts" className="counts">
                    <div className="container" data-aos="fade-up">

                        <div className="row no-gutters">

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i className="fas fa-user-md"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1"
                                        className="purecounter"></span>

                                    <p><strong>Doctors</strong> consequuntur quae qui deca rode</p>
                                    <a href="#">Find out more &raquo;</a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i className="far fa-hospital"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="26" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p><strong>Departments</strong> adipisci atque cum quia aut numquam delectus</p>
                                    <a href="#">Find out more &raquo;</a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i className="fas fa-flask"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="14" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p><strong>Research Lab</strong> aut commodi quaerat. Aliquam ratione</p>
                                    <a href="#">Find out more &raquo;</a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i className="fas fa-award"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p><strong>Awards</strong> rerum asperiores dolor molestiae doloribu</p>
                                    <a href="#">Find out more &raquo;</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="features" className="features">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
                                <div className="icon-box mt-5 mt-lg-0">
                                    <i className="bx bx-receipt"></i>
                                    <h4>Est labore ad</h4>
                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                                <div className="icon-box mt-5">
                                    <i className="bx bx-cube-alt"></i>
                                    <h4>Harum esse qui</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                </div>
                                <div className="icon-box mt-5">
                                    <i className="bx bx-images"></i>
                                    <h4>Aut occaecati</h4>
                                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                </div>
                                <div className="icon-box mt-5">
                                    <i className="bx bx-shield"></i>
                                    <h4>Beatae veritatis</h4>
                                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                </div>
                            </div>
                            <div className="image col-lg-6 order-1 order-lg-2" style={{ backgroundImage: "url('/img/features.jpg')" }} data-aos="zoom-in"></div>
                        </div>

                    </div>
                </section>


                <section id="services" className="services services">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Services</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon"><i className="fas fa-heartbeat"></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati cupiditate non provident</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon"><i className="fas fa-pills"></i></div>
                                <h4 className="title"><a href="">Dolor Sitema</a></h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat tarad limino ata</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon"><i className="fas fa-hospital-user"></i></div>
                                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon"><i className="fas fa-dna"></i></div>
                                <h4 className="title"><a href="">Magni Dolores</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon"><i className="fas fa-wheelchair"></i></div>
                                <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon"><i className="fas fa-notes-medical"></i></div>
                                <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                                    soluta nobis est eligendi</p>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="appointment" className="appointment section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Make an Appointment</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <form action="forms/appointment.php" method="post" role="form" className="php-email-form" data-aos="fade-up"
                            data-aos-delay="100">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input type="datetime" name="date" className="form-control datepicker" id="date"
                                        placeholder="Appointment Date" required />
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="department" id="department" className="form-select">
                                        <option value="">Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="doctor" id="doctor" className="form-select">
                                        <option value="">Select Doctor</option>
                                        <option value="Doctor 1">Doctor 1</option>
                                        <option value="Doctor 2">Doctor 2</option>
                                        <option value="Doctor 3">Doctor 3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </form>

                    </div>
                </section>


                <section id="departments" className="departments">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Departments</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row" data-aos="fade-up" data-aos-delay="100">
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <ul className="nav nav-tabs flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                                            <h4>Cardiology</h4>
                                            <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                                        </a>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                            <h4>Neurology</h4>
                                            <p>Voluptas vel esse repudiandae quo excepturi.</p>
                                        </a>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                                            <h4>Hepatology</h4>
                                            <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                                        </a>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                                            <h4>Pediatrics</h4>
                                            <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-8">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-1">
                                        <h3>Cardiology</h3>
                                        <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a
                                            videna mareta paulona marka</p>
                                        <img src="/img/departments-1.jpg" alt="" className="img-fluid" />
                                        <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit
                                            magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil.
                                            Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                    </div>
                                    <div className="tab-pane" id="tab-2">
                                        <h3>Neurology</h3>
                                        <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a
                                            videna mareta paulona marka</p>
                                        <img src="/img/departments-2.jpg" alt="" className="img-fluid" />
                                        <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit
                                            magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil.
                                            Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                    </div>
                                    <div className="tab-pane" id="tab-3">
                                        <h3>Hepatology</h3>
                                        <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a
                                            videna mareta paulona marka</p>
                                        <img src="/img/departments-3.jpg" alt="" className="img-fluid" />
                                        <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit
                                            magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil.
                                            Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                    </div>
                                    <div className="tab-pane" id="tab-4">
                                        <h3>Pediatrics</h3>
                                        <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a
                                            videna mareta paulona marka</p>
                                        <img src="/img/departments-4.jpg" alt="" className="img-fluid" />
                                        <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit
                                            magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil.
                                            Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="testimonials" className="testimonials">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Testimonials</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                                            quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src="/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                                            quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src="/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                                            tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src="/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                                            minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src="/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                                            labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src="/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>
                </section>

                <section id="doctors" className="doctors section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Doctors</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay="100">
                                    <div className="member-img">
                                        <img src="/img/doctors/doctors-1.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Medical Officer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay="200">
                                    <div className="member-img">
                                        <img src="/img/doctors/doctors-2.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Anesthesiologist</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay="300">
                                    <div className="member-img">
                                        <img src="/img/doctors/doctors-3.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>Cardiology</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay="400">
                                    <div className="member-img">
                                        <img src="/img/doctors/doctors-4.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Neurosurgeon</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="gallery" className="gallery">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Gallery</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="gallery-slider swiper">
                            <div className="swiper-wrapper align-items-center">
                                <div className="swiper-slide"><a className="gallery-lightbox" href="/img/gallery/gallery-1.jpg"><img
                                    src="/img/gallery/gallery-1.jpg" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a className="gallery-lightbox" href="/img/gallery/gallery-2.jpg"><img
                                    src="/img/gallery/gallery-2.jpg" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a className="gallery-lightbox" href="/img/gallery/gallery-3.jpg"><img
                                    src="/img/gallery/gallery-3.jpg" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a className="gallery-lightbox" href="/img/gallery/gallery-4.jpg"><img
                                    src="/img/gallery/gallery-4.jpg" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a className="gallery-lightbox" href="/img/gallery/gallery-5.jpg"><img
                                    src="/img/gallery/gallery-5.jpg" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a className="gallery-lightbox" href="/img/gallery/gallery-6.jpg"><img
                                    src="/img/gallery/gallery-6.jpg" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a className="gallery-lightbox" href="/img/gallery/gallery-7.jpg"><img
                                    src="/img/gallery/gallery-7.jpg" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a className="gallery-lightbox" href="/img/gallery/gallery-8.jpg"><img
                                    src="/img/gallery/gallery-8.jpg" className="img-fluid" alt="" /></a></div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>
                </section>


                <section id="pricing" className="pricing">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Pricing</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="box" data-aos="fade-up" data-aos-delay="100">
                                    <h3>Free</h3>
                                    <h4><sup>$</sup>0<span> / month</span></h4>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li className="na">Pharetra massa</li>
                                        <li className="na">Massa ultricies mi</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="#" className="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                                <div className="box featured" data-aos="fade-up" data-aos-delay="200">
                                    <h3>Business</h3>
                                    <h4><sup>$</sup>19<span> / month</span></h4>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li>Pharetra massa</li>
                                        <li className="na">Massa ultricies mi</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="#" className="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                                <div className="box" data-aos="fade-up" data-aos-delay="300">
                                    <h3>Developer</h3>
                                    <h4><sup>$</sup>29<span> / month</span></h4>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li>Pharetra massa</li>
                                        <li>Massa ultricies mi</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="#" className="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                                <div className="box" data-aos="fade-up" data-aos-delay="400">
                                    <span className="advanced">Advanced</span>
                                    <h3>Ultimate</h3>
                                    <h4><sup>$</sup>49<span> / month</span></h4>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li>Pharetra massa</li>
                                        <li>Massa ultricies mi</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="#" className="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="faq" className="faq section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Frequently Asked Questioins</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <ul className="faq-list">

                            <li>
                                <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Non consectetur a erat nam at lectus
                                    urna duis? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur
                                        gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Feugiat scelerisque varius morbi enim
                                    nunc faucibus a pellentesque? <i className="bi bi-chevron-down icon-show"></i><i
                                        className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id
                                        donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit
                                        ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Dolor sit amet consectetur adipiscing
                                    elit pellentesque habitant morbi? <i className="bi bi-chevron-down icon-show"></i><i
                                        className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum
                                        integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
                                        Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Ac odio tempor orci dapibus. Aliquam
                                    eleifend mi in nulla? <i className="bi bi-chevron-down icon-show"></i><i
                                        className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id
                                        donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit
                                        ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Tempus quam pellentesque nec nam
                                    aliquam sem et tortor consequat? <i className="bi bi-chevron-down icon-show"></i><i
                                        className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc
                                        vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus
                                        gravida quis blandit turpis cursus in
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Tortor vitae purus faucibus ornare.
                                    Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show"></i><i
                                        className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada
                                        nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis
                                        tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas
                                        fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                                    </p>
                                </div>
                            </li>

                        </ul>

                    </div>
                </section>


                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                            <h2>Contact</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>

                    </div>

                    {/* <div>
                        <iframe style="border:0; width: 100%; height: 350px;"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                            frameBorder="0" allowFullScreen></iframe>
                    </div> */}

                    <div className="container">

                        <div className="row mt-5">

                            <div className="col-lg-6">

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="info-box">
                                            <i className="bx bx-map"></i>
                                            <h3>Our Address</h3>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4">
                                            <i className="bx bx-envelope"></i>
                                            <h3>Email Us</h3>
                                            <p>info@example.com<br />contact@example.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4">
                                            <i className="bx bx-phone-call"></i>
                                            <h3>Call Us</h3>
                                            <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col form-group mt-3">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main >

        </>
    )
}
