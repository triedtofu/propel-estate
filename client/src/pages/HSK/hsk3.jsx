import React, { useState, useEffect } from 'react';

export default function HSKThree() {
  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    fetch('/json/hsk-level-3.json')
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
        HSK Level 3 Word List
      </h1>
      <p className="w-3/4 mx-auto">
        The HSK level 3 assesses the candidates' abilities in daily practice of
        Chinese. This represents the equivalent of level III of the Chinese
        Language Proficiency Scales for Speakers of Other Languages. Candidates
        who pass HSK Level 3 can communicate with a basic level in their daily,
        academic and professional life. They can conduct most of their
        conversations in Chinese when traveling to China. The HSK Level 3 exam
        consists of listening, reading and writing sections. It contains 80
        points in total.
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
