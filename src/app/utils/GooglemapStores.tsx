'use client';

import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 10.7769,
  lng: 106.7009,
};

const stores = [
  {
    id: 1,
    name: "Foodmart Quận 1",
    address: "123 Nguyễn Huệ",
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 2,
    name: "Foodmart Quận 3",
    address: "45 Võ Văn Tần",
    lat: 10.7829,
    lng: 106.6925,
  },
  {
    id: 3,
    name: "Foodmart Bình Thạnh",
    address: "88 Điện Biên Phủ",
    lat: 10.8017,
    lng: 106.7110,
  },
];

export default function StoreMap() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>

        {stores.map((store) => (
          <Marker
            key={store.id}
            position={{ lat: store.lat, lng: store.lng }}
            onClick={() => setSelected(store)}
          />
        ))}

        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h4 className="font-bold">{selected.name}</h4>
              <p>{selected.address}</p>
            </div>
          </InfoWindow>
        )}

      </GoogleMap>
    </LoadScript>
  );
}