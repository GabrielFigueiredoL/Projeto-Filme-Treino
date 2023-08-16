import styles from "./CreateMovie.module.css"
import MarkerButton from "../movie/MarkerButton"
import BackButton from "../layout/BackButton"
import Header from "../layout/Header"
import Button from "../inputs/Button"
import Input from "../inputs/Input"

function CreateMovie() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <BackButton />
          <h1>Novo Filme</h1>
        </div>

        <div className={styles.title_rating}>
          <Input placeholder="Titulo" type="text" />
          <Input placeholder="Sua nota de 0 a 5" type="number" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Observações"
        />

        <div className={styles.markers_container}>
          <p>Marcadores</p>
          <div className={styles.markers}>
            <MarkerButton name="React" />
            <MarkerButton name='Novo marcador' customClass='add_btn'/>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button text="Excluir filme" />
          <Button text="Salvar alterações" customClass="delete" />
        </div>
      </div>
    </>
  )
}

export default CreateMovie
