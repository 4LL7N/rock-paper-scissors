import { useContext } from "react";
import { Mycontext } from "./Context";
import { useNavigate } from "react-router-dom";

function Game() {
  const context = useContext(Mycontext);

  const navigate = useNavigate();

  return (
    <>
      <section
        className={` w-[100%] h-[100%] p-[32px] ${
          context?.game
            ? "bg-[url(/images/bg-triangle.svg)]"
            : "bg-[url(/images/bg-pentagon.svg)]"
        } bg-center bg-no-repeat bg-[length:188px_166px] flex flex-col items-center relative `}
      >
        <header className="flex justify-between rounded-[5px] w-[85%] border-[3px] border-solid border-[#ffffff49] p-[12px] pl-[24px] absolute top-[32px] ">
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
            {context?.score}
            </p>
          </div>
        </header>
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center  ">
          {context?.game ? (
            <>
              <div className=" w-[100%] flex flex-col gap-[15px] items-center justify-between ">
                <div className=" w-[100%] flex justify-between ">
                  <div
                    className=" flex items-center justify-center w-[118px] h-[115px] rounded-[50%] border-[15px] border-solid border-[#4664F4] bg-[#FFF] "
                    onClick={() => {
                      context?.setChoice(2);
                      navigate("/winner");
                    }}
                  >
                    <img className="w-[40px] h-[45px] " src="/images/icon-paper.svg" />
                  </div>
                  <div
                    className=" flex items-center justify-center w-[118px] h-[115px] rounded-[50%] border-[15px] border-solid border-[#EB9F0E] bg-[#FFF] "
                    onClick={() => {
                      context?.setChoice(1);
                      navigate("/winner");
                    }}
                  >
                    <img className="w-[40px] h-[45px] " src="/images/icon-scissors.svg" />
                  </div>
                </div>
                <div
                  className=" flex items-center justify-center w-[118px] h-[115px] rounded-[50%] border-[15px] border-solid border-[#DB2E4D] bg-[#FFF] "
                  onClick={() => {
                    context?.setChoice(3);
                    navigate("/winner");
                  }}
                >
                  <img className="w-[40px] h-[45px] " src="/images/icon-rock.svg" />
                </div>
              </div>
            </>
          ) : (
            <div className="w-[100%] flex flex-col items-center ">
              <div
                className=" flex items-center justify-center w-[96px] h-[97px] rounded-[50%] border-[10px] border-solid border-[#EB9F0E] bg-[#FFF] "
                onClick={() => {
                  context?.setChoice(1);
                  navigate("/winner");
                }}
              >
                <img className="w-[40px] h-[45px] " src="/images/icon-scissors.svg" />
              </div>
              <div className=" w-[100%] flex justify-between mt-[-20px] mb-[10px] ">
                <div
                  className=" flex items-center justify-center w-[96px] h-[97px] rounded-[50%] border-[10px] border-solid border-[#3FB7CD] bg-[#FFF] "
                  onClick={() => {
                    context?.setChoice(5);
                    navigate("/winner");
                  }}
                >
                  <img className="w-[40px] h-[45px] " src="/images/icon-spock.svg" />
                </div>
                <div
                  className=" flex items-center justify-center w-[96px] h-[97px] rounded-[50%] border-[10px] border-solid border-[#4664F4] bg-[#FFF] "
                  onClick={() => {
                    context?.setChoice(2);
                    navigate("/winner");
                  }}
                >
                  <img className="w-[40px] h-[45px] " src="/images/icon-paper.svg" />
                </div>
              </div>
              <div className=" w-[100%] flex justify-around ">
                <div
                  className=" flex items-center justify-center w-[96px] h-[97px] rounded-[50%] border-[10px] border-solid border-[#834EE3] bg-[#FFF] "
                  onClick={() => {
                    context?.setChoice(4);
                    navigate("/winner");
                  }}
                >
                  <img className="w-[40px] h-[45px] " src="/images/icon-lizard.svg" />
                </div>
                <div
                  className=" flex items-center justify-center w-[96px] h-[97px] rounded-[50%] border-[10px] border-solid border-[#DB2E4D] bg-[#FFF] "
                  onClick={() => {
                    context?.setChoice(3);
                    navigate("/winner");
                  }}
                >
                  <img className="w-[40px] h-[45px] " src="/images/icon-rock.svg" />
                </div>
              </div>
            </div>
          )}

        </div>
        <button className="w-[128px] h-[40px] flex items-center justify-center self-bottom bg-transparent border border-solid border-[#FFF] rounded-[8px] " onClick={() => context?.setRules(true)} >
            <p className="text-[16px] text-[#FFF] font-bold ">RULES</p>
          </button>
        <div className={` w-[100vw] h-[100vh] flex flex-col items-center justify-between bg-[#FFF] absolute left-[0] ${context?.rules?"duration-500 ease-out bottom-0 ":"duration-500 ease-in bottom-[-100vh]"} px-[32px] pt-[95px] pb-[66px] `}>
          <h1 className="text-[32px] text-[#3B4262] font-extrabold  ">RULES</h1>
          {context?.game ? (
            <img src="/images/image-rules.svg" alt="" />
          ) : (
            <img src="/images/image-rules-bonus.svg" alt="" />
          )}
          <img src="/images/icon-close.svg" alt="" onClick={() =>  context?.setRules(false)} />
        </div>
      </section>
    </>
  );
}
export default Game;
