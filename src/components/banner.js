import React from "react";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>COMMEMORATION</span>
            </div>
          </h2>
          <div className='btn-row'>
            <h3>Statue commemorating Australians</h3>
            <p>A statue built in memories of the soilder who served in the Vietnam War Located in ANZAC Square, Brisbane, Australia.</p>
          </div>
          <div className='case'>
            <div className="image-overlay"></div>
            <div className='case-image'>
              <img src={require(`../assets/statue-commemorating-australians-who-served-in-the-vietnam-war-1962-1973-located-in-anzac-square_t20_6lPKBO.jpg`)} alt="vpatel.design portfolio image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
