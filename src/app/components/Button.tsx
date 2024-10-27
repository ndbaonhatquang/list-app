import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: () => void;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({onClick, children, ...rest}) => {
    return (
        <button
            onClick={onClick}
            className="ml-auto block my-4 py-2 px-4 border-none rounded-lg bg-gray-200 shadow transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer w-32"
            {...rest}
        >
            {children}
        </button>
    );
};
