import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { journals } from '@/src/data/journals';
import { Download, Share2, FileText, Calendar, Book, ExternalLink, ChevronLeft, Quote, Users } from 'lucide-react';

export const ArticleDetail = () => {
  const { journalId, articleId } = useParams();
  const journal = journals.find(j => j.id === journalId);
  const article = journal?.articles.find(a => a.id === articleId);

  if (!journal || !article) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/journals" className="text-blue-600 hover:underline mt-4 inline-block">Back to journals</Link>
      </div>
    );
  }

  const currentUrl = window.location.href;
  const fullPdfUrl = new URL(article.pdfUrl, window.location.origin).toString();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Helmet>
        <title>{article.title} | {journal.title}</title>
        <link rel="canonical" href={currentUrl} />
        <meta name="description" content={article.abstract} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.abstract} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />

        {/* Google Scholar Meta Tags (Highwire Press) */}
        <meta name="citation_title" content={article.title} />
        {article.authors.map(author => (
          <meta key={author} name="citation_author" content={author} />
        ))}
        <meta name="citation_publication_date" content={article.publicationDate.replace(/-/g, '/')} />
        <meta name="citation_journal_title" content={article.journalTitle} />
        <meta name="citation_volume" content={article.volume} />
        <meta name="citation_issue" content={article.issue} />
        <meta name="citation_firstpage" content={article.firstPage} />
        <meta name="citation_lastpage" content={article.lastPage} />
        <meta name="citation_doi" content={article.doi} />
        <meta name="citation_pdf_url" content={fullPdfUrl} />
        <meta name="citation_abstract_html_url" content={currentUrl} />
        <meta name="citation_fulltext_html_url" content={currentUrl} />
        <meta name="citation_language" content="en" />
        <meta name="citation_abstract" content={article.abstract} />
        <meta name="citation_publisher" content="AEP Press" />
        <meta name="citation_issn" content={journal.issn} />
        {article.keywords.map(keyword => (
          <meta key={keyword} name="citation_keywords" content={keyword} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ScholarlyArticle',
            headline: article.title,
            author: article.authors.map(author => ({ '@type': 'Person', name: author })),
            description: article.abstract,
            datePublished: article.publicationDate,
            isPartOf: {
              '@type': 'Periodical',
              name: article.journalTitle,
              volumeNumber: article.volume,
              issueNumber: article.issue,
            },
            pagination: `${article.firstPage}-${article.lastPage}`,
            identifier: article.doi,
            url: currentUrl,
            sameAs: [fullPdfUrl],
          })}
        </script>
      </Helmet>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronLeft className="h-3 w-3 rotate-180" />
            <Link to="/journals" className="hover:text-blue-600">Journals</Link>
            <ChevronLeft className="h-3 w-3 rotate-180" />
            <Link to={`/journals/${journal.id}`} className="hover:text-blue-600 truncate max-w-[150px] md:max-w-none">{journal.title}</Link>
            <ChevronLeft className="h-3 w-3 rotate-180" />
            <span className="text-slate-900 font-medium truncate max-w-[150px] md:max-w-none">Article</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <main className="flex-1 space-y-12">
            <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100">
                    Research Article
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-xs font-medium border border-slate-100">
                    Open Access
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span className="font-medium text-slate-900">{article.authors.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Published: {article.publicationDate}</span>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 text-sm text-slate-600">
                  <div className="flex gap-2">
                    <span className="font-bold text-slate-900">Journal:</span>
                    <Link to={`/journals/${journal.id}`} className="text-blue-600 hover:underline">{article.journalTitle}</Link>
                  </div>
                  <div className="flex gap-6">
                    <div><span className="font-bold text-slate-900">Volume:</span> {article.volume}</div>
                    <div><span className="font-bold text-slate-900">Issue:</span> {article.issue}</div>
                    <div><span className="font-bold text-slate-900">Pages:</span> {article.firstPage}-{article.lastPage}</div>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-slate-900">DOI:</span>
                    <a href={`https://doi.org/${article.doi}`} className="text-blue-600 hover:underline">{article.doi}</a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" /> Abstract
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {article.abstract}
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900">Keywords</h2>
                  <div className="flex flex-wrap gap-2">
                    {article.keywords.map(keyword => (
                      <span key={keyword} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm text-slate-600">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Placeholder for more content */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Full Text Access</h2>
              <div className="p-8 border-2 border-dashed border-slate-200 rounded-2xl text-center space-y-4">
                <Book className="h-12 w-12 text-slate-300 mx-auto" />
                <p className="text-slate-500">The full text of this article is available in PDF format.</p>
                <a
                  href={article.pdfUrl}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg"
                >
                  <Download className="h-5 w-5" /> Download PDF
                </a>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 sticky top-24">
              <h3 className="font-bold text-slate-900 mb-6">Article Tools</h3>
              <div className="space-y-4">
                <a
                  href={article.pdfUrl}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all"
                >
                  <Download className="h-4 w-4" /> Download PDF
                </a>
                <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 text-slate-900 font-bold hover:bg-slate-200 transition-all">
                  <Quote className="h-4 w-4" /> Cite Article
                </button>
                <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 text-slate-900 font-bold hover:bg-slate-200 transition-all">
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>

              <hr className="my-8 border-slate-100" />

              <div className="space-y-6">
                <div>
                  <span className="text-2xl font-bold text-blue-600">1,245</span>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Views</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-blue-600">342</span>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Downloads</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-blue-600">12</span>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Citations</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
