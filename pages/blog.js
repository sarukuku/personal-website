import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
import GlobalStyles from '../components/global-styles'
import HomeLink from '../components/home-link'
import { isBrowser, getDate } from '../helpers'
import { lightgray } from '../config/colors'

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
                <span className='PostDate'>{getDate(post.date)}</span>
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
            padding-left: 0;
            list-style: none;
          }

          li {
            margin-bottom: 0.5rem;
            display: flex;
            padding: .5rem;
          }

          @media only screen and (min-width: 700px) {
            li {
              padding: 1rem;
            }
          }

          li:nth-child(even) {
            background: ${lightgray};
          }

          .PostDate {
            margin-right: 1rem;
          }
        `}</style>
      </div>
    )
  }
}
