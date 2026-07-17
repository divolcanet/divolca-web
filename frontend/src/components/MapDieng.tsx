import L, { type LatLngBoundsExpression } from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { cn } from "../lib/utils";
import { mapPoints } from "../data/map-dieng";
import { buttonVariants } from "./ui/button";

const CENTER: [number, number] = [-7.21, 109.905];
const ZOOM = 14;

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export function MapDieng({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full aspect-2/3 md:aspect-video rounded-xl overflow-hidden border border-primary-10",
        className,
      )}
    >
      <MapContainer
        center={CENTER}
        zoom={ZOOM}
        className="w-full h-full"
        maxBounds={
          [
            [-7.28, 109.86],
            [-7.14, 109.95],
          ] as LatLngBoundsExpression
        }
        minZoom={13}
        maxBoundsViscosity={1.0}
        scrollWheelZoom={true}
      >
        {/* <DefaultIcon /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapPoints.map((point) => (
          <Marker key={point.slug} position={point.position}>
            <Popup>
              <div className="font-inter text-sm min-w-45">
                <h3 className="font-fraunces font-bold text-base mb-1">
                  {point.title}
                </h3>
                <p className=" text-sm mb-3">{point.description}</p>
                <a
                  href="#"
                  className={buttonVariants({
                    variant: "default",
                    size: "default",
                  })}
                  onClick={(e) => e.preventDefault()}
                >
                  Baca Selengkapnya
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
