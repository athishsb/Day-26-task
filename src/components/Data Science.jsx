import Card from "./Card";

export default function Data_Science() {
  let dsData = [
    {
      id: 1,
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      author: "Lukesh S",
      date: "21 Oct, 2023",
      duration: "7 Min Read",
      image: "./images/ds1.webp",
      link: "https://www.guvi.in/blog/real-world-data-science-examples/",
      authlink: "https://www.guvi.in/blog/author/lukesh/",
    },
    {
      id: 2,
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author: "Isha Sharma",
      date: "13 Dec, 2023",
      duration: "6 Min Read",
      image: "./images/ds2.webp",
      link: "https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/",
      authlink: "https://www.guvi.in/blog/author/isha/",
    },
    {
      id: 3,
      title: "Can A Commerce Student Do Data Science?",
      author: "Saakshi Priyadarshini",
      date: "08 Sep, 2023",
      duration: "3 Min Read",
      image: "./images/ds3.webp",
      link: "https://www.guvi.in/blog/can-commerce-students-do-data-science/",
      authlink: "https://www.guvi.in/blog/author/saakshi/",
    },
    {
      id: 4,
      title: "Roles and Responsibilities of a Data Scientist",
      author: "Jaishree Tomar",
      date: "20 Oct, 2023",
      duration: "5 Min Read",
      image: "./images/ds4.webp",
      link: "https://www.guvi.in/blog/roles-and-responsibilities-of-a-data-scientist/",
      authlink: "https://www.guvi.in/blog/author/jaishree/",
    },
    {
      id: 5,
      title: "How to become a Data Scientist after Mechanical Engineering?",
      author: "Lahari Chandana",
      date: "03 Oct, 2023",
      duration: "3 Min Read",
      image: "./images/ds5.jpg",
      link: "https://www.guvi.in/blog/how-to-become-data-scientist-after-mechanical-engineering/",
      authlink: "https://www.guvi.in/blog/author/lahari-chandana/",
    },
    {
      id: 6,
      title: "Data Science vs Data Analytics | Best Career Choice in 2024",
      author: "Lahari Chandana",
      date: "16 Mar, 2024",
      duration: "3 Min Read",
      image: "./images/ds6.webp",
      link: "https://www.guvi.in/blog/data-science-vs-data-analytics-career/",
      authlink: "https://www.guvi.in/blog/author/lahari-chandana/",
    },
    {
      id: 7,
      title: "Top Product-Based Companies for Data Scientists in 2024",
      author: "Jaishree Tomar",
      date: "13 Dec, 2023",
      duration: "4 Min Read",
      image: "./images/ds7.webp",
      link: "https://www.guvi.in/blog/top-product-based-companies-for-data-scientists/",
      authlink: "https://www.guvi.in/blog/author/jaishree/",
    },
    {
      id: 8,
      title: "How Long Would It Take to Learn Data Science?",
      author: "Meghana D",
      date: "20 Oct, 2023",
      duration: "4 Min Read",
      image: "./images/ds8.png",
      link: "https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/",
      authlink: "https://www.guvi.in/blog/author/meghana/",
    },
    {
      id: 9,
      title: "Top Product-Based Companies for Data Science Freshers",
      author: "Jaishree Tomar",
      date: "10 Nov, 2023",
      duration: "4 Min Read",
      image: "./images/ds9.webp",
      link: "https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/",
      authlink: "https://www.guvi.in/blog/author/jaishree/",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {dsData.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  );
}
