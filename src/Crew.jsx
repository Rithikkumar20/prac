import { createSignal } from "solid-js"
import { For, Show, createResource } from "solid-js"
import Head from "./Head"
import Crewinfo from "./Crewinfo"
import Img from "./Img"

const fetchCrew = async () => {
  const res = await fetch('http://localhost:7000/crew')
  return res.json()
}

function Crew() {
  const [col,setCol] = createSignal("bg-slate-500")
  const [col1,setCol1] = createSignal("bg-slate-500")
  const [col2,setCol2] = createSignal("bg-slate-500")
  const [col3,setCol3] = createSignal("bg-white")
  const [Role,setRole] = createSignal("Flight Engineer")
  const [crew] = createResource(fetchCrew)
  return (
    <div class="bg-[url('/assets/crew/background-crew-desktop.jpg')] w-[100vw] h-[100vh] bg-cover bg-center">
      <Head />
      <div class="w-[100vw] h-[70px] text-white relative flex items-center" >
        <div class=" absolute left-[13%] text-3xl">
            02 Meet Your Crew</div>
      </div>
      <div class="w-[100vw] h-[71%] flex ">
        <div class="w-1/2 h-full flex text-white  flex-col p-[20px] pl-[12%]">
          <div class="w-[100%] h-[75%]">
          <Show when={crew()} fallback={<p>Loading...</p>}>
            <For each={crew()}>
              {(crew) =>(
                <Show when={crew.role === Role()}>
                  <Crewinfo
                  name={crew.name}
                  role={crew.role}
                  bio={crew.bio}
                  />
                 </Show>
              )}
              </For>
          </Show>
            </div>
          <div class="w-[50%] h-1/4 flex pt-[75px]">
            <div class={`w-[20px] h-[20px] m-[5px] ${col()} rounded-[50%]`}
            onClick={() => {
              setCol("bg-white")
              setCol1("bg-slate-500")
              setCol2("bg-slate-500")
              setCol3("bg-slate-500")
              setRole(() => "Commander")
            }}
            ></div>
            <div class={`w-[20px] h-[20px] m-[5px] ${col1()} rounded-[50%]`}
            onClick={() => {
              setCol1("bg-white")
              setCol("bg-slate-500")
              setCol2("bg-slate-500")
              setCol3("bg-slate-500")
              setRole(() => "Mission Specialist")
            }}
            ></div>
            <div class={`w-[20px] h-[20px] m-[5px] ${col2()} rounded-[50%]`}
            onClick={() => {
              setCol2("bg-white")
              setCol("bg-slate-500")
              setCol1("bg-slate-500")
              setCol3("bg-slate-500")
              setRole(() => "Pilot")
            }}
            ></div>
            <div class={`w-[20px] h-[20px] m-[5px] ${col3()} rounded-[50%]`}
            onClick={() => {
              setCol3("bg-white")
              setCol("bg-slate-500")
              setCol2("bg-slate-500")
              setCol1("bg-slate-500")
              setRole("Flight Engineer")
            }}
            ></div>
          </div>
      </div>
      <div class="w-1/2 h-full">
        <Show when={crew()} fallback={<p>Loading...</p>}>
          <For each={crew()}>
            {(crew) => (
              <Show when={crew.role === Role()}>
              <Img 
                images={crew.images.png}
              />
              </Show>
             )} 
          </For>
        </Show>
      </div>
    </div>
    </div>
    
  )
}

export default Crew