import React from 'react';
import { Presentation, Calendar, MapPin, ArrowRight } from 'lucide-react';

export const Conferences = () => {
  const conferences = [
    { title: 'International Conference on Applied Mathematics (ICAM 2024)', date: 'Oct 12-14, 2024', location: 'Singapore' },
    { title: 'Global Forum on Sustainable Engineering (GFSE 2024)', date: 'Nov 5-7, 2024', location: 'London, UK' },
    { title: 'Advances in Biomedical Research Summit (ABRS 2025)', date: 'Jan 20-22, 2025', location: 'Boston, USA' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Upcoming Conferences</h1>
      <p className="text-slate-600 mb-12">Join leading experts at our upcoming academic events.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {conferences.map((conf, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-400 transition-all group">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Presentation className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{conf.title}</h3>
            <div className="space-y-2 text-sm text-slate-500 mb-6">
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {conf.date}</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {conf.location}</div>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View Details <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
