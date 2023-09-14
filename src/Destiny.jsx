

function Destiny(props) {
  return (
    <div class="w-[100vw] h-full p-[10px] flex">
        <div class="w-[50%] flex items-center justify-center h-full">
          <div class="w-[75%] flex justify-center items-center h-[80%] ">
            <img src={props.images} class="w-[70%] h-full" alt="" />
          </div>
        </div>
        <div class="w-[50%] h-full flex relative text-white">
          <div>
            <span class="text-8xl absolute top-[4%] left-[5%]">{props.name}</span>
            <span class="text-xl absolute top-[30%] left-[4%] right-[20%]">{props.description}</span>
          </div>
          <div class="w-[80%] h-[1.5px] absolute top-[65%] left-[4%] bg-white"></div>
          <div class="absolute top-[72%] flex w-full h-[20%]">
            <div class="w-[50%] h-[90%] flex flex-col text-center">
              <div class="text-lg">AVG. Distance</div>
              <div class="text-3xl py-1 ">{props.distance}</div>
            </div>
            <div class="w-[50%] h-[90%] flex flex-col text-center">
              <div class="text-lg pr-[250px]" >Travel</div>
              <div class="text-3xl py- pr-[250px] ">{props.travel}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Destiny