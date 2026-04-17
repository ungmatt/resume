import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-lg font-light">Matthew Ung</p>
          <p className="text-slate-400 text-sm mt-1">IT Professional & Systems Analyst &mdash; Sydney, Australia</p>
        </div>
        <a
          href="mailto:Ungmatt.au@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <Mail size={15} />
          Get in Touch
        </a>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-600">
        &copy; {new Date().getFullYear()} Matthew Ung. All rights reserved.
      </div>
    </footer>
  );
}
