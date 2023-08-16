import { ReactComponent as NomeIcon } from "../../img/nome_icon.svg"
import { ReactComponent as SenhaIcon } from "../../img/Senha_icon.svg"
import { ReactComponent as EmailIcon } from "../../img/E-mail_icon.svg"

import BackButton from "../layout/BackButton"
import styles from "./Profile.module.css"
import Input from "../inputs/Input"
import Button from "../inputs/Button"
import foto from "../../img/Foto de perfil.png"
import Camera from "../../img/Camera"

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackButton />
        <div className={styles.profile_container}>
          <div className={styles.profile_button}>
            <Camera />
          </div>
          <img src={foto} />
        </div>
      </div>
      <div className={styles.data}>
        <div className={styles.user_data}>
          <Input icon={<NomeIcon />} placeholder='Nome'/>
          <Input icon={<EmailIcon />} placeholder={'Email'}/>
        </div>
        <div className={styles.user_password}>
          <Input icon={<SenhaIcon />} placeholder='Senha atual'/>
          <Input icon={<SenhaIcon />} placeholder='Nova senha' />
        </div>
        <Button text="Salvar" />
      </div>
    </div>
  )
}

export default Profile
