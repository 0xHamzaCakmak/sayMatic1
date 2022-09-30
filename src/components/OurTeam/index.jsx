import SectionHeading from "../SectionHeading"



const OurTeam = ({data , ClassSpanTitle}) => {

    return (

      <section className="our_team_area section-padding-100-0 clearfix" id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading
              /*   title="DECERTA BLOKZİNCİR TABANLI BELGELENDİRME" */
                text="EKİBİMİZ"
                ClassSpanTitle={ClassSpanTitle}
              />

            </div>
          </div>
          
          <div className="row">
            {data && data.map((item , key) => (
              key < 5 ?
                <div className="col-12 col-sm-6 col-lg-3" key={key}>
                  <div className="single-team-member" data-aos="fade-up">
                    {/* Image */}
                    <div className="team-member-thumb">
                      <img draggable="false" src={item.img} className="center-block" alt="" />
                    </div>
                    {/* Team Info */}
                    <div className="team-info">
                      <h5 className="w-text">{item.title}</h5>
                      <p className="g-text">{item.text}</p>
                    </div>
                    {/* Social Icon */}
                    
                  </div>
                </div> : 
                 <div className="col-12 col-sm-6 col-lg-3" key={key}>
                 <div className="single-team-memberr" data-aos="fade-up">
                   {/* Image */}
                   <div className="team-member-thumbb">
                     <img draggable="false" src={item.img} className="center-blockk" alt="" />
                   </div>
                   {/* Team Info */}
                   <div className="team-info">
                     <h5 className="w-textt">{item.title}</h5>
                     <p className="g-textt">{item.text}</p>
                   </div>
                   {/* Social Icon */}
                  
                 </div>
               </div>
            ))}
          </div>
        
        </div>
      </section>
    );

}

export default OurTeam