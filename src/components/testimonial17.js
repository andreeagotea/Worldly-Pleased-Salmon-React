import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text24 thq-heading-2">
                  Depoimentos
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text28 thq-body-small">
                  Estamos muito satisfeitos com a plataforma, que facilitou a
                  comunicação com os alunos e responsáveis, além de centralizar
                  todas as informações dos cursos em um só lugar.
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
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text35 thq-body-large">
                            Maria Silva
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27 thq-body-small">
                            Diretora de Escola
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text37 thq-body-small">
                        Excelente plataforma para instituições educacionais!
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
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text33 thq-body-large">
                            João Santos
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36 thq-body-small">
                            Professor de Matemática
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text34 thq-body-small">
                        A plataforma é intuitiva e prática, o que me ajudou a
                        organizar melhor o conteúdo das minhas aulas e
                        disponibilizar materiais extras para os alunos.
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
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text26 thq-body-large">
                            Carla Oliveira
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25 thq-body-small">
                            Coordenadora Pedagógica
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text32 thq-body-small">
                        Ótima ferramenta para acompanhar o desempenho dos
                        estudantes e identificar áreas que precisam de mais
                        atenção. Recomendo!
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
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text29 thq-body-large">
                            Pedro Costa
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text31 thq-body-small">
                            Tutor Online
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text30 thq-body-small">
                        Como tutor, encontrei na plataforma uma maneira
                        eficiente de interagir com os alunos, tirar dúvidas e
                        fornecer feedback personalizado. Estou muito satisfeito
                        com os resultados.
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

Testimonial17.defaultProps = {
  author4Src:
    'https://images.unsplash.com/photo-1497120573086-6219573cf71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTgyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Foto de Pedro Costa',
  heading1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTgyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  author3Name: undefined,
  author2Alt: 'Foto de João Santos',
  author1Position: undefined,
  content1: undefined,
  author4Name: undefined,
  author3Alt: 'Foto de Carla Oliveira',
  author1Alt: 'Foto de Maria Silva',
  review4: undefined,
  author4Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1518611540400-6b85a0704342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTgyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  review3: undefined,
  author2Name: undefined,
  review2: undefined,
  author2Src:
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTgyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author2Position: undefined,
  review1: undefined,
}

Testimonial17.propTypes = {
  author4Src: PropTypes.string,
  author4Alt: PropTypes.string,
  heading1: PropTypes.element,
  author1Src: PropTypes.string,
  author3Position: PropTypes.element,
  author3Name: PropTypes.element,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.element,
  content1: PropTypes.element,
  author4Name: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  review4: PropTypes.element,
  author4Position: PropTypes.element,
  author3Src: PropTypes.string,
  review3: PropTypes.element,
  author2Name: PropTypes.element,
  review2: PropTypes.element,
  author2Src: PropTypes.string,
  author1Name: PropTypes.element,
  author2Position: PropTypes.element,
  review1: PropTypes.element,
}

export default Testimonial17
