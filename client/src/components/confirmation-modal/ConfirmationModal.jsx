import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ConfirmationModal({
    onConfirm,
    onHide,
    title
}) {
    return (
        <div
            className="modal show"
            style={{ display: 'flex', margin: '3em auto' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{`Are you sure you want to delete ${title}?`}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Close</Button>
                    <Button variant="primary" onClick={onConfirm}>Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}
