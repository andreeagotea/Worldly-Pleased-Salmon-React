import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact101.css'

const Contact101 = (props) => {
  return (
    <div className="contact101-container1 thq-section-padding">
      <div className="contact101-max-width thq-section-max-width">
        <div className="contact101-content1 thq-flex-row">
          <div className="contact101-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact101-text18 thq-heading-2">Locations</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact101-text16 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact101-content3 thq-flex-row">
          <div className="contact101-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact101-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact101-text17 thq-heading-3">Bucharest</h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact101-text19 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact101-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact101-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact101-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact101-text20 thq-heading-3">
                    Cluj - Napoca
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact101-text21 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact101-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact101.defaultProps = {
  content1: undefined,
  location1: undefined,
  heading1: undefined,
  location1Description: undefined,
  location2: undefined,
  location2Description: undefined,
  location1ImageAlt: 'image1Alt',
  location1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  location2ImageAlt: 'image2Alt',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1693954387508-81cb3e135b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMyOTg3MXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Contact101.propTypes = {
  content1: PropTypes.element,
  location1: PropTypes.element,
  heading1: PropTypes.element,
  location1Description: PropTypes.element,
  location2: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location2ImageSrc: PropTypes.string,
}

export default Contact101
