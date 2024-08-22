import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial171.css'

const Testimonial171 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial171-max-width thq-section-max-width">
        <div className="testimonial171-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial171-text28 thq-heading-2">
                  Depoimentos dos nossos alunos
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial171-text35 thq-body-small">
                  Estou muito satisfeita com a qualidade dos cursos oferecidos
                  pela plataforma. Os materiais são excelentes e os professores
                  são muito capacitados.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card1"
              >
                <div className="testimonial171-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial171-image1"
                  />
                  <div className="testimonial171-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial171-text30 thq-body-large">
                            Maria Silva
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial171-text32 thq-body-small">
                            Professora de História
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial171-text29 thq-body-small">
                        Excelente plataforma para quem busca conhecimento de
                        qualidade.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card2"
              >
                <div className="testimonial171-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial171-image2"
                  />
                  <div className="testimonial171-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial171-text34 thq-body-large">
                            João Santos
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial171-text36 thq-body-small">
                            Engenheiro Civil
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial171-text37 thq-body-small">
                        Os cursos me ajudaram a aprimorar minhas habilidades
                        profissionais. Recomendo a todos que queiram se destacar
                        no mercado de trabalho.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card3"
              >
                <div className="testimonial171-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial171-image3"
                  />
                  <div className="testimonial171-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial171-text25 thq-body-large">
                            Ana Oliveira
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial171-text24 thq-body-small">
                            Estudante de Medicina
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial171-text33 thq-body-small">
                        A plataforma é muito intuitiva e os conteúdos são
                        apresentados de forma clara e objetiva. Estou adorando
                        aprender por aqui.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card4"
              >
                <div className="testimonial171-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial171-image4"
                  />
                  <div className="testimonial171-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial171-text26 thq-body-large">
                            Pedro Costa
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial171-text31 thq-body-small">
                            Analista de Marketing
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial171-text27 thq-body-small">
                        Os cursos me proporcionaram uma visão ampla sobre
                        diversas áreas. Sem dúvida, um investimento que vale a
                        pena.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial171.defaultProps = {
  author3Position: undefined,
  author3Name: undefined,
  author2Alt: 'Foto do João Santos',
  author3Src:
    'https://images.unsplash.com/photo-1517840933437-c41356892b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTg3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Foto da Maria Silva',
  author4Name: undefined,
  review4: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTg3MXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  review1: undefined,
  author4Alt: 'Foto do Pedro Costa',
  author1Name: undefined,
  author4Position: undefined,
  author1Position: undefined,
  review3: undefined,
  author2Name: undefined,
  author3Alt: 'Foto da Ana Oliveira',
  content1: undefined,
  author2Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1508985436669-c9cc328e9aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTg3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  review2: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTg3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial171.propTypes = {
  author3Position: PropTypes.element,
  author3Name: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author4Name: PropTypes.element,
  review4: PropTypes.element,
  author1Src: PropTypes.string,
  heading1: PropTypes.element,
  review1: PropTypes.element,
  author4Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author4Position: PropTypes.element,
  author1Position: PropTypes.element,
  review3: PropTypes.element,
  author2Name: PropTypes.element,
  author3Alt: PropTypes.string,
  content1: PropTypes.element,
  author2Position: PropTypes.element,
  author2Src: PropTypes.string,
  review2: PropTypes.element,
  author4Src: PropTypes.string,
}

export default Testimonial171
