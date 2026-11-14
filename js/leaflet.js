    console.log("nieuwe versie");
    document.addEventListener("DOMContentLoaded", () => {
        const map = L.map('map').setView([51.23008, 4.41418], 17);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap'
        }).addTo(map);

        const logo = L.icon({
            iconUrl: './Images/logo.png',
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [0, -20]
        });

        L.marker([51.23025904152138, 4.4143153807602165], { icon: logo })
            .addTo(map)
            .bindPopup("Project");

        L.marker([51.22990326889215, 4.414045564893307], { icon: logo })
            .addTo(map)
            .bindPopup("Project");
    });