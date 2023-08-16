import styles from './Input.module.css'

function Input({placeholder, type, icon}) {

  return (
    <div className={styles.input_wrapper}>
      {icon && 
        icon
      }
      <input type={type} placeholder={placeholder} className={styles.input} />
    </div>
  )
}

export default Input;