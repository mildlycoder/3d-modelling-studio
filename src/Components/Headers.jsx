import React from "react";
import { Link } from "react-router-dom";
const Headers = () => {
  return (
    <div className="bg-slate-800 text-slate-300">
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <Link to="/">
                <img src="/Dreamvizz-logos_transparent.png" width="140px" />
              </Link>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-blue-600 px-5 py-3 text-blue-600 transition hover:bg-slate-900 hover:text-blue-400"
                type="button"
              >
                <span className="text-sm font-medium"> Gallery</span>
              </Link>

              <Link
                to="/contact"
                className="block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring"
                type="button"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headers;
