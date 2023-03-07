import React, {useState} from 'react'
import Table from '../components/device-list/Table';
import Modal from '../components/device-list/Modal';

function DeviceListPage() {
  const [tipe, setTipe] = useState('');
  function onChangeTipeHandler (tipe) {
    setTipe(tipe);
  }
  console.log(tipe)
  return (
    <div>
      <Modal tipe={tipe} onTipeChange={onChangeTipeHandler} />
      <Table tipe={tipe} onTipeChange={onChangeTipeHandler} />
    </div>
  )
}

export default DeviceListPage;