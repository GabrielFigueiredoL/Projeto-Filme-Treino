import styles from "./Header.module.css"
import foto from "../../img/Foto de perfil.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <Link to="/">
        <h2>RocketMovies</h2>
      </Link>
      <input type="text" placeholder="Pesquisar pelo titulo" />
      <div className={styles.user_container}>
        <div className={styles.user_data}>
          <p>Homem Miranha</p>
          <a href="/">Sair</a>
        </div>
        <Link to='/profile'>
          <img src={foto} alt="foto de perfil" />
        </Link>
      </div>
    </header>
  )
}

export default Header