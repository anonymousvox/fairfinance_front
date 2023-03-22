import Modal from 'react-responsive-modal'

const CustomModal = ({ isOpen, onClose, children }) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            center
            classNames={{ root: 'modal__wrapper modal__wrapper--small' }}
        >
            {children}
        </Modal>
    )
}

export default CustomModal