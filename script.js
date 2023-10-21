var arr = [
    {
        dp: "https://images.pexels.com/photos/1839963/pexels-photo-1839963.jpeg?cs=srgb&dl=pexels-abir-hasan-1839963.jpg&fm=jpg", story: "https://i.pinimg.com/1200x/f0/bc/0b/f0bc0b17dc1a40361e86030011e69d25.jpg",
    },
    {
        dp: "https://media.macphun.com/img/uploads/customer/blog/1541696788/15416985375be473e9a548d0.26570810.jpg?q=85&w=1680", story: "https://i.pinimg.com/564x/2e/d9/68/2ed968ad2f9bf3c2cfab004258f3a290.jpg",
    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1belAH1baYecXtVtCQ69_jLtvoQTSzMHvAQ&usqp=CAU", story: "https://www.lightstalking.com/wp-content/uploads/Photo-by-Ionut-Comanici-1024x1536.jpg",
    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBj2NjAyXZ00aB9FSFZyQdUNWNoEc5zR2nWwQaxZbQaNIXfOn9HIi0GRVyJq1DrB7QSg&usqp=CAU", story: "https://i.pinimg.com/736x/6c/d7/0f/6cd70f515cad936c37a234460b8b45c1.jpg",
    }
]
var storiyan = document.querySelector("#storiyan")

var clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`;
})
storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function () {
        document.querySelector("#full-screen").style.display = "none"
    }, 3000)

});
var con = document.querySelector("#container")
var love = document.querySelector("#icon")
var like = document.querySelector("#like")
var comment = document.querySelector("#comment")
var send = document.querySelector("#send")
var check = 0;

con.addEventListener("dblclick", function () {

    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = 0.8;
    setTimeout(function () { love.style.opacity = 0; }, 1000)
    setTimeout(function () {
        love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000)
})
con.addEventListener("dblclick", function () {
    if (check == 0) {
        like.style.color = "red";
        check = 1;
    } else {
        like.style.color = "transparent";
        check = 0;
    }
})
comment.addEventListener("click", function () {
    alert("this function is not enabled yet")
})
send.addEventListener("click", function () {
    alert("this function is not enabled yet")
})