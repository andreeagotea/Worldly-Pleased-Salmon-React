import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="thq-flex-column list-item">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="content-list1-text19 thq-heading-2">
                      Informações Detalhadas
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="content-list1-text13 thq-body-small">
                      Tenha acesso a informações detalhadas sobre os cursos
                      oferecidos, incluindo conteúdo programático, carga horária
                      e requisitos.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading2 ?? (
                  <Fragment>
                    <h3 className="content-list1-text18 thq-heading-3">
                      Processo de Matrícula
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content2 ?? (
                  <Fragment>
                    <p className="content-list1-text21 thq-body-small">
                      Matricule-se de forma simples e rápida em nossos cursos
                      online, sem burocracias.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading3 ?? (
                  <Fragment>
                    <h3 className="content-list1-text14 thq-heading-3">
                      Recursos Adicionais
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content3 ?? (
                  <Fragment>
                    <p className="content-list1-text11 thq-body-small">
                      Aproveite recursos extras como material de apoio, fóruns
                      de discussão e quizzes para potencializar seu aprendizado.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading4 ?? (
                  <Fragment>
                    <h3 className="content-list1-text15 thq-heading-3">
                      Planos de Preços
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content4 ?? (
                  <Fragment>
                    <p className="content-list1-text20 thq-body-small">
                      Conheça nossos planos de preços flexíveis que se adequam
                      às suas necessidades e orçamento.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading5 ?? (
                  <Fragment>
                    <h3 className="content-list1-text16 thq-heading-3">
                      Depoimentos
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content5 ?? (
                  <Fragment>
                    <p className="content-list1-text17 thq-body-small">
                      Veja o que nossos alunos e educadores têm a dizer sobre a
                      experiência de aprendizado em nossa plataforma.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading6 ?? (
                  <Fragment>
                    <h3 className="content-list1-text12 thq-heading-3">
                      Contato
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content6 ?? (
                  <Fragment>
                    <p className="content-list1-text10 thq-body-small">
                      Entre em contato conosco para esclarecer dúvidas, enviar
                      sugestões ou obter mais informações sobre nossos cursos
                      online.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  content6: undefined,
  content3: undefined,
  heading6: undefined,
  content1: undefined,
  heading3: undefined,
  heading4: undefined,
  heading5: undefined,
  content5: undefined,
  heading2: undefined,
  heading1: undefined,
  content4: undefined,
  content2: undefined,
}

ContentList1.propTypes = {
  content6: PropTypes.element,
  content3: PropTypes.element,
  heading6: PropTypes.element,
  content1: PropTypes.element,
  heading3: PropTypes.element,
  heading4: PropTypes.element,
  heading5: PropTypes.element,
  content5: PropTypes.element,
  heading2: PropTypes.element,
  heading1: PropTypes.element,
  content4: PropTypes.element,
  content2: PropTypes.element,
}

export default ContentList1
