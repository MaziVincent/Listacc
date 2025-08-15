import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCode, FaMobile, FaCloud, FaBrain, FaDatabase, FaCog } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";

function Services() {
  const services = [
    {
      icon: <FaCode className="text-4xl text-textColorOne" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs. We build scalable, secure, and efficient applications that streamline your operations.",
      features: ["Enterprise Applications", "Desktop Software", "API Development", "System Integration"]
    },
    {
      icon: <FaMobile className="text-4xl text-textColorOne" />,
      title: "Web & Mobile Development",
      description: "Modern, responsive websites and cross-platform mobile applications that provide exceptional user experiences across all devices.",
      features: ["Responsive Web Design", "Progressive Web Apps", "iOS & Android Apps", "E-commerce Solutions"]
    },
    {
      icon: <FaCloud className="text-4xl text-textColorOne" />,
      title: "Cloud Solutions",
      description: "Migrate to the cloud with confidence. We provide secure, scalable cloud infrastructure and services that reduce costs and improve performance.",
      features: ["Cloud Migration", "AWS/Azure Services", "DevOps & CI/CD", "Cloud Architecture"]
    },
    {
      icon: <FaBrain className="text-4xl text-textColorOne" />,
      title: "AI & Data Analytics",
      description: "Harness the power of artificial intelligence and data analytics to gain insights, automate processes, and make data-driven decisions.",
      features: ["Machine Learning", "Data Visualization", "Predictive Analytics", "AI Chatbots"]
    },
    {
      icon: <FaDatabase className="text-4xl text-textColorOne" />,
      title: "Database Solutions",
      description: "Design, implement, and optimize database systems that ensure your data is secure, accessible, and performs at peak efficiency.",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"]
    },
    {
      icon: <MdSecurity className="text-4xl text-textColorOne" />,
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive security solutions including vulnerability assessments and security implementations.",
      features: ["Security Audits", "Penetration Testing", "Compliance Solutions", "Security Training"]
    },
    {
      icon: <FaCog className="text-4xl text-textColorOne" />,
      title: "Software Maintenance",
      description: "Keep your software running smoothly with our comprehensive maintenance and support services, ensuring optimal performance.",
      features: ["Bug Fixes", "Performance Updates", "Feature Enhancements", "Technical Support"]
    },
    {
      icon: <BiSupport className="text-4xl text-textColorOne" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to help you make informed decisions about your IT infrastructure and digital transformation journey.",
      features: ["Technology Strategy", "Digital Transformation", "IT Roadmapping", "Vendor Selection"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, understand your business goals, and create a comprehensive project plan."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the system architecture and user interface to ensure optimal performance and user experience."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using best practices, with rigorous testing throughout the development process."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support to ensure smooth operation and continuous improvement."
    }
  ];

  return (
    <div className="font-Sora">
      {/* Hero Section */}
      <div className="bg-[#1a2c58] h-[480px] flex justify-center items-center flex-col">
        <h1 className="w-[90%] text-center xs:text-[40px] lg:text-[76px] text-white my-[20px] font-BeVietnam">
          Our Services
        </h1>
        <p className="text-white text-center text-lg max-w-2xl px-4">
          Comprehensive software development services to transform your business
        </p>
        <RiArrowDropDownLine className="text-white xs:text-[40px] lg:text-[75px]" />
      </div>

      {/* Services Grid */}
      <div className="py-[80px] px-[20px] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <button className="py-[10px] px-[20px] text-textColorOne bg-sectionthreecolor rounded-full text-[13px] font-bold mb-4">
              OUR EXPERTISE
            </button>
            <h2 className="text-[44px] font-bold text-dropdown mb-4">
              Software Solutions That Drive Success
            </h2>
            <p className="text-[#868D98] text-lg max-w-3xl mx-auto">
              From custom software development to AI-powered solutions, we deliver cutting-edge technology 
              that helps businesses thrive in the digital age.
            </p>
          </div>

          <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dropdown mb-3">
                  {service.title}
                </h3>
                <p className="text-[#868D98] mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-textColorOne flex items-center">
                      <span className="w-2 h-2 bg-textColorOne rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-[80px] px-[20px] bg-sectionthreecolor">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <button className="py-[10px] px-[20px] text-textColorOne bg-white rounded-full text-[13px] font-bold mb-4">
              OUR PROCESS
            </button>
            <h2 className="text-[44px] font-bold text-dropdown mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-[#868D98] text-lg max-w-3xl mx-auto">
              Our proven development methodology ensures successful project delivery from concept to deployment.
            </p>
          </div>

          <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-textColorOne text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-dropdown mb-3">
                  {step.title}
                </h3>
                <p className="text-[#868D98] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-[80px] px-[20px] bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[44px] font-bold text-dropdown mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[#868D98] text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our software development expertise can help you achieve your business goals. 
            Contact us today for a free consultation.
          </p>
          <div className="flex xs:flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-textColorOne text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all">
              Get Free Consultation
            </button>
            <button className="border-2 border-textColorOne text-textColorOne px-8 py-4 rounded-full font-bold hover:bg-textColorOne hover:text-white transition-all">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
