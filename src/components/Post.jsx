import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import styles from "./Post.module.css"

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt)

  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author} >
          <Avatar
            src={author.avatarUrl}
          />

          <div className={styles.authorInfo} >
            <strong>{author.name}</strong>
            <span>{author.rule}</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">{publishedDateFormatted}</time>
      </header>

      <div className={styles.content} >
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>jane.design/doctorcare</p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm} >
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />
        <footer>
         <button type="submit" >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}
