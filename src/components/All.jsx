import Card from "./Card";

export default function Cyber_Security() {
  let allData = [
    {
      id: 1,
      title: "How to Render an Array of Objects in React? [in 3 easy steps]",
      author: "Tarun Singh",
      date: "21 Mar, 2024",
      duration: "7 Min Read",
      image: "./images/all1.webp",
      link: "https://www.guvi.in/blog/how-to-render-an-array-of-objects-in-react/",
      authlink: "https://www.guvi.in/blog/author/tarun/",
    },
    {
      id: 2,
      title: "Use ReactJS to Fetch and Display Data from API - 5 Simple Steps",
      author: "Tarun Singh",
      date: "21 Mar, 2024",
      duration: "5 Min Read",
      image: "./images/all2.webp",
      link: "https://www.guvi.in/blog/how-to-fetch-data-using-api-in-react/",
      authlink: "https://www.guvi.in/blog/author/tarun/",
    },
    {
      id: 3,
      title: "Top 10 Unique Project Ideas for College Students",
      author: "Lukesh S",
      date: "21 Mar, 2024",
      duration: "7 Min Read",
      image: "./images/all3.jpg",
      link: "https://www.guvi.in/blog/unique-project-ideas-for-college-students/",
      authlink: "https://www.guvi.in/blog/author/lukesh/",
    },
    {
      id: 4,
      title: "20 Mechanical Engineering Project Ideas",
      author: "Meghana D",
      date: "26 Oct, 2023",
      duration: "8 Min Read",
      image: "./images/all4.webp",
      link: "https://www.guvi.in/blog/mechanical-engineering-project-ideas/",
      authlink: "https://www.guvi.in/blog/author/meghana/",
    },
    {
      id: 5,
      title:
        "30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]",
      author: "Saakshi Priyadarshini",
      date: "03 Dec, 2023",
      duration: "8 Min Read",
      image: "./images/all5.jpg",
      link: "https://www.guvi.in/blog/best-javascript-project-ideas/",
      authlink: "https://www.guvi.in/blog/author/saakshi/",
    },
    {
      id: 6,
      title: "Top 30 Mini Project Ideas For College Students [UPDATED]",
      author: "Srinithi Sankar",
      date: "22 Nov, 2023",
      duration: "5 Min Read",
      image: "./images/all6.webp",
      link: "https://www.guvi.in/blog/top-mini-project-ideas-for-college-students/",
      authlink: "https://www.guvi.in/blog/author/srinithi/",
    },
    {
      id: 7,
      title: "10 Hardest and Easiest Programming Languages in 2024",
      author: "Saakshi Priyadarshini",
      date: "13 Dec, 2023",
      duration: "5 Min Read",
      image: "./images/all7.jpg",
      link: "https://www.guvi.in/blog/easiest-programming-languages-to-hardest-ranked/",
      authlink: "https://www.guvi.in/blog/author/saakshi/",
    },
    {
      id: 8,
      title: "Top 9 TCS Xplore Python Coding Questions [DeCode with GUVI]",
      author: "Archana",
      date: "05 Oct, 2023",
      duration: "7 Min Read",
      image: "./images/all8.png",
      link: "https://www.guvi.in/blog/tcs-xplore-python-coding-questions/",
      authlink: "https://www.guvi.in/blog/author/archana/",
    },
    {
      id: 9,
      title: "How to Setup React Router v6? | Tutorial 2024",
      author: "Tarun Singh",
      date: "13 Dec, 2023",
      duration: "5 Min Read",
      image: "./images/all9.webp",
      link: "https://www.guvi.in/blog/how-to-setup-react-router-v6/",
      authlink: "https://www.guvi.in/blog/author/tarun/",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {allData.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  );
}
