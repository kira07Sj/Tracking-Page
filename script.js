document.getElementById("Recipient").addEventListener("click", function() {
    document.getElementsByClassName("shipment-details")[0].style.display = "none";
    document.getElementsByClassName("shipment-details-2")[0].style.display = "flex";
    
});
document.getElementById("sender").addEventListener("click", function() {
    document.getElementsByClassName("shipment-details")[0].style.display = "flex";
    document.getElementsByClassName("shipment-details-2")[0].style.display = "none";
    
});

