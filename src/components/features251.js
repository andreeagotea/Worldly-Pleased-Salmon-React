import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features251.css'

const Features251 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features251-container2 thq-section-max-width">
        <div className="features251-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features251-tab-horizontal1"
          >
            <div className="features251-divider-container1">
              {activeTab === 0 && (
                <div className="features251-container3"></div>
              )}
            </div>
            <div className="features251-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features251-text6 thq-heading-2">
                      Cursos Online
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features251-text4 thq-body-small">
                      Acesse uma ampla variedade de cursos online em diversas
                      áreas de conhecimento.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features251-tab-horizontal2"
          >
            <div className="features251-divider-container2">
              {activeTab === 1 && (
                <div className="features251-container4"></div>
              )}
            </div>
            <div className="features251-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features251-text3 thq-heading-2">
                      Recursos Adicionais
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features251-text5 thq-body-small">
                      Tenha acesso a materiais complementares, fóruns de
                      discussão e suporte personalizado.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features251-tab-horizontal3"
          >
            <div className="features251-divider-container3">
              {activeTab === 2 && (
                <div className="features251-container5"></div>
              )}
            </div>
            <div className="features251-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features251-text2 thq-heading-2">
                      Preços Acessíveis
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features251-text1 thq-body-small">
                      Planos flexíveis que se adequam ao seu orçamento, com
                      opções de pagamento facilitadas.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features251-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features251-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features251-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features251-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features251.defaultProps = {
  feature3Description: undefined,
  feature3Title: undefined,
  feature3ImgAlt: 'Imagem representativa de preços acessíveis',
  feature2Title: undefined,
  feature1Description: undefined,
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature3ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2ImgAlt: 'Imagem representativa de recursos adicionais',
  feature2Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1622554129902-bb01970e2540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTg3MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Imagem representativa de cursos online',
  feature1Title: undefined,
}

Features251.propTypes = {
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
}

export default Features251
