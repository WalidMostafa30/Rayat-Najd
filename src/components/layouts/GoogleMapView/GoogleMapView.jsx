import {
  GoogleMap,
  Marker,
  OverlayView,
  useLoadScript,
} from "@react-google-maps/api";
import { useMemo } from "react";
import MapProjectCard from "../../common/MapProjectCard";
import { useSelector } from "react-redux";
import LoadingSection from "../../Loading/LoadingSection";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "12px",
};

export default function GoogleMapView({ projects = [] }) {
  const { data, settings } = useSelector((state) => state.data);
  const projectsList = useMemo(() => {
    return projects?.length ? projects : data || [];
  }, [projects, data]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: settings?.google_key || "",
  });

  // ✅ نحدد مركز الخريطة بأمان
  const center = useMemo(() => {
    if (projectsList.length > 0) {
      const first = projectsList.find(
        (p) =>
          Number(p.latitude) &&
          !isNaN(Number(p.latitude)) &&
          Number(p.longitude) &&
          !isNaN(Number(p.longitude))
      );
      if (first) {
        return {
          lat: Number(first.latitude),
          lng: Number(first.longitude),
        };
      }
    }
    return { lat: 24.7136, lng: 46.6753 }; // الرياض
  }, [projectsList]);

  if (!isLoaded) return <LoadingSection />;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      {projectsList
        .filter(
          (proj) =>
            Number(proj.latitude) &&
            !isNaN(Number(proj.latitude)) &&
            Number(proj.longitude) &&
            !isNaN(Number(proj.longitude))
        )
        .map((proj) => (
          <div key={proj.id}>
            {/* الماركر الدائري */}
            <Marker
              position={{
                lat: Number(proj.latitude),
                lng: Number(proj.longitude),
              }}
              icon={{
                path: window.google?.maps?.SymbolPath?.CIRCLE || 0,
                fillColor: "#9c6c17",
                fillOpacity: 0.5,
                scale: 10,
                strokeColor: "#9c6c17",
                strokeWeight: 6,
              }}
            />

            {/* الكارد فوق الماركر */}
            <OverlayView
              position={{
                lat: Number(proj.latitude),
                lng: Number(proj.longitude),
              }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div
                style={{
                  transform: "translate(50%, -110%)",
                  minWidth: "150px",
                  zIndex: 10,
                }}
              >
                <MapProjectCard project={proj} map={true} />
              </div>
            </OverlayView>
          </div>
        ))}
    </GoogleMap>
  );
}
