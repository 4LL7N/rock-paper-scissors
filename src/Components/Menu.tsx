import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "./Context";

function Menu() {

    const navigate = useNavigate()

    const context = useContext(Mycontext)

  return (
    <>
    <div  style={{ background: 'radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)' }} className="w-[100vw] h-[100vh] " >
      <section className="w-[100%] h-[100%]  flex flex-col items-center justify-center gap-[100px] ">
        <h1 className="text-[24px] text-[#FFF] font-bold  " >ROCK PAPER SCISSORS</h1>
        <div className="flex gap-[30px]">
          <button className="w-[140px] h-[40px] bg-[#fda214] rounded-[16px] shadow-[0px_5px_0_0_#aa6e0f] text-[16px] text-[#FFF] font-bold  " onClick={() => {navigate("/rock-paper-scissiors") ; context?.setGame(true) } } ><p>NORMAL</p></button>
          <button className="w-[140px] h-[40px] bg-[#fda214] rounded-[16px] shadow-[0_5px_0_0_#aa6e0f] text-[16px] text-[#FFF] font-bold  " onClick={() => {navigate("/rock-paper-scissiors"); context?.setGame(false)}} ><p>BONUS</p></button>
        </div>
      </section>
      </div>
    </>
  );
}
export default Menu;
