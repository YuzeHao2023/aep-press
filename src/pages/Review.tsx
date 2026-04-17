import React from 'react';
import { ShieldCheck, UserCheck, Star, Award, ArrowRight } from 'lucide-react';

export const Review = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Reviewer Guidelines</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Peer review is the cornerstone of academic integrity. At AEP Press, we value the critical contribution of our reviewers in maintaining the highest standards of scientific excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white border border-slate-200 rounded-3xl space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Ethical Standards</h3>
            <p className="text-slate-600 leading-relaxed">
              Reviewers must maintain strict confidentiality and disclose any potential conflicts of interest before accepting a review invitation.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-3xl space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <UserCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Constructive Feedback</h3>
            <p className="text-slate-600 leading-relaxed">
              We encourage reviewers to provide detailed, constructive, and respectful feedback to help authors improve their work.
            </p>
          </div>
        </div>

        <section className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Why Review for AEP Press?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Star className="h-6 w-6 text-amber-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900">Professional Recognition</h4>
                <p className="text-sm text-slate-600 mt-1">Receive official certification and recognition for your contribution to the scientific community.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900">APC Discounts</h4>
                <p className="text-sm text-slate-600 mt-1">Active reviewers are eligible for significant discounts on Article Processing Charges (APC) for their own submissions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">Join Our Reviewer Database</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            If you are an expert in your field and would like to contribute to the peer review process, we invite you to register with our reviewer database.
          </p>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center gap-2 mx-auto">
            Register as Reviewer <ArrowRight className="h-5 w-5" />
          </button>
        </section>
      </div>
    </div>
  );
};
