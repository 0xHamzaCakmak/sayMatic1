import Contract from "./Contract"
import { useTranslation } from "react-i18next";

const SmartContract = ({data}) => {
  const { t } = useTranslation();

    return (

      <section className="smart-contract section-padding-0-70 mt-5 clearfix">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
               {/*    <span className="gradient-text blue">DECERTA BLOKZİNCİR TABANLI BELGELENDİRME</span> */}
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">{t("PRODUCT_FEATURES")}</h4>
                <p className="fadeInUp" data-wow-delay="0.4s"> {t("Saymatik_app_is_design")}</p>
                <a className="btn more-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">{t("More")}</a>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0 mt-s">
              {data && data.map((item , key) => (
                <Contract
                  key={key}
                  img={item.img}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );

}

export default SmartContract;