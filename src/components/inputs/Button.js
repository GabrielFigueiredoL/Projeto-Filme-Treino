import styles from './Button.module.css'

function Button({ text, customClass }) {
  return (
    <button className={`${styles.button} ${styles[customClass]}`}>
      {text}
    </button>
  )
}

export default Button;