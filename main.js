// // Danh sách các liên kết ảnh
// var imageLinks = [
//   "https://1.bp.blogspot.com/-W4QDVTougyE/Xr_N8wV-oYI/AAAAAAAAbT8/k239yXOFZO4E4dXkyw39B7AH0tVSqUu2wCLcBGAsYHQ/s1600/26120a8096e556cdecb60f59cbc4ae9f_mp4.gif",
//   "https://i.makeagif.com/media/12-29-2016/OGSfFD.gif",
// ];

// var imgElement = document.getElementById("changingImage");
// var currentImageIndex = 0;

// // Hàm thay đổi liên kết ảnh
// function changeImage() {
//   imgElement.src = imageLinks[currentImageIndex];
//   currentImageIndex = (currentImageIndex + 1) % imageLinks.length;
// }

// // Đặt thời gian thay đổi liên kết ảnh sau mỗi 3 giây
// setInterval(changeImage, 2000);


$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});


var closeButton1 = document.getElementById("closeAds1");
var closeButton2 = document.getElementById("closeAds2");
var closeButton3 = document.getElementById("closeAds3");

var imgElement1 = document.querySelector(".advertisement01");
var imgElement2 = document.querySelector(".advertisement02");
var imgElement3 = document.querySelector(".gif-qc");

closeButton1.addEventListener("click", function  () {
  imgElement1.style.display = "none";
});

closeButton2.addEventListener("click", function () {
  imgElement2.style.display = "none";
});

closeButton3.addEventListener("click", function () {
  imgElement3.style.display = "none";
});




// Làm ẩn hiện Ads

// Làm ẩn hiện Ads
// document.addEventListener("DOMContentLoaded", function () {
//   const gifQC = document.querySelector(".gif-qc");
//   const adsMain01 = document.querySelector(".advertisement01");
//   const adsMain02 = document.querySelector(".advertisement02");
//   const footer = document.querySelector(".footer");
//   const footerTop = footer.offsetTop;
//   let isFixed = true;

//   const lastNewParent = document.querySelector(".lastest-new-parent-1");

//   window.addEventListener("scroll", function () {
//     var scrollDistance = window.scrollY;
//     var distanceToFooter = footerTop - scrollDistance;
//     var scrollThreshold = 500;
// var scrollAbs = 700;
//     if (
//       distanceToFooter <= scrollThreshold &&
//       distanceToFooter <= scrollAbs &&
//       isFixed
//     ) {
//       gifQC.style.position = "absolute";
//       gifQC.style.transform = "translateY(" + -distanceToFooter + "px)";
//       adsMain01.style.position = "absolute";
//       adsMain01.style.transform = "translateY(" + -distanceToFooter + "px)";
//       adsMain02.style.position = "absolute";
//       adsMain02.style.transform = "translateY(" + -distanceToFooter + "px)";
//       isFixed = false;
//     } else if (
//       distanceToFooter > scrollThreshold &&
//       distanceToFooter > scrollAbs && !isFixed
//     ) {
//       gifQC.style.position = "fixed";
//       gifQC.style.transform = "translateY(0)";
//       adsMain01.style.position = "fixed";
//       adsMain01.style.transform = "translateY(0)";
//       adsMain02.style.position = "fixed";
//       adsMain02.style.transform = "translateY(0)";
//       isFixed = true;

document.addEventListener("DOMContentLoaded", function () {
  const gifQC = document.querySelector(".gif-qc");
  const adsMain01 = document.querySelector(".advertisement01");
  const adsMain02 = document.querySelector(".advertisement02");
  const footer = document.querySelector(".footer");
  const footerTop = footer.offsetTop;
  let isFixed = true;

  const lastNewParent = document.querySelector(".lastest-new-parent-1");

  window.addEventListener("scroll", function () {
    var scrollDistance = window.scrollY;
    var distanceToFooter = footerTop - scrollDistance;
    var scrollThreshold = 500;
var scrollAbs = 700;
    if (
      distanceToFooter <= scrollThreshold &&
      distanceToFooter <= scrollAbs &&
      isFixed
    ) {
      gifQC.style.position = "absolute";
      gifQC.style.transform = "translateY(" + -distanceToFooter + "px)";
      adsMain01.style.position = "absolute";
      adsMain01.style.transform = "translateY(" + -distanceToFooter + "px)";
      adsMain02.style.position = "absolute";
      adsMain02.style.transform = "translateY(" + -distanceToFooter + "px)";
      isFixed = false;
    } else if (
      distanceToFooter > scrollThreshold &&
      distanceToFooter > scrollAbs &&
      !isFixed
    ) {
      gifQC.style.position = "fixed";
      gifQC.style.transform = "translateY(0)";
      adsMain01.style.position = "fixed";
      adsMain01.style.transform = "translateY(0)";
      adsMain02.style.position = "fixed";
      adsMain02.style.transform = "translateY(0)";
      isFixed = true;
    }
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   var scrollDiv = document.getElementById("scrollDiv");
//   const lastNewParent = document.querySelector(".lastest-new-parent-1");
//   window.addEventListener("scroll", function() {
//     var scrollPosition = window.scrollY;

//     // Kiểm tra nếu scroll đến 200px thì ẩn div
//     if (scrollPosition >= 200) {
//       lastNewParent.style.display = "none";
//     } else {
//       lastNewParent.style.display = "block";

//     }
//   });
// });

//  var lastestNewParent = document.querySelector(".lastest-new-parent-1");

//  // Thêm sự kiện lắng nghe cuộn
//  window.addEventListener("scroll", function () {
//    // Kiểm tra vị trí cuộn
//    if (window.scrollY >= 300) {
//      // Nếu đã cuộn qua 300px, thêm lớp 'fixed'
//      lastestNewParent.classList.add("fixed");
//    } else {
//      // Nếu chưa cuộn qua 300px, xóa lớp 'fixed'
//      lastestNewParent.classList.remove("fixed");
//    }
//  });



