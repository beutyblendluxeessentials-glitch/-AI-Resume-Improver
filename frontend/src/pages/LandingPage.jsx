import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Shield, Sparkles } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Elevate Your Career with <span className="text-indigo-600">AI-Powered</span> Resumes
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Stop guessing what recruiters want. Use ResumeBoost AI to transform your resume into a job-winning masterpiece in seconds.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link to="/improve" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm">
                Get Started for Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose ResumeBoost AI?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <Zap className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Improvement</h3>
              <p className="text-gray-600">Get better bullet points and job descriptions instantly with our advanced AI engine.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Star className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Resume Scoring</h3>
              <p className="text-gray-600">Know exactly where you stand with our 0-100 scoring system based on industry standards.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">ATS Optimization</h3>
              <p className="text-gray-600">Ensure your resume passes Applicant Tracking Systems (ATS) with optimized keywords.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">See the Difference</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center">
                Before
              </h3>
              <div className="space-y-4 text-gray-600 italic">
                <p>"Responsible for managing a team of developers."</p>
                <p>"Worked on various projects using React."</p>
                <p>"Increased sales during my time there."</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-indigo-200 ring-2 ring-indigo-500 ring-opacity-50">
              <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center">
                After <Sparkles className="ml-2 w-4 h-4" />
              </h3>
              <div className="space-y-4 text-gray-800">
                <p>"Led and mentored a cross-functional team of 10 developers, increasing project delivery speed by 25%."</p>
                <p>"Engineered scalable frontend architectures using React and Redux, reducing bundle size by 40%."</p>
                <p>"Driven $500k in annual revenue growth through strategic implementation of data-driven marketing tools."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
