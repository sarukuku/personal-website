import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

export default class extends React.Component {
  constructor (props) {
    super(props)

    NProgress.configure({
      showSpinner: false
    })

    Router.onRouteChangeStart = () => NProgress.start()
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()
  }

  render () {
    const { title } = this.props

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <style jsx global>{`
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: black;

            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;

            width: 100%;
            height: 2px;
          }
        `}</style>
      </div>
    )
  }
}