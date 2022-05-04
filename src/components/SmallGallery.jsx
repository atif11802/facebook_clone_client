import {
	Modal,
	ModalOverlay,
	ModalContent,
	useDisclosure,
	Text,
	Image,
	ModalCloseButton,
	ModalBody,
	ModalHeader,
} from "@chakra-ui/react";
import React from "react";

const SmallGallery = ({ image }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<img
				onClick={onOpen}
				src={image.res}
				alt='small image'
				style={{
					width: "100px",
					height: "100px",
					borderRadius: "10px",
					margin: "5px",
					cursor: "pointer",
				}}
			/>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalCloseButton />

				<ModalContent>
					<ModalHeader>Big Image</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Image
							height='50%'
							objectFit='cover'
							src={image.res}
							alt='big image'
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SmallGallery;
