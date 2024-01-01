import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { listingData } from "../../data/listingData";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUrlPosition } from "../hooks/useUrlPosition";

function LeafletMap() {
  const center = [44.65107, -63.582687];
  const [mapPosition, setMapPosition] = useState(center);
  const [mapLat, mapLng] = useUrlPosition();
  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  return (
    <div className="basis-3/4">
      <MapContainer center={center} zoom={13} className="h-full ">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {listingData.map((listing) => (
          <Marker
            position={[listing.lat, listing.lng]}
            key={listing.details.pid}
          >
            <Popup
              onClick={() => {
                const pos = [listing.lat, listing.lng];
                ChangeCenter(pos);
              }}
            >
              <span className="border-b-[2px] border-slate-300 text-bold">
                {listing.listingName}
              </span>
              <span>{`Assessment : ${listing.details.assessment}`}</span>
              <span>{`PID : ${listing.details.pid}`}</span>
              <span>{`Lot-size : ${listing.details.lotSize}`}</span>
              <button className="hover:bg-violet-900 text-lg bg-violet-800 text-white font-thin h-10 w-20 flex items-center justify-center rounded-lg hover:scale-105">
                Details
              </button>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      console.log(e);
      navigate(`?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default LeafletMap;
