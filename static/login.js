    function login(){
    var agecheck = Number(document.getElementById("age").value);
    if (agecheck >= 12) {
    window.location.pathname="gofish_page2.html"
    }
}