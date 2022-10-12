import { useTranslation } from "react-i18next";
import androidapk from "../../assets/img/app-img/androidapk.png";
import apple from "../../assets/img/app-img/apple.png";
import galaxystore from "../../assets/img/app-img/galaxystore.png";
import googleplay from "../../assets/img/app-img/googleplay.png";
const SecHeroSection = ({
      ClassSec="",
      ClassDiv="",
      specialHead="",
      title="",
      link1="",
      link2="",
      img="",
      HomeDemo1Or3Or4Or5Or6=true,
      HomeDemo1Or4Or5Or6=true,

    }) => {
      const { t } = useTranslation();
     // {t("Saymatik")}
  return (
    <section className={ClassSec} id="home" class="cuzdanresim2">
      <div className="hero-section-content ">
        <div className="container   ">
          <div className="row align-items-center " >
            <div className={ClassDiv} >
              <div className="welcome-content cuzdanresim ">
                <div className="promo-section  ">
                </div>
                
                <h1>{t("Saymatik")}</h1>
                <p className="w-text fadeInUp" data-wow-delay="0.3s"> {t("you_can_store")} </p>
                <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                  <a href="#" className="btn more-btn mr-3 btngetlog">{link1}</a>
                  <a href="#" className="btn more-btn mr-3 btngetlog">{link2}</a>


                  <div className="containerApp">
                    <div >
                      <a href="">  
                      <img src={apple} className="downloadimg"/>
                      </a>
                    </div>
                    <div >
                    <a href="">  
                      <img src={androidapk} className="downloadimg"/>
                      </a>
                    </div>
                    <div >
                    <a href="https://play.google.com/store/apps/details?id=com.scimatic.saymatik">  
                      <img src={googleplay} className="downloadimg"/>
                      </a>
                    </div>
                    <div>
                    <a href="https://galaxystore.samsung.com/detail/com.scimatic.saymatik">  
                      <img src={galaxystore} className="downloadimg"/>
                      </a>
                    </div>
                    
                  </div>
                  <div>
                   

                  </div>
                 
                </div>
              </div>
            </div>
            {HomeDemo1Or3Or4Or5Or6 && (
              <div className="col-lg-6">
                {HomeDemo1Or4Or5Or6 && (
                  <div className="illusto-2">
                    <img draggable="false"  src={img} alt="" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
}

export default SecHeroSection;