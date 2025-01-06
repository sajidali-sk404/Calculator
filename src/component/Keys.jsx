
const Keys = (props) => {
    const sciKeys = ["sin", "cos", "tan", "log","ln", "e", "√","!", "^", "π"];

    const basicKeys = ["7", "8", "9", "/","(", "4", "5", "6", "-",")", "1", "2", "3", "+","x",  ".", "0", "Del", "C", "="];
    return (
        <> 
            <div className="relative w-full h-80 border-2 max-lg:h-72 max-sm:h-60  border-gray-400 flex flex-col justify-center items-center p-4 max-lg:p-0 max-xl:text-sm text-1xl dark:bg-gray-800 dark:text-white">

                <div className="grid grid-cols-2 gap-x-1  absolute top-10 gap-y-4 max-sm:gap-y-2 max-xl:gap-x-0 max-sm:left-1 left-5 max-md:left-1 ">
                    {sciKeys.map((items,index) => {
                        return <button onClick={() => props.handlerButton(items)} className="hover:bg-gray-400 rounded-lg p-2 max-lg:p-1 max-md:text-sm  font-bold  " key={index}>{items}</button>;
                    })}
                </div>
                <div className="absolute top-7 left-32  max-md:left-16 min-sm:left-14  max-xl:left-1/3 max-lg:left-24 max-lg:h-56 h-72 border-2 border-gray-400 dark:bg-gray-800 dark:text-white max-sm:h-48"></div>

                <div className={`grid grid-cols-5  gap-x-2 justify-center max-md:top-12 absolute top-10 max-md:right-1 right-3 gap-y-9 max-lg:text-sm max-xl:gap-x-0 max-sm:right-0 max-sm:text-sm max-sm:gap-y-6 `}>
                    {basicKeys.map((items,index) => {
                        return <button onClick={() => props.handlerButton(items)} className={`hover:bg-gray-400 max-md:text-sm rounded-lg p-2 max-lg:p-0  font-bold max-sm:right-2 
                            ${items === "=" ? "hover:bg-green-600" : ""  } 
                         `} key={index}>{items}</button>;
                    })}
                </div>
                </div> 
        </>
)};

export default Keys;