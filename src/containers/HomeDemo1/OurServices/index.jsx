import SectionHeading from "../../../components/SectionHeading"

import Service from "./Service"
import { useTranslation } from "react-i18next";

const OurServices = ({data}) => {

  const {t} = useTranslation();
    return (

      <section className="our_services_area section-padding-0-0 clearfix">
        <div className="container">
          <SectionHeading
            /* title="DECERTA BLOKZİNCİR TABANLI BELGELENDİRME SİSTEMİ" */
            text={t("Your_crypto_assests")}
          />

          <div className="row">
            {data && data.map((item , key) => (
              <Service
                key={key}
                img={item.img}
                title={t (item.title)}
              />
            ))}
          </div>
        </div>
      </section>
    );

}

export default OurServices;