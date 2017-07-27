import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
import HomeLink from '../components/home-link'
import BlogLink from '../components/blog-link'
import GlobalStyles from '../components/global-styles'
import { getDate, decodeHtmlEntity, isBrowser, markPostAsRead } from '../helpers'
import { darkgray, lightgray, black } from '../config/colors'

const WPAPI = require('wpapi')
const wp = new WPAPI({ endpoint: 'https://api.jsalovaara.com/wp-json' })
const fluidvids = require('fluidvids.js')

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

  componentDidMount() {
    // Make iframe embeds fluid
    isBrowser() && fluidvids.init({
      selector: ['iframe', 'object'], // runs querySelectorAll()
      players: ['www.youtube.com', 'player.vimeo.com', 'dotsub.com'] // players to support
    });

    // Hide the ToTopBtn on short pages
    if (isBrowser() && window.document.body.clientHeight > window.innerHeight) {
      this.toTopBtn.classList.remove('hidden')
    }

    // Mark post as read on client side.
    if (isBrowser()) {
      markPostAsRead(this.props.post)
    }
  }

  onToTopBtnClick = e => {
    e.preventDefault()
    window.scrollTo(0, 0)
  }

  render () {
    const { post } = this.props

    return (
      <div className='Blog'>
        <GlobalStyles />

        <div className='wrap'>
          <HomeLink /> or <BlogLink />
        </div>

        {post &&
          <div>
            <SiteHead title={decodeHtmlEntity(post.title.rendered)} />
            <div className='wrap'>
              <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
              <ul className='PostMeta'>
                <li>Published {getDate(post.date)}</li>
                <li>Last updated {getDate(post.modified)}</li>
              </ul>
              <section className='PostContent' dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </div>
            <a
              href="#"
              onClick={this.onToTopBtnClick}
              ref={(toTopBtn) => { this.toTopBtn = toTopBtn; }}
              className='ToTopBtn hidden'>Jump to top</a>
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

          .PostContent :global(*) {
            max-width: 100%;
          }

          .PostContent :global(img) {
            height: auto;
            margin: 0 auto;
          }

          .PostContent :global(ul),
          .PostContent :global(ol) {
            padding-left: 2rem;
          }

          .PostContent :global(pre),
          .PostContent :global(code) {
            padding: 1rem;
            background-color: ${lightgray};
            overflow-x: auto;
          }

          .PostContent :global(a) {
            word-wrap: break-word;
          }

          .PostMeta {
            font-size: 0.8rem;
            color: ${darkgray};
            list-style: none;
            padding-left: 0;
          }

          .ToTopBtn {
            display: block;
            text-align: center;
            font-weight: bold;
            color: ${black};
            background: ${lightgray};
            text-decoration: none;
            padding: 1rem;
          }

          .hidden {
            display: none !important;
          }

          @media only screen and (min-width: 700px) {
            .PostMeta {
              font-size: 1.2rem;
            }

            .PostContent :global(ul),
            .PostContent :global(ol) {
              padding-left: 3rem;
            }
          }
        `}</style>
      </div>
    )
  }
}
