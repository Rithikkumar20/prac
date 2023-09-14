

function Crewinfo(props) {
  return (
    <div class="w-[100%] h-7/10 flex flex-col">
        <div class="w-[90%] h-1/5 text-4xl flex text-white pt-[100px] pb-[10px] ">{props.role}</div>
        <div class="w-[90%] h-1/5 justify-start text-6xl pb-[4%]">{props.name}</div>
        <div class="w-[90%] h-1/4 text-xl">{props.bio}</div>
    </div>
  )
}

export default Crewinfo