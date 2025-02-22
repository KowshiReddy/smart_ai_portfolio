import React from 'react';

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  date: string;
  location?: string;
  description?: string;
  skills?: string[];
}

const experienceItems: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Graduate Research Assitant',
    organization: 'University at Buffalo',
    date: 'Oct 2024 - Dec 2024 · 3 months',
    location: 'Buffalo, United States',
    description: "Engineered a machine learning model using bagging and boosting algorithms (Random Forest, XGBoost) to categorize crime types in Los Angeles, applied hotspot clustering (DBSCAN, HDBSCAN) to identify high-risk areas, and used LDA with clustering (BIRCH, Mini Batch KMeans, OPTICS) to analyze crime descriptions, integrating LSTM models for crime forecasting.",
    skills: ['Machine Learning','Hotspot Clustering', 'LDA with Clustering', 'LSTM' ]
  },

  {
    type: 'experience',
    title: 'Software Engineer Intern - ML',
    organization: 'One Park Financial',
    date: 'May 2024 - Oct 2024 · 6 months',
    location: 'Texas, United States',
    description: "Developed a hybrid recommendation microservice with Flask and RabbitMQ, optimized SQL functions in PostgreSQL for customer segmentation, and improved financial product promotions through A/B testing in Google Optimize and Maintained data pipeline uptime using Spark, Snowflake, and Python.",
    skills: ['Python', 'Flask', 'RabbitMQ', 'PostgreSQL', 'Spark', 'Snowflake', 'A/B Testing', 'Data Pipelines','Big Data Processing', 'ETL']
  },
  {
    type: 'experience',
    title: 'Data Engineer',
    organization: 'Contriver',
    date: 'Aug 2020 - Apr 2024 · 2 years 9 months',
    location: 'Benguluru, India',
    description: "Development of Migrated data storage from SQL Server to AWS Redshift, built an ingestion framework with AWS Glue, deployed a real-time data pipeline using Kafka and PySpark, implemented data quality checks with Lambda and CloudWatch, optimized SQL queries in Redshift, and designed Power BI dashboards for real-time insights.",
    skills: ['AWS Redshift', 'SQL', 'AWS Glue', 'Apache Kafka', 'PySpark', 'AWS Lambda', 'CloudWatch', 'ETL', 'Data Warehousing', 'Power BI', 'Data Pipeline Optimization', 'SQL Performance Tuning', 'Git','Jenkins']
  }
];
const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
  <div className="mb-8">
    <div className="ml-6 p-6 bg-gray-50 dark:bg-gradient-to-br dark:from-[#1E1E2E] dark:to-[#2D2D44] rounded-lg shadow-lg border border-gray-200 dark:border-gray-800/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{item.organization}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{item.date}</p>
      {item.location && (
        <p className="text-sm text-gray-500 dark:text-gray-500">{item.location}</p>
      )}
      {item.description && (
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
      )}
      {item.skills && (
        <div className="mt-2 flex flex-wrap gap-2">
          {item.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#F8FAFC] dark:bg-[#151B28] rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Timeline</h1>
      <div className="grid grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Experience</h2>
          {experienceItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
