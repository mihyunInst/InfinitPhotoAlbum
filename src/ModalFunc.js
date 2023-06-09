// 불러오기
import Modal from 'react-modal';

function ModalFunc({isOpen, closeModal, photoId, content, imgSrc}) {

	const modalStyle = {
		overlay: {
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "rgba(255, 255, 255, 0.45)",
			zIndex: 10,
		},
		content: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			background: "#1c1b1e",
			color: "#fff",
			overflowY: "auto",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			width: "50%",
			minHeight: 500,
			WebkitOverflowScrolling: "touch",
			borderRadius: "14px",
			outline: "none",
			zIndex: 10,
		},
	};

	// 사용법
	return (
		<>
			<Modal 
				isOpen={isOpen}
				style={modalStyle}
				onRequestClose={closeModal}
				ariaHideApp={false}
			>
				<img src={imgSrc} id={photoId} className='modalImg'/>
				<p>{content}</p>
			</Modal>
		</>
	)	
}

export default ModalFunc;