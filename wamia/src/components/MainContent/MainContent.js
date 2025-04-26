import React from 'react';
import Banner from './Banner';
import '../../styles/main.css';


const MainContent = () => {
  return (
    <main id="maincontent" className="page-main page-main-full">
      <a id="contentarea" tabIndex="-1"></a>
      
      <div className="columns">
        <div className="column main">
          <input name="form_key" type="hidden" value="j1VQevdr5JuF4qkn" />
          <div className="cdz-main-content widget block block-static-block">
            <div className="container space-lg" style={{paddingTop: '15px'}}>
              <div className="row body-top-panel flex-grid">
                <div className="col-sm-6 col-md-6 col-sm-24 col-xs-24 mb-o-2">
                  <div className="row">
                    <div className="col-md-24 col-sm-12 col-xs-12 space-base">
                      <div className="cdz-shadow shine-effect cdz-banner cdz-rounded-border">
                        <a href="/catalogsearch/result/?q=derma">
                          <img 
                            style={{borderRadius: '7px', color: '#a8b4c0'}} 
                            src="/images/Derma_Roller.png" 
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
                            style={{borderRadius: '7px', color: '#a8b4c0'}} 
                            src="/images/pare_soleil.png" 
                            alt="Pare_soleil" 
                            width="455" 
                            height="260" 
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 cdz-main-slideshow space-base col-md-12 col-sm-24 col-xs-24 mb-o-1">
                  <Banner />
                </div>
                <div className="col-sm-6 col-md-6 col-sm-24 col-xs-24 mb-o-2">
                  <div className="row">
                    <div className="col-md-24 col-sm-12 col-xs-12 space-base">
                      <div className="cdz-shadow shine-effect cdz-banner cdz-rounded-border">
                        <a href="/tunisie-promo.html">
                          <img 
                            style={{borderRadius: '7px', borderColor: '#A8B4C0'}} 
                            src="/images/promo.png" 
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
                            style={{borderRadius: '7px', borderColor: '#A8B4C0'}} 
                            src="/images/nouveaute.png" 
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
                      <p className="b-title h2"><span>Achetez par catégorie</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="container space-lg">
              <p>
                <a href="/tout-a-moins-20-dinar.html">
                  <img 
                    style={{borderRadius: '5px'}} 
                    src="/images/tout_a_moins_20_dinar.png" 
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
                      style={{borderRadius: '5px'}} 
                      src="/images/bon_plan.png" 
                      alt="bons-plans" 
                      width="1720" 
                      height="230" 
                    />
                  </a>
                </p>
              </div>
            </div>
            
            <div className="container-fluid">
              <div className="container space-lg">
                <div className="row">
                  <div className="col-sm-8 space-xs">
                    <p>
                      <a href="/service-client">
                        <img 
                          style={{borderRadius: '5px'}} 
                          src="/images/Wamia_timing_.png" 
                          alt="service_client" 
                          width="554" 
                          height="315" 
                        />
                      </a>
                    </p>
                  </div>
                  <div className="col-sm-8 space-xs">
                    <p>
                      <a href="/livraison">
                        <img 
                          style={{borderRadius: '5px'}} 
                          src="/images/paiement.jpg" 
                          alt="mode de paiement" 
                          width="554" 
                          height="315" 
                        />
                      </a>
                    </p>
                  </div>
                  <div className="col-sm-8">
                    <p>
                      <a href="/politique-d-echange">
                        <img 
                          style={{borderRadius: '5px'}} 
                          src="/images/politique_de_retour.jpg" 
                          alt="politique_de_retour" 
                          width="554" 
                          height="315" 
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;