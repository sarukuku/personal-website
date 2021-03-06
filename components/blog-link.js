import Link from 'next/link'

export default ({ text }) => (<span>
  <Link href='/blog'><a className='BlogLink'>{text}</a></Link>
  <style jsx global>{`
    .BlogLink:after {
      display: inline-block;
      content: '📋';
      margin-left: .2rem;
      transition: all .2s ease-in-out;
    }

    .BlogLink:hover:after {
      transform: rotate(10deg) scale(1.2);
    }
  `}</style>
</span>)
