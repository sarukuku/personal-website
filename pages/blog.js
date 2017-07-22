import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
import GlobalStyles from '../components/global-styles'

const WPAPI = require('wpapi')
const wp = new WPAPI({ endpoint: 'https://api.jsalovaara.com/wp-json' })

export default class extends React.Component {
  static async getInitialProps () {
    const posts = await wp.posts().perPage(100).then(data => {
      return data
    }).catch(err => {
      console.log(err)
    })

    return { posts: posts }
  }

  render () {
    const { posts } = this.props

    return (
      <div className='Blog'>
        <SiteHead title='Blog of Joonas Salovaara' />
        <GlobalStyles />
        <Link prefetch href='/'><a>Go Back Home</a></Link>
        
        <h1>Blog Posts</h1>
        <ul>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <Link prefetch key={post.id} href={{pathname: 'post', query: { id: post.id }}}>
                  <a dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                </Link>
              </li>
            )
          })}
        </ul>
        <style jsx>{`
          li {
            margin-bottom: 0.5em;
          }
        `}</style>
      </div>
    )
  }
}
