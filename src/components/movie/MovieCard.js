import styles from './MovieCard.module.css'
import { Link } from 'react-router-dom';

function MovieCard() {
  return (
    <Link className={styles.movie_card} to='/movie-preview'>
      <div className={styles.movie_title_rating}>
        <h2>Titulo</h2>
        <p>Rating</p>
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nobis pariatur fuga soluta quae facilis dolorem, dolores iure officia fugit quis at recusandae ut. Distinctio explicabo facilis quaerat illo vel.</p>
      <div>
        <p>tags</p>
      </div>
    </Link>
  )
}

export default MovieCard;