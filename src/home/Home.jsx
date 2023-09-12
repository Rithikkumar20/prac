import { createSignal } from 'solid-js'
import Head from '../Head'
import Main from '../Main'

function Home() {
  return (
    <div class='bg-[url("/assets/home/background-home-desktop.jpg")] bg-cover bg-center h-[100vh] w-[100vw]' >
    <Head />
    <Main />
    </div>

  )
}

export default Home