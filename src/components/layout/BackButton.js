import { Link } from "react-router-dom"
import styles from "./BackButton.module.css"
import ArrowLeft from '../../img/ArrowLeft'


function BackButton() {
  return (
    <Link to="/" className={styles.back_button}>
      <ArrowLeft />
      Voltar
    </Link>
  )
}

export default BackButton
