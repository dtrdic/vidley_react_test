//import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "b308d7ac-aec7-4754-a795-ab189c2cce60",
    title: "Terminator",
    genre: {
      _id: "4308d7ac-aec7-4754-a795-ab189c2cce60",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    pubishDate: "2.2.2020",
  },
  {
    _id: "1208d7ac-aec7-4754-a795-ab189c2cce60",
    title: "Titanic",
    genre: {
      _id: "4308d7ac-aec7-4754-a795-ab189c2cce60",
      name: "Action",
    },
    numberInStock: 1,
    dailyRentalRate: 5.5,
    pubishDate: "4.2.2020",
  },
  {
    _id: "6308d7ac-aec7-4754-a795-ab189c2cce60",
    title: "ToyStory",
    genre: {
      _id: "4308d7ac-aec7-4754-a795-ab189c2cce60",
      name: "Action",
    },
    numberInStock: 2,
    dailyRentalRate: 6,
    pubishDate: "12.2.2010",
  },
  {
    _id: "3208d7ac-aec7-4754-a795-ab189c2cce60",
    title: "Aviator",
    genre: {
      _id: "4308d7ac-aec7-4754-a795-ab189c2cce60",
      name: "Action",
    },
    numberInStock: 3,
    dailyRentalRate: 1.5,
    pubishDate: "2.12.2020",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
