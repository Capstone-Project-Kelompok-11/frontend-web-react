import { transformDate } from "../../utils/helperMethod";

export const dummyData = [
  {
    id: 1,
    title: "Pengenalan tentang Desain Antarmuka Pengguna 1",
    score: 90,
    description: "lorem ipsum",
  },
  {
    id: 2,
    title: "Desain Visual 1",
    score: 60,
    description: "lorem ipsum",
  },
  {
    id: 3,
    title: "Pengenalan tentang Desain Antarmuka Pengguna 2",
    score: 75,
    description: "lorem ipsum",
  },
  {
    id: 4,
    title: "Desain Visual 2",
    score: 80,
    description: "lorem ipsum",
  },
  {
    id: 5,
    title: "Pengenalan tentang Desain Antarmuka Pengguna 3",
    score: 95,
    description: "lorem ipsum",
  },
  {
    id: 6,
    title: "Desain Visual 3",
    score: 100,
    description: "lorem ipsum",
  },
  {
    id: 7,
    title: "Pengenalan tentang Desain Antarmuka Pengguna 4",
    score: 100,
    description: "lorem ipsum",
  },
];

export const thumbnailCourseContent = [
  {
    id: 1,
    title: "Responsible",
    content: "Gabriel Alexander Dwi Jaka",
  },
  {
    id: 1,
    title: "Last Update",
    content: transformDate(new Date("2023-10-20T12:00:00Z"), "short"),
  },
  {
    id: 1,
    title: "Members",
    content: "10",
  },
  {
    id: 1,
    title: "Price",
    content: "300.000",
  },
  {
    id: 1,
    title: "Level",
    content: "Beginner",
  },
];
