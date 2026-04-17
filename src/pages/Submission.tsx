import React from 'react';
import { FileUp, CheckCircle, Clock, ShieldCheck, ArrowRight, Download } from 'lucide-react';

export const Submission = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Author Guidelines</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            AEP Press welcomes high-quality original research across all scientific disciplines. Follow our streamlined submission process to share your work with the global academic community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Prepare', desc: 'Format your manuscript according to our template.', icon: FileUp },
            { title: 'Submit', desc: 'Upload your files through our online portal.', icon: ShieldCheck },
            { title: 'Track', desc: 'Monitor the review progress in real-time.', icon: Clock },
          ].map((step, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <section className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Submission Checklist</h2>
            <ul className="space-y-4">
              {[
                'Manuscript in Microsoft Word or LaTeX format',
                'Cover letter explaining the significance of the work',
                'Conflict of interest disclosure statement',
                'High-resolution figures and tables',
                'Author biographies and affiliations',
                'Ethical approval documentation (if applicable)'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Ready to Submit?</h2>
                <p className="text-slate-400">Join thousands of researchers who trust AEP Press with their work.</p>
              </div>
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap">
                Go to Submission Portal <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-slate-200 rounded-3xl">
              <h3 className="font-bold text-slate-900 mb-4">Manuscript Template</h3>
              <p className="text-sm text-slate-600 mb-6">Download our standard Word template to ensure correct formatting.</p>
              <button className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                <Download className="h-4 w-4" /> Download Template (.docx)
              </button>
            </div>
            <div className="p-8 bg-white border border-slate-200 rounded-3xl">
              <h3 className="font-bold text-slate-900 mb-4">LaTeX Package</h3>
              <p className="text-sm text-slate-600 mb-6">Use our official LaTeX class for professional typesetting.</p>
              <button className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                <Download className="h-4 w-4" /> Download Package (.zip)
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
