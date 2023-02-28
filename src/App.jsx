import { useState } from 'react';
import './index.css';
import ButtonYes from './component/ButtonYes/ButtonYes';
import ButtonNo from './component/ButtonNo/ButtonNo';
import DeleteConfirmation from './component/ModalDeleteConfirmation/DeleteConfirmation';
import ModalSuccess from './component/ModalSuccess/ModalSuccess';

function App() {

  /** How to Use Modal */
  const [modalShow, setModalShow] = useState();
  const [modalDel, setModalDel] = useState();

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <br></br>
      <ButtonYes btnName="Open Modal Oke" onClick={() => setModalShow(true)}/>
      <br></br>
      <br></br>
      <ButtonNo btnName="Open Delete" onClick={() => setModalDel(true)}/>

      <DeleteConfirmation
        show={modalDel}
        message={'You will not able to recover this device!'}
        onHide={() => setModalDel(false)}
      />
      <ModalSuccess
        show={modalShow}
        message={'Create Device Successfully.'}
        onHide={() => setModalShow(false)}
      />
    </>

  );
}

export default App;
