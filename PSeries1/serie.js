document.querySelector(".item-season").classList.add("toggle-season-open"),document.querySelectorAll(".item-season").forEach((function(e){e.addEventListener("click",(function(){e.classList.contains("toggle-season-open")?e.classList.remove("toggle-season-open"):(document.querySelectorAll(".item-season").forEach((function(e){e.classList.remove("toggle-season-open")})),e.classList.add("toggle-season-open"))}))}));