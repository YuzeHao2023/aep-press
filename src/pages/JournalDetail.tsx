import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { journals } from '@/src/data/journals';
import { FileText, Users, Info, BookOpen, ArrowRight, Download, Calendar, ExternalLink } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const JournalDetail = () => {
  const { id } = useParams();
  const journal = journals.find(j => j.id === id);
  const [activeTab, setActiveTab] = React.useState('articles');

  if (!journal) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Journal not found</h1>
        <Link to="/journals" className="text-blue-600 hover:underline mt-4 inline-block">Back to journals</Link>
      </div>
    );
  }

  const tabs = [
    { id: 'articles', label: 'Current Articles', icon: FileText },
    { id: 'about', label: 'About the Journal', icon: Info },
    { id: 'editorial', label: 'Editorial Board', icon: Users },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Journal Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800">
              <img
                src={journal.image}
                alt={journal.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-600/30">
                  {journal.field}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700">
                  ISSN: {journal.issn}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{journal.title}</h1>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                {journal.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/submission"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
                >
                  Submit Manuscript
                </Link>
                <button className="bg-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-700 transition-all border border-slate-700">
                  Track Submission
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              {/* Tabs */}
              <div className="flex border-b border-slate-200 mb-8 overflow-x-auto">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap",
                      activeTab === tab.id
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-slate-500 hover:text-slate-900"
                    )}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === 'articles' && (
                  <div className="space-y-8">
                    {journal.articles.length > 0 ? (
                      journal.articles.map(article => (
                        <div key={article.id} className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all group">
                          <div className="flex justify-between items-start mb-3">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Research Article</span>
                            <span className="text-xs text-slate-400 flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {article.publicationDate}
                            </span>
                          </div>
                          <Link to={`/journals/${journal.id}/article/${article.id}`}>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                              {article.title}
                            </h3>
                          </Link>
                          <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                            {article.abstract}
                          </p>
                          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                            <div className="text-sm text-slate-500">
                              By <span className="font-medium text-slate-900">{article.authors.join(', ')}</span>
                            </div>
                            <div className="flex gap-3">
                              <Link
                                to={`/journals/${journal.id}/article/${article.id}`}
                                className="text-xs font-bold flex items-center gap-1 text-slate-900 hover:text-blue-600"
                              >
                                Full Text <ExternalLink className="h-3 w-3" />
                              </Link>
                              <a
                                href={article.pdfUrl}
                                className="text-xs font-bold flex items-center gap-1 text-slate-900 hover:text-blue-600"
                              >
                                PDF <Download className="h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                        <FileText className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No articles published yet</h3>
                        <p className="text-slate-500">Check back soon for the latest research.</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'about' && (
                  <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Aims & Scope</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {journal.title} is an international, peer-reviewed journal that publishes high-quality research in the field of {journal.field}. The journal aims to provide a platform for researchers, academicians, and professionals to share their latest findings and innovations.
                    </p>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Key Topics Include:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
                      <li>Fundamental research and theoretical developments</li>
                      <li>Experimental studies and practical applications</li>
                      <li>Interdisciplinary approaches and emerging technologies</li>
                      <li>Case studies and technical reports</li>
                    </ul>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Indexing & Abstracting</h4>
                    <p className="text-slate-600 mb-6">
                      Our journal is indexed in major academic databases including Google Scholar, CrossRef, and more.
                    </p>
                  </div>
                )}

                {activeTab === 'editorial' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { name: 'Prof. David Wilson', role: 'Editor-in-Chief', univ: 'Stanford University' },
                      { name: 'Dr. Elena Rodriguez', role: 'Associate Editor', univ: 'University of Oxford' },
                      { name: 'Prof. Kenji Tanaka', role: 'Associate Editor', univ: 'University of Tokyo' },
                      { name: 'Dr. Sarah Chen', role: 'Editorial Board Member', univ: 'National University of Singapore' },
                    ].map((member, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100">
                        <div className="h-16 w-16 rounded-full bg-slate-200 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-slate-900">{member.name}</h4>
                          <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                          <p className="text-xs text-slate-500 mt-1">{member.univ}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 space-y-8">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-6">Journal Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-3xl font-bold text-blue-600">2.45</span>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Impact Factor</p>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-blue-600">18 days</span>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">First Decision</p>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-blue-600">125k</span>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Annual Downloads</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-200">
                <h3 className="font-bold text-xl mb-4">Call for Papers</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  We are currently accepting submissions for our upcoming special issue on "Future Trends in {journal.field}".
                </p>
                <Link to="/submission" className="block text-center bg-white text-blue-600 py-3 rounded-full font-bold hover:bg-blue-50 transition-all">
                  Learn More
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
