import React from 'react'
import classNames from 'classnames'
if (typeof window !== 'undefined') { require('particles.js') }

export default class extends React.Component {
  componentDidMount () {
    window.particlesJS.load('particles-js', 'static/particles.json', () => {
      console.log('callback - particles.js config loaded')
    })
  }

  render () {
    let { showDescription } = this.props

    let animatedBgClass = classNames({
      'animated-bg': true,
      'animated-bg-state--visible': showDescription
    })

    return (
      <div>
        <div className={animatedBgClass} id='particles-js' />
        <style jsx>{`
          .animated-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0;
            transition: all 2s;
          }

          .animated-bg-state--visible {
            opacity: 1;
          }
        `}</style>
      </div>
    )
  }
}
