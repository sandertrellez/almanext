const Button = ({text, event}) => {
    return (
    <>
        <button type="button" onClick={event} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            {text}
        </button>
    </>);
}

export default Button;