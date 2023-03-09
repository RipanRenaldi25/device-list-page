import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

function Partisipant({partisipan}) {
    
    return partisipan.length && partisipan.map((singlePartisipan, i) => {
        if(i === 0){
            return (
            <div className="flex items-center mb-3" key={singlePartisipan}>
                <span className="basis-[147px]">Select Participant</span>
                <span>:</span>
                <select className="mr-[22px] border border-[#D4D4D4] rounded-[5px] px-[10px] py-[6px] text-md placeholder:text-center ml-5 w-[200px]">
                    <option value={"active"}>Active</option>
                    <option value={"nonActive"}>Non Active</option>
                </select>
                <div className="text-xl cursor-pointer"><FaTrashAlt /></div>
            </div>
            )
        }
        return (
            (
                <div className="flex items-center mb-3" key={singlePartisipan}>
                        <span className="basis-[150px]"></span>
                        <select className="mr-[22px] border border-[#D4D4D4] rounded-[5px] px-[10px] py-[6px] text-md placeholder:text-center ml-5 w-[200px]">
                            <option value={"active"}>Active</option>
                            <option value={"nonActive"}>Non Active</option>
                        </select>
                        <div className="text-xl"><FaTrashAlt /></div>
                    </div>
            )
        )
    })
}

export default Partisipant;