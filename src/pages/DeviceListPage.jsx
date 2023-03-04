import React, {useState} from 'react'
import Modal from '../components/Modal';
import Table from '../components/Table';

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