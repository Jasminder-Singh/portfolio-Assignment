import React from 'react';

function Info({ user }) {
  return (
    <div className="sec-box contact section-padding bord-thin-top" id="info">
      <div className="row">
        <div className="col-lg-5">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title mb-15 opacity-7">Get In Touch</h6>
            <h2 className="fz-50">{user?.about?.quote}.</h2>
            <p className="fz-15 mt-10">
              If you would like to work with us or just want to get in touch,
              we’d love to hear from you!
            </p>
            <div className="phone fz-30 fw-600 mt-30 underline">
              <a href="#0" className="main-color">
                {user?.about?.phoneNumber}
              </a>
            </div>
            <ul className="rest social-text d-flex mt-60">
              {
                user?.social_handles?.map((item) => {

                  return <li className="mr-30" key={item._id}>
                    <a href={item.url} className="hover-this d-flex flex-column justify-content-center align-items-center">
                      <span className="hover-anim">{item.platform}</span>
                      <img src={item.image.url} alt={item.image.public_id} className='w-50 h-50' />
                    </a>
                  </li>
                })

              }
            </ul>
          </div>
        </div>
        <div className="col-lg-7 valign">
          <div className="full-width wow fadeIn">
            <form id="contact-form" method="post" action="contact.php">
              <div className="messages"></div>

              <div className="controls row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-30">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>
                  <div className="mt-30">
                    <button type="submit">
                      <span className="text">Send A Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
