import { Post } from './Post';
import { Header } from './components/Header';
import './styles.css'

export function App() {
  return (
    <>
      <Header />
      
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos delectus aperiam accusamus sit ut eius adipisci repellendus. Ratione, obcaecati, cupiditate quos unde qui magni itaque, vero eligendi voluptates nesciunt nobis."
      />
      <Post 
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
      <Post />
    </>
    )
  }

