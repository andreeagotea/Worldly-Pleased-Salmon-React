import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features25-text5 thq-heading-2">
                      Detalhes do Curso
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text2 thq-body-small">
                      Forneça informações detalhadas sobre os cursos oferecidos,
                      incluindo currículo, carga horária e objetivos.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features25-text6 thq-heading-2">
                      Processo de Matrícula
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text1 thq-body-small">
                      Explicar o processo de matrícula, documentos necessários e
                      prazos para inscrição.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features25-text4 thq-heading-2">
                      Recursos Disponíveis
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text3 thq-body-small">
                      Destaque os recursos adicionais disponíveis, como
                      biblioteca online, suporte ao aluno e ferramentas de
                      aprendizagem.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature2Description: undefined,
  feature1Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1663431262876-3dea1f470d7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTgyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Imagem representativa dos detalhes do curso',
  feature3Description: undefined,
  feature3Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1712232863897-458b02fad0f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTgyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1705354151112-e004f0cdb94a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTgyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Imagem representativa do processo de matrícula',
  feature1Title: undefined,
  feature2Title: undefined,
  feature3ImgAlt: 'Imagem representativa dos recursos disponíveis',
}

Features25.propTypes = {
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
}

export default Features25
