import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';
import logo from '@images/cairo-coconut.png'
import moment from 'moment';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;
  const mbirthday = moment('2017-05-09');
  const mnow = moment(moment.now());
  const years = mnow.diff(mbirthday, 'years')
  const months = mnow.diff(mbirthday, 'months') % 12

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I am a {years} year and {months} months <span className="highlight"> Eclectus parrot</span> living in Singapore and I recently adopted a pair of human beings - which I nickname <span className="highlight"> Seth</span> & <span className="highlight"> Cleavan</span>.
            </p>
            <p>
              I used to only say <span className="highlight"> hello</span> but that hasn't gotten me a lot of treats or chicks recently, so I have started to expand my repetoire to - <span className="highlight"> uh-oh, oooh, nyuk-nyuk</span> and some creole swear words that my male human is convinced would get me famous on the internet.
            </p>
            <p>
              Like all internet celebrities, I stream 24/7 from the comfort of my cage for my premium subscribers.
            </p>
            <p>
              I hope to embed my instagram feed below but my humans are slow, especially <a href="https://github.com/lackdaz"><span className="highlight"> the developer</span></a>. So I'm crossing my talons that it would happen soon.
            </p>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="peekaboo"/>
        </div>
      </div>
        {
          // TODO: add this selector
          // <ScrollToNext pageSelector=".portfolio-page" />
        }
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
