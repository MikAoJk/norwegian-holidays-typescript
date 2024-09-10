import React, {useEffect, useState} from 'react';

export interface DropDownProps {
    years: number[];
    showDropDown: boolean;
    toggleDropDown: Function;
    yearSelection: Function;
}

const DropDown = (dropDownProps: DropDownProps) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);


    const onClickHandler = (year: number): void => {
        dropDownProps.yearSelection(year);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <>
            <div className={showDropDown ? "" : "z-10 mt-2 rounded-md bg-blue-700 ring-1 ring-black ring-opacity-5"}>
                {dropDownProps.years
                    .map(year => {
                            return (
                                <p className="block px-4 py-2 text-sm hover:bg-blue-800 rounded-md text-gray-700 dark:text-gray-200"
                                   key={year}
                                   onClick={(): void => {
                                       onClickHandler(year);
                                   }}>
                                    {year}
                                </p>
                            );
                        }
                    )}
            </div>
        </>
    )
}

export default DropDown;
