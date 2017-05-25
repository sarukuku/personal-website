import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
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
        <SiteHead title='Blog of Joonas Salovaara' />
        <Link prefetch href='/'><a>Home</a></Link>
        <Link prefetch href='/blog'><a>Blog</a></Link>
        <section dangerouslySetInnerHTML={{__html: post.content.rendered}} />
      </div>
    )
  }
}
