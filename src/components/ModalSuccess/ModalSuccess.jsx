import { Modal } from "flowbite-react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import ButtonYes from "../ButtonYes/ButtonYes";

function ModalSuccess(props) {
  return (
    <Modal
    show={props.show}
    size="md"
    popup={true}
    onClose={props.onHide}
  >
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        <HiOutlineCheckCircle className="mx-auto mb-4 h-14 w-14 text-green-400 dark:text-green-200" />
        <h3 className="mb-5 text-lg font-normal text-black-500 dark:text-black-400">
          Successfull!
        </h3>
        <p className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{props.message}</p>
        <br />
        <div className="flex justify-center gap-4">
          <ButtonYes
            onClick={props.onHide}
            btnName='OK'
          />
        </div>
      </div>
    </Modal.Body>
  </Modal>
  );
}

export default ModalSuccess;