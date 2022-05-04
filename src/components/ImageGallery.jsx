import React from "react";
import ImageGallery from "react-image-gallery";
import "../App.css";

const Galleries = ({ images }) => {
	const photos = images.map((image) => {
		return {
			original: image.res,
			thumbnail: image.res,
		};
	});

	return (
		<div>
			<ImageGallery items={photos} thumbnailHeight={50} />
		</div>
	);
};

export default Galleries;
