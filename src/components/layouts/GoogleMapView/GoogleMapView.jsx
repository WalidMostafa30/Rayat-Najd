import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import { useState } from "react";
import projectImg from "../../../assets/images/project-img.jpg";
import ProjectCard from "../../common/ProjectCard";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "12px",
};

const center = { lat: 24.7136, lng: 46.6753 }; // وسط الرياض

const projects = [
  {
    id: 1,
    title: "مشروع رايات نجد 1",
    location: "شرق الرياض، حي النرجس",
    image: projectImg,
    position: { lat: 24.796, lng: 46.72 },
  },
  {
    id: 2,
    title: "مشروع رايات نجد 2",
    location: "شمال الرياض، حي الياسمين",
    image: projectImg,
    position: { lat: 24.805, lng: 46.705 },
  },
  {
    id: 3,
    title: "مشروع رايات نجد 3",
    location: "غرب الرياض، حي لبن",
    image: projectImg,
    position: { lat: 24.695, lng: 46.61 },
  },
  {
    id: 4,
    title: "مشروع رايات نجد 4",
    location: "جنوب الرياض، حي العزيزية",
    image: projectImg,
    position: { lat: 24.58, lng: 46.78 },
  },
];

export default function GoogleMapView() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBuFc-F9K_-1QkQnLoTIecBlNz6LfCS1wg", 
  });

  const [activeMarker, setActiveMarker] = useState(null);

  if (!isLoaded) return <div>جارٍ تحميل الخريطة...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
      {projects.map((proj) => (
        <Marker
          key={proj.id}
          position={proj.position}
          onClick={() => setActiveMarker(proj.id)}
          icon={{
            url: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        >
          {activeMarker === proj.id && (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <ProjectCard project={proj} map={true} />
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
}
