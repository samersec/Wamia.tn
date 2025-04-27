import React from 'react';
import Slider from 'react-slick';
import '../../../src/styles/main.css'; // Ensure this includes slick-carousel styles

const Main = () => {
  const carouselImages = [
    { src: `${process.env.PUBLIC_URL}/images/coussin_de_grossesse.png`, alt: 'Coussin de Grossesse' },
    { src: `${process.env.PUBLIC_URL}/images/teck.png`, alt: 'Derma Roller' },
    { src: `${process.env.PUBLIC_URL}/images/gratuit.png`, alt: 'Pare Soleil' },
    { src: `${process.env.PUBLIC_URL}/images/smartphone.png`, alt: 'Promo' }  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main id="maincontent" className="page-main page-main-full">
      <a id="contentarea" tabIndex="-1"></a>

      <div className="columns">
        <div className="column main">
          <input name="form_key" type="hidden" value="j1VQevdr5JuF4qkn" />
          <div className="cdz-main-content widget block block-static-block">
            <div className="container space-lg" style={{ paddingTop: '15px' }}>
              <div className="row body-top-panel flex-grid">
                <div className="col-sm-6 col-md-6 col-sm-24 col-xs-24 mb-o-2">
                  <div className="row">
                    <div className="col-md-24 col-sm-12 col-xs-12 space-base">
                      <div className="cdz-shadow shine-effect cdz-banner cdz-rounded-border">
                        <a href="/catalogsearch/result/?q=derma">
                          <img
                            style={{ borderRadius: '7px', color: '#a8b4c0' }}
                            src={`${process.env.PUBLIC_URL}/images/Derma_Roller.png`}
                            alt="Derma_roller"
                            width="455"
                            height="260"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-24 col-md-12 col-sm-12 col-xs-12 space-base">
                      <div className="cdz-shadow shine-effect cdz-banner cdz-rounded-border">
                        <a href="/auto-moto/accessoires-auto/pare-soleil.html">
                          <img
                            style={{ borderRadius: '7px', color: '#a8b4c0' }}
                            src={`${process.env.PUBLIC_URL}/images/pare_soleil.png`}
                            alt="Pare_soleil"
                            width="455"
                            height="260"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carousel Section */}
                <div className="col-sm-12 cdz-main-slideshow space-base col-md-12 col-sm-24 col-xs-24 mb-o-1">
                  <div className="cdz-slideshow cdz-rounded-border">
                    <Slider {...settings}>
                      {carouselImages.map((image, index) => (
                        <div key={index}>
                          <div
                            className="cdz-slideshow-outer abs-frame"
                            style={{
                              paddingBottom: '58.5%',
                              background: `url(${image.src}) no-repeat center center`,
                              backgroundSize: 'cover',
                            }}
                          >
                            <div className="cdz-slideshow-inner abs-frame-inner">
                              <div className="items" role="items"></div>
                              <div
                                className="desc-placeholder"
                                style={{ display: 'none' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6 col-sm-24 col-xs-24 mb-o-2">
                  <div className="row">
                    <div className="col-md-24 col-sm-12 col-xs-12 space-base">
                      <div className="cdz-shadow shine-effect cdz-banner cdz-rounded-border">
                        <a href="/tunisie-promo.html">
                          <img
                            style={{ borderRadius: '7px', borderColor: '#A8B4C0' }}
                            src={`${process.env.PUBLIC_URL}/images/promo.png`}
                            alt="tunisie-promo"
                            width="455"
                            height="260"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-24 col-sm-12 col-xs-12 space-base">
                      <div className="cdz-shadow shine-effect cdz-banner cdz-rounded-border">
                        <a href="/nouveaute.html">
                          <img
                            style={{ borderRadius: '7px', borderColor: '#A8B4C0' }}
                            src={`${process.env.PUBLIC_URL}/images/nouveaute.png`}
                            alt="nouveauté"
                            width="455"
                            height="260"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container space-lg">
                <div className="">
                  <div className="cdz-slider base-slider base-slider-small base-slider wrapper-adv-style-18">
                    <div className="cdz-block-title">
                      <p className="b-title h2">
                        <span>Achetez par catégorie</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container space-lg">
              <p>
                <a href="/tout-a-moins-20-dinar.html">
                  <img
                    style={{ borderRadius: '5px' }}
                    src={`${process.env.PUBLIC_URL}/images/tout_a_moins_20_dinar.png`}
                    alt="tout-a-moins-20-dinar"
                    width="1720"
                    height="230"
                  />
                </a>
              </p>
            </div>

            <div className="container-fluid">
              <div className="container space-lg">
                <p>
                  <a href="/bons-plans.html">
                    <img
                      style={{ borderRadius: '5px' }}
                      src={`${process.env.PUBLIC_URL}/images/bon_plan.png`}
                      alt="bons-plans"
                      width="1720"
                      height="230"
                    />
                  </a>
                </p>
              </div>
            </div>

            <div className="container space-lg">
              <div className="row">
                <div className="col-sm-8 space-xs">
                  <p>
                    <a href="/service-client">
                      <img
                        style={{ borderRadius: '5px' }}
                        src={`${process.env.PUBLIC_URL}/images/Wamia_timing_.png`}
                        alt="service_client"
                        width={554}
                        height={315}
                      />
                    </a>
                  </p>
                </div>
                <div className="col-sm-8 space-xs">
                  <p>
                    <a href="/livraison">
                      <img
                        style={{ borderRadius: '5px' }}
                        src={`${process.env.PUBLIC_URL}/images/paiement.jpg`}
                        alt="mode de paiement"
                        width={554}
                        height={315}
                      />
                    </a>
                  </p>
                </div>
                <div className="col-sm-8">
                  <p>
                    <a href="/politique-d-echange">
                      <img
                        style={{ borderRadius: '5px' }}
                        src={`${process.env.PUBLIC_URL}/images/politique_de_retour.jpg`}
                        alt="politique_de_retour"
                        width={554}
                        height={315}
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;