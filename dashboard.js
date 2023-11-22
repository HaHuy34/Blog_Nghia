function showProfile() {
  document.getElementById("dashboardArea").style.display = "block";
  document.getElementById("favorite-th").style.display = "none";
  var sidebarItem = document.querySelector(".sidebar-item");
  sidebarItem.style.color = "#4f46e5";
  var bxUserIcon = document.querySelector(".bx-user");
  bxUserIcon.style.color = "#4f46e5";

  // Close style
  var sidebarItem = document.querySelector(".bgt");
  sidebarItem.style.color = "#000";
  var bxUserIcon = document.querySelector(".bx-heart");
  bxUserIcon.style.color = "#000";
}

function showFavorite() {
  document.getElementById("dashboardArea").style.display = "none";
  document.getElementById("favorite-th").style.display = "block";
  var sidebarItem = document.querySelector(".bgt");
  sidebarItem.style.color = "#4f46e5";
  var bxUserIcon = document.querySelector(".bx-heart");
  bxUserIcon.style.color = "#4f46e5";

  // Close style
  var sidebarItem = document.querySelector(".sidebar-item");
  sidebarItem.style.color = "#000";
  var bxUserIcon = document.querySelector(".bx-user");
  bxUserIcon.style.color = "#000";
}

// remove demo

function removeArticle(articleId) {
  var articleToRemove = document.getElementById(articleId);
  if (articleToRemove) {
    articleToRemove.remove();

    var tbody = document.querySelector("#favorite-th tbody");
    if (!tbody || !tbody.children.length) {
      document.getElementById("noArticlesMessage").style.display = "block";
    }
  }
}
