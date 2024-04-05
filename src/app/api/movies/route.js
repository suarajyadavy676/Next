import { NextResponse } from "next/server";

export function GET(req, res) {
  const movies = [
    { id: 1, title: "The Shawshank Redemption", year: 1994, genre: "Drama" },
    { id: 2, title: "The Godfather", year: 1972, genre: "Crime, Drama" },
    { id: 3, title: "The Dark Knight", year: 2008, genre: "Action, Crime, Drama" },
    { id: 4, title: "The Godfather Part II", year: 1974, genre: "Crime, Drama" },
    { id: 5, title: "12 Angry Men", year: 1957, genre: "Crime, Drama" },
    { id: 6, title: "Schindler's List", year: 1993, genre: "Biography, Drama, History" },
    { id: 7, title: "The Lord of the Rings: The Return of the King", year: 2003, genre: "Action, Adventure, Drama" },
    { id: 8, title: "Pulp Fiction", year: 1994, genre: "Crime, Drama" },
    { id: 9, title: "The Good, the Bad and the Ugly", year: 1966, genre: "Western" },
    { id: 10, title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, genre: "Action, Adventure, Drama" },
  ];

  return NextResponse.json(movies)
}