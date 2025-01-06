import Display from "./Display";
import Keys from "./Keys";
import { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";



const Cal = () => {

    const [DarkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!DarkMode);
        document.body.classList.toggle("dark");
    }



    const [expression, setExpression] = useState("");
    const [DisplayExpression, setDisplayExpression] = useState("");
    const [result, setResult] = useState("");

    const scientificFunc = {
        sin: "Math.sin",
        cos: "Math.cos",
        tan: "Math.tan",
        log: "Math.log10",
        ln: "Math.log",
        "^": "**",
        "√": 'Math.sqrt',
        π: "Math.PI",
        e: "Math.E"

    };



    function calcResult() {
        if (expression.length !== 0) {
            try {
                let computed = eval(expression);
                computed = parseFloat(computed.toFixed(4));
                setResult(computed);
            } catch {
                setResult("Error occured");
            }
        }
        else {
            setResult("0");
        }

    }

    function handlerButton(value) {
        if (value === "C") {
            setExpression("");
            setDisplayExpression("");
            setResult("0");
        }
        else if (value === "Del") {
            setExpression(expression.slice(0, -1));
            setDisplayExpression(DisplayExpression.slice(0, -1));
        }
        else if (value === "=") calcResult();

        else if (scientificFunc.hasOwnProperty(value)) {
            setDisplayExpression(DisplayExpression + value);
            setExpression(expression + scientificFunc[value]);
        }
        else if (value === "x") {
            setExpression(expression + "*");
            setDisplayExpression(DisplayExpression + "x");
        }

        else if (value === "!") {
            const lastNum = extractLastNum(expression);
            if (lastNum != null) {
                const num = parseFloat(lastNum);
                setDisplayExpression(DisplayExpression + value);
                setExpression(expression.replace(lastNum, factorial(num)));
            }

        }
        else {
            setExpression(expression + value);
            setDisplayExpression(DisplayExpression + value);
        }

    }
    function factorial(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    function extractLastNum(exp) {
        const number = exp.match(/\d+/g);
        return number ? number[number.length - 1] : null;

    }


    return (
        <div className={`${DarkMode && "dark" } relative container flex flex-col items-center justify-center dark:bg-gray-800 dark:text-white  h-screen  `}>

            <button className=' absolute  top-4 ml-96 border-2 max-xl:ml-72 max-lg:ml-52 max-sm:ml-40 hover:font-extrabold font-bold py-2 px-4 rounded-full dark:bg-gray-800 dark:text-white' onClick={() => handleDarkMode()} >
                {

                    DarkMode && <IoSunny /> // render sunny when dark is true
                }
                {
                    !DarkMode && <IoMoon /> // render moon when dark is false
                }
                
            </button>

            <div className={` container absolute dark:text-white dark:border-white flex flex-col items-center justify-center bg-gray-200 w-1/3 max-sm:w-52 border-2 border-gray-800 p-2  top-16  dark:bg-gray-800`}>

                <h1 className="text-4xl max-sm:text-2xl max-sm:p-1 p-2">Calculator</h1>
                <Display DisplayExpression={DisplayExpression} result={result} />
                <Keys handlerButton={handlerButton} />
            </div>
        </div>
    )
}

export default Cal;