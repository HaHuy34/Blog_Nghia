// Danh sách các liên kết ảnh
var imageLinks = [
  "https://1.bp.blogspot.com/-W4QDVTougyE/Xr_N8wV-oYI/AAAAAAAAbT8/k239yXOFZO4E4dXkyw39B7AH0tVSqUu2wCLcBGAsYHQ/s1600/26120a8096e556cdecb60f59cbc4ae9f_mp4.gif",
  "https://i.makeagif.com/media/12-29-2016/OGSfFD.gif",
];

var imgElement = document.getElementById("changingImage");
var currentImageIndex = 0;

// Hàm thay đổi liên kết ảnh
function changeImage() {
  imgElement.src = imageLinks[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % imageLinks.length;
}

// Đặt thời gian thay đổi liên kết ảnh sau mỗi 3 giây
setInterval(changeImage, 2000);