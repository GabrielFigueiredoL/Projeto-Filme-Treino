import styles from "./MarkerButton.module.css"
import close from "../../img/close.svg"
import add from "../../img/add.svg"

function MarkerButton({ name, customClass }) {
  return (
    <div className={`${styles.marker} ${styles[customClass]}`}>
      <p>{name}</p>
      <button>
        <img src={!customClass ? close : add}/>
      </button>
    </div>
  )
}

export default MarkerButton
