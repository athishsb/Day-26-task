import Card from "./Card";

export default function Cyber_Security() {
  let csData = [
    {
      id: 1,
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author: "Tushar Vinocha",
      date: "04 Oct, 2023",
      duration: "5 Min Read",
      image: "./images/cs1.webp",
      link: "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
      authlink: "https://www.guvi.in/blog/author/tushar/",
    },
    {
      id: 2,
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author: "Jaishree Tomar",
      date: "04 Dec, 2023",
      duration: "3 Min Read",
      image: "./images/cs2.webp",
      link: "https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/",
      authlink: "https://www.guvi.in/blog/author/jaishree/",
    },
    {
      id: 3,
      title: "8 Different Types of Cybersecurity and Threats Involved",
      author: "Tushar Vinocha",
      date: "08 Sep, 2023",
      duration: "4 Min Read",
      image: "./images/cs3.png",
      link: "https://www.guvi.in/blog/types-of-cybersecurity/",
      authlink: "https://www.guvi.in/blog/author/tushar/",
    },
    {
      id: 4,
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      author: "Tushar Vinocha",
      date: "04 Oct, 2023",
      duration: "4 Min Read",
      image: "./images/cs4.gif",
      link: "https://www.guvi.in/blog/what-is-cybersecurity/",
      authlink: "https://www.guvi.in/blog/author/tushar/",
    },
    {
      id: 5,
      title: "What Is Hacking? Types of Hacking & More",
      author: "Meghana D",
      date: "25 Mar, 2024",
      duration: "6 Min Read",
      image: "./images/cs5.webp",
      link: "https://www.guvi.in/blog/what-is-hacking/",
      authlink: "https://www.guvi.in/blog/author/meghana/",
    },
    {
      id: 6,
      title:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      author: "Tushar Vinocha",
      date: "25 Mar, 2024",
      duration: "4 Min Read",
      image: "./images/cs6.webp",
      link: "https://www.guvi.in/blog/coding-for-cybersecurity/",
      authlink: "https://www.guvi.in/blog/author/tushar/",
    },
    {
      id: 7,
      title: "Top 7 Cyber Security Attacks in Real Life",
      author: "Lahari Chandana",
      date: "05 Oct, 2023",
      duration: "3 Min Read",
      image: "./images/cs7.jpg",
      link: "https://www.guvi.in/blog/cyber-security-attacks-in-real-life/",
      authlink: "https://www.guvi.in/blog/author/lahari-chandana/",
    },
    {
      id: 8,
      title:
        "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      author: "Tushar Vinocha",
      date: "07 Oct, 2023",
      duration: "3 Min Read",
      image: "./images/cs8.webp",
      link: "https://www.guvi.in/blog/cybersecurity-certifications/",
      authlink: "https://www.guvi.in/blog/author/tushar/",
    },
    {
      id: 9,
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      author: "Srinithi Sankar",
      date: "23 Mar, 2024",
      duration: "3 Min Read",
      image: "./images/cs9.webp",
      link: "https://www.guvi.in/blog/cybersecurity-jobs-the-ultimate-beginners-guide-with-roadmap/",
      authlink: "https://www.guvi.in/blog/author/srinithi/",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {csData.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  );
}
