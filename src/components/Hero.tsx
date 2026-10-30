import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Cpu, Database, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  const [activeInspectorTab, setActiveInspectorTab] = useState<'agents' | 'schema' | 'terminal'>('agents');
  const [querySimulationRunning, setQuerySimulationRunning] = useState(false);
  const [simulationLog, setSimulationLog] = useState<string>('System idle. Ready to evaluate incoming campus request.');

  const runSampleSimulation = () => {
    setQuerySimulationRunning(true);
    setSimulationLog('Ingesting query: "When is the ML deadline & campus hackathon?"...');
    setTimeout(() => {
      setSimulationLog('Query classified as [HYBRID_QUERY] -> Delegating to LMS Agent & Event Agent...');
    }, 600);
    setTimeout(() => {
      setSimulationLog('DynamoDB query resolved in 42ms. LMS submission verified for Nov 4.');
      setQuerySimulationRunning(false);
    }, 1300);
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#E7E0D8]/70 relative overflow-hidden">
      {/* Background subtle architectural grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #E7E0D8 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Minimalist kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-4">
              <span>Artificial Intelligence & Machine Learning</span>
              <span aria-hidden="true" className="text-[#E7E0D8]">·</span>
              <span>Full-Stack Systems</span>
            </div>

            {/* Display Hero Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#2C2825] leading-[1.15] tracking-tight mb-6 text-balance">
              Building intelligent agent systems and tactile, high-craft web software.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-[#665E57] leading-relaxed mb-8 max-w-2xl font-normal">
              I am <span className="font-semibold text-[#2C2825]">{PERSONAL_INFO.name}</span>, a 2nd-year B.Tech CSE (AIML) scholar at Reva University with a <span className="font-semibold text-[#2C2825]">9.67 CGPA</span>. My work spans autonomous multi-agent systems on AWS Bedrock, ACID-compliant database architectures, and fast, human-centered web platforms.
            </p>

            {/* CTAs & Quick Action */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-[#FBF9F5] bg-[#2C2825] rounded-lg hover:bg-[#C88363] transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <span>Explore Selected Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="px-6 py-3 text-sm font-semibold text-[#2C2825] bg-[#F4F0EA] border border-[#E7E0D8] rounded-lg hover:border-[#C88363] hover:bg-[#FFFFFF] transition-colors inline-flex items-center gap-2"
              >
                <span>Read Resume Monograph</span>
                <ArrowUpRight className="w-4 h-4 text-[#8A4F33]" />
              </button>
            </div>

            {/* Quiet Academic & Location Metadata */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#665E57] pt-4 border-t border-[#E7E0D8]/60">
              <span className="font-medium text-[#2C2825]">{PERSONAL_INFO.university}</span>
              <span aria-hidden="true" className="text-[#85736C]">·</span>
              <span>B.Tech CSE AIML (2024–2028)</span>
              <span aria-hidden="true" className="text-[#85736C]">·</span>
              <span className="font-mono text-[#8A4F33] font-semibold">9.67 CGPA</span>
              <span aria-hidden="true" className="text-[#85736C]">·</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right Column: Architectural System Blueprint & Interactive Engine */}
          <div className="lg:col-span-5">
            <div className="bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl p-5 sm:p-6 shadow-sm">
              {/* Header bar of the inspector */}
              <div className="flex items-center justify-between border-b border-[#E7E0D8] pb-4 mb-4">
                <div>
                  <h3 className="text-xs font-semibold text-[#2C2825] tracking-wide uppercase">
                    System Architecture Blueprint
                  </h3>
                  <p className="text-[11px] text-[#665E57]">
                    Live Interactive Model: Campus Guardian & Cloud Fabric
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#FFFFFF] p-1 border border-[#E7E0D8] rounded-md">
                  <button
                    onClick={() => setActiveInspectorTab('agents')}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                      activeInspectorTab === 'agents'
                        ? 'bg-[#2C2825] text-[#FBF9F5]'
                        : 'text-[#665E57] hover:text-[#2C2825]'
                    }`}
                  >
                    Agents
                  </button>
                  <button
                    onClick={() => setActiveInspectorTab('schema')}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                      activeInspectorTab === 'schema'
                        ? 'bg-[#2C2825] text-[#FBF9F5]'
                        : 'text-[#665E57] hover:text-[#2C2825]'
                    }`}
                  >
                    Data Flow
                  </button>
                  <button
                    onClick={() => setActiveInspectorTab('terminal')}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                      activeInspectorTab === 'terminal'
                        ? 'bg-[#2C2825] text-[#FBF9F5]'
                        : 'text-[#665E57] hover:text-[#2C2825]'
                    }`}
                  >
                    Simulation
                  </button>
                </div>
              </div>

              {/* Inspector Content */}
              {activeInspectorTab === 'agents' && (
                <div className="space-y-3.5">
                  <div className="p-3 bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-[#2C2825] flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#C88363]" />
                        AWS Bedrock Orchestrator
                      </span>
                      <span className="text-[10px] font-mono text-[#707A65] bg-[#707A65]/10 px-1.5 py-0.5 rounded">
                        Active Sub-Agent
                      </span>
                    </div>
                    <p className="text-xs text-[#665E57] leading-relaxed">
                      Coordinates Claude 3 on Amazon Bedrock to categorize student intent into LMS Deadlines, Campus Notices, or Course Advisory.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg">
                      <span className="text-[11px] font-semibold text-[#2C2825] block mb-0.5">
                        LMS Deadline Agent
                      </span>
                      <p className="text-[11px] text-[#665E57]">
                        Polls course timelines, assigns urgency weights, and triggers proactive reminders.
                      </p>
                    </div>
                    <div className="p-3 bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg">
                      <span className="text-[11px] font-semibold text-[#2C2825] block mb-0.5">
                        Campus Event Parser
                      </span>
                      <p className="text-[11px] text-[#665E57]">
                        Ingests departmental hackathon, seminar, and club bulletins with temporal indexing.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#2C2825] block">
                        Serverless API Gateway & DynamoDB
                      </span>
                      <span className="text-[11px] text-[#665E57]">
                        Time-series indexing with sub-220ms turnaround
                      </span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#707A65]" />
                  </div>
                </div>
              )}

              {activeInspectorTab === 'schema' && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-[#2C2825] flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-[#C88363]" />
                        DynamoDB Partition Key Design
                      </span>
                      <span className="text-[10px] font-mono text-[#665E57]">CAMPUS_EVENTS</span>
                    </div>
                    <pre className="font-mono text-[10px] text-[#53443D] bg-[#FBF9F5] p-2.5 rounded border border-[#E7E0D8] overflow-x-auto">
{`PK: STUDENT#<uuid>
SK: DEADLINE#2026-11-04#CS602
Attributes:
  - course_code: "CS602"
  - task_title: "Distributed Neural Net Lab"
  - status: "PENDING_VERIFICATION"
  - weight: 0.25`}
                    </pre>
                  </div>
                  <div className="text-[11px] text-[#665E57] bg-[#FFFFFF] p-2.5 rounded border border-[#E7E0D8]">
                    <span className="font-semibold text-[#2C2825]">Concurrency Guarantee:</span> Velvet-Brew PostgreSQL transactions implement slot locking at the database layer to eradicate race conditions.
                  </div>
                </div>
              )}

              {activeInspectorTab === 'terminal' && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#262320] text-[#E7E0D8] rounded-lg font-mono text-xs border border-[#3E3834]">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#85736C] border-b border-[#3E3834] pb-2 mb-2">
                      <Terminal className="w-3 h-3 text-[#C88363]" />
                      <span>agent_dispatcher_eval.sh</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#D8C2BA]">
                      {simulationLog}
                    </p>
                  </div>
                  <button
                    onClick={runSampleSimulation}
                    disabled={querySimulationRunning}
                    className="w-full py-2.5 px-3 text-xs font-medium text-[#2C2825] bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg hover:border-[#C88363] hover:text-[#8A4F33] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C88363]" />
                    <span>{querySimulationRunning ? 'Simulating Agent Dispatch...' : 'Dispatch Live Query Simulation'}</span>
                  </button>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-[#E7E0D8] flex items-center justify-between text-[11px] text-[#665E57]">
                <span>Full-Stack & ML Integration</span>
                <span className="font-mono text-[#8A4F33]">9.67 CGPA Rigor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency Row: Key Metrics */}
        <div className="mt-14 pt-8 border-t border-[#E7E0D8] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-normal text-[#2C2825] tabular-nums">
              9.67
            </div>
            <div className="text-xs font-medium text-[#8A4F33] uppercase tracking-wider mt-1">
              B.Tech Cumulative GPA
            </div>
            <p className="text-xs text-[#665E57] mt-0.5">
              Reva University CSE (AIML)
            </p>
          </div>

          <div>
            <div className="font-serif text-3xl sm:text-4xl font-normal text-[#2C2825] tabular-nums">
              3
            </div>
            <div className="text-xs font-medium text-[#8A4F33] uppercase tracking-wider mt-1">
              Engineered Architectures
            </div>
            <p className="text-xs text-[#665E57] mt-0.5">
              Multi-Agent, Full-Stack & Vanilla
            </p>
          </div>

          <div>
            <div className="font-serif text-3xl sm:text-4xl font-normal text-[#2C2825] tabular-nums">
              94.0%
            </div>
            <div className="text-xs font-medium text-[#8A4F33] uppercase tracking-wider mt-1">
              Pre-University Merit
            </div>
            <p className="text-xs text-[#665E57] mt-0.5">
              Oxford PU College Distinction
            </p>
          </div>

          <div>
            <div className="font-serif text-3xl sm:text-4xl font-normal text-[#2C2825] tabular-nums">
              96.7%
            </div>
            <div className="text-xs font-medium text-[#8A4F33] uppercase tracking-wider mt-1">
              10th Board Topper
            </div>
            <p className="text-xs text-[#665E57] mt-0.5">
              S. Cadambi Vidyakendra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
