import React, { useCallback, useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'

export default function MapSearch({ panTo, setMarkers }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 53.551086, lng: () => 9.993682 },
      radius: 200 * 1000,
    },
  })
  return (
    <div className="map-search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false)
          clearSuggestions()
          try {
            const result = await getGeocode({ address })
            const { lat, lng } = await getLatLng(result[0])
            panTo({ lat, lng })
            setMarkers((current) => [
              ...current,
              {
                lat: lat,
                lng: lng,
                time: new Date(),
              },
            ])
          } catch (error) {
            console.log(error)
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          disabled={!ready}
          placeholder="Enter a place"
        />
        <ComboboxPopover>
          {status === 'OK' &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}
