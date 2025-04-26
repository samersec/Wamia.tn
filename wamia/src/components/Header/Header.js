import React from 'react';
import './Header.css'; // You'll need to create this CSS file or adjust your styling approach

const Home = () => {
  return (
    <div className="page-wrapper">
      <header className="page-header header-style-14">
        <div className="container sticky-menu">
          <div id="header-sections" className="header-sections">
            <div id="header-middle" className="header-middle">
              <div className="panel header">
                <div className="container header-panel-container">
                  <div className="header-pattern-left">
                    <div className="inner">
                      <div className="item-1 pattern"></div>
                      <div className="item-2 pattern"></div>
                      <div className="item-3 pattern"></div>
                    </div>
                  </div>
                  <div className="header-panel-row row">
                    <div className="col-sm-6 header-panel-left">
                      <span className="action nav-toggle"><span>Basculer la navigation</span></span>
                      <a className="logo" href="https://www.wamia.tn/" title="">
                        <img className="main-logo hidden-xs" src="/images/Sans_titre-1-R_cup_r_.png" alt="" />
                        <img className="small-logo visible-xs" src="/images/Sans_titre-1-R_cup_r_.png" alt="" />
                      </a>
                    </div>
                    <div className="col-sm-11 header-panel-center header-search-wrap">
                      <div className="header-search hide-advanced-search no-full-box">
                        <div className="hidden-xs search-form">
                          <div className="block block-search">
                            <div className="block block-title"><strong>Rechercher</strong></div>
                            <div className="block block-content">
                              <form className="form minisearch" id="search_mini_form" action="https://www.wamia.tn/catalogsearch/result/" method="get">
                                <div className="field search">
                                  <div className="control">
                                    <input id="search" type="text" name="q" value="" placeholder="Rechercher..." className="input-text" maxLength="128" />
                                    <div id="search_autocomplete" className="search-autocomplete"></div>
                                    <div className="nested">
                                      <a className="action advanced" href="https://www.wamia.tn/catalogsearch/advanced/">
                                        <span className="advanced-label">Recherche Avancée</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="actions">
                                  <button type="submit" title="Rechercher" className="action search" aria-label="Search">
                                    <span>Rechercher</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="visible-xs pos_static mobi-cart-wrapper"></div>
                    </div>
                    <div className="col-sm-7 header-panel-right">
                      <div className="header-panel-right-inner">
                        <ul className="header features-links items hidden-xs">
                          <li className="link wishlist">
                            <div className="cdz-dropdown">
                              <a
                                href="javascript:;" className="cdz-dd-trigger cdz-top-link"
                                id="top-wishlist" data-role="cdz-dd-trigger"><span
                                  className="label">Liste d'envies</span></a>
                            </div>
                          </li>
                          <li className="authorization-link authorization-style-01">
                            <div className="cdz-dropdown account-wrapper">
                              <a href="#" className="account-trigger cdz-dd-trigger cdz-top-link">
                                <span className="text-uppercase">Votre compte</span>
                              </a>
                            </div>
                          </li>
                          <li className="cart-link">
                            <div className="minicart-wrapper">
                              <div className="cdz-dropdown">
                                <a href="#" className="action showcart cdz-dd-trigger cdz-top-link">
                                  <span className="text">Votre Panier</span>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="header-bottom" className="header-bottom">
              <div className="container">
                <div className="row cdz-fix-left">
                  <div className="col-sm-21 header-bottom-left header-menu-wrap">
                    <div id="desk_menu-container" className="hidden-xs pos_static">
                      <nav className="cdz-navigation">
                        <div className="cdz-menu no-loaded cdz-horizontal-menu dropdown-fullwidth cdz-fade">
                          <ul className="groupmenu">
                            <li className="item level0 level-top parent cat-tree no-full">
                              <a className="menu-link" href="#">
                                <i className="menu-icon fa fa-bars"></i>
                                <span>Nos Catégories</span>
                              </a>
                            </li>
                            <li className="item level0 level-top">
                              <a className="menu-link" href="https://www.wamia.tn/tout-a-moins-20-dinar.html">
                                <i className="menu-icon fa fa-heartbeat"></i>
                                <span>Tout à 20 dt</span>
                              </a>
                            </li>
                            <li className="item level0 level-top">
                              <a className="menu-link" href="https://www.wamia.tn/nouveaute.html">
                                <i className="menu-icon fa fa-rocket"></i>
                                <span>Nouveauté</span>
                              </a>
                            </li>
                            <li className="item level0 level-top">
                              <a className="menu-link" href="https://www.wamia.tn/tunisie-promo.html">
                                <i className="menu-icon fa fa-hourglass-2"></i>
                                <span>Promo</span>
                              </a>
                            </li>
                            <li className="item level0 level-top">
                              <a className="menu-link" href="https://www.wamia.tn/livraison-gratuite.html">
                                <i className="menu-icon fa fa-truck"></i>
                                <span>Livraison gratuite</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className="col-sm-3 header-bottom-right">
                    <div className="inner f-right">
                      <div className="switcher language switcher-language">
                        <div className="actions dropdown options switcher-options">
                          <div className="action toggle switcher-trigger">
                            <span>Francais</span>
                          </div>
                        </div>
                      </div>
                      <div className="switcher currency switcher-currency -style-03">
                        <div className="actions dropdown options switcher-options">
                          <a className="action toggle switcher-trigger">
                            <span className="language-TND text">
                              <span className="code">TND</span>
                              <span className="name"></span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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
                            <img style={{borderRadius: '7px', color: '#a8b4c0'}} src="/images/Derma_Roller.png" alt="Derma_roller" width="455" height="260" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-24 col-md-12 col-sm-12 col-xs-12 space-base">
                        <div className="cdz-shadow shine-effect cdz-banner cdz-rounded-border">
                          <a href="/auto-moto/accessoires-auto/pare-soleil.html">
                            <img style={{borderRadius: '7px', color: '#a8b4c0'}} src="/images/pare_soleil.png" alt="Pare_soleil" width="455" height="260" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 cdz-main-slideshow space-base col-md-12 col-sm-24 col-xs-24 mb-o-1">
                    <div className="cdz-slideshow cdz-rounded-border">
                      <div className="cdz-slideshow-outer abs-frame" style={{paddingBottom: '58.5%', background: 'url(/images/coussin_de_grossesse.png) no-repeat center center', backgroundSize: 'cover'}}>
                        <div className="cdz-slideshow-inner abs-frame-inner">
                          <div className="items" role="items"></div>
                          <div className="desc-placeholder" style={{display: 'none'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-sm-24 col-xs-24 mb-o-2">
                    <div className="row">
                      <div className="col-md-24 col-sm-12 col-xs-12 space-base">
                        <div className="cdz-shadow shine-effect cdz-banner cdz-rounded-border">
                          <a href="/tunisie-promo.html">
                            <img style={{borderRadius: '7px', borderColor: '#A8B4C0'}} src="/images/promo.png" alt="tunisie-promo" width="455" height="260" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-24 col-sm-12 col-xs-12 space-base">
                        <div className="cdz-shadow shine-effect cdz-banner cdz-rounded-border">
                          <a href="/nouveaute.html">
                            <img style={{borderRadius: '7px', borderColor: '#A8B4C0'}} src="/images/nouveaute.png" alt="nouveauté" width="455" height="260" />
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
                    <img style={{borderRadius: '5px'}} src="/images/tout_a_moins_20_dinar.png" alt="tout-a-moins-20-dinar" width="1720" height="230" />
                  </a>
                </p>
              </div>
              
              <div className="container-fluid">
                <div className="container space-lg">
                  <p>
                    <a href="/bons-plans.html">
                      <img style={{borderRadius: '5px'}} src="/images/bon_plan.png" alt="bons-plans" width="1720" height="230" />
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
                          <img style={{borderRadius: '5px'}} src="/images/Wamia_timing_.png" alt="service_client" width="554" height="315" />
                        </a>
                      </p>
                    </div>
                    <div className="col-sm-8 space-xs">
                      <p>
                        <a href="/livraison">
                          <img style={{borderRadius: '5px'}} src="/images/paiement.jpg" alt="mode de paiement" width="554" height="315" />
                        </a>
                      </p>
                    </div>
                    <div className="col-sm-8">
                      <p>
                        <a href="/politique-d-echange">
                          <img style={{borderRadius: '5px'}} src="/images/politique_de_retour.jpg" alt="politique_de_retour" width="554" height="315" />
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

      <div className="mb-bottom-toolbar visible-xs" id="mb-bottom-toolbar">
        <div className="mb-toolbar-backface"></div>
        <div className="mb-toolbar-content">
          <div className="mb-toolbar-content-inner cdz-dd-content cdz-dropdown"></div>
        </div>
      </div>
      <div className="minicart-popup" id="cdz-minicart-popup">
        <div className="block-minicartpro block">
          <div id="minicartpro-content-wrapper" className="minicartpro-content-wrapper"></div>
          <div className="ajaxcart-loader double-bounce-spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
      <div className="md-sidenav-left cdz-sidebar" data-sidebarid="left">
        <div className="utilies-sections"></div>
      </div>
      <div className="md-sidenav-right cdz-sidebar" data-sidebarid="right">
        <div className="utilies-sections"></div>
      </div>
    </div>
  );
};

export default Home;