import Card from "./Card";

export default function Cyber_Security() {
  let careerData = [
    {
      id: 1,
      title: "How to Become a Civil Engineer in India | Career Roadmap 2024",
      author: "Saanchi Bhardwaj",
      date: "25 Mar, 2024",
      duration: "4 Min Read",
      image: "./images/c1.webp",
      link: "https://www.guvi.in/blog/how-to-become-a-civil-engineer-in-india/",
      authlink: "https://www.guvi.in/blog/author/saanchi/"
    },
    {
      id: 2,
      title: "How To Make A Career Switch To Data Science?",
      author: "Archana",
      date: "24 Mar, 2024",
      duration: "3 Min Read",
      image: "./images/c2.webp",
      link: "https://www.guvi.in/blog/career-switch-from-non-it-to-data-science/",
      authlink: "https://www.guvi.in/blog/author/archana/"
    },
    {
      id: 3,
      title: "A Complete DevOps Career Roadmap in 2024",
      author: "Lukesh S",
      date: "24 Mar, 2024",
      duration: "6 Min Read",
      image: "./images/c3.webp",
      link: "https://www.guvi.in/blog/a-complete-devops-career-roadmap/",
      authlink: "https://www.guvi.in/blog/author/lukesh/"
    },
    {
      id: 4,
      title: "Fascinating Career Opportunities in Civil Engineering in 2024",
      author: "Lukesh S",
      date: "24 Mar, 2024",
      duration: "7 Min Read",
      image: "./images/c4.webp",
      link: "https://www.guvi.in/blog/career-opportunities-in-civil-engineering/",
      authlink: "https://www.guvi.in/blog/author/lukesh/"
    },
    {
      id: 5,
      title: "Exploring Lucrative Data Science Career Opportunities",
      author: "Jaishree Tomar",
      date: "24 Mar, 2024",
      duration: "5 Min Read",
      image: "./images/c5.webp",
      link: "https://www.guvi.in/blog/top-data-science-career-opportunities-and-salary/",
      authlink: "https://www.guvi.in/blog/author/jaishree/"
    },
    {
      id: 6,
      title: "8 Mistakes To Avoid When You Begin a Data Science Career",
      author: "Srinithi Sankar",
      date: "24 Mar, 2024",
      duration: "7 Min Read",
      image: "./images/c6.webp",
      link: "https://www.guvi.in/blog/mistakes-to-avoid-when-you-begin-a-data-science-career/",
      authlink: "https://www.guvi.in/blog/author/srinithi/"
    },
    {
      id: 7,
      title: "Top 12 Career Opportunities for UI/UX Design",
      author: "Srinithi Sankar",
      date: "24 Mar, 2024",
      duration: "6 Min Read",
      image: "./images/c7.webp",
      link: "https://www.guvi.in/blog/top-career-opportunities-for-ui-ux-design/",
      authlink: "https://www.guvi.in/blog/author/srinithi/"
    },
    {
      id: 8,
      title: "6 Best Career Opportunities in Cloud Computing Engineering",
      author: "Srinithi Sankar",
      date: "23 Mar, 2024",
      duration: "5 Min Read",
      image: "./images/c8.webp",
      link: "https://www.guvi.in/blog/career-opportunities-in-cloud-computing-engineering/",
      authlink: "https://www.guvi.in/blog/author/srinithi/"
    },
    {
      id: 9,
      title: "5 Career Opportunities for Full Stack Development",
      author: "Meghana D",
      date: "23 Mar, 2024",
      duration: "4 Min Read",
      image: "./images/c9.jpg",
      link: "https://www.guvi.in/blog/career-opportunities-for-full-stack-development/",
      authlink: "https://www.guvi.in/blog/author/meghana/"
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {careerData.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  );
}
