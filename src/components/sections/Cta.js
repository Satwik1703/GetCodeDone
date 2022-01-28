import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import FooterSocial from '../layout/partials/FooterSocial';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const divStyles = {
  display: 'flex',
  color: 'black',
  fontSize: '25px',
  fontWeight: 'bold',
}

const aStyles = {
  paddingLeft: '20px'
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section id="contactUs"
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Contact Us
            </h3>
          </div>
          <div className="cta-action">
            <div>
              <a style={divStyles} className="m-0" target='_blank' rel="noopener noreferrer" title="Gmail icon" href="https://mail.google.com/mail/?view=cm&fs=1&to=getcodedone@gmail.com">
                getcodedone@gmail.com
                <a style={aStyles} target='_blank' rel="noopener noreferrer" title="Gmail icon" href="https://mail.google.com/mail/?view=cm&fs=1&to=getcodedone@gmail.com">
                  <img width="40" alt="Gmail icon (2020)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" />
                </a>
              </a>
            </div>
            <br />
            
            <div>
              <FooterSocial className="contact-social" width="40" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;