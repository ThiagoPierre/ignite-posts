import { PencilSimpleLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'
export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" alt="Imagem de Capa"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/thiagoPierre.png" />
                <strong>Thiago Pierre</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={18} />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}