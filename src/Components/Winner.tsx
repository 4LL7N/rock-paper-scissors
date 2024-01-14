import { useContext, useEffect, useRef, useState } from "react";
import { Mycontext } from "./Context";
import { useNavigate } from "react-router-dom";

function Winner() {
  const context = useContext(Mycontext);
  const navigate = useNavigate();
  //   let random = 0
  const CPU = useRef<number>(0);
  const [result, setResult] = useState<string>("");

  if (context?.game) {
    CPU.current = Math.floor(Math.random() * 3) + 1;
  } else {
    CPU.current = Math.floor(Math.random() * 5) + 1;
  }

  useEffect(() => {
    if (context?.choice == 0) {
      history.back();
    }
    console.log(CPU, "  CPU");
    console.log(context?.choice, "   CHOICE");
    if (CPU.current == context?.choice) {
      console.log("tie");

      setResult("TIE");
    } else {
      if (context?.game) {
        if (context.choice == 1 && CPU.current == 2) {
          console.log(CPU, "  CPU WIN");
          console.log(context?.choice, "   CHOICE WIN");
          setResult("WIN");
          context.setScore(context?.score + 1);
        } else {
          console.log(CPU, "  CPU LOSE");
          console.log(context?.choice, "   CHOICE LOSE");
          setResult("LOSE");
          context ? context.setScore(context?.score - 1) : null;
        }
        if (context.choice == 2 && CPU.current == 3) {
          setResult("WIN");
          context.setScore(context?.score + 1);
        } else {
          setResult("LOSE");
          context ? context.setScore(context?.score - 1) : null;
        }
        if (context.choice == 3 && CPU.current == 1) {
          setResult("WIN");
          context.setScore(context?.score + 1);
        } else {
          setResult("LOSE");
          context ? context.setScore(context?.score - 1) : null;
        }
      } else {
        if ((context?.choice == 1 && CPU.current == 2) || CPU.current == 4) {
          setResult("WIN");
          context ? context.setScore(context?.score + 1) : null;
        } else {
          setResult("LOSE");
          context ? context.setScore(context?.score - 1) : null;
        }
        if ((context?.choice == 2 && CPU.current == 3) || CPU.current == 5) {
          setResult("WIN");
          context ? context.setScore(context?.score + 1) : null;
        } else {
          setResult("LOSE");
          context ? context.setScore(context?.score - 1) : null;
        }
        if ((context?.choice == 3 && CPU.current == 4) || CPU.current == 1) {
          setResult("WIN");
          context ? context.setScore(context?.score + 1) : null;
        } else {
          setResult("LOSE");
          context ? context.setScore(context?.score - 1) : null;
        }
        if ((context?.choice == 4 && CPU.current == 5) || CPU.current == 2) {
          setResult("WIN");
          context ? context.setScore(context?.score + 1) : null;
        } else {
          setResult("LOSE");
          context ? context.setScore(context?.score - 1) : null;
        }
        if ((context?.choice == 5 && CPU.current == 1) || CPU.current == 3) {
          setResult("WIN");
          context ? context.setScore(context?.score + 1) : null;
        } else {
          setResult("LOSE");
          context ? context.setScore(context?.score - 1) : null;
        }
      }
    }
  }, []);

  return (
    <>
      <section
        className={` w-[100%] h-[100%] p-[32px] flex flex-col justify-end relative `}
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
        <div className="w-[100%] flex items-center justify-between mb-[62px] ">
          <div className="flex flex-col items-center gap-[17px]">
            <div
              className={` flex items-center justify-center w-[118px] h-[115px] rounded-[50%] border-[15px] border-solid border-[${
                context?.moves[context?.choice][1]
              }] bg-[#FFF] `}
            >
              <img
                className="w-[40px] h-[45px] "
                src={context?.moves[context?.choice][0]}
              />
            </div>
            <p className="text-[15px] text-[#FFF] font-extrabold ">
              YOU PICKED
            </p>
          </div>
          <div className="flex flex-col items-center gap-[17px]">
            <div
              className={` flex items-center justify-center w-[118px] h-[115px] rounded-[50%] border-[15px] border-solid border-[${
                context?.moves[CPU.current][1]
              }] bg-[#FFF] `}
            >
              <img
                className="w-[40px] h-[45px] "
                src={context?.moves[CPU.current][0]}
              />
            </div>
            <p className="text-[15px] text-[#FFF] font-extrabold ">
              THE HOUSE PICKED
            </p>
          </div>
        </div>
        <div className="w-[100%] flex flex-col items-center gap-[16px] mb-[52px] ">
          {result == "TIE" ? (
            <h2 className="text-[56px] text-[#FFF] font-bold ">{result}</h2>
          ) : (
            <h2 className="text-[56px] text-[#FFF] font-bold ">YOU {result}</h2>
          )}
          <button
            className="w-[220px] h-[48px] flex items-center justify-center bg-[#FFF] rounded-[8px] "
            onClick={() => {
              context?.game ? navigate("/normla") : navigate("/bonus");
              context?.setChoice(0);
            }}
          >
            <p className="text-[16px] text-[#3B4262] font-semibold  ">
              PLAY AGAIN
            </p>
          </button>
        </div>
        <button
          className="w-[128px] h-[40px] flex items-center justify-center self-center bg-transparent border border-solid border-[#FFF] rounded-[8px] mt-[] "
          onClick={() => context?.setRules(true)}
        >
          <p className="text-[16px] text-[#FFF] font-bold ">RULES</p>
        </button>
        <div
          className={` w-[100vw] h-[100vh] flex flex-col items-center justify-between bg-[#FFF] absolute left-[0] ${
            context?.rules
              ? "duration-500 ease-out bottom-0 "
              : "duration-500 ease-in bottom-[-100vh]"
          } px-[32px] pt-[95px] pb-[66px] `}
        >
          <h1 className="text-[32px] text-[#3B4262] font-extrabold  ">RULES</h1>
          {context?.game ? (
            <img src="/images/image-rules.svg" alt="" />
          ) : (
            <img src="/images/image-rules-bonus.svg" alt="" />
          )}
          <img
            src="/images/icon-close.svg"
            alt=""
            onClick={() => context?.setRules(false)}
          />
        </div>
      </section>
    </>
  );
}

export default Winner;
