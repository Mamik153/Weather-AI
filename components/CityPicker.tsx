'use client'
import { useState } from "react"
import { Country, City } from "country-state-city"
import Select from "react-select"
import { useRouter } from "next/navigation";
import { GlobeIcon } from "@heroicons/react/solid"

type option = {
    value: {
        latitude: string;
        longitude: string;
        isoCode: string;
    };
    label: string;
} | null;

type cityOption = {
    value: {
        latitude: string;
        longitude: string;
        countryCode: string;
        name: string;
        stateCode: string;
    };
    label: string;
} | null;

const options = Country.getAllCountries().map(country => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name
}))

function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<option>(null)
    const [selectedCity, setSelectedCity] = useState<cityOption>(null)

    const router = useRouter();

    const handleSelectedCountry = (option: option) => {
        setSelectedCountry(option)
        setSelectedCity(null)
    }

    const handleSelectedCity = (option: cityOption) => {
        setSelectedCity(option)
        router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
    }

  return (
      <div className="space-y-5">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="country" className="text-white">Country</label>
          </div>
         
          {/* <p>{ selectedCountry?.label }</p> */}
          <Select
              value={selectedCountry}
              onChange={handleSelectedCountry}
            options={options}
          />
          </div>
          
        {selectedCountry && (
            <div className="space-y-3">
                <div className="flex items-center space-x-2">
                    <GlobeIcon className="h-5 w-5 text-white" />
                    <label htmlFor="country" className="text-white">City</label>
                </div>
            
                {/* <p>{ selectedCountry?.label }</p> */}
                <Select
                    value={selectedCity}
                    onChange={handleSelectedCity}
                      options={
                          City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(state => ({ 
                            value: {
                                latitude: state.latitude,
                                longitude: state.longitude,
                                countryCode: state.countryCode,
                                name: state.name,
                                stateCode: state.stateCode,
                            },
                            label: state.name
                          }))
                      }
                />
          </div>
        )}
        
          
    </div>
  )
}

export default CityPicker