import { useState } from "react";
import ModalFunc from "./ModalFunc";

function Photo ({imgSrc, photoId, content}) {
    const [isModalOpen, setModalOpen] = useState(false);

    const handlePhotoClick = () => {
        if(isModalOpen) {
            setModalOpen(false);
        } else {
            setModalOpen(true)
        }
    }

    
	const closeModal = () => {
		setModalOpen(false);
	}


    return (
        <div>

            <div className="photo" onClick={handlePhotoClick}>
                <img src={imgSrc}/>
            </div>
            
            <ModalFunc 
                isOpen={isModalOpen} 
                closeModal={closeModal}
                photoId={photoId}
                content={content}
                imgSrc={imgSrc}
            />
        </div>
    )
}

export default Photo;