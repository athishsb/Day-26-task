import Card from "./Card";

export default function Full_Stack_Development() {
  let fsdData = [
    {
      id: 1,
      title: "Best Full-Stack Development Project Ideas in 2024",
      author: "Isha Sharma",
      date: "13 Dec, 2023",
      duration: "4 Min Read",
      image: "./images/fsd1.jpg",
      link: "https://www.guvi.in/blog/full-stack-development-project-ideas/",
      authlink: "https://www.guvi.in/blog/author/isha/",
    },
    {
      id: 2,
      title: "How Long Would It Take to Be a Full Stack Developer?",
      author: "Meghana D",
      date: "20 Oct, 2023",
      duration: "3 Min Read",
      image: "./images/fsd2.webp",
      link: "https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/",
      authlink: "https://www.guvi.in/blog/author/meghana/",
    },
    {
      id: 3,
      title: "How does Apache work? A detailed introduction to Apache",
      author: "Tushar Vinocha",
      date: "03 Oct, 2023",
      duration: "4 Min Read",
      image: "./images/fsd3.png",
      link: "https://www.guvi.in/blog/how-does-apache-work/",
      authlink: "https://www.guvi.in/blog/author/tushar/",
    },
    {
      id: 4,
      title:
        "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [UPDATED]",
      author: "Archana",
      date: "14 Dec, 2023",
      duration: "6 Min Read",
      image: "./images/fsd4.webp",
      link: "https://www.guvi.in/blog/full-stack-developer-syllabus/",
      authlink: "https://www.guvi.in/blog/author/archana/",
    },
    {
      id: 5,
      title: "6 Essential Prerequisites For Learning ReactJS",
      author: "Ramkumar",
      date: "06 Oct, 2023",
      duration: "3 Min Read",
      image: "./images/fsd5.jpg",
      link: "https://www.guvi.in/blog/prerequisites-for-reactjs/",
      authlink: "https://www.guvi.in/blog/author/ramkumar/",
    },
    {
      id: 6,
      title: "10 Best Database Management Systems For Software Developers",
      author: "Isha Sharma",
      date: "22 Mar, 2024",
      duration: "4 Min Read",
      image: "./images/fsd6.webp",
      link: "https://www.guvi.in/blog/database-management-systems-for-developers/",
      authlink: "https://www.guvi.in/blog/author/isha/",
    },
    {
      id: 7,
      title: "Best Web Development Roadmap for Beginners 2024",
      author: "Isha Sharma",
      date: "14 Dec, 2023",
      duration: "5 Min Read",
      image: "./images/fsd7.jpg",
      link: "https://www.guvi.in/blog/web-development-roadmap-for-beginners/",
      authlink: "https://www.guvi.in/blog/author/isha/",
    },
    {
      id: 8,
      title: "7 Best Full-Stack Development Online Courses [2024]",
      author: "Srinithi Sankar",
      date: "13 Dec, 2023",
      duration: "5 Min Read",
      image: "./images/fsd8.webp",
      link: "https://www.guvi.in/blog/best-full-stack-development-online-courses/",
      authlink: "https://www.guvi.in/blog/author/srinithi/",
    },
    {
      id: 9,
      title: "8 Top Full Stack Web Developer Coding Projects For You!",
      author: "Archana",
      date: "06 Oct, 2023",
      duration: "8 Min Read",
      image: "./images/fsd9.jpg",
      link: "https://www.guvi.in/blog/top-full-stack-web-developer-coding-projects/",
      authlink: "https://www.guvi.in/blog/author/archana/",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {fsdData.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  );
}
