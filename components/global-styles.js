import { blue, black } from '../config/colors'

export default () => (
  <style jsx global>{`
    /* Define the "system" font family */
    @font-face {
      font-family: system;
      font-style: normal;
      font-weight: 300;
      src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
    }

    /* Now, let's apply it on an element */
    body {
      font-family: "system";
      color: ${black};
      font-size: 1rem;
    }

    @media only screen and (min-width: 700px) {
      body {
        font-size: 1.5rem;
      }
    }

    h1, h2, h3,
    h4, h5, h6 {
      line-height: 1.2;
    }

    a {
      color: ${blue};
      transition: all .2s;
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
