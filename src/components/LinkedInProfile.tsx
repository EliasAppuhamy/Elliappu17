'use client';

import React, { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'overview' | 'about' | 'jobs' | 'people' | 'posts';

interface Post {
  id: number;
  date: string;
  content: string;
  likes: number;
  comments: number;
  reposts: number;
  tag?: string;
}

// ─── Static data ─────────────────────────────────────────────────────────────

const COMPANY = {
  name: 'Ambitly',
  tagline: 'AI-Powered Workflow Intelligence',
  website: 'ambitly.org',
  websiteDisplay: 'https://ambitly.org',
  industry: 'Software Development',
  size: '2–10 employees',
  type: 'Privately Held',
  headquarters: 'Germany',
  founded: '2024',
  followers: '1,247',
  employees: '8',
  description: [
    'Ambitly is an AI-powered productivity and workflow platform built for ambitious teams who want to move faster without working harder.',
    'We combine intelligent task automation, real-time collaboration, and AI-driven insights into one seamless platform — so your team can eliminate busywork and focus on what actually matters.',
    'Whether you\'re a startup scaling quickly or an established team optimising operations, Ambitly adapts to how you work and grows with your ambitions.',
  ],
  mission: 'To eliminate workflow friction and unlock the full potential of every team.',
  specialties: [
    'AI Workflow Automation',
    'Team Productivity',
    'SaaS',
    'Task Management',
    'Business Process Optimisation',
    'AI Integration',
    'Collaboration Tools',
    'Workflow Intelligence',
    'No-Code Automation',
    'Data-Driven Insights',
  ],
};

const POSTS: Post[] = [
  {
    id: 1,
    date: '2 days ago',
    tag: 'Product Update',
    content: `🚀 Excited to announce the launch of Ambitly's AI Workflow Engine — the intelligent core behind how your team gets work done.

We designed it to do one thing exceptionally well: learn how your team operates and remove every ounce of unnecessary friction from your daily processes.

✅  Smart task routing
✅  Automated status updates
✅  Proactive bottleneck detection
✅  Real-time collaboration layer

Less friction. More focus. More results.

Try it free → ambitly.org`,
    likes: 214,
    comments: 38,
    reposts: 27,
  },
  {
    id: 2,
    date: '1 week ago',
    tag: 'Insight',
    content: `What if your tools actually learned how your team works?

Most productivity software just records what you do. We built Ambitly to understand *why* you do it — and suggest smarter ways forward.

The result? Teams using Ambitly report saving an average of 4.5 hours per week per person. That's over 200 hours a year, per employee — time you can reinvest into the work that moves the needle.

We're just getting started. 🌱

#WorkflowAI #ProductivityTools #Ambitly #FutureOfWork`,
    likes: 142,
    comments: 29,
    reposts: 41,
  },
  {
    id: 3,
    date: '2 weeks ago',
    tag: 'Company',
    content: `Great teams deserve great systems.

We built Ambitly because we believe the gap between ambition and execution shouldn't be filled with manual work — it should be bridged by intelligence.

Every feature we ship is driven by one question: does this help teams spend more time on meaningful work?

If you're building ambitious things, we'd love to support you. 🤝

Check our website for early access → ambitly.org`,
    likes: 187,
    comments: 44,
    reposts: 33,
  },
  {
    id: 4,
    date: '3 weeks ago',
    tag: 'Hiring',
    content: `We're growing the Ambitly team! 🌍

We're looking for people who are:
→ Obsessed with user experience
→ Excited about AI's potential to change how we work
→ Comfortable operating with autonomy in a fast-moving startup

Open roles:
• Full-Stack Engineer (Next.js / TypeScript)
• AI/ML Engineer
• Product Designer

Fully remote. Competitive pay. Real ownership.

Send us a message or visit ambitly.org — we'd love to hear from you.`,
    likes: 268,
    comments: 61,
    reposts: 49,
  },
];

const JOBS = [
  { title: 'Full-Stack Engineer', location: 'Remote · Europe', type: 'Full-time', posted: '3 days ago' },
  { title: 'AI / ML Engineer', location: 'Remote · Worldwide', type: 'Full-time', posted: '3 days ago' },
  { title: 'Product Designer (UX/UI)', location: 'Remote · Europe', type: 'Full-time', posted: '1 week ago' },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const LinkedInLogo = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="34" height="34" rx="6" fill="#0A66C2" />
    <path d="M8 13.5H11.8V26H8V13.5ZM9.9 11.8C8.74 11.8 8 11.06 8 10.1C8 9.12 8.76 8.4 9.92 8.4C11.08 8.4 11.8 9.12 11.8 10.1C11.8 11.06 11.08 11.8 9.9 11.8Z" fill="white" />
    <path d="M14.4 13.5H18V15.16H18.06C18.58 14.18 19.84 13.14 21.74 13.14C25.62 13.14 26.32 15.68 26.32 19.02V26H22.52V19.78C22.52 18.3 22.48 16.4 20.44 16.4C18.38 16.4 18.08 18.02 18.08 19.66V26H14.4V13.5Z" fill="white" />
  </svg>
);

const AmbitlyLogo = ({ size = 120, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="120" height="120" rx="16" fill="url(#ambitlyGrad)" />
    <defs>
      <linearGradient id="ambitlyGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8B6DFF" />
        <stop offset="100%" stopColor="#5B30D4" />
      </linearGradient>
    </defs>
    {/* Stylised "A" lettermark */}
    <text
      x="60"
      y="80"
      textAnchor="middle"
      fill="white"
      fontSize="68"
      fontWeight="800"
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      letterSpacing="-2"
    >
      A
    </text>
    {/* Decorative dot */}
    <circle cx="78" cy="44" r="7" fill="#C4B5FD" opacity="0.8" />
  </svg>
);

const AmbitlySmallLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="url(#smallGrad)" />
    <defs>
      <linearGradient id="smallGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8B6DFF" />
        <stop offset="100%" stopColor="#5B30D4" />
      </linearGradient>
    </defs>
    <text x="16" y="22" textAnchor="middle" fill="white" fontSize="18" fontWeight="800" fontFamily="Arial, sans-serif">A</text>
  </svg>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

function LinkedInNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <LinkedInLogo />
          <div className="hidden sm:flex items-center bg-[#EEF3F8] rounded-md px-3 py-1.5 gap-2 w-56">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#666" strokeWidth="1.5"/><path d="M11 11l2.5 2.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span className="text-sm text-gray-500">Search</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {['Home', 'My Network', 'Jobs', 'Messaging', 'Notifications'].map((item) => (
            <button key={item} className="hidden md:flex flex-col items-center gap-0.5 text-gray-500 hover:text-black transition-colors">
              <span className="text-xs font-medium">{item}</span>
            </button>
          ))}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">EA</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

function CoverPhoto() {
  return (
    <div
      className="w-full h-44 sm:h-52 rounded-t-lg relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0545 0%, #3B1FA8 30%, #6C47FF 65%, #9B7BFF 100%)',
      }}
    >
      {/* Grid pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Ambient circles */}
      <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white opacity-5" />
      <div className="absolute -bottom-20 left-20 w-48 h-48 rounded-full bg-white opacity-5" />
      {/* Tagline watermark */}
      <div className="absolute bottom-4 right-6 text-white opacity-30 text-sm font-semibold tracking-widest uppercase select-none">
        Work Smarter · Scale Faster
      </div>
    </div>
  );
}

function LikeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block">
      <path d="M7 22H4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 7V4a3 3 0 0 1 6 0v3h3a2 2 0 0 1 2 2l-1 9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked((v) => !v);
    setLikes((v) => (liked ? v - 1 : v + 1));
  };

  const lines = post.content.split('\n');

  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-shadow hover:shadow-md">
      {/* Post header */}
      <div className="flex items-start gap-3 p-4">
        <AmbitlySmallLogo />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-gray-900">Ambitly</p>
          <p className="text-xs text-gray-500">{COMPANY.followers} followers · {post.date}</p>
          {post.tag && (
            <span className="inline-block mt-1 text-[11px] font-medium text-purple-700 bg-purple-50 border border-purple-200 rounded-full px-2 py-0.5">
              {post.tag}
            </span>
          )}
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
        </button>
      </div>

      {/* Post content */}
      <div className="px-4 pb-3">
        <div className="text-sm text-gray-800 leading-relaxed space-y-1">
          {lines.map((line, i) => (
            <p key={i} className={line === '' ? 'h-2' : ''}>
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Engagement counts */}
      <div className="px-4 py-2 flex items-center justify-between border-t border-gray-100 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-600 text-white text-[9px]">👍</span>
          <span>{likes.toLocaleString()}</span>
        </div>
        <div className="flex gap-3">
          <span>{post.comments} comments</span>
          <span>{post.reposts} reposts</span>
        </div>
      </div>

      {/* Action bar */}
      <div className="px-2 py-1 flex border-t border-gray-100">
        {[
          { label: 'Like', icon: <LikeIcon />, active: liked, onClick: handleLike },
          { label: 'Comment', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
          { label: 'Repost', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
          { label: 'Send', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> },
        ].map(({ label, icon, active, onClick }) => (
          <button
            key={label}
            onClick={onClick}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
              active ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            }`}
          >
            {icon}
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>
    </article>
  );
}

function AboutCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h2 className="font-semibold text-base text-gray-900">About</h2>
      </div>
      <div className="p-4 space-y-3">
        {[
          { icon: '🌐', label: 'Website', value: COMPANY.website, href: COMPANY.websiteDisplay },
          { icon: '💼', label: 'Industry', value: COMPANY.industry },
          { icon: '👥', label: 'Company size', value: `${COMPANY.size} · ${COMPANY.employees} on LinkedIn` },
          { icon: '🏢', label: 'Headquarters', value: COMPANY.headquarters },
          { icon: '🔒', label: 'Type', value: COMPANY.type },
          { icon: '📅', label: 'Founded', value: COMPANY.founded },
        ].map(({ icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-3 text-sm">
            <span className="text-base w-5 flex-shrink-0 mt-px">{icon}</span>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 font-medium">{label}</p>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate block">
                  {value}
                </a>
              ) : (
                <p className="text-gray-800">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpecialtiesCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h2 className="font-semibold text-base text-gray-900">Specialties</h2>
      </div>
      <div className="p-4 flex flex-wrap gap-2">
        {COMPANY.specialties.map((s) => (
          <span key={s} className="specialty-tag">{s}</span>
        ))}
      </div>
    </div>
  );
}

function PeopleCard() {
  const people = [
    { initials: 'EA', name: 'Elias A.', role: 'Founder & CEO', color: 'from-purple-500 to-purple-700' },
    { initials: 'MK', name: 'Max K.', role: 'Head of Product', color: 'from-blue-500 to-blue-700' },
    { initials: 'LH', name: 'Laura H.', role: 'Lead Engineer', color: 'from-teal-500 to-teal-700' },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="font-semibold text-base text-gray-900">People</h2>
        <a href="#" className="text-xs text-blue-600 hover:underline font-medium">See all {COMPANY.employees}</a>
      </div>
      <div className="p-4 space-y-3">
        {people.map(({ initials, name, role, color }) => (
          <div key={initials} className="flex items-center gap-3 group cursor-pointer">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex-shrink-0 flex items-center justify-center`}>
              <span className="text-white text-xs font-bold">{initials}</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">{name}</p>
              <p className="text-xs text-gray-500 truncate">{role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <button className="w-full border border-gray-400 text-gray-600 text-sm font-semibold py-1.5 rounded-full hover:bg-gray-100 transition-colors">
          Show all employees
        </button>
      </div>
    </div>
  );
}

function SimilarPages() {
  const pages = [
    { name: 'Linear', desc: 'Software Development', followers: '44K' },
    { name: 'Notion', desc: 'Software Development', followers: '312K' },
    { name: 'Make', desc: 'IT Services · Workflow Automation', followers: '89K' },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h2 className="font-semibold text-base text-gray-900">Similar pages</h2>
      </div>
      <div className="p-4 space-y-4">
        {pages.map(({ name, desc, followers }) => (
          <div key={name} className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded border border-gray-200 bg-gray-50 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-600">
              {name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{name}</p>
              <p className="text-xs text-gray-500 truncate">{desc}</p>
              <p className="text-xs text-gray-400">{followers} followers</p>
            </div>
            <button className="flex-shrink-0 border border-gray-400 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Tab Panels ───────────────────────────────────────────────────────────────

function OverviewPanel() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start">
      {/* Main: posts feed */}
      <div className="flex-1 min-w-0 space-y-3">
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {/* Sidebar */}
      <aside className="w-full lg:w-72 flex-shrink-0 space-y-3">
        <AboutCard />
        <PeopleCard />
        <SimilarPages />
      </aside>
    </div>
  );
}

function AboutPanel() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start">
      <div className="flex-1 min-w-0 space-y-4">
        {/* Overview */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Company overview</h2>
          <div className="space-y-3">
            {COMPANY.description.map((para, i) => (
              <p key={i} className="text-sm text-gray-700 leading-relaxed">{para}</p>
            ))}
          </div>
          <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-700 mb-1">Our Mission</p>
            <p className="text-sm text-purple-900 italic">"{COMPANY.mission}"</p>
          </div>
        </div>

        {/* Specialties */}
        <SpecialtiesCard />

        {/* Company details table */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Company details</h2>
          <dl className="divide-y divide-gray-100">
            {[
              { term: 'Website', def: COMPANY.website, href: COMPANY.websiteDisplay },
              { term: 'Industry', def: COMPANY.industry },
              { term: 'Company size', def: COMPANY.size },
              { term: 'Headquarters', def: COMPANY.headquarters },
              { term: 'Type', def: COMPANY.type },
              { term: 'Founded', def: COMPANY.founded },
            ].map(({ term, def, href }) => (
              <div key={term} className="py-3 flex gap-4 text-sm">
                <dt className="w-36 flex-shrink-0 text-gray-500 font-medium">{term}</dt>
                <dd className="text-gray-800 min-w-0">
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {def}
                    </a>
                  ) : def}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <aside className="w-full lg:w-72 flex-shrink-0 space-y-3">
        <PeopleCard />
        <SimilarPages />
      </aside>
    </div>
  );
}

function JobsPanel() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start">
      <div className="flex-1 min-w-0 space-y-3">
        {JOBS.map((job) => (
          <div key={job.title} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                <AmbitlyLogo size={48} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-blue-600 group-hover:underline">{job.title}</h3>
                <p className="text-sm text-gray-700 mt-0.5">Ambitly</p>
                <p className="text-sm text-gray-500 mt-0.5">{job.location}</p>
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-2 py-0.5">{job.type}</span>
                  <span className="text-xs text-gray-400">Posted {job.posted}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <aside className="w-full lg:w-72 flex-shrink-0 space-y-3">
        <AboutCard />
      </aside>
    </div>
  );
}

function PeoplePanel() {
  const people = [
    { initials: 'EA', name: 'Elias A.', role: 'Founder & CEO at Ambitly', mutual: 0, color: 'from-purple-500 to-purple-700' },
    { initials: 'MK', name: 'Max K.', role: 'Head of Product at Ambitly', mutual: 2, color: 'from-blue-500 to-blue-700' },
    { initials: 'LH', name: 'Laura H.', role: 'Lead Engineer at Ambitly', mutual: 1, color: 'from-teal-500 to-teal-700' },
    { initials: 'SB', name: 'Simon B.', role: 'AI/ML Engineer at Ambitly', mutual: 0, color: 'from-orange-400 to-orange-600' },
    { initials: 'AM', name: 'Anna M.', role: 'Product Designer at Ambitly', mutual: 3, color: 'from-pink-500 to-pink-700' },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-100">
        <h2 className="font-semibold text-base text-gray-900">Ambitly employees · {COMPANY.employees} on LinkedIn</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {people.map(({ initials, name, role, mutual, color }) => (
          <div key={initials} className="flex items-center gap-4 p-4 group cursor-pointer hover:bg-gray-50 transition-colors">
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex-shrink-0 flex items-center justify-center`}>
              <span className="text-white text-sm font-bold">{initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{name}</p>
              <p className="text-sm text-gray-600 truncate">{role}</p>
              {mutual > 0 && <p className="text-xs text-gray-400 mt-0.5">{mutual} mutual connection{mutual > 1 ? 's' : ''}</p>}
            </div>
            <button className="flex-shrink-0 border border-blue-600 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-blue-50 transition-colors">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PostsPanel() {
  return (
    <div className="space-y-3 max-w-2xl">
      {POSTS.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function LinkedInProfile() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [following, setFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(1247);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'people', label: 'People' },
    { id: 'posts', label: 'Posts' },
  ];

  const handleFollow = () => {
    setFollowing((v) => !v);
    setFollowerCount((v) => (following ? v - 1 : v + 1));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f3f2ef' }}>
      <LinkedInNav />

      <main className="max-w-5xl mx-auto px-4 py-4 space-y-4">

        {/* ── Company header card ──────────────────────────────────────────── */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <CoverPhoto />

          {/* Logo + info row */}
          <div className="px-5 pb-4 pt-0 relative">
            {/* Logo (overlapping cover) */}
            <div
              className="absolute -top-10 left-5 rounded-xl overflow-hidden border-4 border-white shadow-md"
              style={{ width: 96, height: 96 }}
            >
              <AmbitlyLogo size={96} />
            </div>

            {/* CTA buttons (top-right) */}
            <div className="flex justify-end gap-2 mb-2 pt-2">
              <button className="text-xs text-gray-600 border border-gray-400 font-semibold px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors">
                Visit website
              </button>
              <button
                onClick={handleFollow}
                className={`btn-follow text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${
                  following
                    ? 'bg-gray-100 text-gray-700 border border-gray-400 hover:bg-gray-200'
                    : 'bg-[#0a66c2] text-white hover:bg-[#004182]'
                }`}
              >
                {following ? '✓ Following' : '+ Follow'}
              </button>
            </div>

            {/* Company name + meta */}
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">Ambitly</h1>
              <p className="text-base text-gray-600 mt-0.5">
                AI-Powered Workflow Intelligence · Work Smarter. Scale Faster.
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm text-gray-500">
                <span>{COMPANY.industry}</span>
                <span>·</span>
                <span>{COMPANY.headquarters}</span>
                <span>·</span>
                <a href={COMPANY.websiteDisplay} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {COMPANY.website}
                </a>
              </div>
              <p className="text-sm font-medium text-blue-600 mt-1 cursor-pointer hover:underline">
                {followerCount.toLocaleString()} followers
              </p>
            </div>
          </div>

          {/* ── Tab navigation ──────────────────────────────────────────────── */}
          <div className="border-t border-gray-200 px-2">
            <div className="flex overflow-x-auto scrollbar-none">
              {tabs.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex-shrink-0 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                    activeTab === id
                      ? 'border-black text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Active tab panel ─────────────────────────────────────────────── */}
        <div>
          {activeTab === 'overview' && <OverviewPanel />}
          {activeTab === 'about'    && <AboutPanel />}
          {activeTab === 'jobs'     && <JobsPanel />}
          {activeTab === 'people'   && <PeoplePanel />}
          {activeTab === 'posts'    && <PostsPanel />}
        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 py-8 text-xs text-gray-400 text-center space-y-1">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {['About', 'Accessibility', 'Help Center', 'Privacy & Terms', 'Ad Choices', 'Advertising', 'Business Services'].map((item) => (
            <a key={item} href="#" className="hover:text-gray-600 hover:underline">{item}</a>
          ))}
        </div>
        <p className="mt-2">
          <span className="font-semibold text-[#0a66c2]">LinkedIn</span> Corporation © {new Date().getFullYear()} · Ambitly LinkedIn Profile
        </p>
      </footer>
    </div>
  );
}
