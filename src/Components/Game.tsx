import { useContext } from "react";
import { Mycontext } from "./Context";
import { useNavigate } from "react-router-dom";

function Game() {
  const context = useContext(Mycontext);

  const navigate = useNavigate();
  
  // useEffect(() => {
  //   if (context?.game) {
  //     let random = Math.floor(Math.random() * 3) + 1
  //     context.CPU = random ;
  //     console.log("3");
  //     console.log("random ", random);
      
      
  //   } else {
  //     let random = Math.floor(Math.random() * 5) + 1
  //     context ? context.CPU = random :null
  //     console.log("5");
      
  //   }
  //   console.log(context?.CPU);
  // },[])
  
  
  return (
    <>
      <section
        className="flex flex-col items-center"
      >
        
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center  ">
          {context?.game ? (
            <>
              <div className=" w-[100%] md:h-[100%] flex flex-col gap-[15px] md:gap-[20px] items-center justify-between md:justify-center md:mt-[130px] ">
                <div className=" w-[100%] flex justify-between md:justify-center md:gap-[60px] ">
                  <div
                    className=" flex items-center justify-center w-[118px] h-[115px] md:w-[198px] md:h-[203px] rounded-[50%] border-[15px] md:border-[30px] border-solid border-[#4664F4] bg-[#FFF] "
                    onClick={() => {
                      context?.setChoice(2);
                      navigate("/rock-paper-scissiors/winner");
                      context.game?context.setCPU(Math.floor(Math.random() * 3) + 1):context.setCPU(Math.floor(Math.random() * 5) + 1)
                    }}
                  >
                    <img className="w-[40px] h-[45px] md:w-[60px] md:h-[70px] " src="/images/icon-paper.svg" />
                  </div>
                  <div
                    className=" flex items-center justify-center w-[118px] h-[115px] md:w-[198px] md:h-[203px] rounded-[50%] border-[15px] md:border-[30px] border-solid border-[#EB9F0E] bg-[#FFF] "
                    onClick={() => {
                      context?.setChoice(1);
                      navigate("/rock-paper-scissiors/winner");
                      context.game?context.setCPU(Math.floor(Math.random() * 3) + 1):context.setCPU(Math.floor(Math.random() * 5) + 1)
                    }}
                  >
                    <img className="w-[40px] h-[45px] md:w-[60px] md:h-[70px]  " src="/images/icon-scissors.svg" />
                  </div>
                </div>
                <div
                  className=" flex items-center justify-center w-[118px] h-[115px] md:w-[198px] md:h-[203px] rounded-[50%] border-[15px] md:border-[30px] border-solid border-[#DB2E4D] bg-[#FFF] "
                  onClick={() => {
                    context?.setChoice(3);
                    navigate("/rock-paper-scissiors/winner");
                    context.game?context.setCPU(Math.floor(Math.random() * 3) + 1):context.setCPU(Math.floor(Math.random() * 5) + 1)
                  }}
                >
                  <img className="w-[40px] h-[45px]  md:w-[60px] md:h-[70px]  " src="/images/icon-rock.svg" />
                </div>
              </div>
            </>
          ) : (
            <div className="w-[100%] flex flex-col items-center md:mt-[150px] ">
              <div
                className=" flex items-center justify-center w-[96px] h-[97px] md:w-[145px] md:h-[148px] rounded-[50%] border-[10px] md:border-[20px] border-solid border-[#EB9F0E] bg-[#FFF] "
                onClick={() => {
                  context?.setChoice(1);
                  navigate("/rock-paper-scissiors/winner");
                  context?context.game?context.setCPU(Math.floor(Math.random() * 3) + 1):context.setCPU(Math.floor(Math.random() * 5) + 1):null
                }}
              >
                <img className="w-[40px] h-[45px]  md:w-[50px] md:h-[60px]" src="/images/icon-scissors.svg" />
              </div>
              <div className=" w-[100%] flex justify-between md:justify-center md:gap-[150px] mt-[-20px] mb-[10px] ">
                <div
                  className=" flex items-center justify-center w-[96px] h-[97px] md:w-[145px] md:h-[148px] rounded-[50%] border-[10px] md:border-[20px] border-solid border-[#3FB7CD] bg-[#FFF] "
                  onClick={() => {
                    context?.setChoice(5);
                    navigate("/rock-paper-scissiors/winner");
                    context?context.game?context.setCPU(Math.floor(Math.random() * 3) + 1):context.setCPU(Math.floor(Math.random() * 5) + 1):null
                  }}
                >
                  <img className="w-[40px] h-[45px] md:w-[50px] md:h-[60px] " src="/images/icon-spock.svg" />
                </div>
                <div
                  className=" flex items-center justify-center w-[96px] h-[97px] md:w-[145px] md:h-[148px] rounded-[50%] border-[10px] md:border-[20px] border-solid border-[#4664F4] bg-[#FFF] "
                  onClick={() => {
                    context?.setChoice(2);
                    navigate("/rock-paper-scissiors/winner");
                    context?context.game?context.setCPU(Math.floor(Math.random() * 3) + 1):context.setCPU(Math.floor(Math.random() * 5) + 1):null
                  }}
                >
                  <img className="w-[40px] h-[45px]  md:w-[50px] md:h-[60px]" src="/images/icon-paper.svg" />
                </div>
              </div>
              <div className=" w-[100%] flex justify-around md:justify-center md:gap-[50px] ">
                <div
                  className=" flex items-center justify-center w-[96px] h-[97px] md:w-[145px] md:h-[148px] rounded-[50%] border-[10px] md:border-[20px] border-solid border-[#834EE3] bg-[#FFF] "
                  onClick={() => {
                    context?.setChoice(4);
                    navigate("/rock-paper-scissiors/winner");
                    context?context.game?context.setCPU(Math.floor(Math.random() * 3) + 1):context.setCPU(Math.floor(Math.random() * 5) + 1):null
                  }}
                >
                  <img className="w-[40px] h-[45px] md:w-[50px] md:h-[60px] " src="/images/icon-lizard.svg" />
                </div>
                <div
                  className=" flex items-center justify-center w-[96px] h-[97px] md:w-[145px] md:h-[148px] rounded-[50%] border-[10px] md:border-[20px] border-solid border-[#DB2E4D] bg-[#FFF] "
                  onClick={() => {
                    context?.setChoice(3);
                    navigate("/rock-paper-scissiors/winner");
                    context?context.game?context.setCPU(Math.floor(Math.random() * 3) + 1):context.setCPU(Math.floor(Math.random() * 5) + 1):null
                  }}
                >
                  <img className="w-[40px] h-[45px] md:w-[50px] md:h-[60px] " src="/images/icon-rock.svg" />
                </div>
              </div>
            </div>
          )}

        </div>
        
      </section>
    </>
  );
}
export default Game;
