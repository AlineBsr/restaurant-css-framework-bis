// Initialize and add the map
function initMap() {
    // The location of Uluru
    const Bxl = {
        lat: 50.8470263,
        lng: 4.3496025
    }

    const Prs = {
        lat: 48.8729602,
        lng: 2.2956639
    }

    const NYC = {
        lat: 40.7951268,
        lng: -73.952461
    }

    const HgK = {
        lat: 22.304038,
        lng: 114.1608281
    }

    // The map, centered
    const mapBxl = new google.maps.Map(document.getElementById("mapBxl"), {
        zoom: 15,
        center: Bxl,
    });
    const mapPrs = new google.maps.Map(document.getElementById("mapPrs"), {
        zoom: 15,
        center: Prs,
    });

    const mapNYC = new google.maps.Map(document.getElementById("mapNYC"), {
        zoom: 15,
        center: NYC,
    });

    const mapHgK = new google.maps.Map(document.getElementById("mapHgK"), {
        zoom: 15,
        center: HgK,
    });

    // The marker, positioned
    const markerBxl = new google.maps.Marker({
        position: Bxl,
        map: mapBxl
    });

    const markerPrs = new google.maps.Marker({
        position: Prs,
        map: mapPrs
    });

    const markerNYC = new google.maps.Marker({
        position: NYC,
        map: mapNYC
    });

    const markerHgK = new google.maps.Marker({
        position: HgK,
        map: mapHgK
    });

}