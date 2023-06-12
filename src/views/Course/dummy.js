import { transformDate } from "../../utils/helperMethod";

export const dummyData = [
  {
    id: 1,
    chapterName: "Pengenalan tentang Desain Antarmuka Pengguna 1",
    chapterDes: "lorem ipsum 1",
    score: 90,
  },
  {
    id: 2,
    chapterName: "Desain Visual 1",
    chapterDes: "lorem ipsum 2",
    score: 60,
  },
  {
    id: 3,
    chapterName: "Pengenalan tentang Desain Antarmuka Pengguna 2",
    chapterDes: "lorem ipsum 3",
    score: 75,
  },
  {
    id: 4,
    chapterName: "Desain Visual 2",
    chapterDes: "lorem ipsum 4",
    score: 80,
  },
  {
    id: 5,
    chapterName: "Pengenalan tentang Desain Antarmuka Pengguna 3",
    chapterDes: "lorem ipsum 5",
    score: 95,
  },
  {
    id: 6,
    chapterName: "Desain Visual 3",
    chapterDes: "lorem ipsum 6",
    score: 100,
  },
  {
    id: 7,
    chapterName: "Pengenalan tentang Desain Antarmuka Pengguna 4",
    chapterDes: "lorem ipsum 7",
    score: 100,
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
