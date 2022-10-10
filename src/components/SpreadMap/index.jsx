import { useTranslation } from "react-i18next";
const SpreadMap = ({Wwhitepaper , SectionIcon11}) => {
  const { t } = useTranslation();
  return (

    <section className="spread-map download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xs-12">
            <div className="welcome-meter">
              <img draggable="false" src={Wwhitepaper} className="center-block" alt="" />
            </div>
          </div> 
          <div className="col-lg-6 col-xs-12 mt-s">
            <div className="who-we-contant">
              <div className="dream-dots text-left">
                <img draggable="false" src={SectionIcon11} alt="" />
              </div>
              <h4 className="text-white">{t("DETAILED_PRESENTATION")}</h4>
              <p className="text-white">{t("You_can_examine")}</p>
              <a className="btn dream-btn mt-30" href="#">
                {t("WHİTEPAPER")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default SpreadMap