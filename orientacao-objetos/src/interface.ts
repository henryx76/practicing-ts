interface location = {
    latitude: number;
    longitude: number;
}

const getLocation = (location: location): string => {
    return '${location.latitude}- ${location.longitude}' 
}

//const location = {
//    latitude: 12312,
//    longetude:321
//}

//getLocation(location)
class Location implements Location {
    latitude: number;
    longitude: number;
    numberLocation: number = 0;

    constructor(latitude: number, longetude: number) {
        this.latitude = latitude
        this.longitude = longetude
    }

    getLocation(): string {
        return 'any';
    }
}


getLocation(new LocationMap(123,321))

export{}