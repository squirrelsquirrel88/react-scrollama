import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';

const styles = {
  navbar: {
    position: 'fixed',
    display: 'flex',
    top: 0,
    right: 0,
    zIndex: 1,
    '& a': {
      display: 'block',
      fontSize: '20px',
      padding: '20px',
    },
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 22,
    margin: '90px 0 10px',
    visibility: 'hidden',
  },
  description: {
    maxWidth: 600,
    margin: '10px auto 30px',
    fontSize: 22,
    lineHeight: '28px',
    '& a': {
      color: 'black',
    },
  },
  pageSubtitle: {
    textAlign: 'center',
    fontSize: 22,
    color: '#888',
  },
  graphicContainer: {
    padding: '40vh 2vw 20vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
  graphic: {
    flexBasis: '60%',
    position: 'sticky',
    width: '100%',
    height: '60vh',
    top: '20vh',
    backgroundColor: '#aaa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      fontSize: '5rem',
      fontWeight: 700,
      textAlign: 'center',
      color: '#fff',
    },
  },
  scroller: {
    flexBasis: '35%',
  },
  step: {
    margin: '0 auto 3rem auto',
    padding: '180px 0',
    border: '1px solid #333',
    '& p': {
      textAlign: 'center',
      padding: '1rem',
      fontSize: '1.8rem',
      margin: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  button: {
    backgroundColor: '#3773ac',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '6px',
    textAlign: 'center',
    display: 'block',
    maxWidth: 220,
    margin: '10px auto 30px',
    fontSize: 19,
    lineHeight: '28px',
    textDecoration: 'none',
  },
  subhed: {
    maxWidth: 600,
    margin: '10px auto 15px',
    fontSize: 22,
    lineHeight: '28px',
    '& a': {
      color: 'black',
    },
    textAlign: 'center',
  },
  whoUsing: {
    maxWidth: 960,
    margin: '30px auto 100px',
    fontSize: 19,
    lineHeight: '26px',
    gridAutoRows: 'minmax(100px, auto)',
    '& a': {
      color: 'black',
    },
    '& img': {
      width: '100%',
    },
    display: 'grid',
    gridTemplateColumns: '2fr 5fr',
    '& > div': {
      padding: '16px 0',
      borderTop: '1px solid #ccc',
      '&:nth-child(odd)': {
        paddingRight: '13px',
        borderRight: '1px solid #ccc',
      },
      '&:nth-child(even)': {
        paddingLeft: '13px',
      },
    },
  },
};

class Demo extends PureComponent {
  state = {
    data: 0,
    steps: [10, 20, 30],
    progress: 0,
  };

  onStepEnter = e => {
    const { data, entry, direction } = e;
    this.setState({ data });
  };

  onStepExit = ({ direction, data }) => {
    if (direction === 'up' && data === this.state.steps[0]) {
      this.setState({ data: 0 });
    }
  };

  onStepProgress = ({ progress }) => {
    this.setState({ progress });
  };

  render() {
    const { data, steps, progress } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.navbar}>
          <a href="https://github.com/squirrelsquirrel78/react-scrollama">GitHub</a>
        </div>
        <p className={classes.pageTitle}>
          <a href="https://github.com/squirrelsquirrel78/react-scrollama">
            React Scrollama
          </a>{' '}
          Demo
        </p>
        <p className={classes.description}>
          <b>React Scrollama</b> is a lightweight and simple interface for
          scrollytelling in React that uses IntersectionObserver in favor of
          scroll events. The library has been used by the{' '}
          <a href="https://datatopics.worldbank.org/sdgatlas/">World Bank's</a>{' '}
          Atlas of Sustainable Development Goals and Politico.
        </p>

        <a
          className={classes.button}
          href="https://github.com/squirrelsquirrel78/react-scrollama"
        >
          Learn and get started
        </a>

        <p className={classes.pageSubtitle}>Scroll ↓</p>
        <div className={classes.graphicContainer}>
          <div className={classes.scroller}>
            <Scrollama
              onStepEnter={this.onStepEnter}
              onStepExit={this.onStepExit}
              progress
              onStepProgress={this.onStepProgress}
              offset="400px"
              debug
            >
              {steps.map(value => {
                const isVisible = value === data;
                const background = isVisible
                  ? `rgba(44,127,184, ${progress})`
                  : 'white';
                const visibility = isVisible ? 'visible' : 'hidden';
                return (
                  <Step data={value} key={value}>
                    <div className={classes.step} style={{ background }}>
                      <p>step value: {value}</p>
                      <p style={{ visibility }}>
                        {Math.round(progress * 1000) / 10 + '%'}
                      </p>
                    </div>
                  </Step>
                );
              })}
            </Scrollama>
          </div>
          <div className={classes.graphic}>
            <p>{data}</p>
          </div>
        </div>
        <p className={classes.subhed}>
          <b>Who's using React Scrollama?</b>
        </p>
        <div className={classes.whoUsing}>
          <div>
            <a href="https://www.worldbank.org/en/home" rel="nofollow">
              <img
                src="https://user-images.githubusercontent.com/15334952/111389696-ca705b00-8687-11eb-9db9-4f0919715834.png"
                width="220"
                style={{ maxWidth: '100%' }}
              />
            </a>{' '}
            <br />
            <a href="https://www.un.org/en/" rel="nofollow">
              <img src="https://user-images.githubusercontent.com/15334952/111392820-c0515b00-868d-11eb-9b82-5eaace6612c9.png" />
            </a>
            <br />
            <a href="https://datatopics.worldbank.org/sdgatlas/" rel="nofollow">
              17 interactive visualization stories
            </a>{' '}
            <a
              href="https://twitter.com/maartenzam/status/1371951848039579664"
              rel="nofollow"
            >
              using
            </a>{' '}
            React Scrollama for scrollytelling
          </div>
          <div>
            <a href="https://datatopics.worldbank.org/sdgatlas/" rel="nofollow">
              <img src="https://user-images.githubusercontent.com/15334952/111390361-fb04c480-8688-11eb-9fa1-3991ee73dd05.png" />
            </a>
          </div>
          <div>
            <a href="https://www.politico.com/" rel="nofollow">
              <img
                src="https://camo.githubusercontent.com/443122ff4fb7e91dfcb57d85555e51ec8a9b63f223ce88923defa4af9ec5cb66/68747470733a2f2f7374617469632e706f6c697469636f2e636f6d2f64696d73342f64656661756c742f353137383666652f323134373438333634372f726573697a652f31313630782533452f7175616c6974792f39302f3f75726c3d68747470732533412532462532467374617469632e706f6c697469636f2e636f6d2532463131253246336325324632353731633061623435356539316266383164633462616239336136253246706f6c697469636f2d6c6f676f2e706e67"
                style={{ maxWidth: '170px' }}
                data-canonical-src="https://jolttx.org/wp-content/uploads/2019/10/politico-logo.png"
              />
            </a>
            <br />
            <a
              href="https://www.politico.com/interactives/2019/election-security-americas-voting-machines"
              rel="nofollow"
            >
              <i>The scramble to secure America’s voting machines</i>
            </a>{' '}
            by{' '}
            <a href="https://bzjin.github.io" rel="nofollow">
              Beatrice Jin
            </a>
          </div>
          <div>
            <a
              href="https://www.politico.com/interactives/2019/election-security-americas-voting-machines"
              rel="nofollow"
            >
              <img src="https://user-images.githubusercontent.com/15334952/111391036-2dfb8800-868a-11eb-9c64-3f322ef1e588.png" />
            </a>
          </div>
        </div>
        <a
          className={classes.button}
          href="https://github.com/squirrelsquirrel78/react-scrollama"
        >
          Learn and get started
        </a>
      </div>
    );
  }
}

export default injectSheet(styles)(Demo);
