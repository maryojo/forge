import React, { useState, useEffect } from "react";

const Slider = () => {
  const [isActive, setIsActive] = useState(0);

  const reviews = [
    {
      name: "John Doe",
      rating: 5.0,
      comment:
        "This product is amazing! Highly recommend it. I've been using it for a long time now, and it has exceeded my expectations. The build quality is excellent, and it performs flawlessly. The customer service was also very helpful when I had a question. Overall, a fantastic experience!",
    },
    {
      name: "Jane Smith",
      rating: 5.0,
      comment:
        "Absolutely love this product! It has made my life so much easier. The intuitive design and user-friendly interface are top-notch. Installation was a breeze, and it works perfectly right out of the box. I couldn't be happier with my purchase!",
    },
    {
      name: "Bob Johnson",
      rating: 5.0,
      comment:
        "A must-have product! It delivers everything it promises and more. The performance is outstanding, and the quality is second to none.",
    },
  ];

  const [data, setData] = useState(reviews[1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prevSlide) => {
        const nextSlide = (prevSlide + 1) % reviews.length;
        return nextSlide;
      });
      setData(reviews[isActive]);
    }, 10000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <>
      <p className="text-[18px] font-semibold italic md:ml-5 multiline-ellipsis">{data?.comment}</p>
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-3 justify-between">
        <div className="w-full md:w-[30%]">
          <div className="flex flex-row gap-1">
            <div
              className={`rounded-full h-[2.5px] ${
                isActive === 0 ? "bg-[#D7D7D7] w-2/4" : "bg-[#868686] w-1/4"
              }`}
            ></div>
            <div
              className={`rounded-full h-[2.5px] ${
                isActive === 1 ? "bg-[#D7D7D7] w-2/4" : "bg-[#868686] w-1/4"
              }`}
            ></div>
            <div
              className={`rounded-full h-[2.5px] ${
                isActive === 2 ? "bg-[#D7D7D7] w-2/4" : "bg-[#868686] w-1/4"
              }`}
            ></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-[12px] flex flex-row items-center justify-end gap-2">
          <p className="font-medium text-[#D7D7D7]">{data?.name}</p>
          <div className="flex flex-row items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 36 36"
            >
              <path
                fill="#FFAC33"
                d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"
              />
            </svg>
            <p>({data?.rating})</p>
          </div>
        </div>
      </div>
      </>
  );
};

export default Slider;
