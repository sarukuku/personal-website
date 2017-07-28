import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
import GlobalStyles from '../components/global-styles'
import HomeLink from '../components/home-link'
import { isBrowser, getDate, isPostNew, isPostUnread, markAllPostsRead } from '../helpers'
import { lightgray, yellow, black, blue, white } from '../config/colors'

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
        <ul className='Posts'>
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
                  <a data-new={postIsNew} dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                </Link>
                {postIsUnread &&
                  <span className='UnreadIndicator' />
                }
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
        {posts &&
          <button onClick={e => {
            markAllPostsRead(posts)
            this.forceUpdate()
          }}>Mark all posts as read</button>
        }
        <style jsx>{`
          .Posts {
            padding-left: 0;
            list-style: none;
          }

          .Posts li {
            position: relative;
            margin-bottom: 0.5rem;
            display: flex;
            flex-wrap: wrap;
            padding: .5rem;
          }

          .Posts li a {
            font-weight: bold;
          }

          a[data-new="true"]:before {
            content: 'New'
            text-transfomr: uppercase;
            font-weight: bold;
            color: ${black};
            display: inline-block;
            margin-right: .5rem;
            background: ${yellow};
            padding: 2px 4px;
          }

          .UnreadIndicator {
            display: inline-block;
            background: ${blue};
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 100%;
            position: absolute;
            left: 12ch;
            top: 1.05rem;
            transform: translateY(-50%);
          }

          .UnreadIndicator:before {
            content: 'Unread';
            display: inline-block;
            background: ${blue};
            color: ${white};
            padding: 2px 4px;
            position: absolute;
            left: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            transition: opacity .2s ease-in-out;
            pointer-events: none;
          }

          .UnreadIndicator:hover:before {
            opacity: 1;
          }

          .Posts li:nth-child(odd) {
            background: ${lightgray};
          }

          .PostDate {
            width: 100%;
            margin-bottom: 0.2rem;
          }

          button {
            font-family: inherit;
            font-size: inherit;
            border: 1px dashed black;
            padding: 0.5rem;
            border-radius: 0;
            transition: all .1s;
          }

          button:hover {
            border-style: solid;
          }

          button:active {
            transform: scale(0.95);
          }

          button:focus {
            border-style: solid;
          }

          @media only screen and (min-width: 700px) {
            .Posts li {
              padding: 1rem;
              flex-wrap: nowrap;
            }

            .PostDate {
              width: auto;
              margin-right: 1rem;
              margin-left: 1rem;
            }

            .UnreadIndicator {
              top: 48%;
              left: 0.5rem;
              width: 1rem;
              height: 1rem;
            }

            .UnreadIndicator:before {
              left: 1.25rem;
            }
          }
        `}</style>
      </div>
    )
  }
}
