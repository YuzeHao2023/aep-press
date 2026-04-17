import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Globe, Award, Search, FileText, Book } from 'lucide-react';
import { journals } from '@/src/data/journals';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
            >
              Advancing Global Research Through <span className="text-blue-600">AEP Press</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
            >
              A leading academic publisher providing high-quality peer-reviewed journals, conference proceedings, and books across all major scientific disciplines.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/journals"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Explore Journals <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/submission"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                Submit Your Paper
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Journals', value: '50+', icon: BookOpen },
              { label: 'Articles', value: '10k+', icon: FileText },
              { label: 'Authors', value: '25k+', icon: Users },
              { label: 'Countries', value: '120+', icon: Globe },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-2xl bg-slate-50 text-blue-600 mb-2">
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Multidisciplinary Publishing</h2>
            <p className="text-slate-600">We cover a wide range of academic fields, ensuring your research reaches the right audience.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Mathematics', 'Physics', 'Chemistry', 'Biology',
              'Medicine', 'TCM', 'Pharmacy', 'Literature',
              'Social Sciences', 'Finance', 'Engineering', 'Computer Science'
            ].map((field, i) => (
              <Link
                key={i}
                to={`/journals?field=${encodeURIComponent(field)}`}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{field}</h3>
                <p className="text-sm text-slate-500 mt-2">Explore journals in {field}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Journals */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Journals</h2>
              <p className="text-slate-600">Discover our top-tier publications across various scientific domains.</p>
            </div>
            <Link to="/journals" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View all journals <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journals.slice(0, 3).map((journal) => (
              <div key={journal.id} className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={journal.image}
                    alt={journal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">{journal.field}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{journal.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2">{journal.description}</p>
                  <div className="mt-auto pt-6 border-t border-slate-200 flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-mono">ISSN: {journal.issn}</span>
                    <Link to={`/journals/${journal.id}`} className="p-2 rounded-full bg-white text-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                <Search className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Publication Search</h3>
              <p className="text-slate-400 leading-relaxed">
                Efficiently search and retrieve publications across our entire database using advanced filtering and indexing.
              </p>
              <button className="text-blue-400 font-semibold flex items-center gap-2 hover:text-blue-300 transition-colors">
                Start searching <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="h-14 w-14 rounded-2xl bg-indigo-600 flex items-center justify-center">
                <FileText className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Online Submission</h3>
              <p className="text-slate-400 leading-relaxed">
                Our streamlined submission process ensures your research is handled professionally and efficiently from start to finish.
              </p>
              <Link to="/submission" className="text-indigo-400 font-semibold flex items-center gap-2 hover:text-indigo-300 transition-colors">
                Submit a paper <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="h-14 w-14 rounded-2xl bg-emerald-600 flex items-center justify-center">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Peer Review</h3>
              <p className="text-slate-400 leading-relaxed">
                We maintain the highest standards of academic integrity through a rigorous double-blind peer review process.
              </p>
              <Link to="/review" className="text-emerald-400 font-semibold flex items-center gap-2 hover:text-emerald-300 transition-colors">
                Become a reviewer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
