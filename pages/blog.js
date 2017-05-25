import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
var WPAPI = require('wpapi')
var wp = new WPAPI({ endpoint: 'https://api.jsalovaara.com/wp-json' })

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
    let { posts } = this.props

    return (
      <div className='Blog'>
        <SiteHead title='Blog of Joonas Salovaara' />
        <Link prefetch href='/'><a>Home</a></Link>
        {posts.map(post => {
          return (
            <Link prefetch key={post.id} href={{pathname: 'post', query: { id: post.id }}}>
              <a dangerouslySetInnerHTML={{__html: post.title.rendered}} />
            </Link>
          )
        })}
        <style jsx>{`
          a {
            display: block;
          }
        `}</style>
      </div>
    )
  }
}
