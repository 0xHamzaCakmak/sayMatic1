import {
  HomeDemo1Computer
} from '../../utils/allImgs'

const AboutOther = ({ClassTitle="gradient-text blue"}) => {

  return (

    <section className="about-us-area section-padding-0-100 clearfix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 offset-lg-0">
            <div className="who-we-contant">
              <div className="dream-dots text-left fadeInUp" data-aos="fade-up" data-aos-delay="200">
               {/*  <span className={ClassTitle}>BLOKZİNCİR BELGELENDİRME SİSTEMİ</span> */}
              </div>
              <h4 className="fadeInUp" data-aos="fade-up" data-aos-delay="200">Belgelerinizi Ölümsüzleştirelim</h4>
              <p className="fadeInUp" data-aos="fade-up" data-aos-delay="200">Belgenizi blokznicire yükleyin istediğniz zaman erişim sağlayın.Kripto cüzdan adresden isterseniz herkese açık yapın isterseniz gizleyin sadece siz görün.</p>
              <p className="fadeInUp" data-aos="fade-up" data-aos-delay="300">Belgelerinizi bir tık ile ulaşın.</p>
              <a className="btn more-btn mt-30" href="#">DAHA FAZLA</a>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
            <div className="welcome-meter floating-anim fadeInUp">
              <img draggable="false" src={HomeDemo1Computer} alt="" />

            </div>
            
          </div>
        </div>
       
      </div>
   
    </section>
  );
}

export default AboutOther;