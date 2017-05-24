import React from 'react'
import Link from 'next/link'
import SiteHead from '../components/site-head'
import classNames from 'classnames'

export default class extends React.Component {
  render () {
    return (
      <div className='Blog'>
        <SiteHead title='Blog of Joonas Salovaara' />
        <Link prefetch href='/'><a>Home</a></Link>
      </div>
    )
  }
}
