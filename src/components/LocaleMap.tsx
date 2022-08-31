import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

export function LocaleMaps() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.GOOGLE_MAPS_API
    })

    const position = {
        lat: -22.9501036868231,
        lng: -47.05982012450875
    }

    return (
        <div
            className="h-[60vh]">
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={position}
                    zoom={15}
                >
                    <a href="https://goo.gl/maps/CcqEwfFhCXX3HJu1A" target="_blank">
                        <Marker position={position} options={{
                            label: {
                                text: 'LLM Demolições',
                                className: "mt-[-30px] font-bold text-white"
                            }
                        }} />
                    </a>
                </GoogleMap>
            )}
        </div>
    )
}