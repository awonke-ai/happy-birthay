import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const books = [
  {
    id: "HBD",
    title: "Happy Birthday",
    cover: "/images/22.png",
     pages: [
    { text: "Happy Birthday 🤍", image: null },
    { text: "I know you’ve been a obsessed with your Kindle lately.", image: null },
    { text: "So I thought… why not give you something else to read?", image: null },
    { text: "Not a book.\nSomething quieter.", image: null },
    { text: "Something made just for you.", image: null },
    { text: "This is your birthday story.", image: null },
    { text: "You don’t have to rush.\nJust read it the way you read everything else.", image: null },
    { text: "Slowly.\nFully.\nLike it matters.", image: null },
    { text: "I’m really glad you’re here.", image: "/images/birthday-1.jpg" },
    { text: "Happy Birthday.\nI hope today is everything you want it to be.", image: null },
    { text: "I continually ask God to fill you with the knowledge \nof his will through the wisdom and understanding that the spirit gives. \nThen the war you live will always honor and please the lord, \nand your life will produce everykind of good fruit. ", image: null },
    { text: "May the Lord bless you and keep you.\nMay the Lord make his face shine upon you and be gracious to you.\nMay the Lord turn his face toward you and give you peace.", image: null },
    { text: "The End.", image: null }
  ]
  },
  {
    id: "Goodnight",
    title: "For nights when you can't fall asleep",
    cover: "/images/Goodnight.png",
    pages: [
  { text: "If you're reading this late at night…", image: null },
  { text: "When the world has finally gone quiet.", image: null },
  { text: "And your thoughts are still a little loud.", image: null },

  { text: "I hope these words feel soft.", image: null },
  { text: "Like something meant to sit with you for a moment.", image: null },
  { text: "Not to demand anything.", image: null },

  { text: "Just to remind you that it’s okay to rest.", image: null },

  {
    text: "“Come to me, all who are weary and burdened,\nand I will give you rest.”\n\n— Matthew 11:28",
    image: null
  },

  { text: "God doesn’t rush you.", image: null },
  { text: "He doesn’t ask you to carry everything alone.", image: null },

  { text: "Rest isn’t something you have to earn.", image: null },
  { text: "It’s something you’re given.", image: null },

  { text: "So let your shoulders drop.", image: null },
  { text: "Let your breathing slow.", image: null },

  { text: "I hope sleep comes gently after this.", image: null },
  { text: "And that tomorrow feels lighter when it arrives.", image: null }
]
  },
  {
  id: "lemons",
  title: "Nothing Lasts Forever",
  cover: "/images/NLF.png",
  pages: [
    { text: "Whatever you’re going through right now…", image: null },
    { text: "God is not distant from it.", image: null },
    { text: "He is with you, even here.", image: null },

    { text: "Some seasons feel heavier than others.", image: null },
    { text: "And it’s okay to admit that.", image: null },

    { text: "But this moment is not the whole story.", image: null },
    { text: "It’s only a chapter.", image: null },

    {
      text: "“The Lord is close to the brokenhearted\nand saves those who are crushed in spirit.”\n\n— Psalm 34:18",
      image: null
    },

    { text: "God doesn’t waste pain.", image: null },
    { text: "And He doesn’t leave you to carry it alone.", image: null },

    { text: "What feels permanent right now…", image: null },
    { text: "is not meant to last forever.", image: null },

    {
      text: "“Weeping may endure for a night,\nbut joy comes in the morning.”\n\n— Psalm 30:5",
      image: null
    },

    { text: "Morning will come.", image: null },
    { text: "And through all of it—", image: null },
    { text: "God is still with you.", image: null }
  ]
}
  ,{
    id: "coming soon",
    title: "Coming soon!",
    cover: "/images/CS.png",
    pages: [
      { text: "This page is still under construction.", image: null }
      
    ]
  }
];

export default function App() {
  const [activeBook, setActiveBook] = useState(null);

  return (
    <div className="min-h-screen bg-[#d8d3c4] flex items-center justify-center">
      <KindleFrame>
        <AnimatePresence mode="wait">
          {!activeBook ? (
            <Library key="library" onOpen={setActiveBook} />
          ) : (
            <Reader key="reader" book={activeBook} onClose={() => setActiveBook(null)} />
          )}
        </AnimatePresence>
      </KindleFrame>
    </div>
  );
}

function KindleFrame({ children }) {
  return (
    <div className="relative w-[480px] h-[680px] bg-[#f6f1e7] rounded-xl shadow-2xl border border-black/10">
      <div className="absolute top-0 left-0 right-0 h-10 flex items-center justify-between px-4 text-xs text-black/60">
        <span>Kindle</span>
        <span>09:41 ▮▮▮</span>
      </div>
      <div className="pt-12 px-4 h-full overflow-hidden">{children}</div>
    </div>
  );
}

function Library({ onOpen }) {
  const [enlarged, setEnlarged] = useState(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 max-w-md">
          <h2 className="text-sm font-semibold">Library</h2>
        </div>
      </div>

      {/* Books grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grid grid-cols-3 gap-3"
      >
        {books.map((book) => (
          <div key={book.id} className="relative">
            <button
              onClick={() => onOpen(book)}
              className="w-full relative h-48 rounded-md overflow-hidden shadow-inner border border-black/10 hover:shadow-md transition bg-white group"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200" />
              <div className="relative z-10 flex items-end justify-center h-full p-3 font-serif text-sm text-white text-center pointer-events-none transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
                <div className="w-full bg-black/60 px-2 py-1 rounded text-sm">{book.title}</div>
              </div>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setEnlarged(book.cover); }}
              className="absolute top-2 right-2 p-1 bg-white/90 hover:bg-white rounded-full shadow-md z-30 cursor-pointer"
              aria-label={`View ${book.title} full`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3H5a2 2 0 00-2 2v3m0 8v3a2 2 0 002 2h3m8-18h3a2 2 0 012 2v3M8 21h8" />
              </svg>
            </button>
          </div>
        ))}
      </motion.div>

      {enlarged && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/40" onClick={() => setEnlarged(null)}>
          <div className="relative max-w-[72%] max-h-[68%]" onClick={(e) => e.stopPropagation()}>
            <img src={enlarged} alt="enlarged cover" className="w-full h-full object-contain rounded-md shadow-lg" />
            <button
              onClick={() => setEnlarged(null)}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Reader({ book, onClose }) {
  const [pageIndex, setPageIndex] = useState(0);
  const page = book.pages[pageIndex];

  const next = () => {
    if (pageIndex < book.pages.length - 1) setPageIndex(pageIndex + 1);
  };

  const prev = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  return (
    <div className="relative h-full font-serif select-none">
      <button
        onClick={onClose}
        className="absolute top-3 left-3 z-30 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/5 shadow-sm hover:scale-105 transform transition-all duration-150 flex items-center gap-2 text-sm text-black/70 focus:outline-none focus:ring-2 focus:ring-black/10"
        aria-label="Back to library"
      >
        <svg className="w-4 h-4 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="select-none">Back</span>
      </button>
      {/* Click zones */}
      <div className="absolute inset-0 grid grid-cols-2 z-10">
        <button onClick={prev} />
        <button onClick={next} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pageIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="relative z-0 h-full flex flex-col"
        >
          <div className="text-xs text-black/60 mb-2">{book.title}</div>

          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            {page.image && (
              <img
                src={page.image}
                alt=""
                className="mb-4 max-h-48 rounded-md shadow"
              />
            )}
            <p className="text-lg leading-relaxed whitespace-pre-wrap">{page.text}</p>
          </div>

          <div className="flex items-center justify-between text-xs text-black/50">
            <span>
              Page {pageIndex + 1} of {book.pages.length}
            </span>
            <button onClick={onClose} className="hover:text-black">
              Library
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
