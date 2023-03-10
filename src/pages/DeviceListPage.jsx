import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/device-list/Table';
import Modal from '../components/device-list/Modal';
import { getAllDevices } from '../utils/utils';
import { fetchDevices, fetchDeviceSuccess, fetchDeviceFailed } from '../redux';

function DeviceListPage() {
  const deviceState = useSelector(state => state.device.deviceData);
  console.log(deviceState);
  const dispatch = useDispatch();
  const [tipe, setTipe] = useState('');
  function onChangeTipeHandler (tipe) {
    setTipe(tipe);
  }
  async function fetchDevice () {
    try{
      dispatch(fetchDevices());
      const response = await getAllDevices();
      dispatch(fetchDeviceSuccess(response));

    } catch (e) {
      dispatch(fetchDeviceFailed());
    }
  } 
  useEffect(() => {
    fetchDevice();
  }, [])
  return (
    <div>
      <Modal tipe={tipe} onTipeChange={onChangeTipeHandler} />
      <Table tipe={tipe} onTipeChange={onChangeTipeHandler} />
    </div>
  )
}

export default DeviceListPage;