import React, { useState } from "react";

const FeedbackSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const feedbacks = [
    {
      id: 1,
      name: "John Doe",
      job: "Web Developer",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at mollis massa. Nam ullamcorper justo non sem efficitur, non fringilla augue interdum. Donec non mi velit.",
    },
    {
      id: 2,
      name: "Jane Doe",
      job: "UX Designer",
      feedback:
        "Fusce at suscipit augue, eu ultricies ante. Nam tincidunt risus quis enim auctor, id interdum nunc lobortis. Donec tincidunt lorem sit amet dolor ullamcorper, sit amet pretium magna venenatis.",
    },
    {
      id: 3,
      name: "Bob Smith",
      job: "Graphic Designer",
      feedback:
        "Praesent in risus id sapien ultrices sollicitudin. Nulla dictum aliquet velit, vel gravida velit maximus eget. Fusce in justo nisl. Donec ultrices elit elit, vel dapibus sapien fermentum sed.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + feedbacks.length) % feedbacks.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % feedbacks.length);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      <div className="flex justify-between items-center w-4/5 mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div className="flex items-center">
        {feedbacks.map((feedback, index) => (
          <div
            key={feedback.id}
            className={`${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 absolute`}
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-500 italic mb-2">{feedback.feedback}</p>
              <p className="text-gray-800 font-bold">{feedback.name}</p>
              <p className="text-gray-500">{feedback.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSlider;
