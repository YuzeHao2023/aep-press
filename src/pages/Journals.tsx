import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowRight, BookOpen } from 'lucide-react';
import { journals } from '@/src/data/journals';
import { cn } from '@/src/lib/utils';

export const Journals = () => {
  const [searchParams] = useSearchParams();
  const fieldFilter = searchParams.get('field');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredJournals = journals.filter(journal => {
    const matchesField = !fieldFilter || journal.field === fieldFilter;
    const matchesSearch = journal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         journal.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesField && matchesSearch;
  });

  const fields = Array.from(new Set(journals.map(j => j.field)));

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Academic Journals</h1>
          <p className="text-slate-600">Browse our collection of peer-reviewed scientific journals.</p>
        </div>

        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search journals..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filter by Discipline
            </h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              <Link
                to="/journals"
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  !fieldFilter ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                All Disciplines
              </Link>
              {fields.map(field => (
                <Link
                  key={field}
                  to={`/journals?field=${encodeURIComponent(field)}`}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    fieldFilter === field ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                >
                  {field}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-2">Start Publishing</h4>
            <p className="text-sm text-blue-700 mb-4">Ready to share your research with the world?</p>
            <Link to="/submission" className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
              Author Guidelines <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>

        {/* Journal Grid */}
        <div className="flex-1">
          {filteredJournals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredJournals.map((journal) => (
                <Link
                  key={journal.id}
                  to={`/journals/${journal.id}`}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={journal.image}
                      alt={journal.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{journal.field}</span>
                      <span className="text-xs text-slate-400 font-mono">ISSN: {journal.issn}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{journal.title}</h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-6">{journal.description}</p>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                      View Journal <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <BookOpen className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">No journals found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
