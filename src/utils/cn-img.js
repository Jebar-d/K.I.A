let originalImageSrc = '';

export function changeImage(imageId, newSrc) {
  const imageElement = document.getElementById(imageId);
  if (imageElement) {
    if (!originalImageSrc) {
      // Store the original image source the first time
      originalImageSrc = imageElement.getAttribute('src');
    }
    // Toggle between the new image and the original image
    const currentSrc = imageElement.getAttribute('src');
    imageElement.setAttribute('src', currentSrc === newSrc ? originalImageSrc : newSrc);
  }
}