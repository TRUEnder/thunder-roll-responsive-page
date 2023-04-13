function dropdown() {
    let navbarIcon = document.getElementById("navbar-icon");
    let navbar = document.getElementById("navbar");

    if (navbarIcon.className == "fa fa-bars") {
        navbarIcon.className = "fa fa-times";
        navbar.classList.add("navbar-mobile");
    }
    else if (navbarIcon.className == "fa fa-times") {
        closeDropdown();
    }
}

function closeDropdown() {
    let navbarIcon = document.getElementById("navbar-icon");
    let navbar = document.getElementById("navbar");

    navbarIcon.className = "fa fa-bars";
    navbar.classList.remove("navbar-mobile");
}

function selectNetwork() {
    let network = document.getElementById("network-selected");
    let address = document.getElementById("address");

    address.value = network.value;
}

function copyAddress() {
    let address = document.getElementById("address");

    address.select();
    address.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(address.value);

    alert("Copied the text: " + address.value);
}