import React, { useState, useEffect } from 'react';

export default function HSKTwo() {
  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    fetch('/json/hsk-level-2.json')
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
        HSK Level 2 Word List
      </h1>
      <p className="w-3/4 mx-auto">
        The HSK2 corresponds to the second level of the HSK exam, the chinese
        proficiency test dedicated to assess your level of Mandarin Chinese. The
        HSK has steadily grown in popularity in recent years, with more and more
        applicants taking it to study or work in an environment where mastering
        Chinese is mandatory. This language test allows you to certify a level
        of Mandarin. There are 6 levels, from the one (the lowest level) to the
        sixth which validates a perfect command of Mandarin Chinese. Candidates
        who pass the HSK 2 exam have an excellent command of Basic Chinese and
        can conduct a simple conversation. The HSK 2 justifies the ability to
        perform simple exchanges and obtain information from everyday life.
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
