import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
import GlobalStyles from '../components/global-styles'
import HomeLink from '../components/home-link'
import { isBrowser, getDate, isPostNew, isPostUnread } from '../helpers'
import { lightgray, yellow, black, blue } from '../config/colors'

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
            const postIsNew = isPostNew(post)
            const postIsUnread = isBrowser() && isPostUnread(post)

            return (
              <li key={post.id}>
                <span className='PostDate'>{getDate(post.date)}</span>
                <Link
                  key={post.id}
                  href={{pathname: 'post', query: { id: post.id }}}
                  as={{pathname: `post/${post.id}/${post.slug}`}}>
                  <a data-new={postIsNew} data-unread={postIsUnread} dangerouslySetInnerHTML={{__html: post.title.rendered}} />
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

          a[data-new="true"]:before {
            content: 'New'
            text-transfomr: uppercase;
            font-weight: bold;
            color: ${black};
            display: inline-block;
            margin-right: 1rem;
            background: ${yellow};
            padding: 2px 4px;
          }

          a[data-unread="true"]:before {
            content: ' '
            display: inline-block;
            margin-right: 1rem;
            background: ${blue};
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 0.5rem;
          }

          @media only screen and (min-width: 700px) {
            li {
              padding: 1rem;
            }
          }

          li:nth-child(odd) {
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
