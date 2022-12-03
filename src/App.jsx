import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from "./App.module.css"
import "./global.css"
import { Sidebar } from "./components/Sidebar"

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis facere aliquid, iure, alias ipsa assumenda eos et adipisci odio deserunt veniam dignissimos reiciendis velit eaque porro! Modi, velit neque.</main>
      </div>
    </div>
  )
}