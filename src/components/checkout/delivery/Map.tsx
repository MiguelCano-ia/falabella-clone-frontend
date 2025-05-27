import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
export const Map = ({ coords }: { coords: { lat: number; lng: number } }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: coords.lat,
        lng: coords.lng,
      };

      const mapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
        disableDefaultUI: true,
        zoomControl: true,
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      new Marker({
        position,
        map,
        draggable: true,
        title: "Ubicación seleccionada",
      });
    };
    initMap();
  }, [coords]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[280px] rounded-sm"
      data-testid="map"
    />
  );
};
