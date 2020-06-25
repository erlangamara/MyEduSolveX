import React from 'react';

//Icon
import Twitter from '../assets/SocialMedia/Twitter.svg';
import Facebook from '../assets/SocialMedia/Facebook.svg';
import Instagram from '../assets/SocialMedia/Instagram.svg';
import Youtube from '../assets/SocialMedia/Youtube.svg';

const Footer = () => {
  return (
    <footer>
      <div className="Footer-upper">
          <div className="Footer-upper-left">
            <p>PT DWI INTI PUTRA</p>
            <div className="Address">
              <div className="Head-office-address">
                <p>
                  Head Office <br />
                  Gedung Kresna <br />
                  Jl. Arjuna Utara No. 28
                </p>
              </div>
              <div className="Marketing-office">
                <p>
                  Marketing Office <br />
                  BLOCK 71 Jakarta <br />
                  Ariobimo Sentral <br />
                </p>
              </div>
            </div>
            <div className="Contact">
              <p className="Email">Email:       hello@myedusolve.com</p>
              <p className="WhatsApp">WhatsApp:   hello@myedusolve.com</p>
            </div>
          </div>
          <div className="Footer-upper-right">
            <div className="Footer-menu">
              <p className="Footer-menu-title">MyEduSolve X</p>
              <p>
                Tentang Kami <br />
                Kontak Kami <br />
                Jadi Instruktur <br />
                Faq <br />
              </p>
            </div>
            <div className="Footer-menu">
              <p className="Footer-menu-title">Program</p>
              <p>
                Kelas <br />
                Events <br />
                Sertifikasi <br />
                Ambassador <br />
              </p>
            </div>
          </div>
      </div>
      <div className="Footer-lower">
        <div className="Legal">
          <p className="Tnc">Term and Conditions</p>
          <p className="Policy">Privacy Policy</p>
        </div>
        <div className="Social-media">
          <div className="Social-media-content">
            <img className="Social-media-icon" src={Twitter} />
            <img className="Social-media-icon" src={Facebook} />
            <img className="Social-media-icon" src={Instagram} />
            <img src={Youtube} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;