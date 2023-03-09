import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { closeGroupListModal } from '../../redux';
import Partisipant from './Partisipant';

function GroupListModal({close, isOpen}) {
    const [partisipan, setPartisipan] = useState(['']);
    function onAddPartisipanHandler (test) {
        setPartisipan(prevState => {
            return [...prevState, test];
        })
    }
  return (
    <>
    <div className={isOpen ? "overlay bg-[#D4D4D480] absolute top-0 bottom-0 right-0 left-0 overflow-hidden -z-10 cursor-pointer" : "hidden"} onClick={() => close()}></div>
    <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-white rounded-t-lg overflow-hidden z-20">        
        <article className="modal-container min-w-[500px] min-h[350px] z-10">
            <header className="bg-[#3A9AF2] w-full px-4 py-4 flex justify-between text-white">
                <h2 className="text-lg">Add New Group</h2>
                <div className="w-6 h-6 bg-white text-[#3A9AF2] text-md flex justify-center items-center relative font-bold cursor-pointer" onClick={() => close()}>
                    <span>X</span>
                </div>
            </header>
            <main className="bg-white py-5 px-7 z-10">
                <div className="container">
                    <div className="flex items-center mb-3">
                        <span className="basis-[147px]">SIP Number</span>
                        <span>:</span>
                        <input type="text" className="border border-[#D4D4D4] rounded-[5px] px-[10px] py-[6px] text-md placeholder:text-center ml-5 w-[200px]"/>
                    </div>
                    <div className="flex items-center mb-3">
                        <span className="basis-[147px]">Group Name</span>
                        <span>:</span>
                        <input type="text" className="border border-[#D4D4D4] rounded-[5px] px-[10px] py-[6px] text-md placeholder:text-center ml-5 w-[200px]"/>
                    </div>
                    <div className="flex items-center mb-3">
                        <span className="basis-[147px]">Status Group</span>
                        <span>:</span>
                        <select className="border border-[#D4D4D4] rounded-[5px] px-[10px] py-[6px] text-md placeholder:text-center ml-5 w-[200px]">
                            <option value={"active"}>Active</option>
                            <option value={"nonActive"}>Non Active</option>
                        </select>
                        <div className="w-[20px] h-[20px] bg-[#17A54F] ml-5 rounded-full"></div>
                    </div>
                    <Partisipant partisipan={partisipan} />
                    <div className="flex items-center mb-3">
                        <span className="basis-[152px]"></span>
                        <div className="hover:bg-slate-50 border border-[#D4D4D4] rounded-[5px] px-[10px] py-[6px] text-md placeholder:text-center ml-5 min-w-[160px]">
                            <button type="button" onClick={() => onAddPartisipanHandler('test') }><span className="text-[#2D5BFF] font-semibold text-sm">Add Another Partisipant</span></button>
                        </div>
                    </div>
                    <div className="action flex justify-end space-between items-center text-white mt-6">
                        <div className="mr-7 bg-[#FF5454] px-[32px] py-[7px] rounded-[10px] cursor-pointer"  onClick={() => close()}>
                            <button type="button">Cancel</button>
                        </div>
                        <div className="bg-[#63B6FF] px-[32px] py-[7px] rounded-[10px] cursor-pointer"  onClick={() => close()}>
                            <button type="button">Submit</button>
                        </div>
                    </div>
                </div>
            </main>
        </article>
    </div>
    </>
  )
}

export default GroupListModal