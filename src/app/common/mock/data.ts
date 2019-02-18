import {Observable, of} from "rxjs";

export interface IHotels {
  img: string,
  address: string,
  phone: number
  weather: {
    title: string,
    icon: string,
    water: number,
    temperature: number
  },
  social_info: {
    title: string,
    img: string,
    followers: number,
    following: number
  },
  type: string
}

export const data: IHotels[] = [
  {
    img: 'assets/img/1.jpg',
    address: 'east street 1, EAST',
    phone: 9613146533,
    weather: {
      title: 'rainy',
      icon: 'assets/img/1.jpg',
      water: 50,
      temperature: 18
    },
    social_info: {
      title: 'new East',
      img: 'assets/img/east1.png',
      followers: 50,
      following: 30
    },
    type: 'east'
  },

  {
    img: 'assets/img/2.jpg',
    address: 'west street 1, WEST',
    phone: 5779251,
    weather: {
      title: 'sunny',
      icon: 'assets/img/2.jpg',
      water: 30,
      temperature: 25
    },
    social_info: {
      title: 'new West',
      img: 'assets/img/west1.png',
      followers: 90,
      following: 120
    },
    type: 'west'
  },

  {
    img: 'assets/img/3.jpg',
    address: 'south street 1, SOUTH',
    phone: 216622,
    weather: {
      title: 'sunny++',
      icon: 'assets/img/3.jpg',
      water: 94,
      temperature: 45
    },
    social_info: {
      title: 'new South',
      img: 'assets/img/south1.png',
      followers: 41,
      following: 946
    },
    type: 'south'
  },

  {
    img: 'assets/img/4.jpg',
    address: 'south street 2, SOUTH',
    phone: 562566362,
    weather: {
      title: 'sunny++',
      icon: 'assets/img/4.jpg',
      water: 645,
      temperature: 41
    },
    social_info: {
      title: 'new South 2',
      img: 'assets/img/south2.png',
      followers: 627,
      following: 5445
    },
    type: 'south'
  },

  {
    img: 'assets/img/5.jpg',
    address: 'north street 1, NORTH',
    phone: 69545366,
    weather: {
      title: 'windy',
      icon: 'assets/img/5.jpg',
      water: 54,
      temperature: 15
    },
    social_info: {
      title: 'new North 1',
      img: 'assets/img/north1.png',
      followers: 546,
      following: 84
    },
    type: 'north'
  },

  {
    img: 'assets/img/6.jpg',
    address: 'north street 2, NORTH',
    phone: 62562214,
    weather: {
      title: 'windy and rainy',
      icon: 'assets/img/6.jpg',
      water: 47,
      temperature: 11
    },
    social_info: {
      title: 'new North 2',
      img: 'assets/img/north2.png',
      followers: 414,
      following: 954
    },
    type: 'north'
  },
];

export const data$: Observable<IHotels[]> = of(data);
