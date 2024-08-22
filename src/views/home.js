import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Worldly Pleased Salmon</title>
        <meta property="og:title" content="Worldly Pleased Salmon" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100 thq-link thq-body-small">
              #inicio
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101 thq-link thq-body-small">
              #cursos
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102 thq-link thq-body-small">
              #matricula
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103 thq-link thq-body-small">
              #recursos
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104 thq-body-large">Página Inicial</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105 thq-body-large">Cursos</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106 thq-body-large">Matrícula</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107 thq-body-large">Recursos</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110 thq-body-small">
              Explore nossa página inicial para saber mais sobre nossa
              plataforma.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111 thq-body-small">
              Descubra os cursos disponíveis e encontre o que melhor se adequa
              às suas necessidades.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Saiba mais sobre o processo de matrícula e como garantir sua vaga.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113 thq-body-small">
              Acesse nossos recursos para obter informações adicionais e
              suporte.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114 thq-body-small">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115 thq-body-small">
              Secondary action
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117 thq-heading-1">
              Medium length hero headline goes here
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118 thq-heading-2">
              Detalhes do Curso
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">
              Processo de Matrícula
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120 thq-heading-2">
              Recursos Disponíveis
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121 thq-body-small">
              Forneça informações detalhadas sobre os cursos oferecidos,
              incluindo currículo, objetivos e requisitos.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Explicação passo a passo do processo de matrícula, incluindo
              documentos necessários e prazos.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123 thq-body-small">
              Destaque os recursos adicionais disponíveis para os alunos, como
              biblioteca, laboratórios e suporte técnico.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Explorar Cursos</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Encontre o curso perfeito para você e dê o próximo passo em sua
              educação.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126 thq-heading-2">
              Inscreva-se agora
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127 thq-heading-2">
              Detalhes do Curso
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128 thq-heading-2">
              Processo de Matrícula
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">
              Recursos Disponíveis
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130 thq-body-small">
              Forneça informações detalhadas sobre os cursos oferecidos,
              incluindo currículo, carga horária e objetivos.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Explicar o processo de matrícula, documentos necessários e prazos
              para inscrição.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132 thq-body-small">
              Destaque os recursos adicionais disponíveis, como biblioteca
              online, suporte ao aluno e ferramentas de aprendizagem.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140 thq-body-large">
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
            <span className="home-text143 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144 thq-heading-3">Preço do Plano 1</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145 thq-heading-3">Preço do Plano 2</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146 thq-heading-3">Preço do Plano 3</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147 thq-body-small">Ação do Plano 1</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148 thq-heading-3">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149 thq-body-large">
              Preço Anual do Plano 1
            </span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150 thq-body-small">Ação do Plano 2</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151 thq-heading-3">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152 thq-body-large">
              Preço Anual do Plano 2
            </span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153 thq-body-small">Ação do Plano 3</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154 thq-heading-3">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155 thq-body-large">
              Preço Anual do Plano 3
            </span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Recurso do Plano 1
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Outro Recurso do Plano 1
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Mais um Recurso do Plano 1
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165 thq-body-small">
              Recurso do Plano 2
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166 thq-body-small">
              Outro Recurso do Plano 2
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167 thq-body-small">
              Mais um Recurso do Plano 2
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Recurso do Plano 3
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170 thq-body-small">
              Outro Recurso do Plano 3
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171 thq-body-small">
              Mais um Recurso do Plano 3
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186 thq-heading-2">
              Cadastro na plataforma
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187 thq-heading-2">
              Explorar cursos disponíveis
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">
              Detalhes do curso
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189 thq-heading-2">Matrícula</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190 thq-body-small">
              Crie uma conta na plataforma para ter acesso a todos os recursos
              disponíveis.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191 thq-body-small">
              Navegue pela variedade de cursos oferecidos e encontre o que
              melhor se adequa às suas necessidades de aprendizado.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Acesse informações detalhadas sobre os cursos, incluindo conteúdo
              programático, carga horária e requisitos.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193 thq-body-small">
              Matricule-se nos cursos desejados de forma simples e rápida,
              garantindo sua vaga para iniciar seus estudos.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194 thq-body-small">
              Excelente plataforma para instituições educacionais!
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195 thq-body-small">
              A plataforma é intuitiva e prática, o que me ajudou a organizar
              melhor o conteúdo das minhas aulas e disponibilizar materiais
              extras para os alunos.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196 thq-body-small">
              Ótima ferramenta para acompanhar o desempenho dos estudantes e
              identificar áreas que precisam de mais atenção. Recomendo!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197 thq-body-small">
              Como tutor, encontrei na plataforma uma maneira eficiente de
              interagir com os alunos, tirar dúvidas e fornecer feedback
              personalizado. Estou muito satisfeito com os resultados.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198 thq-body-small">
              Estamos muito satisfeitos com a plataforma, que facilitou a
              comunicação com os alunos e responsáveis, além de centralizar
              todas as informações dos cursos em um só lugar.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199 thq-heading-2">Depoimentos</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200 thq-body-large">Maria Silva</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201 thq-body-large">João Santos</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202 thq-body-large">Carla Oliveira</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203 thq-body-large">Pedro Costa</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204 thq-body-small">
              Diretora de Escola
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205 thq-body-small">
              Professor de Matemática
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206 thq-body-small">
              Coordenadora Pedagógica
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207 thq-body-small">Tutor Online</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209 thq-heading-2">Entre em Contato</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210 thq-heading-3">
              Endereço: Av. Exemplo, 123 - Cidade, Estado
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211 thq-heading-3">
              E-mail: contato@instituicaoeducacional.com
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212 thq-body-large">
              Venha nos fazer uma visita!
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213 thq-body-large">
              Envie-nos suas dúvidas e sugestões por e-mail.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214 thq-body-small">Sobre nós</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215 thq-body-small">Cursos</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216 thq-body-small">Matrícula</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217 thq-body-small">Recursos</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218 thq-body-small">Contato</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219 thq-body-small">Termos de Uso</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">
              Política de Cookies
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">
              Política de Privacidade
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
