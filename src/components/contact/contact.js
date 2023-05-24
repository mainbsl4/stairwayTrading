import backgroundImage from "../../assets/backgroundImage/contact-stairway-trading.jpg"
// import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";

function Contact () {

    return(
        <section className="Contact">


            <div className="banner">
                <img src={backgroundImage} alt="banner"/>
            </div>



            <div className="ContactSection mt-5">
                <div className="sectionHeader">
                    <h3>Contact</h3>
                    {/* <span className="headerAnimation"></span> */}
                </div>


                <div className="contact mt-4">

                <div class="container" data-aos="fade-up">

{/* <div class="section-title">
  
  <h3><span class="uk" style=" color: #1c2541; text-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;">Contact Us</span></h3>
</div> */}

<div class="row" data-aos="fade-up" data-aos-delay="100">
  <div class="col-lg-6">
    <div class="info-box mb-4">
      <i class="bx bx-map"></i>
      <h3>Address</h3>
      <p>House-39, Road-11, Sector-13 <br/>
        Uttra</p>
    </div>
  </div>

  <div class="col-lg-3 col-md-6">
    <div class="info-box  mb-4">
      <i class="bx bx-envelope"></i>
      <h3>Email</h3>
      <p>info@stairwaytd.com</p>
    </div>
  </div>

  <div class="col-lg-3 col-md-6">
    <div class="info-box  mb-4">
      <i class="bx bx-phone-call"></i>
      <h3>Call</h3>
      {/* <p> +8801712823868</p> */}
       {/* <p> +8801xxxxxxxx</p> */}
       <a href="tel:+880171-282-3868">+8801712823868</a>
    </div>
  </div>

</div>

<div class="row" data-aos="fade-up" data-aos-delay="100">



  <div class="col-lg-12">
    <form class="php-email-form">
      <div class="form-row">
        <div class=" form-group">
          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
          <div class="validate"></div>
        </div>
        
        <div class=" form-group">
          <input type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone Number" data-rule="minlen:10" data-msg="Please enter valid number" />
          <div class="validate"></div>
        </div>
      </div>
      <div class="form-group">
        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="minlen:4"  data-msg="Please enter a valid email"  />
        <div class="validate"></div>
      </div>
      <div class="form-group">
        <textarea class="form-control h-50" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
        <div class="validate"></div>
      </div>
      <div class="mb-3">
        <div class="loading">Loading</div>
        <div class="error-message"></div>
        {/* <div class="sent-message">Your message has been sent. Thank you!</div> */}
      </div>
      <div class="text-center"><button type="submit">Send Message</button></div>
    </form>
  </div>

</div>

</div>
                </div>



            </div>
        </section>
    )
}

export default Contact;