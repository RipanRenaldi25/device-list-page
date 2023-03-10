import React, { useState } from "react";

const FormRadio = () => {
  const [inputValue, setInputValue] = useState({});
  function onChangeInputHandler({ target }) {
    const { name, value } = target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
    console.log(inputValue);
  }
  return (
    <div>
      <div className="flex items-center mb-4 text-sm">
        <span className="basis-44">SIP Number</span>
        <span>:</span>
        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" onChange={onChangeInputHandler} name="sip" />
      </div>
      <div className="flex items-center mb-4 text-sm">
        <span className="basis-44">Device Name</span>
        <span>:</span>
        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" onChange={onChangeInputHandler} name="device" />
      </div>
      <div className="flex items-center mb-4 text-sm">
        <span className="basis-44">ALIAS</span>
        <span>:</span>
        <input className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4] px-2 py-1" onChange={onChangeInputHandler} name="alias" />
      </div>
      <div className="flex items-center mb-4 text-sm">
        <span className="basis-44">Device Type</span>
        <span>:</span>
        <select className="w-[220px] ml-[18px] border-2 p-1.5 rounded-md border=[#D4D4D4]" onChange={onChangeInputHandler} name="type">
          <option></option>
          <option value="ff">Full Function (FF)</option>
          <option value="radio">Low Function (LF)</option>
          <option value="radio">S Function (SF)</option>
        </select>
      </div>
    </div>
  );
};

export default FormRadio;
