import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta1.css'

const CTA1 = (props) => {
  return (
    <div className="cta1-container thq-section-padding">
      <div className="cta1-max-width thq-section-max-width">
        <div className="cta1-content">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="cta1-text2 thq-heading-2">
                  Call to action that excites the visitor to try your product
                </h2>
              </Fragment>
            )}
          </h2>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="cta1-text1 thq-body-large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </Fragment>
            )}
          </p>
          <div className="cta1-actions">
            <button className="thq-button-filled cta1-button1">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="cta1-text4 thq-body-small">
                      Main action
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline cta1-button2">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="cta1-text3 thq-body-small">
                      Secondary action
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA1.defaultProps = {
  content1: undefined,
  heading1: undefined,
  action2: undefined,
  action1: undefined,
}

CTA1.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
}

export default CTA1
