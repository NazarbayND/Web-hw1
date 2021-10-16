import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
const initialState = [
  {
    _id: 1,
    amount: 0,
    category: 1,
    name: 'Item',
    image: 'https://source.unsplash.com/random',
    price: 2500,
    duration: '2 дня',
    hint: {
      title: 'Item',
      description:
        'А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно',
    },
  },
  {
    _id: 2,
    amount: 0,
    category: 1,
    name: 'Item',
    image: 'https://source.unsplash.com/random',
    price: 2500,
    duration: '2 дня',
    hint: {
      title: 'Item',
      description:
        'А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно',
    },
  },
  {
    _id: 3,
    amount: 0,
    category: 1,
    name: 'Item',
    image: 'https://source.unsplash.com/random',
    price: 2500,
    duration: '2 дня',
    hint: {
      title: 'Item',
      description:
        'А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно',
    },
  },
  {
    _id: 4,
    amount: 0,
    category: 1,
    name: 'Item',
    image: 'https://source.unsplash.com/random',
    price: 2500,
    duration: '2 дня',
    hint: {
      title: 'Item',
      description:
        'А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно',
    },
  },
  {
    _id: 5,
    amount: 0,
    category: 1,
    name: 'Item',
    image: 'https://source.unsplash.com/random',
    price: 2500,
    duration: '2 дня',
    hint: {
      title: 'Item',
      description:
        'А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно',
    },
  },
  {
    _id: 6,
    amount: 0,
    category: 1,
    name: 'Item',
    image: 'https://source.unsplash.com/random',
    price: 2500,
    duration: '2 дня',
    hint: {
      title: 'Item',
      description:
        'А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно',
    },
  },
  {
    _id: 7,
    amount: 0,
    category: 2,
    name: 'Item',
    image: 'https://source.unsplash.com/random',
    price: 2500,
    duration: '2 дня',
    hint: {
      title: 'Item',
      description:
        'А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно',
    },
  },
  {
    _id: 8,
    amount: 0,
    category: 2,
    name: 'Item',
    image: 'https://source.unsplash.com/random',
    price: 2500,
    duration: '2 дня',
    hint: {
      title: 'Item',
      description:
        'А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно',
    },
  },
  {
    _id: 9,
    amount: 0,
    category: 2,
    name: 'Item',
    image: 'https://source.unsplash.com/random',
    price: 2500,
    duration: '2 дня',
    hint: {
      title: 'Item',
      description:
        'А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно',
    },
  },
  {
    _id: 10,
    amount: 0,
    category: 2,
    name: 'Item',
    image: 'https://source.unsplash.com/random',
    price: 2500,
    duration: '2 дня',
    hint: {
      title: 'Item',
      description:
        'А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно',
    },
  },
];
@Component({
  selector: 'l1-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  products = initialState;
  constructor() {}

  ngOnInit(): void {}
}
