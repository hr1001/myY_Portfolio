import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FiMapPin, FiBriefcase, FiBook } from "react-icons/fi";

export default function ExperiencePage() {
  const data = [
    {
      title: "Apr 2020 - Present",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Senior Full-Stack Engineer / AI Integration Lead
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-neutral-400 text-xs sm:text-sm">
              <span className="font-medium">Fujitsu Ltd.</span>
              <span className="hidden sm:inline">•</span>
              <span>Kawasaki, Japan</span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <p className="leading-relaxed">
                Leading AI integration initiatives and architecting enterprise-scale microservices solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Architected and deployed backend microservices using Node.js, Spring Boot, and Kubernetes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Integrated AI models into enterprise solutions aligned with Fujitsu&apos;s Zinrai AI initiative
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Built and maintained APIs for high-volume enterprise users
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Mentored developers on full-stack practices including React, TypeScript, and CI/CD
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Ensured GDPR and ISO27001 compliance across all projects
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2016 - Mar 2020",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Full-Stack Developer
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-neutral-400 text-xs sm:text-sm">
              <span className="font-medium">Rakuten, Inc.</span>
              <span className="hidden sm:inline">•</span>
              <span>Tokyo, Japan</span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <p className="leading-relaxed">
                Developed e-commerce platform features and optimized performance for high-traffic applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Developed personalization & recommendation features for Rakuten Ichiba e-commerce platform
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Implemented APIs in Java (Spring Boot) and Node.js
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Optimized database queries resulting in improved performance during peak campaigns
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Automated CI/CD pipelines for seamless deployments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Worked in a bilingual agile team environment
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Apr 2013 - Dec 2015",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Backend Engineer
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-neutral-400 text-xs sm:text-sm">
              <span className="font-medium">NEC Corporation</span>
              <span className="hidden sm:inline">•</span>
              <span>Tokyo, Japan</span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <p className="leading-relaxed">
                Developed smart city IoT solutions and AI-driven traffic analysis systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Developed backend systems for smart city IoT pilot projects in Kawasaki
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Integrated AI-driven traffic analysis for urban planning applications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Implemented authentication/authorization using OAuth2 and JWT
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Produced bilingual technical documentation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Improved monitoring systems resulting in reduced incident response time
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Apr 2009 - Mar 2013",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Bachelor of Engineering in Computer Science
            </h3>
            <div className="flex items-center gap-2 text-neutral-400 text-xs sm:text-sm">
              <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Tokyo Institute of Technology, Tokyo, Japan</span>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Specialized in software engineering, distributed systems, and artificial intelligence. 
              Completed final-year project on AI-driven traffic prediction models, laying the foundation 
              for future work in AI integration and smart city solutions.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Timeline data={data} />
    </div>
  );
}
