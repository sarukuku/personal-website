import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
import GlobalStyles from '../components/global-styles'

var WPAPI = require('wpapi')
var wp = new WPAPI({ endpoint: 'https://api.jsalovaara.com/wp-json' })

export default class extends React.Component {
  static async getInitialProps ({query}) {
    const { id } = query
    const post = await wp.posts().id(id).then(data => {
      return data
    }).catch(err => {
      console.log(err)
    })

    return { post: post }
  }

  render () {
    let { post } = this.props

    return (
      <div className='Blog'>
        <SiteHead title={post.title.rendered} />
        <GlobalStyles />

        <Link prefetch href='/'><a>Go Back Home</a></Link> or
        <Link prefetch href='/blog'><a> Go Back to Blog</a></Link>
        <section dangerouslySetInnerHTML={{__html: post.content.rendered}} />

        <style jsx>{`
          section,
          section :global(*) {
            max-width: 700px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    )
  }
}
