import Head from "./Head"
import Tech from "./Tech"


function Technology() {
  return (
    <div class="bg-[url('/assets/technology/background-technology-desktop.jpg')] w-[100vw] h-[100vh] flex flex-col bg-cover bg-center">
      <Head />
      <div class="w-[100vw] h-[100px] text-white relative flex items-center" >
        <div class=" absolute left-[13%] top-[60%] text-3xl">
            03 Space Launch 101</div>
      </div>
      <div class="w-[100vw] h-[72%] flex">
        <Tech />
      </div>
    </div>
  )
}

export default Technology