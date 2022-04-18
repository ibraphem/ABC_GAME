//Back images

import one from "../src/img/1.jpg"
import two from "../src/img/2.jpg"
import three from "../src/img/3.jpg"
import four from "../src/img/4.jpg"
import five from "../src/img/5.jpg"
import six from "../src/img/6.jpg"
import seven from "../src/img/7.jpg"
import eight from "../src/img/8.jpg"
import nine from "../src/img/9.jpg"
import ten from "../src/img/10.jpg"
import eleven from "../src/img/11.jpg"
import twelve from "../src/img/12.jpg"
import thirteen from "../src/img/13.jpg"
import fourteen from "../src/img/14.jpg"
import fifteen from "../src/img/15.jpg"
import sixteen from "../src/img/16.jpg"
import seventeen from "../src/img/17.jpg"
import eighteen from "../src/img/18.jpg"
import nineteen from "../src/img/19.jpg"
import twenty from "../src/img/20.jpg"
import twentyOne from "../src/img/21.jpg"
import twentyTwo from "../src/img/22.jpg"
import twentyThree from "../src/img/23.jpg"
import twentyFour from "../src/img/24.jpg"

// Front Images

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
import kangaroo from "../src/img/kangaroo.png"
import lizard from "../src/img/lizard.png"
import monkey from "../src/img/monkey.png"
import nightingale from "../src/img/nightingale.png"
import orange from "../src/img/orange.png"
import pawpaw from "../src/img/pawpaw.png"
import quail from "../src/img/quail.png"
import rock from "../src/img/rock.png"
import shoe from "../src/img/shoe.png"
import toad from "../src/img/toad.png"
import umbrella from "../src/img/umbrella.png"
import van from "../src/img/van.png"
import wolf from "../src/img/wolf.png"
import xerus from "../src/img/xerus.png"
import yam from "../src/img/yam.png"
import zebra from "../src/img/zebra.png"


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
    img: one,
    forImage: apple,
    text:
      'Apple',
    open: false,
  },
  {
    nr: "B",
    img: two,
    forImage: ball,
    text:'Ball',
    open: false
  },
  {
    nr: 'C',
    img: three,
    forImage: cat,
    text: "Cat",
    open: false
  },
  {
    nr: 'D',
    img: four,
    forImage: dog,
    text: "Dog",
    open: false
  },
  {
    nr: 'E',
    img: five,
    forImage: elephant,
    text: 'Elephant',
    open: false
  },
  {
    nr: 'F',
    img: six,
    forImage: fan,
    text: 'Fan',
    open: false
  },
  {
    nr: 'G',
    img: seven,
    forImage: goat,
    text: 'Goat',
    open: false
  },
  {
    nr: 'H',
    img: eight,
    forImage: "../src/img/house.png",
    text: house,
    open: false
  },
  {
    nr: 'I',
    img: nine,
    forImage: ice,
    text: "Ice",
    open: false
  },
  {
    nr: 'J',
    img: ten,
    forImage: jug,
    text:
      'Jug',
    open: false
  },
  {
    nr: 'K',
    img: eleven,
    forImage: kangaroo,
    text: "Kangaroo",
    open: false
  },
  {
    nr: 'L',
    img: twelve,
    forImage: lizard,
    text: "Lizard",
    open: false
  },
  {
    nr: 'M',
    img: thirteen,
    forImage: monkey,
    text:"Monkey",
    open: false
  },
  {
    nr: 'N',
    img: fourteen,
    forImage: nightingale,
    text: 'Nightingale',
    open: false
  },
  {
    nr: 'O',
    img: fifteen,
    forImage: orange,
    text: 'Orange',
    open: false
  },
  {
    nr: 'P',
    img: sixteen,
    forImage: pawpaw,
    text: 'Pawpaw',
    open: false
  },
  {
    nr: 'Q',
    img: seventeen,
    forImage: quail,
    text: "Quail",
    open: false
  },
  {
    nr: 'R',
    img: eighteen,
    forImage: rock,
    text: 'Rock',
    open: false
  },
  {
    nr: 'S',
    img: nineteen,
    forImage: shoe,
    text: "Shoe",
    open: false
  },
  {
    nr: 'T',
    img: twenty,
    forImage: toad,
    text: "Toad",
    open: false
  },
  {
    nr: 'U',
    img: twentyOne,
    forImage: umbrella,
    text:'Umbrella',
    open: false
  },
  {
    nr: 'V',
    img: twentyTwo,
    forImage: van,
    text: 'Van',
    open: false
  },
  {
    nr: 'W',
    img: twentyThree,
    forImage: wolf,
    text: 'Wolf',
    open: false
  },
  {
    nr: 'X',
    img: twentyFour,
    forImage: xerus,
    text: "Xerus",
    open: false
  },
  {
    nr: 'Y',
    img: eight,
    forImage: yam,
    text: "Yam",
    open: false
  },
  {
    nr: 'Z',
    img: eighteen,
    forImage: zebra,
    text: 'Zebra',
    open: false
  }
];

export const createCalendar = (): HatchType[] => shuffle(hatchArray);
