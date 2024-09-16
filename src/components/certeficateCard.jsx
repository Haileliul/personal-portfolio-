import { useState } from "react";

function CardCertificate({ img, title, modalContent }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Card Component */}
      <div
        className="isolate aspect-video rounded-xl hover:shadow-lg ring-2 ring-black/5"
        onClick={handleCardClick}
      >
        <div
          className="relative h-fit px-2 py-2 rounded-md border-gray-200 transition-transform duration-300 hover:cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative block w-[200px] h-[100px] overflow-hidden">
            <img
              src={img}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-300 rounded-t-md ${
                isHovered ? "scale-110" : ""
              }`}
            />
          </div>

          <div className="pt-2 text-center">
            <h5 className="text-lg font-bold tracking-tight text-gray-700 dark:text-white py-1">
              {title}
            </h5>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p>{modalContent}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CardCertificate;
