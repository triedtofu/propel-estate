import React, { useState, useEffect } from 'react';

export default function HSKFive() {
  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    fetch('/json/hsk-level-5.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setVocabulary(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-2xl font-bold text-center mb-8">
        HSK Level 5 Word List
      </h1>
      <p className="w-3/4 mx-auto">
        HSK 5 is the penultimate step to pass HSK. Level 5 contains a test that
        lasts more than two hours, which will assess your ability to understand
        any type of content. For levels 3 and 4, the total score of the HSK 5
        test is 300 points. In other words, each section will give you 100
        points. You will be awarded a total of 180 points, then HSK level 5 will
        be verified. HSK5 applicants must be able to read Chinese newspapers or
        watch movies. So that's almost all the understanding necessary for
        everyday and professional life.
      </p>
      <br />
      <br />
      <br />
      <div className="overflow-x-auto">
        <table className="w-2/3 mx-auto table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Hanzi</th>
              <th className="px-4 py-2">Pinyin</th>
              <th className="px-4 py-2">Translation</th>
            </tr>
          </thead>
          <tbody>
            {vocabulary.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2 text-2xl">{item.hanzi}</td>
                <td className="px-4 py-2">{item.pinyin}</td>
                <td className="px-4 py-2">{item.translations.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
