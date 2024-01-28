const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { descriptors, places } = require("./seedHelpers");
const campground = require("../models/campground");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});

  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 100) + 20;
    const camp = new Campground({
      location: `${cities[random1000].city},${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      author: "6592edf307f0b6138aebf789",
      image:
        "https://images.unsplash.com/photo-1473773508845-188df298d2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHw0ODQzNTF8fHx8fHx8MTcwMzcxMDE5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, similique debitis possimus ut vitae cumque deleniti. Numquam quae vero quaerat doloribus distinctio libero, id ex totam voluptatem soluta? Quod, quisquam!",
      price: price,
    });
    await camp.save();
  }
};

seedDB();
