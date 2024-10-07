import React, { useState, useEffect } from 'react';

export default function HSKSix() {
  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    fetch('/json/hsk-level-6.json')
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
        HSK Level 6 Word List
      </h1>
      <p className="w-3/4 mx-auto">
        The HSK 6 assesses the daily Chinese ability of the candidates, that is
        to say aims to assess the comprehension and expression skills, on all
        types of subjects. Students who pass HSK level 6 are considered to have
        the ability to work in Chinese every day. Candidates who pass HSK Level
        6 can easily understand written and spoken information in Chinese.
        Finally, they can be expressed effectively in oral and written form.
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