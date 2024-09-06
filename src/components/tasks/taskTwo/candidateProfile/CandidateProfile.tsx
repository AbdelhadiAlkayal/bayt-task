import { useState } from "react";
import { InboxIcon } from "@iconicicons/react";
interface ICandidateProfile {
  name: string;
  image: string;
  jobTitle: string;
  location: string;
  education: string;
  experience: string;
  email: string;
  phone: string;
}

const CandidateProfile = ({
  name,
  image,
  jobTitle,
  location,
  education,
  email,
  experience,
  phone,
}: ICandidateProfile) => {
  const [showContact, setShowContact] = useState(false);
  const [swipe, setSwipe] = useState(false);

  const handleContactClick = () => {
    setSwipe(true);
    setTimeout(() => {
      setShowContact(true);
      setSwipe(false);
    }, 300);
  };

  return (
    <div className="flex gap-4">
      <img src={image} alt="" />
      <div
        className={`flex flex-col gap-2 transition-transform duration-300 ease-in-out transform ${
          swipe ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        {showContact ? (
          <>
            <h2 className="text-lg font-bold">Contact {name}</h2>
            <p className="mt-2 text-gray-600">Email: {email}</p>
            <p className="mt-1 text-gray-600">Phone: {phone}</p>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-gray-600">{jobTitle}</p>
            <div className="text-left mt-2">
              <p>
                <span className="font-bold">Location:</span> {location}
              </p>
              <p>
                <span className="font-bold">Education:</span> {education}
              </p>
              <p>
                <span className="font-bold">Experience:</span> {experience}
              </p>
            </div>
            <button
              onClick={handleContactClick}
              className="flex justify-center mt-4 bg-yellow-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-600"
            >
              <InboxIcon />
              Contact
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CandidateProfile;
