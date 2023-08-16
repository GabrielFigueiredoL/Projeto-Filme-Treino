import styles from './Marker.module.css'

function Marker({name}) {
  return ( 
    <div className={styles.marker}>
      {name}
    </div>
   );
}

export default Marker;