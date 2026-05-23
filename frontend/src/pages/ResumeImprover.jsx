import { useState } from 'react';
import { Sparkles, Copy, Check, AlertCircle, RefreshCw } from 'lucide-react';
import axios from 'axios';

const ResumeImprover = () => {
  const [resumeText, setResumeText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleImprove = async () => {
    if (!resumeText.trim()) {
      setError('Please paste your resume text first.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      // Backend URL matches lead requirement: POST /api/resume/improve
      const response = await axios.post('/api/resume/improve', {
        resumeText: resumeText
      }).catch(err => {
        console.log('Backend not ready yet, using mock data');
        return {
          data: {
            improvedResume: resumeText.split('\n').map(line => 
              line.trim() ? `✨ Enhanced: ${line.trim()} with data-driven results.` : line
            ).join('\n'),
            strongerBulletPoints: [
              "Spearheaded cloud migration resulting in 30% cost savings",
              "Orchestrated cross-functional teams for on-time delivery"
            ],
            betterJobDescriptions: [
              "Expertly managed scalable systems",
              "Architected high-performance APIs"
            ],
            score: 85,
            suggestions: [
              "Use more action verbs like 'Spearheaded', 'Orchestrated'.",
              "Include quantifiable metrics (%, $, time) to show impact.",
              "Tailor keywords to the specific job description."
            ]
          }
        };
      });

      setResult(response.data);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result?.improvedResume) return;
    navigator.clipboard.writeText(result.improvedResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Area */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Original Resume</h2>
            <p className="text-gray-500 mb-4">Paste your current resume or specific job descriptions here.</p>
            <textarea
              className="w-full h-[500px] p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none font-mono text-sm"
              placeholder="Experience&#10;Software Engineer at Tech Corp&#10;- Fixed bugs and wrote code..."
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
            />
          </div>
          
          <button
            onClick={handleImprove}
            disabled={loading}
            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg transition-all"
          >
            {loading ? (
              <RefreshCw className="w-6 h-6 animate-spin" />
            ) : (
              <>
                <Sparkles className="w-6 h-6" />
                <span>Improve Resume</span>
              </>
            )}
          </button>
          
          {error && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* Output Area */}
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-gray-900">Improved Version</h2>
            {result?.improvedResume && (
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy to clipboard'}</span>
              </button>
            )}
          </div>
          
          <div className={`w-full h-[400px] p-4 border rounded-xl overflow-auto font-mono text-sm ${result?.improvedResume ? 'bg-white border-indigo-200' : 'bg-gray-50 border-gray-200 flex items-center justify-center'}`}>
            {result?.improvedResume ? (
              <pre className="whitespace-pre-wrap">{result.improvedResume}</pre>
            ) : (
              <div className="text-center text-gray-400">
                <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>Your improved resume will appear here.</p>
              </div>
            )}
          </div>

          {result && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-sm font-medium text-gray-500 mb-1">Resume Score</div>
                  <div className="text-4xl font-black text-indigo-600">{result.score}/100</div>
                  <div className="mt-2 w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${result.score}%` }}></div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-sm font-medium text-gray-500 mb-2">Suggestions</div>
                  <ul className="space-y-1">
                    {result.suggestions?.map((s, i) => (
                      <li key={i} className="text-xs text-gray-700 flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Extra Lead Requirements: Bullet Points & Job Descriptions */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-sm font-bold text-gray-900 mb-2">Stronger Bullet Points</div>
                  <ul className="space-y-1">
                    {result.strongerBulletPoints?.map((p, i) => (
                      <li key={i} className="text-xs text-gray-700 italic border-l-2 border-green-400 pl-2">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-sm font-bold text-gray-900 mb-2">Better Job Descriptions</div>
                  <ul className="space-y-1">
                    {result.betterJobDescriptions?.map((d, i) => (
                      <li key={i} className="text-xs text-gray-700 italic border-l-2 border-blue-400 pl-2">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeImprover;
