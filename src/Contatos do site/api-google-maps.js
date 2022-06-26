window.onload = () => {
    criarMapaGoogleMaps();
}

const criarMapaGoogleMaps = () => {
    let coordenadas = { lat: -22.912869, lng: -43.228963 };
    
    let sectionGoogleMaps = document.querySelector("#google-maps");

    let mapa = new google.maps.Map(sectionGoogleMaps, {
      zoom: 15,
      center: coordenadas 
    });

    let marcadorMapa = new google.maps.Marker({
      position: coordenadas,
      map: mapa,
      title: 'Marcador'
    });
}