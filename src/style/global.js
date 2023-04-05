import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F8FF;
        --blue: #2c83fb; 
        --blue2: #1f76f0; 
        --shape: #FFFFFF;
        --black: #1c3c50;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, text-area, button {
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: var(--shape)
    }

    button {
        cursor: pointer;
    }

    h1,h2,h3,h4,h5,p {
        margin: 0;
        padding: 0;
    }
`