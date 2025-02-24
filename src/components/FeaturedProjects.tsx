'use client'

import React from 'react';
import { GithubIcon, ExternalLink } from 'lucide-react';
import { SiNextdotjs, SiOpenai, SiReact,SiTypescript, SiApacheairflow, SiTailwindcss, SiPrisma, SiMongodb, SiNodedotjs, SiLaravel, SiPhp, SiMysql, SiDocker, SiAmazon, SiDatabricks, SiApachekafka, SiApachespark, SiApacheflink, SiApachehadoop, SiAmazoncloudwatch, SiPython, SiR, SiTableau, SiGithub } from 'react-icons/si';


const techIcons: { [key: string]: JSX.Element } = {
  'Next.js': <SiNextdotjs className="w-4 h-4" />,
  'OpenAI': <SiOpenai className="w-4 h-4" />,
  'React': <SiReact className="w-4 h-4" />,
  'TypeScript': <SiTypescript className="w-4 h-4" />,
  'TailwindCSS': <SiTailwindcss className="w-4 h-4" />,
  'Prisma': <SiPrisma className="w-4 h-4" />,
  'MongoDB': <SiMongodb className="w-4 h-4" />,
  'Node.js': <SiNodedotjs className="w-4 h-4" />,
  'Laravel': <SiLaravel className="w-4 h-4" />,
  'PHP': <SiPhp className="w-4 h-4" />,
  'MySQL': <SiMysql className="w-4 h-4" />,
  'Docker': <SiDocker className="w-4 h-4" />,
  'AWS': <SiAmazon className="w-4 h-4" />,
  'Databricks': <SiDatabricks className="w-4 h-4" />,
  'Kafka': <SiApachekafka className="w-4 h-4" />,
  'Apache Spark': <SiApachespark className="w-4 h-4" />,
  'Apache Flink': <SiApacheflink className="w-4 h-4" />,
  'Hadoop': <SiApachehadoop className="w-4 h-4" />,
  'Airflow':<SiApacheairflow className="w-4 h-4"/>,
  'Python': <SiPython className="w-4 h-4" />,
  'R': <SiR className="w-4 h-4" />,
  'Tableau': <SiTableau className="w-4 h-4" />,
  'GitHub': <SiGithub className="w-4 h-4" />,
};


const projects = [
  {
    title: 'Smart Meal Planner',
    description: 'The project employs object detection and text generation models to analyze images of ingredients and generate personalized recipes based on the detected ingredients, and aims to minimize food waste, optimize healthy meal planning.',
    techStack: ['OCR', 'Transformers', 'DeepLearning', 'RAG', 'YOLO', 'Streamlit'],
    github: 'https://github.com/KowshiReddy/ai_smart_meal_planner',
    stars: 0,
    forks: 1
  },
  {
  title: 'Automated Real-Time Weather Data Pipeline with AWS & Apache Airflow',
  description: ['An ETL pipeline that automates real-time weather data extraction, transformation, and storage in AWS S3 using Apache Airflow.'],
  techStack: ['ETL', 'DAGs', 'AWS', 'Apache Airflow', 'API', 'Rate Limits','OpenWeatherMap API', 'Airflow Scheduling', 'Cron Jobs'],
  github: 'https://github.com/KowshiReddy',
  stars: 0,
  forks: 0
},
  {
    title: 'AI-Driven Stock Market Prediction and Analysis System',
    description: ['Developed an RNN-based stock prediction model using LSTM on Databricks, improving accuracy by 20%', 
      'and enhancing data-driven decision-making with real-time Tableau visualizations.'],
    techStack: ['DataBricks', 'Time Series Analysis', 'Data Normalization', 'RMSE', 'MAPE','Tabealu', 'RNN', 'LSTM'],
    github: 'https://github.com/KowshiReddy',
    stars: 0,
    forks: 0
  },
  {
    title: 'Flight Gain Analysis for United Airlines',
    description: ['Analyzed United Airlines flight delays using statistical methods, revealing that on-time departures improve net gain and operational efficiency,',
     'with significant differences based on flight duration and destination patterns.'],
    techStack: ['R', 'Hypothesis Testing', 'Permutation Tests', 'T-Tests','Pandas', 'NumPy'],
    github: 'https://github.com/KowshiReddy',
    stars: 0,
    forks: 0
  },
  {
    title: 'ShareSafely - File Share Web App',
    description: ['This project provides functionality to upload files to an Amazon S3 bucket, generate presigned URLs for file access with an expiration time, and automatically delete expired files using AWS Lambda.'],
    techStack: ['Java', 'Spring Boot', 'AWS S3', 'AWS KMS', 'AWS IAM','Lambda', 'AWS EC2'],
    github: 'https://github.com/KowshiReddy/ShareSafely',
    stars: 0,
    forks: 0
  },
  {
    title: 'YouTube Statistics Analysis using Tableau and Looker',
    description: ['This project delves into the “Global YouTube Statistics 2023” dataset from Kaggle, aiming to understand trends in YouTube channel growth, popular genres, geographic distribution, and factors influencing channel success.'],
    techStack: ['Tableau', 'Looker', 'Predictive Analysis', 'Data Visualizations'],
    github: 'https://github.com/KowshiReddy',
    stars: 0,
    forks: 0
  }
];

const FeaturedProjects: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] dark:bg-[#151B28] rounded-lg p-3 h-full transition-colors">
      <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 mb-4">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gradient-to-br dark:from-[#1E1E2E] dark:to-[#2D2D44] rounded-lg p-3 flex flex-col justify-between border border-gray-200 dark:border-gray-800/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors"
          >
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-200 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {project.description}
              </p>
              {project.techStack && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    >
                      {techIcons[tech]}
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {/* Add image below tech stack */}
              {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-md mt-3" />
              )}
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">★</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">⑂</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.forks}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;