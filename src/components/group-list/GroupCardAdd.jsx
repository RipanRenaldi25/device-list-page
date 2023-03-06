import React from 'react'
import {FaPlus} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { closeGroupListModal, openGroupListModal } from '../../redux';
import GroupListModal from './GroupListModal';

function GroupCardAdd() {
  const groupListModalState = useSelector(state => state.groupListModal.isOpen);
  const dispatch = useDispatch();
  function closeModal () {
    dispatch(closeGroupListModal());
  }
  return (
    <div className="w-[150px] h-[150px] bg-[#C3C4C5] rounded-[10px] flex justify-center items-center flex-col cursor-pointer" onClick={() => dispatch(openGroupListModal())}>
        <div className="w-[45px] h-[45px] flex justify-center items-center bg-white rounded-md">
            <FaPlus className="text-[#c3c4c5] text-3xl"/>
        </div>
        <p className="text-white text-lg mt-2">Add New Group</p>
        {groupListModalState ? (<GroupListModal />) : null}
    </div>
  )
}

export default GroupCardAdd