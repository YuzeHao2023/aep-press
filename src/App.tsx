import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header, Footer } from '@/src/components/Layout';
import { Home } from '@/src/pages/Home';
import { Journals } from '@/src/pages/Journals';
import { JournalDetail } from '@/src/pages/JournalDetail';
import { ArticleDetail } from '@/src/pages/ArticleDetail';
import { Submission } from '@/src/pages/Submission';
import { Review } from '@/src/pages/Review';
import { Conferences } from '@/src/pages/Conferences';
import { Books } from '@/src/pages/Books';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/journals" element={<Journals />} />
              <Route path="/journals/:id" element={<JournalDetail />} />
              <Route path="/journals/:journalId/article/:articleId" element={<ArticleDetail />} />
              <Route path="/submission" element={<Submission />} />
              <Route path="/review" element={<Review />} />
              <Route path="/conferences" element={<Conferences />} />
              <Route path="/books" element={<Books />} />
              {/* Fallback for other routes */}
              <Route path="*" element={
                <div className="container mx-auto px-4 py-20 text-center">
                  <h1 className="text-4xl font-bold text-slate-900 mb-4">404 - Page Not Found</h1>
                  <p className="text-slate-600 mb-8">The page you are looking for does not exist.</p>
                  <a href="/" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold">Return Home</a>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
