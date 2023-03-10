import React, { useState } from "react";

const FormVTU = () => {
  const [inputValue, setInputValue] = useState({});

  return (
    <form>
      <div className="flex items-center mb-4 text-sm">
        <span className="basis-44">SIP Number</span>
        <span>:</span>
        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" name="sip" />
      </div>
      <div className="flex items-center mb-4 text-sm">
        <span className="basis-44">Device Name</span>
        <span>:</span>
        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" name="device_name" />
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
    </form>
  );
};

export default FormVTU;
