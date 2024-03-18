import React from "react";
import styles from "./googlemap.module.css";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const GoogleM = () => {
    const center = {
        lat: 10.3428978,
        lng: 123.9445034,
      };
    
    const containerStyle = {
        width: '100%',
        height: '100%',
        marginBottom: '15px'
    };

    const OPTIONS = {
        minZoom: 3,
        maxZoom: 18,
    }

      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCZR-J6epyxmzAQbUxe88itwCJ0NVY0_LU"
      })

      const [map, setMap] = React.useState(null)

      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

      return(
            isLoaded ? (
            <>
                <GoogleMap
                options = {OPTIONS}
                mapContainerStyle={containerStyle}
                onLoad={onLoad}
                onUnmount={onUnmount}
                >
                    {/* <Marker position={center}/> */}
                </GoogleMap>
                <span>
                  Jelyn's Poultry and Dressing Plant, Lower Tabok,<br/>
                  Mandaue City, 6014, Philippines
                </span>
            </>
            ) : <></>
      )
}

export default GoogleM;