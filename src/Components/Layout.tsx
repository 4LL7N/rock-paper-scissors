import { useContext, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Mycontext } from "./Context";

function Layout() {
  const context = useContext(Mycontext)

    const navigate =  useNavigate()
  const params = useParams()
  console.log(params);
  
    useEffect(() => {
      context?.game?navigate("/rock-paper-scissiors/normla"):navigate("/rock-paper-scissiors/bonus")
    },[])

  return (
    <>
      <div style={context?.choice == 0?{}:{ background: 'radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)' }} className={` w-[100%] h-[100%] p-[32px]  ${
        context?.choice == 0?
          context?.game
            ? "bg-[url(/images/bg-triangle.svg)]"
            : "bg-[url(/images/bg-pentagon.svg)]"
            :null
        } bg-center md:bg-[center_bottom_200px] bg-no-repeat bg-[length:188px_166px] md:bg-[length:287px_254px] flex flex-col justify-center  relative `}>
      <header className="flex justify-between rounded-[5px] rounded-[15px] w-[85%] md:w-[700px] border-[3px] border-solid border-[#ffffff49] p-[12px] pl-[24px] absolute top-[32px] left-[32px] md:left-[433px] ">
          <div className="flex flex-col justify-center ">
            {context?.game ? (
              <>
                <img className="h-[48px] md:h-[93px] " src="/images/logo.svg" alt="" />
              </>
            ) : (
              <>
                <img className="h-[48px] md:h-[93px] " src="/images/logo-bonus.svg" alt="" />
              </>
            )}
          </div>
          <div className=" flex flex-col items-center justify-center w-[80px] md:w-[150px] h-[72px] md:h-[114px] rounded-[4px] bg-[#F3F3F3] shadow-[0px_3px_3px_0px_#00000033]  ">
            <p className=" text-[10px] md:text-[15px] text-[#2A45C2] font-semibold ">SCORE</p>
            <p className=" text-[40px] md:text-[50px] text-[#565468] font-bold leading-[40px] ">
            {context?.score}
            </p>
          </div>
        </header>
        <Outlet/>
        <div className="w-[100%] md:w-[400px] flex justify-around md:self-end absolute bottom-[32px] right-[0] md:right-[0]" >
        <button
          className="w-[128px] h-[40px] flex items-center justify-center self-center bg-transparent border border-solid border-[#FFF] rounded-[8px] mt-[] "
          onClick={() => context?.setRules(true)}
        >
          <p className="text-[16px] text-[#FFF] font-bold ">RULES</p>
        </button>
        <button
          className="w-[128px] h-[40px] flex items-center justify-center self-center bg-transparent border border-solid border-[#FFF] rounded-[8px] mt-[] "
          onClick={() => {navigate("/rock-paper-scissiors/bonus"),window.location.reload()}}
        >
          <p className="text-[16px] text-[#FFF] font-bold ">MENU</p>
        </button>
        </div>
        <div className={`w-[100vw] h-[100vh] bg-[#0000007f] absolute top-[0] left-[0] ${context?.rules?"duration-500 ease-out md:block":"duration-500 ease-in hidden "} `} />
        <div className={` w-[100vw] md:w-[400px] h-[100vh] md:h-[445px] flex flex-col items-center justify-between bg-[#FFF] md:rounded-[8px] absolute left-[0] md:left-[38%] ${context?.rules?"duration-500 ease-out bottom-0 md:bottom-[176px] ":"duration-500 ease-in bottom-[-100vh] md:bottom-[-415px]"} px-[32px] pt-[95px] md:p-[32px] pb-[66px] `}>
          <div className="md:w-[100%] md:flex  md:justify-between md:items-center " >
          <h1 className="text-[32px] text-[#3B4262] font-extrabold  ">RULES</h1>
          <img className="hidden md:block md:w-[19px] md:h-[19px] " src="/images/icon-close.svg" alt="" onClick={() =>  context?.setRules(false)} />
          </div>
          {context?.game ? (
            <img src="/images/image-rules.svg" alt="" />
          ) : (
            <img src="/images/image-rules-bonus.svg" alt="" />
          )}
          
          <img className="md:hidden" src="/images/icon-close.svg" alt="" onClick={() =>  context?.setRules(false)} />
        </div>
      </div>
    </>
  );
}

export default Layout