import { createSignal } from "solid-js"
import { useNavigate } from "@solidjs/router"

function Head() {
  const [position,setPosition] = createSignal("left-[17%]")
  const nav = useNavigate()
  return (
    <div class="text-white flex justify-between space-x-[10px] items-center relative  ">
        <div class='bg-[url("/assets/shared/logo.svg")] bg-cover  bg-center h-[60px] w-[60px] m-10'></div>
        <div class="bg-white h-[0.5px] w-[30%] absolute left-[12%] "></div>
        <div class="flex relative  right-0 bg-white  bg-opacity-[0.2] w-[60%] h-[80px] justify-center items-center">
          <div class="w-1/6"></div>
          <div onClick={() => {
            setPosition(() => "left-[17%]")
            nav("/")
          }}
             class="text-xl w-1/6 h-[100%] flex justify-center items-center ">00home</div>
          <div onClick={() =>{
            setPosition(() => "left-[33%]")
            nav("/Destination")
          }}
            class="text-xl w-1/6 h-[100%] flex justify-center items-center ">01Destination</div>
          <div onClick={() => 
            (setPosition(() => "left-[51%]"))}
            class="text-xl w-1/6 h-[100%] flex justify-center items-center ">02Crew</div>
          <div onClick={() => 
            (setPosition("left-[67%]"))}
            class="text-xl w-1/6 h-[100%] flex justify-center items-center ">03Technology</div>
          <div class="w-1/6"></div>
          <div class={`absolute transition-[left] duration-500 ease-out bottom-0 bg-white h-[5px] w-1/6 ${position()}`}></div>
        </div>
    </div>
  )
}

export default Head