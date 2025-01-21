// import "./styles.css";
"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon, divIcon, point } from "leaflet";
import Link from "next/link";

// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  //   iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38], // size of the icon
});

// custom cluster icon

export default function Map1({ markers }) {
  return (
    <MapContainer
      className="border w-[100%] h-[60vh]"
      center={[24.8607, 67.0011]}
      zoom={10}
    >
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Mapping through the markers */}
      {markers.map((marker, ind) => (
        <Link href={`/admin/${ind}`}>
          <Marker
            key={ind}
            position={[marker.lat, marker.lng]}
            icon={customIcon}
          >
            <Popup>{marker.title}</Popup>
          </Marker>
        </Link>
      ))}
    </MapContainer>
  );
}
