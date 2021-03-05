import Document, {

   Html,
   Head,
   Main,
   NextScript
} from 'next/document';

export default class MyDocument extends Document {

   render() {

      return (

         <Html>
            <Head>
               <link rel="shortcut icon" href="assets/favicon.png" type="image/x-icon" />
               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
                  rel="stylesheet" />
               
               <meta name="description" content="O MoveIt é um app de pomodoro que promove produtividade e saúde ao usuario ao implementar um sistema de desafios para o intervalo entre um ciclo de produtividade e outro fazendo com que o usuario possa relaxar durante os intervalos com atividades que o auxiliam."/>
            </Head>
            
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}