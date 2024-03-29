import { FooterPattern, FooterLogo } from "../../../utils/allImgs";

import SectionHeading from "../../../components/SectionHeading";

import "../Footer.scss";
import { useTranslation } from "react-i18next";
import IcoName from "../../../data/data-layout/Footer/data-IcoName.json";
import TextFooter from "../../../data/data-layout/Footer/data-TextFooter.json";
import { t } from "i18next";

const Links = [
  "https://www.facebook.com/people/DeCerta-SciMatic/100078510502029/",
  "https://twitter.com/DeCertaSciMatic",
  "https://www.instagram.com/decerta_scimatic/?utm_medium=copy_link",
  "https://tr.linkedin.com/company/scimatic?trk=public_profile_topcard-current-company",
];
const FooterPages = ({ ClassSpanTitle = "" }) => {
  const {} = useTranslation();
  return (
    <footer
      className="footer-area bg-img mt-5"
      style={{ backgroundImage: `url(${FooterPattern})` }}
    >
      {/* ##### Contact Area Start ##### */}
      <div className="contact_us_area section-padding-0-0" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading
                /*  title="DECERTA BLOKZİNCİR TABANLI BELGELENDİRME" */
                text={t("CONTACT")}
                ClassSpanTitle={ClassSpanTitle}
              />
            </div>
          </div>
          {/* Contact Form */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="contact_form">
                <form
                  action="#"
                  method="post"
                  id="main_contact_form"
                  noValidate
                >
                  <div className="row">
                    <div className="col-12">
                      <div id="success_fail_info" />
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="group fadeInUp" data-wow-delay="0.2s">
                        <input type="text" name="İsmi" id="name" required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>{t("Name_Surname")} </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="group fadeInUp" data-wow-delay="0.3s">
                        <input type="text" name="e-gmail" id="email" required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>{t("e-mail")} </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="group fadeInUp" data-wow-delay="0.4s">
                        <input type="text" name="konu" id="subject" required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>{t("subject")} </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="group fadeInUp" data-wow-delay="0.5s">
                        <textarea
                          name="mesaj"
                          id="message"
                          required
                          defaultValue={""}
                        />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>{t("message")} </label>
                      </div>
                    </div>
                    <div
                      className="col-12 text-center fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <button type="submit" className="btn more-btn">
                        {t("SEND_MESSAGE")}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Contact Area End ##### */}
      <div
        className="footer-area bg-img"
        style={{ backgroundImage: `url(${FooterPattern})` }}
      >
        <div className="footer-content-area demo">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-lg-4 col-md-6">
                <div className="footer-copywrite-info">
                  <div
                    className="copywrite_text fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="footer-logo">
                      <a href="#">
                        <img draggable="false" src={FooterLogo} alt="logo" />{" "}
                      </a>
                    </div>
                    <p></p>
                  </div>
                  <div
                    className="footer-social-info fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    {IcoName &&
                      IcoName.map((item, key) => (
                        <a key={key} href={Links[key]}>
                          <i className={item.IcoName} aria-hidden="true" />
                        </a>
                      ))}
                  </div>
                </div>
              </div>

              {TextFooter &&
                TextFooter.map((item, key) => (
                  <div key={key} className={item.classBlock}>
                    <div className="contact_info_area d-sm-flex justify-content-between">
                      <div className={item.classInfo} data-wow-delay="0.3s">
                        <h5>{item.title}</h5>
                        <a href="https://tr.linkedin.com/in/b%C3%BC%C5%9Fra-t%C4%B1rkaz-940115193">
                          <p>{item.text1}</p>
                        </a>
                        <a href>
                          <p>{item.text2}</p>
                        </a>
                        <a href>
                          <p>{item.text3}</p>
                        </a>
                        <a href>
                          <p>{item.text4}</p>
                        </a>
                        {item.text5 && (
                          <a href>
                            <p>{item.text5}</p>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPages;
