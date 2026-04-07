import React from 'react'
import Card from './components/Card.jsx';

const App = () => {
  const jobOpenings = [
  {
    brand_logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company_name: "Google",
    date_posted: "5 days ago",
    post: "Software Engineer",
    tag: "Full Time",
    tag2: "Junior",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brand_logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company_name: "Apple",
    date_posted: "2 days ago",
    post: "iOS Developer",
    tag: "Full Time",
    tag2: "Senior",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brand_logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    company_name: "Meta",
    date_posted: "1 week ago",
    post: "Frontend Developer (React)",
    tag: "Part Time",
    tag2: "Junior",
    pay: "$40/hr",
    location: "Remote"
  },
  {
    brand_logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    company_name: "Amazon",
    date_posted: "3 days ago",
    post: "Backend Engineer (Java)",
    tag: "Full Time",
    tag2: "Senior",
    pay: "$55/hr",
    location: "Seattle, USA"
  },
  {
    brand_logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company_name: "Netflix",
    date_posted: "4 days ago",
    post: "Full Stack Developer",
    tag: "Full Time",
    tag2: "Senior",
    pay: "$70/hr",
    location: "Los Gatos, USA"
  },
  {
    brand_logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company_name: "Microsoft",
    date_posted: "6 days ago",
    post: "Cloud Engineer (Azure)",
    tag: "Full Time",
    tag2: "Junior",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brand_logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    company_name: "Adobe",
    date_posted: "2 weeks ago",
    post: "UI/UX Developer",
    tag: "Part Time",
    tag2: "Senior",
    pay: "$48/hr",
    location: "Noida, India"
  },
  {
    brand_logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    company_name: "Tesla",
    date_posted: "1 day ago",
    post: "Embedded Systems Engineer",
    tag: "Full Time",
    tag2: "Senior",
    pay: "$65/hr",
    location: "Austin, USA"
  },
  {
    brand_logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    company_name: "NVIDIA",
    date_posted: "3 days ago",
    post: "AI/ML Engineer",
    tag: "Full Time",
    tag2: "Junior",
    pay: "$75/hr",
    location: "Santa Clara, USA"
  },
  {
    brand_logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    company_name: "IBM",
    date_posted: "5 days ago",
    post: "DevOps Engineer",
    tag: "Part Time",
    tag2: "Senior",
    pay: "$42/hr",
    location: "Pune, India"
  }
];
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem){
        return <Card company_name={elem.company_name} tag={elem.tag} tag2={elem.tag2} post={elem.post} pay={elem.pay} location={elem.location} brand_logo={elem.brand_logo}/>;
      })}
      
    </div>
  )
}

export default App
