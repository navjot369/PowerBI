"use client";
import { apiLink } from "@/app/api";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sec1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post(apiLink + "/contact", formData);
      // Reset form data after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      console.log(res);
      alert("thanks for reaching us!!");
      // Optionally, display a success message or redirect the user
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (display error message, log to console, etc.)
    }
  };
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showRefunds, setShowRefunds] = useState(false);

  // Function to toggle visibility of popups
  const toggleTerms = () => setShowTerms(!showTerms);
  const togglePrivacy = () => setShowPrivacy(!showPrivacy);
  const toggleRefunds = () => setShowRefunds(!showRefunds);

  return (
    <div className="flex flex-col md:flex-row pt-24 max-w-7xl mx-auto mb-14 md:mb-24 items-center">
      <div className="w-full md:w-1/2 px-4 md:px-11 flex flex-col justify-between items-stretch">
        <div className="text-6xl font-bold">Contact Us</div>
        <div className="w-28 my-2 h-1 bg-[repeating-linear-gradient(135deg,transparent_0%,transparent_10%,#ff9635_10%,#ff9635_30%)]"></div>
        <div className="my-11">
          <div className="my-2 flex items-end text-[#9f9696] text-lg">
            <Image
              className="w-6 mr-4"
              src="/Icons/location.svg"
              width="50"
              height="50"
              alt="Icons"
            />
            <span className="">Old Bishan Nagar, Patiala - 147001 , Punjab, India</span>
          </div>
          <div className="my-2 flex items-end text-[#9f9696] text-lg">
            <Image
              className="w-6 mr-4"
              src="/Icons/mail.svg"
              width="50"
              height="50"
              alt="Icons"
            />
            <span className="">coursesforcareers.tech@gmail.com</span>
          </div>
          <div className="my-2 flex items-end text-[#9f9696] text-lg">
            <Image
              className="w-6 mr-4"
              src="/Icons/phone.svg"
              width="50"
              height="50"
              alt="Icons"
            />
            <span className="">+91 9815260084</span>
          </div>
        </div>
        <div className="flex">
          <span className="text-lg font-bold mr-8">Keep in touch</span>
          <Link href="https://www.linkedin.com/company/coursesforcareers-dot-tech/" className="ml-11">
            <Image
              src="/Icons/linkedin.svg"
              width="50"
              height="50"
              className="w-8 h-8 mr-2 hover:scale-105 duration-300"
              alt="Social media Logo"
            />
            </Link>
            <Link href="https://www.instagram.com/coursesforcareers.tech?igsh=a2VoYmlrdXdsMHRr">
            <Image
              src="/Icons/instagram.png"
              width="50"
              height="50"
              className="w-8 h-8 mr-2 hover:scale-105 duration-300"
              alt="Social media Logo"
            />
            </Link>
        </div>
        <div>
          <iframe
            className="h-44 w-full my-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751352098286!2d76.65720287664696!3d30.516086474689523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1704803282071!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col text-blue-400">
          <a href="#" onClick={toggleTerms}>
            Terms and Conditions
          </a>
          <a href="#" onClick={togglePrivacy}>
            Privacy
          </a>
          <a href="#" onClick={toggleRefunds}>
            Refunds/Cancellations
          </a>
        </div>
      </div>
      {showTerms && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <div className="h-[450px] overflow-scroll">
              By enrolling in any course offered by CoursesForTech, you agree to
              abide by these terms and conditions. Payment: Payment for courses
              must be made in full prior to accessing course materials unless
              otherwise stated. Course Access: Upon payment, you will be granted
              access to the course materials for the duration specified in the
              course description. Intellectual Property: All course materials,
              including but not limited to videos, texts, and assessments, are
              the intellectual property of CoursesForTech and may not be
              distributed or reproduced without permission. Refunds: Refunds are
              only available within the first 7 days of course enrollment,
              provided no more than 20% of the course materials have been
              accessed. Code of Conduct: Participants must conduct themselves
              respectfully in all course interactions, refraining from
              harassment or discrimination based on race, gender, religion, or
              any other protected characteristic. Disclaimer: CoursesForTech
              endeavors to provide accurate and up-to-date information, but does
              not guarantee the completeness or accuracy of course content.
              Modification of Terms: CoursesForTech reserves the right to modify
              these terms and conditions at any time, with changes being
              effective upon posting on the CoursesForTech website. Termination
              of Access: CoursesForTech reserves the right to terminate access
              to courses for individuals who violate these terms and conditions
              or engage in disruptive behavior. By enrolling in a course with
              CoursesForTech, you acknowledge that you have read, understood,
              and agreed to abide by these terms and conditions.{" "}
            </div>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={toggleTerms}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Popup for Privacy Policy */}
      {showPrivacy && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="h-[450px] overflow-scroll">
              Information Collection: CoursesForTech may collect personal
              information such as name, email address, and payment details when
              you register for a course or interact with our website. Use of
              Information: Personal information collected by CoursesForTech is
              used solely for the purpose of providing and improving our
              services, including course delivery, customer support, and
              communication regarding course updates or promotions. Data
              Security: CoursesForTech employs industry-standard security
              measures to protect your personal information from unauthorized
              access, disclosure, alteration, or destruction. Third-Party
              Services: CoursesForTech may utilize third-party services, such as
              payment processors or analytics tools, which may collect
              additional information subject to their respective privacy
              policies. Cookies: CoursesForTech may use cookies and similar
              technologies to enhance your browsing experience and collect usage
              data. You have the option to disable cookies in your browser
              settings, although this may affect certain functionalities of the
              website. Data Retention: CoursesForTech retains personal
              information only for as long as necessary to fulfill the purposes
              for which it was collected or as required by law. Disclosure of
              Information: CoursesForTech will not disclose your personal
              information to third parties except as necessary to provide our
              services or as required by law.
            </div>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={togglePrivacy}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Popup for Refunds/Cancellations */}
      {showRefunds && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Refunds/Cancellations</h2>
            <div className="h-[450px] overflow-scroll">
              Refund Eligibility: CoursesForTech offers refunds under the
              following conditions: If requested within 7 days of course
              enrollment. If the course exam is failed after completing all
              course requirements. Refund Process: Refund requests must be
              submitted in writing to CoursesForTech's support team. For exam
              failure refunds, proof of completion of all course requirements
              and exam failure may be required. Cancellation Policy: You may
              cancel your course enrollment at any time. If cancellation occurs
              within the first 7 days of enrollment, you are eligible for a full
              refund. After the initial 7-day period, refunds are only available
              if you fail the course exam after completing all requirements.
              Exam Failure Refunds: To qualify for a refund due to exam failure,
              you must have completed all course requirements prior to taking
              the exam. Proof of exam failure may be required to process the
              refund. Processing Time: Refunds will be processed within 30 days
              of receiving a valid refund request. Exceptions: Refunds will not
              be provided for failure to pass an exam if you have not completed
              all course requirements. Refunds will not be provided for any
              other reason beyond those stated in this policy. Contact
              Information: For refund requests or further assistance, please
              contact CoursesForTech's support team at
              coursesforcareers.tech@gmail.com.
            </div>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={toggleRefunds}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="w-full md:w-1/2 px-0 md:px-11">
        <div className="bg-white md:shadow-2xl rounded-2xl px-4 md:px-11 py-6">
          <div className="text-3xl font-bold my-8">Have Questions?</div>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light"
              type="text"
              placeholder="Name"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light"
              type="email"
              placeholder="Email Address"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light"
              type="text"
              placeholder="Subject"
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light "
              placeholder="Your Message"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              className="py-2 px-6 rounded-full bg-[#ff9635] text-white text-lg font-bold my-3"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
