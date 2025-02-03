import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Experience = () => {
  const projects = [
    {
      image: "./Energy.png",
      title: "Research Analyst Intern",
      company: "Energy Terminal (Remote)",
      duration: "May 2024 – October 2024",
      description: [
        "Collaborated with a global team of 14 researchers to analyze energy sector trends and simulate energy policy scenarios using the En-ROADS simulator, achieving a proposed energy mix projected to limit global warming to 2°C while addressing socioeconomic factors like urbanization and deforestation.",
        "Conducted over 15 expert interviews and literature reviews to assess renewable energy integration strategies, delivering a comprehensive report on sustainable energy practices that informed stakeholders about viable pathways to reduce carbon emissions by 20% by 2030.",
      ],
    },
    {
      image: "./extern.png",
      title: "Freshwater and Community Conservation Extern",
      company:
        "Paragon One, National Geographic Society & The Nature Conservancy (Remote)",
      duration: "February 2024 - April 2024",
      description: [
        "Led community surveys and interviews with over 100 residents around Lake Victoria to assess the socioeconomic impact of water hyacinth proliferation, delivering insights that informed policies to mitigate a 30% decline in fishing yields and improve waterway accessibility.",
        "Collaborated with local authorities and community groups to implement sustainable uses for water hyacinth, such as biogas production and basket crafting, empowering 50+ households with alternative livelihoods while preserving the lake's ecosystem and biodiversity.",
      ],
    },
    {
      image: "./farm.png",
      title: "Solar PV System Design Project Intern",
      company: "Kariki Bondet Farm (Laikipia, KE)",
      duration: "January 2023 - December 2023",
      description: [
        "Designed engineering drawings and layouts using AutoCAD for a 100-kW solar PV system, optimizing panel placement to achieve a 15% increase in energy efficiency while meeting site-specific safety standards.",
        "Analyzed energy consumption data for over 30 operational units using Excel, identifying patterns that reduced energy waste by 20% and informed the sizing of solar inverters and battery storage.",
        "Collaborated with a multidisciplinary team during site visits to inspect installations and ensure compliance with safety codes, contributing to the successful commissioning of a solar system projected to save $8,000 annually in energy costs.",
      ],
    },
    {
      image: "./kplc.png",
      title: "Operation & Maintenance Intern",
      company: "Kenya Power & Lighting Company (Laikipia, KE)",
      duration: "May 2022 - August 2022",
      description: [
        "Inspected and maintained high-tension (HT) and low-voltage (LV) lines, improving network reliability by 15% through early issue detection, using troubleshooting and diagnostic skills.",
        "Replaced damaged utility poles and realigned leaning ones, enhancing structural stability and reducing outages by 10%, leveraging knowledge of electrical infrastructure and safety standards.",
        "Performed transformer inspections and fault-finding on the HT and LV network, reducing downtime by 20% and minimizing transformer failure rates, utilizing preventive maintenance and repair expertise",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <div className="text-center pb-10">
        <span className="text-4xl font-bold text-gray-50 block">“</span>
        <p className="text-lg text-black font-bold">
          "Below is a collection of my experiences that showcase my passion for efficiency, creativity, and meaningful impact."
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-cover bg-center bg-gradient-to-r from-blue-100 via-teal-100 to-lime-100 animate-gradient shadow-lg rounded-lg overflow-hidden p-6 mb-6 border border-gray-200"
        >
          {/* Left side - Project Image */}
          <div className="md:w-1/3 w-full flex justify-center mb-4 md:mb-0">
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-48 md:h-64 md:w-64 object-cover rounded-lg"
            />
          </div>

          {/* Right side - Project Details */}
          <div className="md:w-2/3 w-full flex flex-col justify-center md:pl-6">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.company}</p>
            <p className="text-gray-500 text-sm mb-2">{project.duration}</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {project.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;