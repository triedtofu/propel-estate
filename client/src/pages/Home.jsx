import React from 'react';
import { Link } from 'react-router-dom';
import pandaHomepage from '../components/pandahomepage.jpg';
import hskImage1 from '../components/hskImages/hsk1.jpg';
import hskImage2 from '../components/hskImages/hsk2.jpg';
import hskImage3 from '../components/hskImages/hsk3.jpg';
import hskImage4 from '../components/hskImages/hsk4.jpg';
import hskImage5 from '../components/hskImages/hsk5.jpg';
import hskImage6 from '../components/hskImages/hsk6.jpg';

export default function Home() {
  const hskImages = [
    hskImage1,
    hskImage2,
    hskImage3,
    hskImage4,
    hskImage5,
    hskImage6,
  ];

  const routes = ['/hsk1', '/hsk2', '/hsk3', '/hsk4', '/hsk5', '/hsk6'];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#d73c37] text-white py-20 text-center">
        <h1 className="text-4xl tracking-wider mb-4">
          Transform Your Life: Master Chinese
          <br />
          with learning content to ace the HSK levels
        </h1>
      </div>

      <div className="flex items-center justify-center p-10">
        <div className="w-full max-w-md text-center md:text-left md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">
            Effective Online Material for You
          </h2>
          <p className="mb-4">
            Learn to read, write, and understand Chinese confidently through
            completing the HSK levels 1 to 6 proficiency tests. From beginner to
            advanced, there are lessons for learners of all levels even beyond
            the scope of these tests.
          </p>
          <p>
            Never run out of learning materials! Learn through effective and
            essential fundamentals and topics, from daily conversations to test
            preparations.
          </p>
        </div>

        <div className="hidden md:block ">
          <img
            src={pandaHomepage}
            alt="Chinese Learning"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="text-black py-20 text-center">
        <h1 className="text-2xl tracking-wider mb-4">
          Learn with our HSK vocab lists or easy-to-follow fundamentals
        </h1>
        <p>
          You can get get started with Mandarin with learning the fundamentals
          or just right into the vocabulary levels which is a standardised test
          for Chinese language proficiency.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-10">
        {hskImages.map((image, index) => (
          <Link to={routes[index]} key={index} className="w-full sm:w-[290px]">
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden inline-flex flex-col items-center p-2">
              <img
                src={image}
                alt={`HSK Level ${index + 1}`}
                className="object-cover h-[160px] w-full"
              />
              <h2 className="text-lg font-bold mb-2 text-center">
                HSK Level {index + 1}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
