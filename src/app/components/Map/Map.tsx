"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

const MapLeaflet = dynamic(
  async () => {
    const L = (await import("leaflet")).default;
    const { MapContainer, TileLayer, Marker } = await import("react-leaflet");

    const icon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    const MapInner = () => {
      const position: [number, number] = [52.3731, 4.8922];

      return (
        <MapContainer
          center={position}
          zoom={18}
          scrollWheelZoom={false}
          className={styles.mapContainer}
        >
          <TileLayer
            attribution="© OpenStreetMap, © Carto"
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            maxZoom={20}
          />
          <Marker position={position} icon={icon} />
        </MapContainer>
      );
    };

    return MapInner;
  },
  { ssr: false }
);

export default function Map() {
  return <MapLeaflet />;
}
