import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UsersList from '../components/userslist.component'

export default function Home() {
  return (
    <div className={styles.container}>
      <UsersList />
    </div>
  )
}
