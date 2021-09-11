import React from 'react'
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

export default function MapSearch() {
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
        onSelect={(address) => {
          console.log(address)
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
      </Combobox>
    </div>
  )
}
