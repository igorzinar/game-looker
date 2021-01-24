import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

*{ 
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html {
    &::-webkit-scrollbar{
        width: 1rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #2bf1a8;
        border-radius:1rem;
    }
}

body {
    
font-family: 'Ubuntu', sans-serif;

    h2 {
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: 400;
    }
    h3{
        font-size:1.5rem;
        padding: 1.5rem;
        
    }
    p {
        font-size: 1.2rem;
        line-height:200%;
        color:#2bf1a8;
    }
    a {
        text-decoration: none;
        color:#333;
    }
}
`

export default GlobalStyles