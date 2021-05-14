interface AddFilterButtonProps {
    buttonText: string,
    addJobFilter: (filter: string) => void
}

function AddFilterButton({ buttonText, addJobFilter } : AddFilterButtonProps) {

    return (
        <button onClick={() => addJobFilter(buttonText)} className="text-cyan font-bold text-xs bg-cyan-lightGrayishBackground rounded-md p-2 mt-4 mr-4 leading-4 duration-300 hover:bg-cyan hover:text-white xl:mt-0 xl:h-8">{buttonText}</button>
    );
};

export default AddFilterButton;