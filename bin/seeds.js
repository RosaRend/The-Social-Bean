const mongoose  = require('mongoose');
const Coffee    = require('../models/coffeeModel');

// const dbName    = 'the-social-bean';
mongoose.connect(process.env.MONGODB_URI);

const coffeeTypes = [
  {
    name: "Cappucino",
    image: "/cappucinno.png",
    description: "The Cappucino is a double espresso served with foam and milk.",
    origin: "Italy",
    served: "Hot/Iced"
  },
  {
    name: "Caffe Macchiato",
    image: " /latte-macchiato.png",
    description: "The Caffe Macchiato is an espresso served drink with milk that originated from Italy.",
    origin: "Italy",
    served: "Hot"
  },
  {
    name: "Affogato",
    image: " /affogato.png",
    description: "The Affogato is a dessert based that's served with vanilla ice cream top with a shot of hot espressso.",
    origin: "Italy",
    served: "Cold"
  },
  {
    name: "Caffe Mocha",
    image: " /caffe-mocha.png",
    description: "The Caffe Mocha also known as the mocaccino and a type of caffe latte is an espresso mix of chocolate and milk.",
    served: "Hot"
  },
  {
    name: "Long Black",
    image: " /long-black.jpeg",
    description: "The Long Black is an espresso based drink diluted with hot water.",
    origin: 'Australia, New Zealand',
    served: "Hot"
  },
  {
    name: "Irish Coffee",
    image: " /irish-coffee.jpg",
    description: "The Irish Coffee is an alcholic beverage served with coffee, Irish whiskey, sugar, and cream.",
    served: "Hot"
  },
  {
    name: "Cafe au lait",
    image: " /cafe-au-lait.jpg",
    description: "The Cafe au lait is a lighter brown coffee served hot milk.",
    origin: 'France',
    served: "hot"
  },
  {
    name: "Cortado",
    image: " /cortado.png",
    description: "The Cortado is an espresso based coffee served with equal amounts.",
    origin: 'Spain, Portugal, Latin America',
    served: "Hot"
  },
  {
    name: "Galao",
    image: " /galao.png",
    description: "The Galao instant coffee is espresso based consisting of 3/4 foamed milk.",
    origin: 'Portugal',
    served: "Hot"
  },
  {
    name: "Espresso",
    image: " /espresso.png",
    description: "The Espressso is a brew that is made by small amounts of water over finely grounded coffee beans.",
    origin: 'Italy',
    served: "Hot/Cold"
  },
  {
    name: "Cafe Cubano",
    image: " /cubano.jpeg",
    description: "The Cafe Cubano is a cuban espresso that is made with Demerara sugar whipped drops od espresso.",
    served: "Hot"
  },
  {
    name: "Doppio",
    image: "/doppio.png",
    description: "The Doppio is know as a double espresso.",
    origin: 'Italy',
    served: "Hot"
  },
  {
    name: "Frappe",
    image: " /frappuccino.png",
    description: "The Frappe coffee is an instant coffee consisting of water, and sugar.",
    origin: "Greece",
    served: "Cold"
  }

];

Coffee.create(coffeeTypes)
.then((result)=>{
  mongoose.disconnect();
})
.catch((err)=>{
  console.log(err);
});