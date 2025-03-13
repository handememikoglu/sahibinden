import { useEffect, useState } from "react";

export default function HousingFilter({house,setFilteredHouses}){
    const [selectedType,setSelectedType] = useState("");
    const [listType,setListType] = useState("");
    const [city,setCity] = useState("");
    const [room,setRoom] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
   
    useEffect(() => {
        let filteredData = house;

        if (selectedType) {
            filteredData = filteredData.filter(h => h.type === selectedType);
        }

        if (listType) {
            filteredData = filteredData.filter(h => h.listing_type === listType);
        }

        if (city) {
            filteredData = filteredData.filter(h => h.location.city === city);
        }

        if (room) {
            filteredData = filteredData.filter(h=> h.property_details.room_count === room);
        }

        if (minPrice) {
            filteredData = filteredData.filter(h => h.price.amount >= Number(minPrice));
        }

        if (maxPrice) {
            filteredData = filteredData.filter(h => h.price.amount <= Number(maxPrice));
        }

        setFilteredHouses(filteredData);
    }, [selectedType, listType, city, room,minPrice,maxPrice, house, setFilteredHouses]);

    const uniqueTypes = [...new Set(house.map(h => h.type))];
    const uniqueListType = [...new Set(house.map(h => h.listing_type))];
    const uniqueCity = [...new Set(house.map(h => h.location.city))];
    const uniqueRoom = [...new Set(house.map(h => h.property_details.room_count))];

    return(
        <div className="filter-container">
            <div className="filter-card">
                <input
                type="text"
                list="list"
                name="type"
                value={selectedType}
                placeholder="Konut tipini seçiniz"
                onChange={(e) => setSelectedType(e.target.value)} />
                <datalist id="list" className="container">
                    {uniqueTypes.map((types,index) =>(
                        <option value={types} key={index}></option>
                    ))}
                </datalist>
            </div>
            <div className="filter-card">
                <input
                type="text"
                name="listingType"
                value={listType}
                list="listingType"
                placeholder="Satılık/Kiralık"
                onChange={(e) => setListType(e.target.value)} />
                <datalist id="listingType" className="container">
                    {uniqueListType.map((type,index) =>(
                        <option value={type} key={index}></option>
                    ))}
                </datalist>
            </div>
            <div className="filter-card">
                <input
                type="text"
                name="city"
                value={city}
                list="listingLocation"
                placeholder="Şehir seçiniz"
                onChange={(e) => setCity(e.target.value)} />
                <datalist id="listingLocation" className="container">
                    {uniqueCity.map((city,index) =>(
                        <option value={city} key={index}></option>
                    ))}
                </datalist>
            </div>
            <div className="filter-card">
                <input
                type="text"
                name="room"
                value={room}
                list="roomCount"
                placeholder="Oda Sayısı"
                onChange={(e) => setRoom(e.target.value)} />
                <datalist id="roomCount" className="container">
                    {uniqueRoom.map((room,index) =>(
                        <option value={room} key={index}></option>
                    ))}
                </datalist>
            </div>
            <div className="filter-card">
                <input 
                type="number" 
                name="minPrice" 
                value={minPrice} 
                placeholder="Min TL" 
                onChange={(e) => setMinPrice(e.target.value)}/>
            </div>
            <div className="filter-card">
                <input 
                type="number" 
                name="maxPrice" 
                value={maxPrice} 
                placeholder="Max TL" 
                onChange={(e) => setMaxPrice(e.target.value)}/>
            </div>
        </div>
    )
}