import { useContext } from "react";
import { Mycontext } from "./Context";

function Game() {
  const context = useContext(Mycontext);

  return (
    <>
      <section className={` w-[100%] h-[100%] p-[32px] ${context?.game?"bg-[url(/images/bg-triangle.svg)]":"bg-[url(/images/bg-pentagon.svg)]"} bg-center bg-no-repeat bg-[length:188px_166px] `}>
        <header className="flex justify-between rounded-[5px] w-[100%] border-[3px] border-solid border-[#ffffff49] p-[12px] pl-[24px]  ">
          <div className="flex flex-col justify-center ">
            {context?.game ? (
              <>
                <img className="h-[48px]" src="/images/logo.svg" alt="" />
              </>
            ) : (
              <>
                <img className="h-[48px]" src="/images/logo-bonus.svg" alt="" />
              </>
            )}
          </div>
          <div className=" flex flex-col items-center justify-center w-[80px] h-[72px] rounded-[4px] bg-[#F3F3F3] shadow-[0px_3px_3px_0px_#00000033]  ">
            <p className=" text-[10px] text-[#2A45C2] font-semibold ">SCORE</p>
            <p className=" text-[40px] text-[#565468] font-bold leading-[40px] ">
              12
            </p>
          </div>
        </header>

        {context?.game ? (
          <>
            <div className="w-[100%] h-[100%] flex flex-col items-center justify-center  " >
                <div className="flex" >
                    <div className=" w-[133px] h-[130px] rounded-[50%] border-[15px] border-solid border-[#4664F4] bg-[#FFF] shadow-[0px_5px_0px_0px_#BABFD4] " >
                    <img src="/images/icon-paper.svg" />
                    </div>
                    <div className=" w-[133px] h-[130px] rounded-[50%] border-[15px] border-solid border-[#EB9F0E] bg-[#FFF] shadow-[0px_5px_0px_0px_#BABFD4] " >
                    <img src="/images/icon-scissors.svg" />
                    </div>
                </div>
            </div>
          </>
        ) : null}
      </section>
    </>
  );
}
export default Game;
