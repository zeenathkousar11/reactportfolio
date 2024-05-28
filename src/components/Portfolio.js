
// import React from "react";
// import netflix from "../assets/portfolio/netflix.png";
// import weather from "../assets/portfolio/weather.png";
// import electionpoll from "../assets/portfolio/electionpoll.png";
// import drumkit from "../assets/portfolio/drumkit.png";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: weather,
//     },
//     {
//       id: 2,
//       src: netflix,
//     },
//     {
//       id: 3,
//       src: electionpoll,
//     },
//     // {
//     //   id: 5,
//     //   src: installNode,
//     // },
//     {
//       id: 4,
//       src: drumkit,
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
//           {portfolios.map(({ id, src }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105 object-cover h-40 w-full"
//               />
//               <div className="flex items-center justify-center">
//                 <button className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105">
//                   Demo
//                 </button>
//                 <button className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105">
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
import React from "react";
import netflix from "../assets/portfolio/netflix.png";
import weather from "../assets/portfolio/weather.png";
import electionpoll from "../assets/portfolio/electionpoll.png";
import drumkit from "../assets/portfolio/drumkit.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weather,
    },
    {
      id: 2,
      src: netflix,
    },
    {
      id: 3,
      src: electionpoll,
    },
    {
      id: 4,
      src: drumkit,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white p-5 md:p-10 lg:p-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-cover h-40 w-full"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
