import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
import GlobalStyles from '../components/global-styles'
import HomeLink from '../components/home-link'
import { isBrowser, getDate } from '../helpers'

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
        <HomeLink />
        
        <h1>Blog Posts</h1>
        <ul>
          {posts && posts.map(post => {
            return (
              <li key={post.id}>
                <span>{getDate(post.date)}</span>
                <Link
                  key={post.id}
                  href={{pathname: 'post', query: { id: post.id }}}
                  as={{pathname: `post/${post.id}/${post.slug}`}}>
                  <a dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                </Link>
              </li>
            )
          })}
        </ul>
        {!posts &&
          <p>
            Couldn't load posts, sorry.
            {isBrowser() && !navigator.onLine &&
              <span> To me it seems that there's something wrong with your network. Maybe check that?</span>
            }
            {isBrowser() && navigator.onLine &&
              <span> Your network seems OK to me. The problem is probably at my end.</span>
            }
          </p>
        }
        <style jsx>{`
          ul {
            padding-left: 2rem;
          }

          li {
            margin-bottom: 0.5rem;
          }
        `}</style>
      </div>
    )
  }
}
