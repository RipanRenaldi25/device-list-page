import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { changeSelect, closeModal, closeSelect } from '../redux';

function ModalBody({header}) {
    const selectState = useSelector(state => state.select);
    const modalState = useSelector(state => state.modal.isOpen);
    const dispatch = useDispatch();
    function closeAll () {
        dispatch(closeModal());
        dispatch(closeSelect());
    }


  return (
    <div className={modalState ? "modal-container flex flex-col w-[500px] justify-center mx-auto border rounded-lg shadow-lg overflow-hidden absolute transition-transform scale-100 z-10 left-1/2 -translate-x-1/2" : "scale-0 absolute"}>
        <div className="modal-header flex justify-between bg-[#3A9AF2] px-2 py-2 text-white items-center">
            <h2 className="font-bold text-[18px]">Add New Device</h2>
            <button className="px-1 bg-white text-[#3A9AF2] max-w-[18px] max-h-[18px] text-2xl flex justify-center items-center" onClick={()=>dispatch(closeAll())}>&times;</button>
        </div>
        <div className="modal-body p-4 bg-white">
                <div className="flex items-center mb-4 text-sm">
                    <span className="basis-44">Select Device</span>
                    <span>:</span>
                    <select className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] placeholder:text-slate-700">
                        <option>Select Device</option>
                        <option value="vtu">VTU</option>
                        <option value="radio">Radio</option>
                        <option value="vtu">VTU</option>
                        <option value="radio">Radio</option>
                    </select>
                </div>
                <div className={selectState ? "block" : "hidden"}>
                    <div className="flex items-center mb-4">
                        <span className="basis-44">Select Device</span>
                        <span>:</span>
                        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1"/>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="basis-44">SIP Number</span>
                        <span>:</span>
                        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1"/>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="basis-44">Device Name</span>
                        <span>:</span>
                        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1"/>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="basis-44">New IP Address</span>
                        <span>:</span>
                        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1"/>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="basis-44">PORT</span>
                        <span>:</span>
                        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1"/>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="basis-44">Device Serial Number</span>
                        <span>:</span>
                        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1"/>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="basis-44">ALIAS</span>
                        <span>:</span>
                        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1"/>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="basis-44">Device Type</span>
                        <span>:</span>
                        <select className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4]">
                            <option>Device Type</option>
                            <option value="ff">Full Function (FF)</option>
                            <option value="radio">Radio</option>
                        </select>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="basis-44">CODEC Type</span>
                        <span>:</span>
                        <select className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4]">
                            <option>Device Type</option>
                            <option value="ff">Full Function (FF)</option>
                            <option value="radio">Radio</option>
                        </select>
                    </div>
                </div>
                <div className="modal-footer flex items-center justify-end mr-5 mb-5 bg-white">
                    <div className="bg-[#FF5454] text-white rounded-lg w-[100px] mr-5 text-center">
                        <button className="px-7 py-1" onClick={()=>dispatch(closeAll())}>Cancel</button>
                    </div>
                    <div className="bg-[#63B6FF] text-white rounded-lg w-[100px] text-center">
                        <button className="px-7 py-1" onClick={selectState ? () => closeAll() : ()=>dispatch(changeSelect())}>{selectState ? "Submit" : "Next"}</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ModalBody