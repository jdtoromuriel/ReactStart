import Article from './article';
import datosReceta from '../../assets/infoRecetas.json';

const Main = () => {
  return (
    <div className="main-content">
      {
        datosReceta.map((receta, i) => (
          <Article receta={receta} key={i} />
        ))
      }
    </div>
  );
}

export default Main;
