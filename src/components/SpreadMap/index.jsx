const SpreadMap = ({Wwhitepaper , SectionIcon11}) => {

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
              <h4 className="text-white">DETAYLI SUNUM</h4>
              <p className="text-white">Saymatik'i detaylı sunum şeklinde inceleyebilirsiniz.</p>
              <a className="btn dream-btn mt-30" href="#">
                WHİTEPAPER
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default SpreadMap