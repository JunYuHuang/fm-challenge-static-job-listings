import React from "react";

interface RemoveFilterButtonProps {
    buttonText: string,
    removeJobFilter: (filter: string) => void
}

function RemoveFilterButton({ buttonText, removeJobFilter }: RemoveFilterButtonProps) {
    return (
        <div className="flex flex-row justify-start rounded-md">
            <div className="text-cyan font-bold text-xs bg-cyan-lightGrayishBackground leading-4 p-2 rounded-l-md">{buttonText}
            </div>
            <button onClick={() => removeJobFilter(buttonText)} className="duration-300 bg-cyan hover:bg-cyan-veryDarkGrayish p-2 rounded-r-md">
                <img src="./images/icon-remove.svg" alt="An icon of a cross or x." />
            </button>
        </div>
    );
};

export default RemoveFilterButton;