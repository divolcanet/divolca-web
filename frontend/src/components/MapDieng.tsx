import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngBoundsExpression } from "leaflet";
import L from "leaflet";
import { mapPoints, type MapPoint } from "../data/map-dieng"; 
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import { Modal } from "./ui/Modal";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const CENTER: [number, number] = [-7.215, 109.9];
const ZOOM = 14;

export function MapDieng({ className }: { className?: string }) {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);

  return (
    <>
      <div className={cn("w-full aspect-2/3 md:aspect-video rounded-xl overflow-hidden border border-primary-10 relative z-0", className)}>
        <MapContainer
          center={CENTER}
          zoom={ZOOM}
          className="w-full h-full"
          maxBounds={[[-7.28, 109.86], [-7.14, 109.95]] as LatLngBoundsExpression}
          minZoom={13}
          maxBoundsViscosity={1.0}
          scrollWheelZoom={true}
        >
          <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          
          {mapPoints.map((point) => (
            <Marker key={point.slug} position={point.position} icon={defaultIcon}>
              <Popup>
                <div className="font-inter text-sm min-w-45">
                  <h3 className="font-fraunces font-bold text-base mb-1">{point.title}</h3>
                  <p className=" text-sm mb-3 line-clamp-3">{point.description}</p>
                  
                  <button 
                    className={buttonVariants({ variant: "default", size: "default", className: "w-full mt-2" })} 
                    onClick={() => setSelectedPoint(point)}
                  >
                    Baca Selengkapnya
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <Modal 
        isOpen={selectedPoint !== null} 
        onClose={() => setSelectedPoint(null)} 
        title={selectedPoint?.title || ""}
      >
        {selectedPoint && (
          <div className="space-y-6">
            {selectedPoint.image && (
              <img 
                src={selectedPoint.image} 
                alt={selectedPoint.title} 
                className="w-full h-64 object-cover rounded-xl shadow-md border border-line"
              />
            )}
            
            {selectedPoint.details ? (
              <div className="space-y-5 text-sm leading-relaxed text-volcanic-200">
                {selectedPoint.details.nilaiTerkemuka && (
                  <div>
                    <h4 className="font-bold text-primary-75 mb-1 font-fraunces text-lg">Nilai Terkemuka</h4>
                    <p>{selectedPoint.details.nilaiTerkemuka}</p>
                  </div>
                )}
                {selectedPoint.details.banyakMakna && (
                  <div>
                    <h4 className="font-bold text-primary-75 mb-1 font-fraunces text-lg">Banyak Makna</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {selectedPoint.details.banyakMakna.map((makna, i) => (
                        <li key={i}>{makna}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedPoint.details.batuan && (
                  <div>
                    <h4 className="font-bold text-primary-75 mb-1 font-fraunces text-lg">Batuan</h4>
                    <p>{selectedPoint.details.batuan}</p>
                  </div>
                )}
                {selectedPoint.details.strukturGeologi && (
                  <div>
                    <h4 className="font-bold text-primary-75 mb-1 font-fraunces text-lg">Struktur Geologi</h4>
                    <p>{selectedPoint.details.strukturGeologi}</p>
                  </div>
                )}
                {selectedPoint.details.bentangAlam && (
                  <div>
                    <h4 className="font-bold text-primary-75 mb-1 font-fraunces text-lg">Bentang Alam</h4>
                    <p>{selectedPoint.details.bentangAlam}</p>
                  </div>
                )}
                {selectedPoint.details.pemanfaatan && (
                  <div>
                    <h4 className="font-bold text-primary-75 mb-1 font-fraunces text-lg">Pemanfaatan</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedPoint.details.pemanfaatan.map((manfaat, i) => (
                        <span key={i} className="px-3 py-1 bg-muted/50 rounded-full text-xs font-mono text-title border border-line">
                          {manfaat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-volcanic-200 leading-relaxed">
                {selectedPoint.description}
              </p>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}