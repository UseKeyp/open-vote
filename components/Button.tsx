interface ButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string
}

const Button: React.FC<ButtonProps> = ({children, type, onClick, className}) => {
    return (
        <button type={type} 
            className={`${className} py-[13.5px] px-[16px] border border-[#DCDEE0] rounded-sm text-[#80858E] font-bold hover:text-white hover:bg-[#77C118]`} onClick={onClick}>{children}</button>
    )
}

export default Button