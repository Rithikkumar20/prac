import { For, Show, createSignal } from "solid-js"
import { createResource } from "solid-js"
import Tech1 from "./Tech1"
import Img1 from "./Img1"

const fetchTech = async () => {
    const res = await fetch('http://localhost:7000/technology')
    return res.json()
  }
function Tech() {
    const[col,setCol]=createSignal("bg-white")
    const[col1,setCol1]=createSignal("")
    const[col2,setCol2]=createSignal("")
    const[name,setName]=createSignal("Launch vehicle")
    const [tech] = createResource(fetchTech)
  return (
    <div className="w-[100%] h-[100%] flex">
        <div class="w-[60%] h-[100%] flex  text-white items-center justify-center">
            <div class="w-[25%] h-[70%] flex flex-col items-center justify-start py-7">
                <div class={`w-[70px] h-[70px] rounded-[50%] my-[10px] border-solid border-2 ${col()} border-white flex text-3xl items-center justify-center`}
                onClick={() =>{
                    setCol("bg-white")
                    setCol1("")
                    setCol2("")
                    setName(() => ("Launch vehicle"))
                }}>1</div>
                <div class={`w-[70px] h-[70px] rounded-[50%] my-[10px] border-solid border-2 ${col1()} border-white flex text-3xl items-center justify-center`}
                onClick={() => {
                    setCol1("bg-white")
                    setCol("")
                    setCol2("")
                    setName(() => ("Spaceport"))
                }}>2</div>
                <div class={`w-[70px] h-[70px] rounded-[50%] my-[10px] border-solid border-2 ${col2()} border-white flex text-3xl items-center justify-center`}
                onClick={() => {
                    setCol2("bg-white")
                    setCol("")
                    setCol1("")
                    setName(()=> ("Space capsule"))
                }}>3</div>
            </div>
            <div class="w-[60%] h-[70%]">
                <Show when={tech()} fallback={<p>Loading...</p>}>
                    <For each={tech()}>
                        {(tech) => (
                           <Show when={tech.name === name()}>
                               <Tech1 
                               name={tech.name}
                               desc={tech.description}
                               />
                           </Show>
                        )}
                    </For>
                </Show>
            </div>
        </div>
        <div class="w-[40%] h-[100%] flex items-center justify-center">
        <Show when={tech()} fallback={<p>Loading...</p>}>
                    <For each={tech()}>
                        {(tech) => (
                           <Show when={tech.name === name()}>
                               <Img1 
                                 img={tech.images.portrait}
                               />
                           </Show>
                        )}
                    </For>
                </Show>
        </div>
    </div>
  )
}

export default Tech