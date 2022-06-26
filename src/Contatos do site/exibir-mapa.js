window.onload = () => {
    exibirMapaLocalizacao();
}

const exibirMapaLocalizacao = () => {

  // Av. Paulista
  const latitudeLongitude = [-23.55729, -46.66131];

  // Exibir mapa usando a biblioteca Leaflet e consumindo API OpenStreetMap

  const configuracoesIniciaisMapa = {
    // Center: longitude e latitude
    center: latitudeLongitude,
    zoom: 100
  }

  // Método map recebe como 1o argumento o nome do id onde será exibido o mapa #mapa
  let mapa = new L.map('mapa', configuracoesIniciaisMapa);
  
  let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  mapa.addLayer(layer);
  
  let marcadorMapa = new L.Marker(latitudeLongitude);
  marcadorMapa.addTo(mapa);
}