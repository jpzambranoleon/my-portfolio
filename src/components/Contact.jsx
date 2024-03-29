export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-map-location-dot"></i>
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Hot Springs, AR</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-envelope-open-text"></i>
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:stefan.topallovic@gmail.com">
                    jpzl_10@proton.me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
