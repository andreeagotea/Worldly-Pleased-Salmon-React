import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero171 from '../components/hero171'
import Features241 from '../components/features241'
import CTA261 from '../components/cta261'
import Features251 from '../components/features251'
import Pricing141 from '../components/pricing141'
import Steps21 from '../components/steps21'
import Testimonial171 from '../components/testimonial171'
import Contact101 from '../components/contact101'
import Footer4 from '../components/footer4'
import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Landing - Worldly Pleased Salmon</title>
        <meta property="og:title" content="Landing - Worldly Pleased Salmon" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="landing-text100 thq-link thq-body-small">
              #inicio
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="landing-text101 thq-link thq-body-small">
              #cursos
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="landing-text102 thq-link thq-body-small">
              #matricula
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="landing-text103 thq-link thq-body-small">
              #recursos
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="landing-text104 thq-body-large">
              Página Inicial
            </span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="landing-text105 thq-body-large">Cursos</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="landing-text106 thq-body-large">Matrícula</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="landing-text107 thq-body-large">Recursos</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="landing-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="landing-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="landing-text110 thq-body-small">
              Explore nossa página inicial para saber mais sobre nossa
              plataforma.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="landing-text111 thq-body-small">
              Descubra os cursos disponíveis e encontre o que melhor se adequa
              às suas necessidades.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="landing-text112 thq-body-small">
              Saiba mais sobre o processo de matrícula e como garantir sua vaga.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="landing-text113 thq-body-small">
              Acesse nossos recursos para obter informações adicionais e
              suporte.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero171
        action1={
          <Fragment>
            <span className="landing-text114 thq-body-small">
              Matricule-se agora
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="landing-text115 thq-body-small">Saiba mais</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="landing-text116 thq-body-large">
              Aprenda no seu próprio ritmo com uma variedade de cursos
              disponíveis. Matricule-se facilmente e tenha acesso a recursos
              exclusivos.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="landing-text117 thq-heading-1">
              Plataforma Online de Educação
            </span>
          </Fragment>
        }
      ></Hero171>
      <Features241
        feature1Title={
          <Fragment>
            <span className="landing-text118 thq-heading-2">
              Informações Detalhadas
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="landing-text119 thq-heading-2">
              Matrícula Simplificada
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="landing-text120 thq-heading-2">
              Recursos Extras
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="landing-text121 thq-body-small">
              Informações completas sobre os cursos oferecidos
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="landing-text122 thq-body-small">
              Processo de matrícula simplificado
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="landing-text123 thq-body-small">
              Recursos adicionais para aprimorar o aprendizado
            </span>
          </Fragment>
        }
      ></Features241>
      <CTA261
        action1={
          <Fragment>
            <span className="landing-text124">Ver cursos disponíveis</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="landing-text125 thq-body-large">
              Explore nossa variedade de cursos online e dê o próximo passo em
              sua jornada de aprendizado.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="landing-text126 thq-heading-2">
              Matricule-se agora e comece a aprender!
            </span>
          </Fragment>
        }
      ></CTA261>
      <Features251
        feature1Title={
          <Fragment>
            <span className="landing-text127 thq-heading-2">Cursos Online</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="landing-text128 thq-heading-2">
              Recursos Adicionais
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="landing-text129 thq-heading-2">
              Preços Acessíveis
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="landing-text130 thq-body-small">
              Acesse uma ampla variedade de cursos online em diversas áreas de
              conhecimento.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="landing-text131 thq-body-small">
              Tenha acesso a materiais complementares, fóruns de discussão e
              suporte personalizado.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="landing-text132 thq-body-small">
              Planos flexíveis que se adequam ao seu orçamento, com opções de
              pagamento facilitadas.
            </span>
          </Fragment>
        }
      ></Features251>
      <Pricing141
        plan1={
          <Fragment>
            <span className="landing-text133 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="landing-text134 thq-body-large">
              Business plan
            </span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="landing-text135 thq-body-large">
              Enterprise plan
            </span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="landing-text136 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="landing-text137 thq-body-large">
              Business plan
            </span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="landing-text138 thq-body-large">
              Enterprise plan
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="landing-text139 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="landing-text140 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="landing-text143 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="landing-text144 thq-heading-3">
              Preço do Plano 1
            </span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="landing-text145 thq-heading-3">
              Preço do Plano 2
            </span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="landing-text146 thq-heading-3">
              Preço do Plano 3
            </span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="landing-text147 thq-body-small">
              Ação do Plano 1
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="landing-text148 thq-heading-3">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="landing-text149 thq-body-large">
              Preço Anual do Plano 1
            </span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="landing-text150 thq-body-small">
              Ação do Plano 2
            </span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="landing-text151 thq-heading-3">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="landing-text152 thq-body-large">
              Preço Anual do Plano 2
            </span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="landing-text153 thq-body-small">
              Ação do Plano 3
            </span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="landing-text154 thq-heading-3">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="landing-text155 thq-body-large">
              Preço Anual do Plano 3
            </span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="landing-text156 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="landing-text157 thq-body-large">
              or $20 monthly
            </span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="landing-text158 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="landing-text159 thq-body-large">
              or $29 monthly
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="landing-text160 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="landing-text161 thq-body-large">
              or $49 monthly
            </span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="landing-text162 thq-body-small">
              Recurso do Plano 1 - Feature 1
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="landing-text163 thq-body-small">
              Recurso do Plano 1 - Feature 2
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="landing-text164 thq-body-small">
              Recurso do Plano 1 - Feature 3
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="landing-text165 thq-body-small">
              Recurso do Plano 2 - Feature 1
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="landing-text166 thq-body-small">
              Recurso do Plano 2 - Feature 2
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="landing-text167 thq-body-small">
              Recurso do Plano 2 - Feature 3
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="landing-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="landing-text169 thq-body-small">
              Recurso do Plano 3 - Feature 1
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="landing-text170 thq-body-small">
              Recurso do Plano 3 - Feature 2
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="landing-text171 thq-body-small">
              Recurso do Plano 3 - Feature 3
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="landing-text172 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="landing-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="landing-text174 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="landing-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="landing-text176 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="landing-text177 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="landing-text178 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="landing-text179 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="landing-text180 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="landing-text181 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="landing-text182 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="landing-text183 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="landing-text184 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="landing-text185 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing141>
      <Steps21
        step1Title={
          <Fragment>
            <span className="landing-text186 thq-heading-2">
              Explore os cursos
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="landing-text187 thq-heading-2">Matricule-se</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="landing-text188 thq-heading-2">
              Escolha seu plano
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="landing-text189 thq-heading-2">
              Interaja com tutores
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="landing-text190 thq-body-small">
              Descubra uma variedade de cursos online disponíveis em nossa
              plataforma.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="landing-text191 thq-body-small">
              Escolha o curso desejado e siga o processo de matrícula simples e
              rápido.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="landing-text192 thq-body-small">
              Selecione o plano de preços que melhor se adequa às suas
              necessidades de aprendizado.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="landing-text193 thq-body-small">
              Tenha a oportunidade de interagir com tutores especializados e
              tirar dúvidas durante o curso.
            </span>
          </Fragment>
        }
      ></Steps21>
      <Testimonial171
        review1={
          <Fragment>
            <span className="landing-text194 thq-body-small">
              Excelente plataforma para quem busca conhecimento de qualidade.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="landing-text195 thq-body-small">
              Os cursos me ajudaram a aprimorar minhas habilidades
              profissionais. Recomendo a todos que queiram se destacar no
              mercado de trabalho.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="landing-text196 thq-body-small">
              A plataforma é muito intuitiva e os conteúdos são apresentados de
              forma clara e objetiva. Estou adorando aprender por aqui.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="landing-text197 thq-body-small">
              Os cursos me proporcionaram uma visão ampla sobre diversas áreas.
              Sem dúvida, um investimento que vale a pena.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="landing-text198 thq-body-small">
              Estou muito satisfeita com a qualidade dos cursos oferecidos pela
              plataforma. Os materiais são excelentes e os professores são muito
              capacitados.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="landing-text199 thq-heading-2">
              Depoimentos dos nossos alunos
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="landing-text200 thq-body-large">Maria Silva</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="landing-text201 thq-body-large">João Santos</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="landing-text202 thq-body-large">Ana Oliveira</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="landing-text203 thq-body-large">Pedro Costa</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="landing-text204 thq-body-small">
              Professora de História
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="landing-text205 thq-body-small">
              Engenheiro Civil
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="landing-text206 thq-body-small">
              Estudante de Medicina
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="landing-text207 thq-body-small">
              Analista de Marketing
            </span>
          </Fragment>
        }
      ></Testimonial171>
      <Contact101
        content1={
          <Fragment>
            <span className="landing-text208 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="landing-text209 thq-heading-2">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="landing-text210 thq-heading-3">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="landing-text211 thq-heading-3">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="landing-text212 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="landing-text213 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact101>
      <Footer4
        link1={
          <Fragment>
            <span className="landing-text214 thq-body-small">Sobre nós</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="landing-text215 thq-body-small">Cursos</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="landing-text216 thq-body-small">Matrícula</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="landing-text217 thq-body-small">Recursos</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="landing-text218 thq-body-small">Contato</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="landing-text219 thq-body-small">
              Termos de Uso
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="landing-text220 thq-body-small">
              Política de Cookies
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="landing-text221 thq-body-small">
              Política de Privacidade
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Landing
