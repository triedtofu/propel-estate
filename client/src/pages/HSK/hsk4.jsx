import React, { useState, useEffect } from 'react';

export default function HSKFour() {
  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    fetch('/json/hsk-level-4.json')
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
        HSK Level 4 Word List
      </h1>
      <p className="w-3/4 mx-auto">
        HSK 4 is a 105 minute test. It includes the same parts as HSK level 3,
        namely listening, reading and writing. It assesses the candidate's
        ability to communicate on a wide range of topics and to communicate
        freely with locals. The purpose of this language test is to prove that
        you have mastered Chinese. HSK Level 4 will assess your ability to
        understand and express Chinese fluently. Students should be able to
        discuss various topics and should have fluent conversations with native
        speakers. If you are not familiar with the classic HSK test structure,
        you can prepare for this step with us.
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
