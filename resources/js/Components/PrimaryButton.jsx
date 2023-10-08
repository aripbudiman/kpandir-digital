export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-3 bg-kuning border border-transparent rounded-md font-semibold  text-white uppercase tracking-widest hover:bg-kuning/90 focus:bg-kuning active:bg-kuning focus:outline-none focus:ring-2 justify-center  jusfocus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
