"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Link from "next/link";

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/map-pin.svg",
  iconUrl: "/map-pin.svg",
  shadowUrl: "",
});

interface MapEntry {
  id: number;
  latitude: string;
  longitude: string;
  title: string;
}

interface MapProps {
  entries: MapEntry[];
}

export default function Map({ entries }: MapProps) {
  return (
    <MapContainer
      // center={[0, 0]}
      // zoom={2}
      style={{ height: "100%", width: "100" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {entries?.map((entry) => (
        <Marker
          key={entry.id}
          position={[parseInt(entry.latitude), parseInt(entry.longitude)]}
        >
          <Popup>
            {/* <Link href={`/all-device/${entry.id}`}> {entry.deviceName}</Link> */}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
