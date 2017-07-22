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
        }

        a {
            color: ${blue};
            transition: all .2s;
        }

        a:hover {
            color: ${black};
            transition: none;
        }
    `}</style>
)
