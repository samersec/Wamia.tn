import React from 'react';
import '../../../src/styles/main.css'; // You'll need to create this CSS file or adjust your styling approach

const Header = () => {
  return (
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
  );
};

export default Header;