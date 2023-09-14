

function Tech1(props) {
  return (
    <div class="w-[100%] h-[100%]  flex flex-col items-center justify-center">
        <div CLASS="w-[80%] h-[15%] text-base flex items-end">THE TERMINOLOGY...</div>
                <div CLASS="w-[80%] h-[30%] flex items-center text-5xl">{props.name}</div>
                <div CLASS="w-[80%] h-[55%] text-base flex justify-center">
                     {props.desc}
                </div>
    </div>
  )
}

export default Tech1