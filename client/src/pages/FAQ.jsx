import React from 'react';

const FAQs = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-[5%]">
      <div className="flex justify-start">
        <div
          className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg mx-4 sm:mx-0"
          style={{ marginLeft: '25%' }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>

          <div className="mb-6">
            <ul className="space-y-2">
              <li>
                <a href="#q1" className="text-blue-600 hover:underline">
                  How long until I can speak Mandarin?
                </a>
              </li>
              <li>
                <a href="#q2" className="text-blue-600 hover:underline">
                  There is soooo much vocabulary! Do you have any tips on how I
                  can remember it all?
                </a>
              </li>
              <li>
                <a href="#q3" className="text-blue-600 hover:underline">
                  How do you suggest that I study HSK levels 1 to 6?
                </a>
              </li>
              <li>
                <a href="#q4" className="text-blue-600 hover:underline">
                  Do I really need to memorize all of that vocabulary?
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-300 my-8 pt-8" id="q1">
            <h3 className="text-lg font-semibold italic">
              How long until I can speak Mandarin?
            </h3>
            <p className="mt-2 text-gray-500 text-md">
              A long time. It takes a really long time.
              <br />
              <br />
              The answer to this question will greatly depend on how often you
              study. There is no easy way around learning any language, and
              especially one that is so functionally different than English. Let
              me give you an example of how much I studied when I was a
              beginner.
              <br />
              <br />
              From 2019 to 2020, I barely studied, and I essentially just taught
              myself how to read and say simple words and sentences. In 2021, I
              went to study a semester in China and tried my best to immerse
              myself with family and locals. I studied for 2-3 hours per day –
              with about half of my time dedicated to grammar study and half of
              it dedicated to vocabulary. In addition, I was staying in China at
              the time which gave me the benefit of being able to practice what
              I was learning at every opportunity. As I got better and better
              (i.e. as I studied more and more), I was able to slowly start
              having conversations with people. I kept this up for a year.
              <br />
              <br />
              In 2022, grammar and vocabulary no longer became my main focus,
              and I focused more on practical reading, writing, listening and
              speaking skills. I had less time at this point, but I was still
              able to dedicate a few hours each day to my studies.
              <br />
              <br />
              This is just an example, but you need to accept that you will not
              learn Chinese overnight. It is the continual amount of effort and
              determination that will yield results over time.
            </p>
          </div>

          <div className="border-t border-gray-300 my-8 pt-8" id="q2">
            <h3 className="text-lg font-semibold italic">
              There is soooo much vocabulary! Do you have any tips on how I can
              remember it all?
            </h3>
            <p className="mt-2 text-gray-500 text-md">
              I know. Trust me, it is necessary.
              <br />
              <br />
              These days, there are a variety of programs that can help you
              memorise words. One popular website is “Memrise,” which tests you
              with vocabulary you have already learned. When I taught myself
              Chinese. I found flashcards to be a fantastic way which is why
              there is a feature on the website which puts together a list of
              vocabulary words that you are familiar with to test your knowledge
              on those you are familiar and unfamilar with.
              <br />
              <br />
              My own method for plowing through vocabulary was much more
              old-school. Every week I had a list of words printed on a piece of
              paper. That list would follow me everywhere I went for the week,
              and I would glance at it any time I had a spare minute.
              <br />
              <br />
              Waiting for the light to change green when crossing the street?
              Memorise a word.
              <br />
              Waiting for your friend to pick you up? Memorise a word.
              <br />
              Sitting at your desk at work? Memorise many words.
              <br />
              Sitting on the subway? Memorise many words.
              <br />
              <br />
              Do this every day with a fresh new list of words every week, and
              you’ll pick up words in no time.
            </p>
          </div>

          <div className="border-t border-gray-300 my-8 pt-8" id="q3">
            <h3 className="text-lg font-semibold italic">
              How do you suggest that I study HSK levels 1 to 6?
            </h3>
            <p className="mt-2 text-gray-500 text-md">
              Studying for HSK levels 1 to 6 can be approached strategically:
              <br />
              1. **Understand the Structure:** Familiarize yourself with the
              format of each level's exam.
              <br />
              2. **Set Goals:** Break down your study into manageable goals
              based on the number of words and grammar points for each level.
              <br />
              3. **Practice Tests:** Regularly take practice exams to gauge your
              progress and adapt your study plan.
              <br />
              4. **Language Partner:** Partner with a fellow learner or tutor to
              practice speaking and writing.
              <br />
              5. **Supplemental Resources:** Use textbooks, apps, and online
              courses specifically designed for HSK preparation.
            </p>
          </div>

          <div className="border-t border-gray-300 my-8 pt-8" id="q4">
            <h3 className="text-lg font-semibold italic">
              Do I really need to memorize all of that vocabulary?
            </h3>
            <p className="mt-2 text-gray-500 text-md">
              While it might seem daunting, memorising vocabulary is essential
              for language proficiency. However, it's important to approach
              vocabulary learning effectively: focus on the most commonly used
              words first, rather than trying to learn everything at once.
              <br />
              <br />
              It's better to understand and remember a smaller number of words
              that you can use in conversation rather than overwhelming yourself
              with less relevant vocabulary. Consistent practice and usage in
              context will help reinforce your memory, making it easier to
              recall vocabulary when needed.
              <br />
              <br />
              Do note that there is more to learn in mandarin than just HSK
              levels 1 to 6. The tones, pinyin, vocabulary and gammar and
              ofcourse continual practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
