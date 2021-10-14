let navbar = document.querySelector(".bar1-menu")
document.querySelector("#search3").onclick = () => {
    navbar.classList.toggle("active")
    Search.classList.remove("active2")
    Product.classList.remove("active3")
}
let Search = document.querySelector(".search-bar")
document.querySelector("#search1").onclick = () => {
    Search.classList.toggle("active2")
    Product.classList.remove("active3")
    navbar.classList.remove("active")
}
let Product = document.querySelector(".bar2-menu")
document.querySelector("#search2").onclick = () => {
    Product.classList.toggle("active3")
    navbar.classList.remove("active")
    Search.classList.remove("active2")
}
window.onscroll = () => {
    navbar.classList.remove("active")
    Search.classList.remove("active2")
    Product.classList.remove("active3")

}