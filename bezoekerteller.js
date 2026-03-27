let count = localStorage.getItem("visitorCount") ? parseInt(localStorage.getItem("visitorCount")) : 0;
count++;
localStorage.setItem("visitorCount", count.toString());
document.getElementById("visitorCount").innerText = count;
