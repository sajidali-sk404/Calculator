
const Display = (props) => {
    return (
        <div className="w-full h-24 max-sm:text-sm max-sm:h-16 border-2 border-gray-400 bg-gray-200 flex flex-col justify-center items-end p-4 text-2xl dark:bg-gray-800 dark:text-white">
             <p>{props.DisplayExpression}</p>
             <p>{props.result}</p>
        </div>
    )
}

export default Display;




