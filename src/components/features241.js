import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features241.css'

const Features241 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features241-container2 thq-section-max-width">
        <div className="features241-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features241-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features241-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features241-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features241-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features241-tab-horizontal1"
          >
            <div className="features241-divider-container1">
              {activeTab === 0 && (
                <div className="features241-container3"></div>
              )}
            </div>
            <div className="features241-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features241-text2 thq-heading-2">
                      Informações Detalhadas
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features241-text4 thq-body-small">
                      Informações completas sobre os cursos oferecidos
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features241-tab-horizontal2"
          >
            <div className="features241-divider-container2">
              {activeTab === 1 && (
                <div className="features241-container4"></div>
              )}
            </div>
            <div className="features241-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features241-text3 thq-heading-2">
                      Matrícula Simplificada
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features241-text6 thq-body-small">
                      Processo de matrícula simplificado
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features241-tab-horizontal3"
          >
            <div className="features241-divider-container3">
              {activeTab === 2 && (
                <div className="features241-container5"></div>
              )}
            </div>
            <div className="features241-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features241-text1 thq-heading-2">
                      Recursos Extras
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features241-text5 thq-body-small">
                      Recursos adicionais para aprimorar o aprendizado
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features241.defaultProps = {
  feature3Title: undefined,
  feature1Title: undefined,
  feature3ImgAlt: 'Recursos Extras',
  feature1ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature3ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature1ImgAlt: 'Detalhes dos cursos',
  feature2ImgAlt: 'Processo de Matrícula',
  feature2Title: undefined,
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature1Description: undefined,
  feature3Description: undefined,
  feature2Description: undefined,
}

Features241.propTypes = {
  feature3Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2Description: PropTypes.element,
}

export default Features241
