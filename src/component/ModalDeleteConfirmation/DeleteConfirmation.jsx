import { Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import ButtonNo from "../ButtonNo/ButtonNo";
import ButtonYes from "../ButtonYes/ButtonYes";

function DeleteConfirmation(props) {
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
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-400 dark:text-red-200" />
        <h3 className="mb-5 text-lg font-normal text-black-500 dark:text-black-400">
          Are you sure ?
        </h3>
        <p className="text-gray-400 dark:text-gray-300">{props.message}</p>
        <br />
        <div className="flex justify-center gap-4">
          <ButtonNo
            onClick={props.onHide}
            btnName='Cancel'
          />
          <ButtonYes
            onClick={props.onClick}
            btnName='Yes, delete it!'
          />
        </div>
      </div>
    </Modal.Body>
  </Modal>
  );
}

export default DeleteConfirmation;