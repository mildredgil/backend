/// <reference types="@types/google.maps" />

interface Location {
  lat: number;
  lng;
}

interface Mappable {
  location: Location;
  markerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(element: HTMLElement) {
    this.googleMap = new google.maps.Map(element, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addUserMarker({ lat, lng }: Location): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat, lng },
    });
  }

  addCompanyMarker({ lat, lng }: Location): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat, lng },
    });
  }

  addMarker(mappable: Mappable): void {
    const {
      location: { lat, lng },
    } = mappable;
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat, lng },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
