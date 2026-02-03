'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('icp');
  const [searchInput, setSearchInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const tabs = [
    { id: 'icp', label: 'ICP lead lists' },
    { id: 'signals', label: 'Signal-based Leads' },
    { id: 'deepdive', label: 'Account deep dives' },
    { id: 'champions', label: 'Champion mapping' },
  ];

  const icpData = [
    { company: 'Velocity AI', domain: 'velocityai.com', employees: '45', funding: 'Series A', contact: 'James Chen', title: 'VP Sales', email: 'j.chen@velocityai.com', linkedin: 'linkedin.com/in/jameschen' },
    { company: 'DataForge', domain: 'dataforge.io', employees: '120', funding: 'Series B', contact: 'Sarah Miller', title: 'Head of Growth', email: 's.miller@dataforge.io', linkedin: 'linkedin.com/in/sarahmiller' },
    { company: 'CloudSync Pro', domain: 'cloudsyncpro.com', employees: '67', funding: 'Series A', contact: 'Michael Torres', title: 'GTM Lead', email: 'm.torres@cloudsyncpro.com', linkedin: 'linkedin.com/in/michaeltorres' },
    { company: 'Nexus Analytics', domain: 'nexusanalytics.co', employees: '89', funding: 'Series B', contact: 'Emily Watson', title: 'Director of Sales', email: 'e.watson@nexusanalytics.co', linkedin: 'linkedin.com/in/emilywatson' },
    { company: 'Streamline AI', domain: 'streamlineai.com', employees: '34', funding: 'Seed', contact: 'David Park', title: 'Co-founder', email: 'd.park@streamlineai.com', linkedin: 'linkedin.com/in/davidpark' },
  ];

  const signalData = [
    { company: 'Velocity AI', signal: '🔥 Hiring', detail: 'Posted 3 SDR roles this week', urgency: 'High', contact: 'James Chen', title: 'VP Sales' },
    { company: 'Nexus Analytics', signal: '💰 Funding', detail: 'Raised $12M Series B (Jan 15)', urgency: 'High', contact: 'Yvonnnes Watson', title: 'Director of Sales' },
    { company: 'TechFlow Inc', signal: '🔄 Tech Change', detail: 'Switched from Outreach to Clay', urgency: 'Medium', contact: 'Robert Kim', title: 'RevOps Manager' },
    { company: 'DataForge', signal: '📈 Growth', detail: 'Expanded sales team 40% in Q4', urgency: 'High', contact: 'Sarah Miller', title: 'Head of Growth' },
    { company: 'CloudSync Pro', signal: '🔥 Hiring', detail: 'New AE role posted', urgency: 'Medium', contact: 'Michael Torres', title: 'GTM Lead' },
  ];

  const deepDiveData = {
    company: 'Velocity AI',
    overview: 'AI-powered sales acceleration platform. Series A ($8M). 45 employees. HQ: San Francisco.',
    orgChart: [
      { name: 'James Chen', title: 'VP Sales', reports: 'CEO', linkedin: 'linkedin.com/in/jameschen' },
      { name: 'Lisa Huang', title: 'Sales Manager', reports: 'VP Sales', linkedin: 'linkedin.com/in/lisahuang' },
      { name: 'Tom Bradley', title: 'SDR Lead', reports: 'Sales Manager', linkedin: 'linkedin.com/in/tombradley' },
    ],
    initiatives: [
      'Expanding enterprise sales motion (Q1 priority)',
      'Building outbound infrastructure from scratch',
      'Hiring 5 SDRs by end of February',
    ],
    angles: [
      'Pain: Manual prospecting slowing down new SDR ramp',
      'Trigger: VP Sales posted about scaling outbound on LinkedIn',
      'Hook: "Saw you\'re ramping SDRs, most teams lose 40% of productivity to list building"',
    ],
  };

  const championData = [
    { name: 'James Chen', company: 'Velocity AI', title: 'VP Sales', activity: 'Posted about outbound challenges', engagement: 'Commented on Clay post', score: 92 },
    { name: 'Sarah Miller', company: 'DataForge', title: 'Head of Growth', activity: 'Shared article on GTM efficiency', engagement: 'Liked 3 sales automation posts', score: 87 },
    { name: 'Emily Watson', company: 'Nexus Analytics', title: 'Director of Sales', activity: 'Asked for tool recommendations', engagement: 'Active in RevOps community', score: 84 },
    { name: 'Michael Torres', company: 'CloudSync Pro', title: 'GTM Lead', activity: 'Posted about scaling challenges', engagement: 'Followed 5 GTM influencers', score: 79 },
  ];

  const handleProcess = () => {
    setIsProcessing(true);
    setShowResults(false);
    setTimeout(() => {
      setIsProcessing(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Prospect Engine</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-800 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder={
            activeTab === 'icp' ? 'ICP criteria (Series A SaaS, 50-200 employees)' :
            activeTab === 'signals' ? 'Signal type (hiring SDRs, recent funding etc)' :
            activeTab === 'deepdive' ? 'Company name' :
            'Target accounts'
          }
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleProcess}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </>
          ) : (
            <>Run Analysis</>
          )}
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          {/* ICP Lead Lists */}
          {activeTab === 'icp' && (
            <div>
              <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-white">ICP Matches</h2>
                  <p className="text-sm text-gray-500">50-100 employees • Series A/B • SaaS</p>
                </div>
                <span className="text-sm text-gray-400">127 results</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Company</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Employees</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Funding</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Contact</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Title</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Email</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {icpData.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-800/50">
                        <td className="px-6 py-4">
                          <div className="font-medium text-white">{row.company}</div>
                          <div className="text-sm text-gray-500">{row.domain}</div>
                        </td>
                        <td className="px-6 py-4 text-gray-300">{row.employees}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-900/50 text-green-400 rounded text-xs">{row.funding}</span>
                        </td>
                        <td className="px-6 py-4 text-gray-300">{row.contact}</td>
                        <td className="px-6 py-4 text-gray-400">{row.title}</td>
                        <td className="px-6 py-4 text-blue-400">{row.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Signal-Based Leads */}
          {activeTab === 'signals' && (
            <div>
              <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-white">Active Buying Signals</h2>
                  <p className="text-sm text-gray-500">Companies showing intent in the last 14 days</p>
                </div>
                <span className="text-sm text-gray-400">43 signals detected</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Company</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Signal</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Detail</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Urgency</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {signalData.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-800/50">
                        <td className="px-6 py-4 font-medium text-white">{row.company}</td>
                        <td className="px-6 py-4 text-gray-300">{row.signal}</td>
                        <td className="px-6 py-4 text-gray-400">{row.detail}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            row.urgency === 'High' ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'
                          }`}>{row.urgency}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-300">{row.contact}</div>
                          <div className="text-sm text-gray-500">{row.title}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Account Deep Dive */}
          {activeTab === 'deepdive' && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{deepDiveData.company}</h2>
                <p className="text-gray-400">{deepDiveData.overview}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Org Chart */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-blue-400">👥</span> Key Stakeholders
                  </h3>
                  <div className="space-y-3">
                    {deepDiveData.orgChart.map((person, i) => (
                      <div key={i} className="border-l-2 border-blue-600 pl-3">
                        <div className="font-medium text-gray-200">{person.name}</div>
                        <div className="text-sm text-gray-400">{person.title}</div>
                        <div className="text-xs text-gray-500">Reports to: {person.reports}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Initiatives */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-green-400">🎯</span> Current Initiatives
                  </h3>
                  <ul className="space-y-2">
                    {deepDiveData.initiatives.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outreach Angles */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-purple-400">💡</span> Outreach Angles
                  </h3>
                  <ul className="space-y-2">
                    {deepDiveData.angles.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-purple-400 mt-1">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Champion Mapping */}
          {activeTab === 'champions' && (
            <div>
              <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-white">Active Champions</h2>
                  <p className="text-sm text-gray-500">Ranked by engagement score</p>
                </div>
                <span className="text-sm text-gray-400">Based on LinkedIn activity</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Name</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Company</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Recent Activity</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Engagement</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {championData.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-800/50">
                        <td className="px-6 py-4">
                          <div className="font-medium text-white">{row.name}</div>
                          <div className="text-sm text-gray-500">{row.title}</div>
                        </td>
                        <td className="px-6 py-4 text-gray-300">{row.company}</td>
                        <td className="px-6 py-4 text-gray-400">{row.activity}</td>
                        <td className="px-6 py-4 text-gray-400">{row.engagement}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                style={{ width: `${row.score}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-white">{row.score}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer Stats */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-white">127</div>
          <div className="text-sm text-gray-500">Leads Found</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-white">43</div>
          <div className="text-sm text-gray-500">Active Signals</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-white">89%</div>
          <div className="text-sm text-gray-500">Email Accuracy</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-white">2.3s</div>
          <div className="text-sm text-gray-500">Avg. Processing</div>
        </div>
      </div>
    </div>
  );
}
