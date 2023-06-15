import { Post } from './components/Post';
import { Header } from './components/Header';
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post 
          author="Diego Fernandes" 
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos delectus aperiam accusamus sit ut eius adipisci repellendus. Ratione, obcaecati, cupiditate quos unde qui magni itaque, vero eligendi voluptates nesciunt nobis."
          />
          <Post 
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </>
    )
  }

