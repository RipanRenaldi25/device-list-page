import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {FaPlus, FaTrashAlt} from 'react-icons/fa';
import ModalBody from './ModalBody';
import { openModal, closeModal } from '../../redux';


function Modal({tipe, onTipeChange}) {
  const modalState = useSelector(state => state.modal.isOpen);
  const dispatch = useDispatch();

  function onAddEventHandler () {
    dispatch(openModal());
    onTipeChange("add");
  }

  return (
    <div className="pt-4 pl-[9px]">
        <div className="flex mb-2 p-2">
            <div className="flex items-center mr-7 cursor-pointer" onClick={() => onAddEventHandler()}>
                <button className="border p-1 text-md mr-[9px] bg-black text-white rounded-[5px]" >
                    <FaPlus />
                </button>
                <span className="text-[14px]">Add new device</span>
            </div>
            <div className="flex items-center cursor-pointer">
                <button className="p-1 text-xl rounded-[5px] mr-[9px]" >
                    <FaTrashAlt />
                </button>
                <span className="text-[14px]">Delete</span>
            </div>
        </div>
        <div className={modalState ? "fixed top-0 bottom-0 left-0 right-0 bg-slate-700 bg-opacity-20 cursor-pointer" : "none"} onClick={() => dispatch(closeModal())}></div>
        <ModalBody hidden tipe={tipe}/>

    </div>
  )
}

export default Modal