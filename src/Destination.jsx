import { createSignal } from "solid-js"
import { For, Show, createResource } from "solid-js"
import Head from "./Head"
import Destiny from "./Destiny"
// import Tour from "./Tour"
const fetchProducts = async () => {
  const res = await fetch('http://localhost:7000/destinations')
  return res.json()
}

function Destination() {
  const [dest,setDest] = createSignal("left-0")
  const [Name,setName] = createSignal("Moon")
  const [destinations] = createResource(fetchProducts)
  return (
  <div class="bg-[url('/assets/destination/background-destination-desktop.jpg')] h-[100vh] w-[100vw] bg-cover bg-center">
    <Head />
    <div class="w-[100vw] h-[70px] text-white relative flex items-center" >
        <div class=" absolute left-[13%] text-3xl">
            01 Pick Your Destination</div>
    </div>
    <div class="w-[100vw] h-[50px] relative" >
        <div class="flex h-full w-[30%] absolute left-[50%] justify-center text-white items-center text-xl">
            <div class="w-1/4 h-full flex justify-center items-center"
            onClick={() => {
              (setDest(()=> "left-0"))
              (setName(()=> "Moon"))
            }}
            >Moon</div>
            <div class="w-1/4 h-full flex justify-center items-center"
            onClick={() => {
              (setDest(()=> "left-1/4"))
              (setName(()=>"Mars"))
            }}
            >Mars</div>
            <div class="w-1/4 h-full flex justify-center items-center"
            onClick={() => {
             (setDest(()=> "left-2/4"))
             (setName(()=>"Europa"))
            }}
            >Europa</div>
            <div class="w-1/4 h-full flex justify-center items-center"
            onClick={() => {
              (setDest(()=> "left-3/4"))
              (setName(()=>"Titan"))
            }}
            >Titan</div>
            <div class={`absolute transition-[left] duration-500 ease-out bottom-0 bg-white h-[2px] w-1/4 ${dest()}`}></div>
        </div> 
    </div>
    console.log(${Name()})
    <Show when={destinations()} fallback={<p>Loading...</p>}>
      <For each={destinations()}>
        {(destinations) =>(
          <Show when={destinations.name === Name()}>
            <Destiny
              images={destinations.images.png} 
              name={destinations.name}
              description={destinations.description}
              distance={destinations.distance}
              travel={destinations.travel}
            />
          </Show>
       )}
      </For>
   </Show>
 </div>
  )
}

export default Destination