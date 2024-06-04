import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ebook from './components/Ebook';

const ebooks = [
  {
    url: "https://www.gutenberg.org/ebooks/2000",
    title: "Don Quijote (Spanish)",
    author: "Miguel de Cervantes Saavedra",
    image: "https://www.gutenberg.org/cache/epub/2000/pg2000.cover.small.jpg",
    category: "6 Best Loved Spanish Literary Classics",
    scraped: {
      downloadLinks: [
        {
          format: "Read online (web)",
          url: "https://www.gutenberg.org/ebooks/2000.html.images"
        },
        {
          format: "Kindle",
          url: "https://www.gutenberg.org/ebooks/12532.kf8.images"
        },
        {
          format: "older Kindles",
          url: "https://www.gutenberg.org/ebooks/12532.kindle.images"
        },
        {
          format: "Plain Text UTF-8",
          url: "https://www.gutenberg.org/ebooks/12532.txt.utf-8"
        },
        {
          format: "Download HTML (zip)",
          url: "https://www.gutenberg.org/cache/epub/12532/pg12532-h.zip"
        },
      ]
    }
  },
  {
    url: "https://www.gutenberg.org/ebooks/5921",
    title: "The History of Don Quixote, Volume 1, Complete",
    author: "Miguel de Cervantes Saavedra",
    image: "https://www.gutenberg.org/cache/epub/5921/pg5921.cover.small.jpg",
    category: "6 Best Loved Spanish Literary Classics",
    scraped: {
      downloadLinks: [
        {
          format: "Read online (web)",
          url: "https://www.gutenberg.org/ebooks/5921.html.images"
        },
        // Add other download links as provided
      ]
    }
  }
];

function App() {
  return (
    <div>
      <h1>eBooks</h1>
      {ebooks.map((ebook, index) => (
        <Ebook key={index} ebook={ebook} />
      ))}
    </div>
  );
}

export default App;
