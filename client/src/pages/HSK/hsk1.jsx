import React, { useState, useEffect } from 'react';

export default function HSKOne() {
  const [vocabulary, setVocabulary] = useState([]);
  const [selectedTab, setSelectedTab] = useState('Word List');

  useEffect(() => {
    fetch('/json/hsk-level-1.json')
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
      <h1 className="text-2xl font-bold text-center mb-4">
        HSK Level 1 Word List
      </h1>

      <div className="flex justify-center mb-8">
        <div
          className={`px-4 py-2 cursor-pointer ${
            selectedTab === 'Word List' ? 'border-b-4 border-blue-500' : ''
          }`}
          onClick={() => setSelectedTab('Word List')}
        >
          Word List
        </div>
        <div
          className={`px-4 py-2 cursor-pointer ${
            selectedTab === 'Flashcard Quiz' ? 'border-b-4 border-blue-500' : ''
          }`}
          onClick={() => setSelectedTab('Flashcard Quiz')}
        >
          Flashcard Quiz
        </div>
      </div>

      {selectedTab === 'Word List' ? (
        <div>
          <p className="w-3/4 mx-auto">
            The HSK 1 test corresponds to the first level of the hanyu shuiping
            kaoshi, the official examination of oral and written proficiency in
            Mandarin Chinese. The HSK 1 vocabulary list is made of 150 chinese
            words. These HSK 1 words are listed below with their writing in
            Simplified Chinese, Pinyin (Mandarin), and translation. To learn
            them quicker, you can also use our HSK 1 Chinese flashcards to
            practice the simplified, traditional, and pinyin forms. Once you
            complete the level one, you will be able to understand and know how
            to use very simple words and phrases, meet specific communication
            needs, and have the ability to learn more. For your information, the
            oral andreading skills are assessed in two dedicated sections of the
            test. 120 points out of 200 in total are required to pass the HSK1
            test.
          </p>
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
                    <td className="px-4 py-2">
                      {item.translations.join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Quiz time</h1>
          <p>TODO flashcard quiz </p>
        </div>
      )}
    </div>
  );
}
