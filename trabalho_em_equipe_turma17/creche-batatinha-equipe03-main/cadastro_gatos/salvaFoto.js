document.addEventListener('DOMContentLoaded', function() {
  const inputFile = document.getElementById('input-file');
  const previewImage = document.getElementById('preview-image');

  inputFile.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', function() {
        previewImage.src = reader.result;
        localStorage.setItem('previewImage', reader.result);
      });

      reader.readAsDataURL(file);
    }
  });

  const cachedImage = localStorage.getItem('previewImage');

  if (cachedImage) {
    previewImage.src = cachedImage;
  }
});