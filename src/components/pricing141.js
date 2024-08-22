import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing141.css'

const Pricing141 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing141-pricing23 thq-section-padding">
      <div className="pricing141-max-width thq-section-max-width">
        <div className="pricing141-section-title">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="pricing141-text202 thq-body-small">
                  Choose the perfect plan for you
                </span>
              </Fragment>
            )}
          </span>
          <div className="pricing141-content">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="pricing141-text178 thq-heading-2">
                    Pricing plan
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <Fragment>
                  <p className="pricing141-text188 thq-body-large">
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
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="pricing141-tabs">
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing141-button10 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing141-button11 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing141-button12 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing141-button13 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly && (
          <div className="pricing141-container1">
            <div className="pricing141-column1 thq-card">
              <div className="pricing141-price10">
                <div className="pricing141-price11">
                  <p>
                    {props.plan1 ?? (
                      <Fragment>
                        <p className="pricing141-text181 thq-body-large">
                          Basic plan
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan1Price ?? (
                      <Fragment>
                        <h3 className="pricing141-text173 thq-heading-3">
                          Preço do Plano 1
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan1Yearly ?? (
                      <Fragment>
                        <p className="pricing141-text155 thq-body-large">
                          Preço Anual do Plano 1
                        </p>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing141-list1">
                  <div className="pricing141-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature1 ?? (
                        <Fragment>
                          <span className="pricing141-text200 thq-body-small">
                            Recurso do Plano 1 - Feature 1
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature2 ?? (
                        <Fragment>
                          <span className="pricing141-text204 thq-body-small">
                            Recurso do Plano 1 - Feature 2
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature3 ?? (
                        <Fragment>
                          <span className="pricing141-text158 thq-body-small">
                            Recurso do Plano 1 - Feature 3
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button14 thq-button-animated thq-button-outline">
                <span>
                  {props.plan1Action ?? (
                    <Fragment>
                      <span className="pricing141-text199 thq-body-small">
                        Ação do Plano 1
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing141-column2 thq-card">
              <div className="pricing141-price12">
                <div className="pricing141-price13">
                  <p>
                    {props.plan2 ?? (
                      <Fragment>
                        <p className="pricing141-text197 thq-body-large">
                          Business plan
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan2Price ?? (
                      <Fragment>
                        <h3 className="pricing141-text157 thq-heading-3">
                          Preço do Plano 2
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan2Yearly ?? (
                      <Fragment>
                        <p className="pricing141-text174 thq-body-large">
                          Preço Anual do Plano 2
                        </p>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing141-list2">
                  <div className="pricing141-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature1 ?? (
                        <Fragment>
                          <span className="pricing141-text201 thq-body-small">
                            Recurso do Plano 2 - Feature 1
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature2 ?? (
                        <Fragment>
                          <span className="pricing141-text195 thq-body-small">
                            Recurso do Plano 2 - Feature 2
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature3 ?? (
                        <Fragment>
                          <span className="pricing141-text193 thq-body-small">
                            Recurso do Plano 2 - Feature 3
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature4 ?? (
                        <Fragment>
                          <span className="pricing141-text180 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button15 thq-button-animated thq-button-filled">
                <span>
                  {props.plan2Action ?? (
                    <Fragment>
                      <span className="pricing141-text161 thq-body-small">
                        Ação do Plano 2
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing141-column3 thq-card">
              <div className="pricing141-price14">
                <div className="pricing141-price15">
                  <p>
                    {props.plan3 ?? (
                      <Fragment>
                        <p className="pricing141-text183 thq-body-large">
                          Enterprise plan
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan3Price ?? (
                      <Fragment>
                        <h3 className="pricing141-text182 thq-heading-3">
                          Preço do Plano 3
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan3Yearly ?? (
                      <Fragment>
                        <p className="pricing141-text187 thq-body-large">
                          Preço Anual do Plano 3
                        </p>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="pricing141-list3">
                  <div className="pricing141-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature1 ?? (
                        <Fragment>
                          <span className="pricing141-text160 thq-body-small">
                            Recurso do Plano 3 - Feature 1
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature2 ?? (
                        <Fragment>
                          <span className="pricing141-text192 thq-body-small">
                            Recurso do Plano 3 - Feature 2
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature3 ?? (
                        <Fragment>
                          <span className="pricing141-text167 thq-body-small">
                            Recurso do Plano 3 - Feature 3
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature4 ?? (
                        <Fragment>
                          <span className="pricing141-text168 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature5 ?? (
                        <Fragment>
                          <span className="pricing141-text198 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button16 thq-button-animated thq-button-filled">
                <span>
                  {props.plan3Action ?? (
                    <Fragment>
                      <span className="pricing141-text163 thq-body-small">
                        Ação do Plano 3
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing141-container2">
            <div className="pricing141-column4 thq-card">
              <div className="pricing141-price16">
                <div className="pricing141-price17">
                  <span>
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="pricing141-text162 thq-body-large">
                          Basic plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <h3 className="pricing141-text205 thq-heading-3">
                          $200/yr
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="pricing141-text179 thq-body-large">
                          or $20 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing141-list4">
                  <div className="pricing141-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="pricing141-text156 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="pricing141-text177 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="pricing141-text170 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button17 thq-button-animated thq-button-outline">
                <span>
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="pricing141-text203 thq-body-small">
                        Get started
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing141-column5 thq-card">
              <div className="pricing141-price18">
                <div className="pricing141-price19">
                  <span>
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="pricing141-text194 thq-body-large">
                          Business plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <h3 className="pricing141-text169 thq-heading-3">
                          $299/yr
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="pricing141-text175 thq-body-large">
                          or $29 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing141-list5">
                  <div className="pricing141-list-item25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="pricing141-text159 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="pricing141-text196 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="pricing141-text172 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item28">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="pricing141-text207 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button18 thq-button-animated thq-button-filled">
                <span>
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="pricing141-text166 thq-body-small">
                        Get started
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing141-column6 thq-card">
              <div className="pricing141-price20">
                <div className="pricing141-price21">
                  <span>
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="pricing141-text164 thq-body-large">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <h3 className="pricing141-text176 thq-heading-3">
                          $499/yr
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="pricing141-text165 thq-body-large">
                          or $49 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing141-list6">
                  <div className="pricing141-list-item29">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="pricing141-text184 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item30">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="pricing141-text206 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item31">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="pricing141-text171 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item32">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="pricing141-text185 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing141-list-item33">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="pricing141-text191 thq-body-small">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button19 thq-button-animated thq-button-filled">
                <span>
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="pricing141-text186 thq-body-small">
                        Get started
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing141.defaultProps = {
  plan1Yearly: undefined,
  plan1Feature11: undefined,
  plan2Price: undefined,
  plan1Feature3: undefined,
  plan2Feature11: undefined,
  plan3Feature1: undefined,
  plan2Action: undefined,
  plan11: undefined,
  plan3Action: undefined,
  plan31: undefined,
  plan3Yearly1: undefined,
  plan2Action1: undefined,
  plan3Feature3: undefined,
  plan3Feature4: undefined,
  plan2Price1: undefined,
  plan1Feature31: undefined,
  plan3Feature31: undefined,
  plan2Feature31: undefined,
  plan1Price: undefined,
  plan2Yearly: undefined,
  plan2Yearly1: undefined,
  plan3Price1: undefined,
  plan1Feature21: undefined,
  heading1: undefined,
  plan1Yearly1: undefined,
  plan2Feature4: undefined,
  plan1: undefined,
  plan3Price: undefined,
  plan3: undefined,
  plan3Feature11: undefined,
  plan3Feature41: undefined,
  plan3Action1: undefined,
  plan3Yearly: undefined,
  content2: undefined,
  plan3Feature51: undefined,
  plan3Feature2: undefined,
  plan2Feature3: undefined,
  plan21: undefined,
  plan2Feature2: undefined,
  plan2Feature21: undefined,
  plan2: undefined,
  plan3Feature5: undefined,
  plan1Action: undefined,
  plan1Feature1: undefined,
  plan2Feature1: undefined,
  content1: undefined,
  plan1Action1: undefined,
  plan1Feature2: undefined,
  plan1Price1: undefined,
  plan3Feature21: undefined,
  plan2Feature41: undefined,
}

Pricing141.propTypes = {
  plan1Yearly: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan2Price: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan2Action: PropTypes.element,
  plan11: PropTypes.element,
  plan3Action: PropTypes.element,
  plan31: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan1Price: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan1Feature21: PropTypes.element,
  heading1: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan1: PropTypes.element,
  plan3Price: PropTypes.element,
  plan3: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan3Yearly: PropTypes.element,
  content2: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan21: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan2: PropTypes.element,
  plan3Feature5: PropTypes.element,
  plan1Action: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  content1: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan2Feature41: PropTypes.element,
}

export default Pricing141
