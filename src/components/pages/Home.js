import styles from './Home.module.css'
import add from '../../img/plus-icon.svg'
import MovieCard from '../movie/MovieCard';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';

function Home() {
  return (
    <>
    <Header />
      <div className={styles.container}>
        <div className={styles.container_title}>
          <p>Meus Filmes</p>
          <Link to="/create-movie">
            <img src={add} alt="add-button" />
            Adicionar Filme
          </Link>
        </div>
        <div className={styles.movies}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </>
  )
}

export default Home;