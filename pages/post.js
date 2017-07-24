import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
import HomeLink from '../components/home-link'
import BlogLink from '../components/blog-link'
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

    console.log(post)

    return (
      <div className='Blog'>
        <GlobalStyles />
        <HomeLink /> or <BlogLink />

        {post &&
          <div>
            <SiteHead title={post.title.rendered} />
            <div className='wrap'>
              <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
              <section dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </div>
            
          </div>
        }
        {!post &&
          <p>The post couldn't be loaded, sorry!</p>
        }
        <style jsx>{`
          .wrap {
            max-width: 700px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    )
  }
}
