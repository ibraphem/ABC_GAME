import apple from "../src/img/apple.png"
import ball from "../src/img/ball.png"
import cat from "../src/img/cat.png"
import dog from "../src/img/dog.png"
import elephant from "../src/img/elephant.png"
import fan from "../src/img/fan.png"
import goat from "../src/img/goat.png"
import house from "../src/img/house.png"
import ice from "../src/img/ice.png"
import jug from "../src/img/jug.png"

/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
 const shuffle = (a: any[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export type HatchType = {
  nr: string;
  img: string;
  text: string;
  open: boolean;
  forImage: string
}

// Bad one-liners from https://onelinefun.com/christmas
export const hatchArray: HatchType[] = [
  {
    nr: 'A',
    img: './img/1.jpg',
    forImage: apple,
    text:
      'Apple',
    open: false,
  },
  {
    nr: "B",
    img: './img/2.jpg',
    forImage: ball,
    text:'Ball',
    open: false
  },
  {
    nr: 'C',
    img: './img/3.jpg',
    forImage: cat,
    text: "Cat",
    open: false
  },
  {
    nr: 'D',
    img: './img/4.jpg',
    forImage: dog,
    text: "Dog",
    open: false
  },
  {
    nr: 'E',
    img: './img/5.jpg',
    forImage: elephant,
    text: 'Elephant',
    open: false
  },
  {
    nr: 'F',
    img: './img/6.jpg',
    forImage: fan,
    text: 'Fan',
    open: false
  },
  {
    nr: 'G',
    img: './img/7.jpg',
    forImage: goat,
    text: 'Goat',
    open: false
  },
  {
    nr: 'H',
    img: './img/8.jpg',
    forImage: "../src/img/house.png",
    text: house,
    open: false
  },
  {
    nr: 'I',
    img: './img/9.jpg',
    forImage: ice,
    text: "Ice",
    open: false
  },
  {
    nr: 'J',
    img: './img/10.jpg',
    forImage: jug,
    text:
      'Jug',
    open: false
  },
  {
    nr: 'K',
    img: './img/11.jpg',
    forImage: "../src/img/kangaroo.png",
    text: "Kangaroo",
    open: false
  },
  {
    nr: 'L',
    img: './img/12.jpg',
    forImage: "../src/img/lizard.png",
    text: "Lizard",
    open: false
  },
  {
    nr: 'M',
    img: './img/13.jpg',
    forImage: "../src/img/monkey.png",
    text:"Monkey",
    open: false
  },
  {
    nr: 'N',
    img: './img/14.jpg',
    forImage: "../src/img/nightingale.png",
    text: 'Nightingale',
    open: false
  },
  {
    nr: 'O',
    img: './img/15.jpg',
    forImage: "../src/img/orange.png",
    text: 'Orange',
    open: false
  },
  {
    nr: 'P',
    img: './img/16.jpg',
    forImage: "../src/img/pawpaw.png",
    text: 'Pawpaw',
    open: false
  },
  {
    nr: 'Q',
    img: './img/17.jpg',
    forImage: "../src/img/quail.png",
    text: "Quail",
    open: false
  },
  {
    nr: 'R',
    img: './img/18.jpg',
    forImage: "../src/img/rock.png",
    text: 'Rock',
    open: false
  },
  {
    nr: 'S',
    img: './img/19.jpg',
    forImage: "../src/img/shoe.png",
    text: "Shoe",
    open: false
  },
  {
    nr: 'T',
    img: './img/20.jpg',
    forImage: "../src/img/toad.png",
    text: "Toad",
    open: false
  },
  {
    nr: 'U',
    img: './img/21.jpg',
    forImage: "../src/img/umbrella.png",
    text:'Umbrella',
    open: false
  },
  {
    nr: 'V',
    img: './img/22.jpg',
    forImage: "../src/img/van.png",
    text: 'Van',
    open: false
  },
  {
    nr: 'W',
    img: './img/23.jpg',
    forImage: "../src/img/wolf.png",
    text: 'Wolf',
    open: false
  },
  {
    nr: 'X',
    img: './img/24.jpg',
    forImage: "../src/img/xerus.png",
    text: "Xerus",
    open: false
  },
  {
    nr: 'Y',
    img: './img/3.jpg',
    forImage: "../src/img/yam.png",
    text: "Yam",
    open: false
  },
  {
    nr: 'Z',
    img: './img/8.jpg',
    forImage: "../src/img/zebra.png",
    text: 'Zebra',
    open: false
  }
];

export const createCalendar = (): HatchType[] => shuffle(hatchArray);
