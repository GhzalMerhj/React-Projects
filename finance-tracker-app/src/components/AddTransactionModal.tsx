import { Button, Modal } from "react-bootstrap";

interface AddTransactionModalProps {
       show: boolean,
       onHide: ()=> void
}

const AddTransactionModal:React.FC<AddTransactionModalProps> = ({show , onHide}: AddTransactionModalProps) =>{

    return (
        <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
export default AddTransactionModal;