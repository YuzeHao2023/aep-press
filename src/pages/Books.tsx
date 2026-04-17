import React from 'react';
import { Book as BookIcon, ShoppingCart, ArrowRight } from 'lucide-react';

export const Books = () => {
  const books = [
    { title: 'Modern Principles of Quantum Mechanics', author: 'Dr. Robert Chen', price: '$89.99', image: 'https://picsum.photos/seed/book1/400/600' },
    { title: 'The Future of Financial Markets', author: 'Prof. Sarah Miller', price: '$74.50', image: 'https://picsum.photos/seed/book2/400/600' },
    { title: 'Advances in Traditional Medicine', author: 'Dr. Li Wei', price: '$95.00', image: 'https://picsum.photos/seed/book3/400/600' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Academic Books</h1>
      <p className="text-slate-600 mb-12">Explore our collection of monographs, textbooks, and reference works.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {books.map((book, i) => (
          <div key={i} className="flex flex-col group">
            <div className="aspect-[2/3] rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-all">
              <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{book.title}</h3>
            <p className="text-sm text-slate-500 mb-4">By {book.author}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-lg font-bold text-slate-900">{book.price}</span>
              <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-all">
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
