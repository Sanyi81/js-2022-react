import './App.css';
import Simpson from "./Simpson/Simpson";

function App() {
  return (
      <div>
        <Simpson
            name={'Homer'}
            surname={'Simpson'}
            age={'35'}
            logo={'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png'}
        />
        <Simpson
            name={'Marge'}
            surname={'Simpson'}
            age={'34'}
            logo={'https://i.discogs.com/WI38UGun7TKKNg04MTHK0yV-I1Yb75sdJ_t0GEermmo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MzMx/MzAtMTMzNTcyMDM5/MC5wbmc.jpeg'}
        />
        <Simpson
            name={'Bart'}
            surname={'Simpson'}
            age={'10'}
            logo={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
        />
        <Simpson
            name={'Lisa'}
            surname={'Simpson'}
            age={'8'}
            logo={'https://static.wikia.nocookie.net/simpsons/images/f/fa/185px-Lisa_Simpson2.png'}
        />
        <Simpson
            name={'Meggie'}
            surname={'Simpson'}
            age={'1'}
            logo={'https://static.wikia.nocookie.net/simpsons/images/d/df/Maggie-Simpson-icon.png'}
        />


      </div>
  );
}

export default App;
