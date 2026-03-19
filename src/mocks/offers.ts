import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '4ccc850a-d32f-4ff5-99ed-a23a09138958',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 175,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.2
  },
  {
    id: '90cdd456-180a-4ad4-af3f-9e068237df29',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'hotel',
    price: 319,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.8
  },
  {
    id: 'b7478284-7f81-4cb1-84fc-f285a984053f',
    title: 'House in countryside',
    type: 'hotel',
    price: 406,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.8
  },
  {
    id: 'abcb3d7e-ac21-4622-80d0-4559633cad1f',
    title: 'Perfectly located Castro',
    type: 'apartment',
    price: 493,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.3
  }
];
