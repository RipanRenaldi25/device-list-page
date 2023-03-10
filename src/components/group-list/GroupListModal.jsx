import React, {useState} from 'react'

function GroupListModal({close}) {
    const [paritisipan, setPartisipan] = useState(['']);
  return (
    <>
    <div className="overlay bg-[#D4D4D480] fixed top-0 bottom-0 right-0 left-0 overflow-hidden"></div>
    <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-white rounded-t-lg overflow-hidden">        
        <article className="modal-container w-[500px] h-[350px] z-10">
            <header className="bg-[#3A9AF2] w-full px-4 py-4 flex justify-between text-white">
                <h2 className="text-lg">Add New Group</h2>
                <div className="w-6 h-6 bg-white text-[#3A9AF2] text-md flex justify-center items-center relative font-bold">
                    <span>X</span>
                </div>
            </header>
            <main className="bg-white py-5 px-7">
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
                    <div className="flex items-center mb-3">
                        <span className="basis-[147px]">Select Participant</span>
                        <span>:</span>
                        <select className="border border-[#D4D4D4] rounded-[5px] px-[10px] py-[6px] text-md placeholder:text-center ml-5 w-[200px]">
                            <option value={"active"}>Active</option>
                            <option value={"nonActive"}>Non Active</option>
                        </select>
                    </div>
                    <div className="flex items-center mb-3">
                        <span className="basis-[152px]"></span>
                        <select className="border border-[#D4D4D4] rounded-[5px] px-[10px] py-[6px] text-md placeholder:text-center ml-5 w-[200px]">
                            <option value={"active"}>Active</option>
                            <option value={"nonActive"}>Non Active</option>
                        </select>
                    </div>
                </div>
            </main>
        </article>
    </div>
    </>
  )
}

export default GroupListModal