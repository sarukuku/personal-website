import { blue, black } from '../config/colors'

export default () => (
  <style jsx global>{`
    body {
      font-family: monospace;
      color: ${black};
      font-size: 1rem;
      margin: 1rem;
    }

    @media only screen and (min-width: 700px) {
      body {
        font-size: 1.8rem;
      }
    }

    h1, h2, h3,
    h4, h5, h6 {
      line-height: 1.1;
    }

    a {
      color: ${blue};
      transition: all .3s;
    }

    a:hover {
      color: ${black};
      transition: none;
    }

    /* Typist css. */
    .Typist .Cursor {
      display: inline-block;
    }

      .Typist .Cursor--blinking {
        opacity: 1;
        animation: blink 1s linear infinite;
      }

    @keyframes blink {
      0% {
        opacity: 1;
      }
      
      50% {
        opacity: 0;
      }
      
      100% {
        opacity: 1;
      }
    }
  `}</style>
)
