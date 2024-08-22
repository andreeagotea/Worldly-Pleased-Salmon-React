import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import CTA1 from '../components/cta1'
import ContentList1 from '../components/content-list1'
import Footer4 from '../components/footer4'
import './legal.css'

const Legal = (props) => {
  return (
    <div className="legal-container">
      <Helmet>
        <title>Legal - Worldly Pleased Salmon</title>
        <meta property="og:title" content="Legal - Worldly Pleased Salmon" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="legal-text10 thq-link thq-body-small">
              #inicio
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="legal-text11 thq-link thq-body-small">
              #cursos
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="legal-text12 thq-link thq-body-small">
              #matricula
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="legal-text13 thq-link thq-body-small">
              #recursos
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="legal-text14 thq-body-large">Página Inicial</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="legal-text15 thq-body-large">Cursos</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="legal-text16 thq-body-large">Matrícula</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="legal-text17 thq-body-large">Recursos</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="legal-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="legal-text19">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="legal-text20 thq-body-small">
              Explore nossa página inicial para saber mais sobre nossa
              plataforma.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="legal-text21 thq-body-small">
              Descubra os cursos disponíveis e encontre o que melhor se adequa
              às suas necessidades.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="legal-text22 thq-body-small">
              Saiba mais sobre o processo de matrícula e como garantir sua vaga.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="legal-text23 thq-body-small">
              Acesse nossos recursos para obter informações adicionais e
              suporte.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <CTA1
        action1={
          <Fragment>
            <span className="legal-text24 thq-body-small">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="legal-text25 thq-body-small">
              Secondary action
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="legal-text26 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="legal-text27 thq-heading-2">
              Call to action that excites the visitor to try your product
            </span>
          </Fragment>
        }
      ></CTA1>
      <ContentList1
        content1={
          <Fragment>
            <span className="legal-text28 thq-body-small">
              Tenha acesso a informações detalhadas sobre os cursos oferecidos,
              incluindo conteúdo programático, carga horária e requisitos.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="legal-text29 thq-body-small">
              Matricule-se de forma simples e rápida em nossos cursos online,
              sem burocracias.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="legal-text30 thq-body-small">
              Aproveite recursos extras como material de apoio, fóruns de
              discussão e quizzes para potencializar seu aprendizado.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="legal-text31 thq-body-small">
              Conheça nossos planos de preços flexíveis que se adequam às suas
              necessidades e orçamento.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="legal-text32 thq-body-small">
              Veja o que nossos alunos e educadores têm a dizer sobre a
              experiência de aprendizado em nossa plataforma.
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="legal-text33 thq-body-small">
              Entre em contato conosco para esclarecer dúvidas, enviar sugestões
              ou obter mais informações sobre nossos cursos online.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="legal-text34 thq-heading-2">
              Informações Detalhadas
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="legal-text35 thq-heading-3">
              Processo de Matrícula
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="legal-text36 thq-heading-3">
              Recursos Adicionais
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="legal-text37 thq-heading-3">Planos de Preços</span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="legal-text38 thq-heading-3">Depoimentos</span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="legal-text39 thq-heading-3">Contato</span>
          </Fragment>
        }
      ></ContentList1>
      <Footer4
        link1={
          <Fragment>
            <span className="legal-text40 thq-body-small">Sobre nós</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="legal-text41 thq-body-small">Cursos</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="legal-text42 thq-body-small">Matrícula</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="legal-text43 thq-body-small">Recursos</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="legal-text44 thq-body-small">Contato</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="legal-text45 thq-body-small">Termos de Uso</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="legal-text46 thq-body-small">
              Política de Cookies
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="legal-text47 thq-body-small">
              Política de Privacidade
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Legal
