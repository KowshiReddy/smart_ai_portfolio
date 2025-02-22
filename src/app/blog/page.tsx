import Image from "next/image";

export const metadata = {
  title: "Education | Kowshika Reddy",
  description: "Master's in University at Buffalo - Learn about Kowshika Reddy's academic journey and achievements.",
};

export default function EducationPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Education
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3">
          <Image
            src="/images/university_at_buffalo.png"
            alt="University at Buffalo"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Master’s in Computer Science
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            <strong>University at Buffalo</strong>
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Aug 2023 - Dec 2024 | Buffalo, United States
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Focused on Machine Learning, AI, and Big Data technologies. Conducted research in crime pattern analysis and predictive modeling using deep learning and clustering algorithms.
          </p>
        </div>
      </div>
    </section>
  );
}
