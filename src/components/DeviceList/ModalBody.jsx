import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { changeSelect, closeModal, closeSelect } from "../../redux";

function ModalBody({ tipe, onTipeChange }) {
  const [isEdit, setIsEdit] = useState(false);
  const [formValue, setFormValue] = useState([]);
  const selectState = useSelector((state) => state.select);
  const modalState = useSelector((state) => state.modal.isOpen);
  const dataState = useSelector((state) => state.data);
  const [filteredRow, setFilteredRow] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [port, setPort] = useState("");
  const [alias, setAlias] = useState("");
  const [deviceName, setDeviceName] = useState("");

  const dispatch = useDispatch();
  function closeAll() {
    dispatch(closeModal());
    dispatch(closeSelect());
    searchParams.delete('id');
    setSearchParams(searchParams);
  }
  function onEditHandlerModal() {
    dispatch(changeSelect());
    setIsEdit(true);
  }
  function onValueChange (e) {
    console.log(e.target.parentElement.id);
  }
  function onSubmitHandler () {

    closeAll();
  }
  useEffect(() => {
    let id = parseInt(searchParams.get("id"));
    if (id) {
      const dataFiltered = dataState.filter((row) => row.id === id);
      setFilteredRow(dataFiltered[0]);
      setPort(dataFiltered[0].port);
      setAlias(dataFiltered[0].alias);
      setDeviceName(dataFiltered[0].device_name);
    }
  }, [searchParams.get("id")]);
  return (
    <div className={modalState ? "modal-container flex flex-col w-[500px] justify-center mx-auto border rounded-lg shadow-lg overflow-hidden absolute transition-transform scale-100 z-10 left-1/2 -translate-x-1/2 top-10" : "scale-0 absolute"}>
      <div className="modal-header flex justify-between bg-[#3A9AF2] px-2 py-2 text-white items-center">
        <h2 className="font-bold text-[18px]">{tipe === "add" ? "Add New Device" : "Detail"}</h2>
        <button className="px-2 pb-1 bg-white text-[#3A9AF2] max-w-[18px] max-h-[18px] text-2xl flex justify-center items-center rounded" onClick={() => closeAll()}>
          &times;
        </button>
      </div>
      {tipe === "add" && (
        <div className="modal-body p-4 bg-white ">
          <div className="flex items-center mb-4 text-sm font-sans">
            <span className="basis-44">Select Device</span>
            <span>:</span>
            <select className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] placeholder:text-slate-700">
              <option>Select Device</option>
              <option value="vtu">VTU</option>
              <option value="radio">Radio</option>
              <option value="vtu">PABX</option>
              <option value="radio">IP Phone</option>
              <option value="radio">Preyen</option>
            </select>
          </div>
          <div hidden={!selectState}>
            <div className="flex items-center mb-4 text-sm" id="sipNumber">
              <span className="basis-44">SIP Number</span>
              <span>:</span>
              <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" onChange={onValueChange}/>
            </div>
            <div className="flex items-center mb-4 text-sm">
              <span className="basis-44">Device Name</span>
              <span>:</span>
              <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" />
            </div>
            <div className="flex items-center mb-4 text-sm">
              <span className="basis-44">New IP Address</span>
              <span>:</span>
              <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" />
            </div>
            <div className="flex items-center mb-4 text-sm">
              <span className="basis-44">PORT</span>
              <span>:</span>
              <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" />
            </div>
            <div className="flex items-center mb-4 text-sm">
              <span className="basis-44">Device Serial Number</span>
              <span>:</span>
              <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" />
            </div>
            <div className="flex items-center mb-4 text-sm">
              <span className="basis-44">ALIAS</span>
              <span>:</span>
              <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" />
            </div>
            <div className="flex items-center mb-4 text-sm">
              <span className="basis-44">Device Type</span>
              <span>:</span>
              <select className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4]">
                <option></option>
                <option value="ff">Full Function (FF)</option>
                <option value="radio">Low Function (LF)</option>
                <option value="radio">S Function (SF)</option>
              </select>
            </div>
            <div className="flex items-center mb-4 text-sm">
              <span className="basis-44">CODEC Type</span>
              <span>:</span>
              <select className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4]">
                <option></option>
                <option value="ff">Full Function (FF)</option>
                <option value="radio">G.711 - ulaw</option>
                <option value="radio">G.711 - alaw</option>
                <option value="radio">G.722</option>
                <option value="radio">G.723</option>
                <option value="radio">G.726</option>
                <option value="radio">GSM</option>
                <option value="radio">iLBC</option>
                <option value="radio">LPC10</option>
                <option value="radio">Speex</option>
              </select>
            </div>
          </div>
          <div className="modal-footer flex items-center justify-end mr-5 mb-5 bg-white">
            <div className="bg-[#FF5454] text-white rounded-lg w-[100px] mr-5 text-center">
              <button className="px-7 py-1" onClick={() => closeAll()}>
                Cancel
              </button>
            </div>
            <div className="bg-[#63B6FF] text-white rounded-lg w-[100px] text-center">
              <button className="px-7 py-1" onClick={selectState ? () => closeAll() : () => dispatch(changeSelect())}>
                {selectState ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      )}
      {tipe === "detail" && (
        <div className="modal-body p-4 bg-white">
          <div className="flex items-center mb-4 text-sm">
            <span className="basis-44">Select Device</span>
            <span>:</span>
            <select className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] placeholder:text-slate-700" value={deviceName} disabled>
              <option>Select Device</option>
              <option value="vtu">VTU</option>
              <option value="radio">Radio</option>
              <option value="vtu">VTU</option>
              <option value="radio">Radio</option>
              <option value="1">Test</option>
            </select>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <span className="basis-44">SIP Number</span>
              <span>:</span>
              <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" disabled />
            </div>

            <div className="flex items-center mb-4">
              <span className="basis-44">IP Address</span>
              <span>:</span>
              <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" disabled />
            </div>
            <div className="flex items-center mb-4">
              <span className="basis-44">PORT</span>
              <span>:</span>
              <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" value={port} disabled={!isEdit} onChange={(e) => setPort(e.target.value)} />
            </div>
            <div className="flex items-center mb-4">
              <span className="basis-44">Device Serial Number</span>
              <span>:</span>
              <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" disabled />
            </div>
            <div className="flex items-center mb-4">
              <span className="basis-44">Alias</span>
              <span>:</span>
              <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" value={alias} disabled={!isEdit} onChange={(e) => setAlias(e.target.value)} />
            </div>
            <div className="flex items-center mb-4">
              <span className="basis-44">Device Type</span>
              <span>:</span>
              <select className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4]" disabled>
                <option>Device Type</option>
                <option value="ff">Full Function (FF)</option>
                <option value="radio">Radio</option>
              </select>
            </div>
            <div className="flex items-center mb-4">
              <span className="basis-44">CODEC Type</span>
              <span>:</span>
              <select className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4]" disabled>
                <option>Device Type</option>
                <option value="ff">Full Function (FF)</option>
                <option value="radio">Radio</option>
              </select>
            </div>
            <div>
              <div className="text-sm font-bold">
                <span className="">Log</span>
              </div>
              <div className="flex items-center mb-4 text-sm">
                <div className="flex-grow border-t-2  border-black"></div>
                <span class="flex-shrink mx-4 text-white">......</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="basis-44">Temperature</span>
                <span>:</span>
                <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" disabled />
              </div>
              <div className="flex items-center mb-4">
                <span className="basis-44">CPU Usage</span>
                <span>:</span>
                <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" disabled />
              </div>
              <div className="flex items-center mb-4">
                <span className="basis-44">Memory Usage</span>
                <span>:</span>
                <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" disabled />
              </div>
              <div className="modal-footer pb-1items-center justify-start mr-5 mb-5 bg-white text-xs font-semibold">
                <div className=" mb-4 bg-white text-black rounded-lg border-2 border-black w-[100px] mr-5 text-center ">
                  <button className="px-auto py-1">Reboot</button>
                </div>
                <div className=" bg-white text-black rounded-lg border-2 border-black w-[100px] flex justify-center items-center">
                  <button className="px-auto py-1">Factory Reset</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer flex items-center justify-end mr-5 mb-5 bg-white">
            <div className="bg-[#FF5454] text-white rounded-lg w-[100px] mr-5 text-center">
              <button className="px-7 py-1" onClick={() => closeAll()}>
                Cancel
              </button>
            </div>
            <div className="bg-[#63B6FF] text-white rounded-lg w-[100px] flex justify-center items-center">
              <button className="px-7 py-1" onClick={selectState ? () => closeAll() : () => onEditHandlerModal()}>
                {selectState ? "Save" : "Change"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalBody;
