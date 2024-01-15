import { useContext, useEffect, useState } from "react";
import { Mycontext } from "./Context";
import { useNavigate } from "react-router-dom";

function Winner() {
  const context = useContext(Mycontext);
  const navigate = useNavigate();
  //   let random = 0

  const [result, setResult] = useState<string>("");

  window.addEventListener("popstate", () => {
    context?.setChoice(0);
  });

  useEffect(() => {
    // if(!context){
    //   return
    // }
    if (context?.choice == 0) {
      context?.game
        ? navigate("/rock-paper-scissiors/normla")
        : navigate("/rock-paper-scissiors/bonus");
    }
    console.log(context?.CPU, "  CPU");
    console.log(context?.choice, "   CHOICE");
    if (context?.CPU == context?.choice) {
      console.log("tie");

      setResult("TIE");
    } else {
      if (context?.game) {
        if (context.choice == 1) {
          if (context?.CPU == 2) {
            console.log(context.CPU, "  CPU WIN");
            console.log(context?.choice, "   CHOICE WIN");
            setResult("WIN");
            context.setScore(context?.score + 1);
          } else {
            console.log(context.CPU, "  CPU LOSE");
            console.log(context?.choice, "   CHOICE LOSE");
            setResult("LOSE");
            context ? context.setScore(context?.score - 1) : null;
          }
        } else if (context.choice == 2) {
          if (context.CPU == 3) {
            console.log(context.CPU, "  CPU WIN");
            console.log(context?.choice, "   CHOICE WIN");
            setResult("WIN");
            context.setScore(context?.score + 1);
          } else {
            console.log(context?.CPU, "  CPU LOSE");
            console.log(context?.choice, "   CHOICE LOSE");
            setResult("LOSE");
            context ? context.setScore(context?.score - 1) : null;
          }
        } else if (context.choice == 3) {
          if (context.CPU == 1) {
            console.log(context.CPU, "  CPU WIN");
            console.log(context?.choice, "   CHOICE WIN");
            setResult("WIN");
            context.setScore(context?.score + 1);
          } else {
            console.log(context?.CPU, "  CPU LOSE");
            console.log(context?.choice, "   CHOICE LOSE");
            setResult("LOSE");
            context ? context.setScore(context?.score - 1) : null;
          }
        }
      } else {
        if (context?.choice == 1) {
          if (context.CPU == 2 || context.CPU == 4) {
            console.log(context.CPU, "  CPU WIN");
            console.log(context?.choice, "   CHOICE WIN");
            setResult("WIN");
            context ? context.setScore(context?.score + 1) : null;
          } else {
            console.log(context?.CPU, "  CPU LOSE");
            console.log(context?.choice, "   CHOICE LOSE");
            setResult("LOSE");
            context ? context.setScore(context?.score - 1) : null;
          }
        } else if (context?.choice == 2) {
          if (context?.CPU == 3 || context?.CPU == 5) {
            console.log(context.CPU, "  CPU WIN");
            console.log(context?.choice, "   CHOICE WIN");
            setResult("WIN");
            context ? context.setScore(context?.score + 1) : null;
          } else {
            console.log(context?.CPU, "  CPU LOSE");
            console.log(context?.choice, "   CHOICE LOSE");
            setResult("LOSE");
            context ? context.setScore(context?.score - 1) : null;
          }
        } else if (context?.choice == 3) {
          if (context.CPU == 4 || context.CPU == 1) {
            console.log(context.CPU, "  CPU WIN");
            console.log(context?.choice, "   CHOICE WIN");
            setResult("WIN");
            context ? context.setScore(context?.score + 1) : null;
          } else {
            console.log(context?.CPU, "  CPU LOSE");
            console.log(context?.choice, "   CHOICE LOSE");
            setResult("LOSE");
            context ? context.setScore(context?.score - 1) : null;
          }
        } else if (context?.choice == 4) {
          if (context?.CPU == 5 || context?.CPU == 2) {
            console.log(context?.CPU, "  CPU WIN");
            console.log(context?.choice, "   CHOICE WIN");
            setResult("WIN");
            context ? context.setScore(context?.score + 1) : null;
          } else {
            console.log(context?.CPU, "  CPU LOSE");
            console.log(context?.choice, "   CHOICE LOSE");
            setResult("LOSE");
            context ? context.setScore(context?.score - 1) : null;
          }
        } else if (context?.choice == 5) {
          if (context?.CPU == 1 || context?.CPU == 3) {
            console.log(context?.CPU, "  CPU WIN");
            console.log(context?.choice, "   CHOICE WIN");
            setResult("WIN");
            context ? context.setScore(context?.score + 1) : null;
          } else {
            console.log(context?.CPU, "  CPU LOSE");
            console.log(context?.choice, "   CHOICE LOSE");
            setResult("LOSE");
            context ? context.setScore(context?.score - 1) : null;
          }
        }
      }
    }
  }, []);

  console.log(result);

  return (
    <>
      <section
        className={` w-[100%] h-[100%] p-[32px] flex flex-col justify-end relative md:items-center md:justify-center  `}
      >
        <div className=" w-[100%] relative">
          <div className="w-[100%] flex items-center justify-between md:justify-around mb-[62px] ">
            <div className="flex flex-col items-center gap-[17px]">
              <div
                className={` flex items-center justify-center w-[118px] h-[115px] md:w-[198px] md:h-[203px] rounded-[50%] border-[15px] md:border-[30px] border-solid border-[${
                  context?.moves[context?.choice]?.[1]
                }] bg-[#FFF] `}
              >
                <img
                  className="w-[40px] h-[45px]  md:w-[60px] md:h-[70px]  "
                  src={context?.moves[context?.choice]?.[0]}
                />
              </div>
              <p className="text-[15px] text-[#FFF] font-extrabold ">
                YOU PICKED
              </p>
            </div>
            <div className="flex flex-col items-center gap-[17px]">
              <div
                className={` flex items-center justify-center w-[118px] h-[115px] md:w-[198px] md:h-[203px] rounded-[50%] border-[15px] md:border-[30px] border-solid border-[${
                  context?.moves[context.CPU]?.[1]
                }] bg-[#FFF] `}
              >
                <img
                  className="w-[40px] h-[45px]  md:w-[60px] md:h-[70px]  "
                  src={context?.moves[context.CPU]?.[0]}
                />
              </div>
              <p className="text-[15px] text-[#FFF] font-extrabold ">
                THE HOUSE PICKED
              </p>
            </div>
          </div>
          <div className="w-[100%] flex flex-col items-center gap-[16px] mb-[52px] md:absolute md:top-[80px] ">
            {result == "TIE" ? (
              <h2 className="text-[56px] text-[#FFF] font-bold ">{result}</h2>
            ) : (
              <h2 className="text-[56px] text-[#FFF] font-bold ">
                YOU {result}
              </h2>
            )}
            <button
              className="w-[220px] h-[48px] flex items-center justify-center bg-[#FFF] rounded-[8px] "
              onClick={() => {
                context?.game
                  ? navigate("/rock-paper-scissiors/normla")
                  : navigate("/rock-paper-scissiors/bonus");
                context?.setChoice(0);
              }}
            >
              <p className="text-[16px] text-[#3B4262] font-semibold  ">
                PLAY AGAIN
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Winner;
