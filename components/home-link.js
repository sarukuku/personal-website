import Link from 'next/link'

export default () => (
  <span>
    <Link prefetch href='/'><a className='HomeLink'>Go home</a></Link>
    <style jsx global>{`
      .HomeLink:after {
        display: inline-block;
        content: '🏠';
        margin-left: .2rem;
        transition: all .2s ease-in-out;
      }

      .HomeLink:hover:after {
        transform: scale(1.2);
      }
    `}</style>
  </span>
)
