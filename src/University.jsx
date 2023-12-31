import React from 'react'
import './University.css'
import dypatil from './University_related_images/uttaranchal_carousel.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edureclogo from './Other_images/Edureclogo.png'
import './Navigationbar.css';
import Home_footer from './Home_footer';
import Carousel from 'react-bootstrap/Carousel';
import './Home_top_courses.css';
import carousel2 from './University_related_images/Courouselimage2.jpg'
import carousel3 from './University_related_images/carouselimg3.jpg'
import manipalcard from './University_related_images/manipalcard_university.webp'
import jaincard from './University_related_images/jaincard_university.jpg'
import amitycard from './University_related_images/amitycard_university.jpg'
import lpucard from './University_related_images/lpucard_university.jpg'
import mangalacard from './University_related_images/mangalacard_university.webp'
import swamicard from './University_related_images/swamicard_university.png'
import dypatilcard from './University_related_images/dypatilcard_university.jpg'
import instalogo from './Other_images/instagram.jpeg'
import facebooklogo from './Other_images/facebook.png'
import whatsapplogo from './Other_images/whatsapp.png'
import { Link, Outlet } from 'react-router-dom';
import Just_nav from './Just_nav';


function University() {
    return (
        <>

            <Just_nav/>
            {/* NAVBAR---------------------------------------END----------------------------------------------- */}


            <Carousel data-bs-theme="dark" interval={2000}>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={dypatil}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>

            {/* CAROUSEL---------------------------------------------------------------------------END---------------------------------------- */}


            
            {/* social media sticky=----------------------------------- */}
        <div className="home_footer_socialmedia">
        <div className="icons">
        <a href="https://instagram.com/edurec.in?igshid=cGdpYmlta2V4YXg="> <img src={instalogo} alt="" /></a>
        <a href="https://wa.link/q57v2j"> <img src={whatsapplogo} alt="" /></a>
        
        <a href="https://www.facebook.com/profile.php?id=61552360414876"> <img src={facebooklogo} alt="" /></a>
        </div>
      </div>

      <div data-aos="fade-right" data-aos-duration="2000">
            <h2 className='university_pagename'>UNIVERSITIES</h2>
        </div>  

            <div className="university_flex_container">

            <div data-aos="zoom-in" data-aos-duration="2000">
                <div class="university_card">
                    <div class="university_content">
                        <div class="front">
                            <img src={dypatilcard} alt="" id='university_card_img' />
                            <div className="university_name">DY PATIL UNIVERSITY PUNE</div>
                            <div className="university_card_content">The educational institution received approval from the UGC, DEB,AICTE, AIU, as well as an <strong>A++</strong>  accreditation from the NAAC and recognition from the WES.</div>
                            <div className="card_footer">
                                <div className="university_card_footer_one">
                                    <div className="big_content">345</div>
                                    <div className="small_content">our admissions</div>
                                </div>
                                <div className="university_card_footer_two">
                                    <div className="big_content">7848</div>
                                    <div className="small_content">Admissions</div>
                                </div>
                                <div className="university_card_footer_three">
                                    <div className="big_content">7821</div>
                                    <div className="small_content">finally</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div className="back_content">
                                Ranked 46 in the National Institutional Ranking Framework (NIRF),our institution offers <strong>MBA and BBA</strong> courses with dedicated placement assistance,a robust support team,mentorship programs,and the added advantage of free certification courses to enhance students' skill sets and employability.
                            </div>

                            <Link to="/dypatil"><button id='back_button_more'>Know More</button></Link>


                        </div>
                    </div>
                </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000">
                <div class="university_card">
                    <div class="university_content">
                        <div class="front">
                            <img src={manipalcard} alt="" id='university_card_img' />
                            <div className="university_name">MANIPAL UNIVERSITY JAIPUR</div>
                            <div className="university_card_content">The educational institution received approval from the  UGC, DEB,AICTE, AIU, as well as an <strong>A+</strong>  accreditation from the NAAC and recognition from the WES.</div>
                            <div className="card_footer">
                                <div className="university_card_footer_one">
                                    <div className="big_content">345</div>
                                    <div className="small_content">our admissions</div>
                                </div>
                                <div className="university_card_footer_two">
                                    <div className="big_content">7848</div>
                                    <div className="small_content">Admissions</div>
                                </div>
                                <div className="university_card_footer_three">
                                    <div className="big_content">7821</div>
                                    <div className="small_content">finally</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div className="back_content">
                            Our institution offers <strong>MBA BBA,BCA MCA BCOM and MCOM</strong> MBA BBA,BCA MCA BCOM and MCOM courses with dedicated placement assistance, a robust support team, mentorship programs, and the added advantage of free certification courses to enhance students' skill sets and employability.
                            </div>

                           <Link to="/manipal"><button id='back_button_more'>Know More</button></Link>


                        </div>
                    </div>
                </div>
                </div>


                <div data-aos="zoom-in" data-aos-duration="2000">
                <div class="university_card">
                    <div class="university_content">
                        <div class="front">
                            <img src={jaincard} alt="" id='university_card_img' />
                            <div className="university_name">JAIN UNIVERSITY</div>
                            <div className="university_card_content">The educational institution received approval from the UGC, DEB,AICTE, AIU, as well as an <strong>A++</strong> accreditation from the NAAC and recognition from the WES.</div>
                            <div className="card_footer">
                                <div className="university_card_footer_one">
                                    <div className="big_content">345</div>
                                    <div className="small_content">our admissions</div>
                                </div>
                                <div className="university_card_footer_two">
                                    <div className="big_content">7848</div>
                                    <div className="small_content">Admissions</div>
                                </div>
                                <div className="university_card_footer_three">
                                    <div className="big_content">7821</div>
                                    <div className="small_content">finally</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div className="back_content">
                            Ranked 68 in the National Institutional Ranking Framework (NIRF), our institution offers <strong>MBA MCA MCOM BBA and BCOM</strong>  courses with dedicated placement assistance, a robust support team, mentorship programs, and the added advantage of free certification courses to enhance students' skill sets and employability.
                            </div>

                            <Link to="/jain"><button id='back_button_more'>Know More</button></Link>


                        </div>
                    </div>
                </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000">
                <div class="university_card">
                    <div class="university_content">
                        <div class="front">
                            <img src={amitycard} alt="" id='university_card_img' />
                            <div className="university_name">AMITY UNIVERSITY</div>
                            <div className="university_card_content">The educational institution received approval from the UGC, DEB,AICTE, AIU, as well as an <strong>A+</strong> accreditation from the NAAC and recognition from the WES.</div>
                            <div className="card_footer">
                                <div className="university_card_footer_one">
                                    <div className="big_content">345</div>
                                    <div className="small_content">our admissions</div>
                                </div>
                                <div className="university_card_footer_two">
                                    <div className="big_content">7848</div>
                                    <div className="small_content">Admissions</div>
                                </div>
                                <div className="university_card_footer_three">
                                    <div className="big_content">7821</div>
                                    <div className="small_content">finally</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div className="back_content">
                            Ranked 37 in the National Institutional Ranking Framework (NIRF), our institution offers <strong>BBA, MBA, BCA, MCA, MA, BA, BCOM, MCOM, BAJMC, MAJMC, CERTIFICATE IN ML AND AI</strong> courses with dedicated placement assistance, a robust support team, mentorship programs, and the added advantage of free certification courses to enhance students' skill sets and employability.
                            </div>

                            <Link to="/amity"><button id='back_button_more'>Know More</button></Link>


                        </div>
                    </div>
                </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000">
                <div class="university_card">
                    <div class="university_content">
                        <div class="front">
                            <img src={dypatil} alt="" id='university_card_img' />
                            <div className="university_name">UTTARANCHAL UNIVERSITY</div>
                            <div className="university_card_content">The educational institution received approval from the st UGC, DEB,AICTE, AIU, as well as an <strong>A+</strong> accreditation from the NAAC and recognition from the WES.</div>
                            <div className="card_footer">
                                <div className="university_card_footer_one">
                                    <div className="big_content">345</div>
                                    <div className="small_content">our admissions</div>
                                </div>
                                <div className="university_card_footer_two">
                                    <div className="big_content">7848</div>
                                    <div className="small_content">Admissions</div>
                                </div>
                                <div className="university_card_footer_three">
                                    <div className="big_content">7821</div>
                                    <div className="small_content">finally</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div className="back_content">
                            Our institution offers <strong>MBA MCA BBA BCA and BA</strong> courses with dedicated placement assistance, a robust support team, mentorship programs, and the added advantage of free certification courses to enhance students' skill sets and employability.
                            </div>

                            <Link to="/uttaranchal"><button id='back_button_more'>Know More</button></Link>


                        </div>
                    </div>
                </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000">
                <div class="university_card">
                    <div class="university_content">
                        <div class="front">
                            <img src={lpucard} alt="" id='university_card_img' />
                            <div className="university_name">LOVELY PROFESSIONAL UNIVERSITY</div>
                            <div className="university_card_content">The educational institution received approval from the UGC, DEB,AICTE, AIU, as well as an <strong>A++</strong> accreditation from the NAAC and recognition from the WES.</div>
                            <div className="card_footer">
                                <div className="university_card_footer_one">
                                    <div className="big_content">345</div>
                                    <div className="small_content">our admissions</div>
                                </div>
                                <div className="university_card_footer_two">
                                    <div className="big_content">7848</div>
                                    <div className="small_content">Admissions</div>
                                </div>
                                <div className="university_card_footer_three">
                                    <div className="big_content">7821</div>
                                    <div className="small_content">finally</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div className="back_content">
                            Ranked 38 in the National Institutional Ranking Framework (NIRF), our institution offers <strong>BA BCA BCOM MBA MCA MCOM MSC MA and HONS</strong>  courses with dedicated placement assistance, a robust support team, mentorship programs, and the added advantage of free certification courses to enhance students' skill sets and employability.
                            </div>

                            <Link to="/lpu"><button id='back_button_more'>Know More</button></Link>


                        </div>
                    </div>
                </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000">
                <div class="university_card">
                    <div class="university_content">
                        <div class="front">
                            <img src={mangalacard} alt="" id='university_card_img' />
                            <div className="university_name">MANGALAYATAN UNIVERSITY</div>
                            <div className="university_card_content">The educational institution received approval from the UGC, DEB,AICTE, AIU, as well as an <strong>A+</strong> accreditation from the NAAC and recognition from the WES.</div>
                            <div className="card_footer">
                                <div className="university_card_footer_one">
                                    <div className="big_content">345</div>
                                    <div className="small_content">our admissions</div>
                                </div>
                                <div className="university_card_footer_two">
                                    <div className="big_content">7848</div>
                                    <div className="small_content">Admissions</div>
                                </div>
                                <div className="university_card_footer_three">
                                    <div className="big_content">7821</div>
                                    <div className="small_content">finally</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div className="back_content">
                            Our institution offers <strong>BCA BA BBA BCOM BSC DCA MA MBA MCOM MSC MCA and PGDCA</strong> courses with dedicated placement assistance, a robust support team, mentorship programs, and the added advantage of free certification courses to enhance students' skill sets and employability.
                            </div>

                            <Link to="/mangalayatan"><button id='back_button_more'>Know More</button></Link>


                        </div>
                    </div>
                </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000">
                <div class="university_card">
                    <div class="university_content">
                        <div class="front">
                            <img src={swamicard} alt="" id='university_card_img' />
                            <div className="university_name">SWAMI VIVEKANAND SUBHARTI UNIVERSITY</div>
                            <div className="university_card_content">The educational institution received approval from the UGC, DEB,AICTE, AIU, as well as an <strong>A+</strong>accreditation from the NAAC and recognition from the WES.</div>
                            <div className="card_footer">
                                <div className="university_card_footer_one">
                                    <div className="big_content">345</div>
                                    <div className="small_content">our admissions</div>
                                </div>
                                <div className="university_card_footer_two">
                                    <div className="big_content">7848</div>
                                    <div className="small_content">Admissions</div>
                                </div>
                                <div className="university_card_footer_three">
                                    <div className="big_content">7821</div>
                                    <div className="small_content">finally</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div className="back_content">
                            Our institution offers <strong>BA BBA BCOM B LIB MA MBA MCOM and MLIB</strong> courses with dedicated placement assistance, a robust support team, mentorship programs, and the added advantage of free certification courses to enhance students' skill sets and employability.
                            </div>

                            <Link to="/swamivivekanand"><button id='back_button_more'>Know More</button></Link>

                        </div>
                    </div>
                </div>
                </div>

            </div>
            <Home_footer />


            <Outlet/>
        </>
    )
}

export default University