import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
import AnimatedBg from '../components/animated-bg'
import { blue, black } from '../config/colors'
import Typist from 'react-typist'
import classNames from 'classnames'
import GlobalStyles from '../components/global-styles'
import BlogLink from '../components/blog-link'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showDescription: false
    }
  }

  onHeaderTyped () {
    this.setState({
      showDescription: true
    })
  }

  render () {
    let { showDescription } = this.state

    let descriptionClass = classNames({
      'description': true,
      'description-state--visible': showDescription
    })

    return (
      <div>
        <SiteHead title='Joonas Salovaara' />
        <GlobalStyles />
        <AnimatedBg showDescription={showDescription} />
        
        <div className='wrap'>
          <h1 onClick={e => {
            e.target.setAttribute('contenteditable', true)
            e.target.focus()
            let el = e.target.querySelector('.Cursor')
            if (el) {
              el.remove()
            }
          }}>
            <Typist
              avgTypingSpeed={40}
              startDelay={400}
              onTypingDone={() => {
                this.onHeaderTyped()
              }}>
              Hi, I'm Joonas
            </Typist>
          </h1>

          <div className={descriptionClass}>
            <p>I'm a Web Developer at <a href='https://bond-agency.com/'>Bond Helsinki</a> and a Computer Science student at University of Turku. I like solving problems &amp; meeting new people. Currently I'm helping to organize <a href='https://twitter.com/helsinkijs'>HelsinkiJS</a> & <a href='https://twitter.com/reacthelsinki'>React Helsinki</a>.</p>

            <p>You can contact me via <a href='mailto:joonas.salovaara@gmail.com'>email</a>, <a href='https://twitter.com/sarukuku'>Twitter</a> or <a href='tel:+358456301896'>phone</a>. If you want to find out more about me you can read my <BlogLink /> or check out my <a href='https://github.com/sarukuku'>GitHub</a> profile and <a href='www.linkedin.com/in/joonas-salovaara'>LinkedIn</a> page.</p>
          </div>

          <style jsx>{`
            .wrap {
              max-width: 420px;
              z-index: 10;
              background: rgba(255, 255, 255, 0.8);
            }

            @media only screen and (min-width: 700px) {
              .wrap {
                max-width: 520px;
              }
            }

            .description {
              opacity: 0;
              transition: all .4s;
            }

            .description-state--visible {
              opacity: 1;
            }
          `}</style>
        </div>
      </div>
    )
  }
}
