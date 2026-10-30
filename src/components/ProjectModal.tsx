import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Database, Cpu, ShoppingBag, Calendar, Sparkles, AlertCircle } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'interactive'>('overview');

  // Interactive state for Velvet-Brew simulator
  const [selectedTable, setSelectedTable] = useState<number | null>(3);
  const [partySize, setPartySize] = useState<number>(2);
  const [bookingTime, setBookingTime] = useState<string>('18:30');
  const [reservations, setReservations] = useState([
    { id: 'RES-891', table: 1, time: '17:00', party: 4, status: 'Confirmed', customer: 'Aarav M.' },
    { id: 'RES-892', table: 3, time: '18:30', party: 2, status: 'Pending Lock', customer: 'Purva V.' },
  ]);
  const [bookingSuccessMsg, setBookingSuccessMsg] = useState<string>('');

  // Interactive state for Campus Guardian simulator
  const [agentQuery, setAgentQuery] = useState('When is the next Machine Learning lab submission?');
  const [agentResponse, setAgentResponse] = useState<{
    intent: string;
    targetAgent: string;
    output: string;
    confidence: string;
  } | null>(null);
  const [isAgentThinking, setIsAgentThinking] = useState(false);

  // Interactive state for Craftverse simulator
  const [cartItems, setCartItems] = useState([
    { id: 'art-1', name: 'Terracotta Hand-thrown Matcha Bowl', artisan: 'Meera Rao', price: 1250, qty: 1 },
  ]);
  const [selectedArtisanProduct, setSelectedArtisanProduct] = useState({
    name: 'Glazed Stoneware Espresso Tumbler',
    artisan: 'Devika Sharma · Jaipur Kilns',
    price: 850,
    material: 'Natural Clay with Wood Ash Glaze',
    firing: 'Cone 10 Reduction (1280°C)',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleSimulateAgentQuery = () => {
    setIsAgentThinking(true);
    setAgentResponse(null);
    setTimeout(() => {
      let intent = 'LMS_DEADLINE_TRACKER';
      let targetAgent = 'AcademicScheduleAgent';
      let output =
        'ML Lab Assignment #4 (Distributed Neural Networks) is due Monday, Nov 4, at 23:59 IST. Submit notebook via Reva LMS portal.';
      let confidence = '99.2%';

      if (agentQuery.toLowerCase().includes('hackathon') || agentQuery.toLowerCase().includes('event')) {
        intent = 'CAMPUS_EVENT_FEED';
        targetAgent = 'CampusEventParserAgent';
        output =
          'Upcoming: IdeateBLR University Hackathon kickoff on Nov 9 at Kuvempu Auditorium. 12 teams currently registered.';
        confidence = '97.8%';
      } else if (agentQuery.toLowerCase().includes('adviser') || agentQuery.toLowerCase().includes('course')) {
        intent = 'STUDENT_ADVISORY';
        targetAgent = 'CurriculumAdvisorAgent';
        output =
          'CSE (AIML) 5th Semester prereqs include CS401 (Algorithms) and CS403 (DBMS). Both fulfilled with your current 9.67 CGPA.';
        confidence = '98.5%';
      }

      setAgentResponse({ intent, targetAgent, output, confidence });
      setIsAgentThinking(false);
    }, 600);
  };

  const handleBookTable = () => {
    if (!selectedTable) return;
    const newRes = {
      id: `RES-${Math.floor(100 + Math.random() * 900)}`,
      table: selectedTable,
      time: bookingTime,
      party: partySize,
      status: 'Confirmed',
      customer: 'Guest Booking',
    };
    setReservations([newRes, ...reservations]);
    setBookingSuccessMsg(`Table #${selectedTable} successfully locked and reserved for ${bookingTime}!`);
    setTimeout(() => setBookingSuccessMsg(''), 4000);
  };

  const handleCancelReservation = (id: string) => {
    setReservations(reservations.filter((r) => r.id !== id));
    setBookingSuccessMsg(`Reservation ${id} released. Slot made available in real-time.`);
    setTimeout(() => setBookingSuccessMsg(''), 4000);
  };

  const handleAddToCart = () => {
    setCartItems([
      ...cartItems,
      {
        id: `art-${Date.now()}`,
        name: selectedArtisanProduct.name,
        artisan: selectedArtisanProduct.artisan,
        price: selectedArtisanProduct.price,
        qty: 1,
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#2C2825]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FBF9F5] w-full max-w-4xl max-h-[90vh] rounded-2xl border border-[#E7E0D8] shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#E7E0D8] flex items-center justify-between bg-[#F4F0EA]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#8A4F33] font-medium mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true" className="text-[#85736C]">·</span>
              <span>{project.year}</span>
              <span aria-hidden="true" className="text-[#85736C]">·</span>
              <span>Architecture Case Study</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C2825]">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-[#665E57] hover:text-[#2C2825] hover:bg-[#FFFFFF] rounded-lg transition-colors border border-transparent hover:border-[#E7E0D8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="px-6 border-b border-[#E7E0D8] bg-[#FBF9F5] flex items-center gap-6 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 relative transition-colors ${
              activeTab === 'overview'
                ? 'text-[#2C2825] after:w-full after:h-[2px] after:bg-[#C88363] after:absolute after:bottom-0 after:left-0'
                : 'text-[#665E57] hover:text-[#2C2825]'
            }`}
          >
            System Architecture & Solution
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3.5 relative transition-colors ${
              activeTab === 'code'
                ? 'text-[#2C2825] after:w-full after:h-[2px] after:bg-[#C88363] after:absolute after:bottom-0 after:left-0'
                : 'text-[#665E57] hover:text-[#2C2825]'
            }`}
          >
            Schema & Implementation Logic
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`py-3.5 relative transition-colors flex items-center gap-1.5 ${
              activeTab === 'interactive'
                ? 'text-[#2C2825] after:w-full after:h-[2px] after:bg-[#C88363] after:absolute after:bottom-0 after:left-0'
                : 'text-[#665E57] hover:text-[#2C2825]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C88363]" />
            <span>Interactive Workflow Sandbox</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#665E57] text-sm leading-relaxed">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-2">
                  Project Narrative
                </h4>
                <p className="text-base text-[#2C2825] font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl">
                  <h5 className="text-xs font-semibold text-[#2C2825] uppercase tracking-wider mb-2">
                    Core Engineering Challenge
                  </h5>
                  <p className="text-xs text-[#665E57] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl">
                  <h5 className="text-xs font-semibold text-[#8A4F33] uppercase tracking-wider mb-2">
                    Engineered Solution
                  </h5>
                  <p className="text-xs text-[#665E57] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Architectural Breakdown */}
              <div className="p-5 bg-[#FFFFFF] border border-[#E7E0D8] rounded-xl">
                <h5 className="text-xs font-semibold text-[#2C2825] uppercase tracking-wider mb-3">
                  System Architecture Breakdown
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#665E57] block text-[11px]">Client / Interface Tier</span>
                    <span className="font-medium text-[#2C2825]">{project.architecture.frontend}</span>
                  </div>
                  <div>
                    <span className="text-[#665E57] block text-[11px]">Backend / Compute Tier</span>
                    <span className="font-medium text-[#2C2825]">{project.architecture.backendOrCloud}</span>
                  </div>
                  <div>
                    <span className="text-[#665E57] block text-[11px]">Data Persistence</span>
                    <span className="font-medium text-[#2C2825]">{project.architecture.database}</span>
                  </div>
                  <div>
                    <span className="text-[#665E57] block text-[11px]">Key Mechanism</span>
                    <span className="font-medium text-[#2C2825]">{project.architecture.keyMechanism}</span>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h5 className="text-xs font-semibold text-[#2C2825] uppercase tracking-wider mb-3">
                  Production Highlights
                </h5>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#53443D]">
                      <CheckCircle2 className="w-4 h-4 text-[#707A65] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-[#F4F0EA] border border-[#E7E0D8] rounded-lg">
                      <div className="font-serif text-lg text-[#2C2825] tabular-nums font-medium">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-[#665E57] mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-semibold text-[#2C2825] uppercase tracking-wider">
                    {project.codeSnippet?.filename || 'System Implementation'}
                  </h4>
                  <span className="text-[11px] font-mono text-[#8A4F33]">
                    {project.codeSnippet?.language.toUpperCase()}
                  </span>
                </div>
                <div className="bg-[#262320] text-[#E7E0D8] p-5 rounded-xl border border-[#3E3834] font-mono text-xs overflow-x-auto shadow-inner">
                  <pre>{project.codeSnippet?.code}</pre>
                </div>
              </div>

              <div className="p-4 bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl text-xs text-[#665E57] leading-relaxed">
                <span className="font-semibold text-[#2C2825] block mb-1">
                  Technical Architecture Decision:
                </span>
                This implementation avoids typical race conditions and runtime stalls by delegating critical state validations to deterministic layers (e.g. database transactions or typed agent dispatch schemas).
              </div>
            </div>
          )}

          {activeTab === 'interactive' && (
            <div className="space-y-6">
              {/* Campus Guardian Interactive Simulator */}
              {project.id === 'campus-guardian' && (
                <div className="space-y-4">
                  <div className="p-4 bg-[#FFFFFF] border border-[#E7E0D8] rounded-xl">
                    <h5 className="text-xs font-semibold text-[#2C2825] uppercase tracking-wider mb-2">
                      Simulate Multi-Agent Dispatch
                    </h5>
                    <p className="text-xs text-[#665E57] mb-4">
                      Test how Campus Guardian categorizes student natural language queries into specialized sub-agent tasks over AWS Bedrock.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <button
                        onClick={() => setAgentQuery('When is the next Machine Learning lab submission?')}
                        className="text-[11px] px-2.5 py-1 bg-[#F4F0EA] hover:bg-[#EFE8DF] border border-[#E7E0D8] rounded text-[#2C2825]"
                      >
                        ML Lab Deadline
                      </button>
                      <button
                        onClick={() => setAgentQuery('Are there any hackathons or robotics events happening this weekend?')}
                        className="text-[11px] px-2.5 py-1 bg-[#F4F0EA] hover:bg-[#EFE8DF] border border-[#E7E0D8] rounded text-[#2C2825]"
                      >
                        Hackathons & Events
                      </button>
                      <button
                        onClick={() => setAgentQuery('What are my degree prerequisites for semester 5?')}
                        className="text-[11px] px-2.5 py-1 bg-[#F4F0EA] hover:bg-[#EFE8DF] border border-[#E7E0D8] rounded text-[#2C2825]"
                      >
                        Course Advisory
                      </button>
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={agentQuery}
                        onChange={(e) => setAgentQuery(e.target.value)}
                        placeholder="Type student question..."
                        className="flex-1 px-3 py-2 text-xs border border-[#E7E0D8] rounded-lg bg-[#FBF9F5] text-[#2C2825] focus:outline-none focus:border-[#C88363]"
                      />
                      <button
                        onClick={handleSimulateAgentQuery}
                        disabled={isAgentThinking}
                        className="px-4 py-2 text-xs font-semibold text-[#FBF9F5] bg-[#2C2825] rounded-lg hover:bg-[#C88363] transition-colors disabled:opacity-50"
                      >
                        {isAgentThinking ? 'Evaluating...' : 'Query Bedrock Agent'}
                      </button>
                    </div>
                  </div>

                  {agentResponse && (
                    <div className="p-4 bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E7E0D8]">
                        <span className="font-semibold text-[#2C2825]">
                          Dispatched Agent: <span className="font-mono text-[#8A4F33]">{agentResponse.targetAgent}</span>
                        </span>
                        <span className="text-[11px] text-[#707A65] font-mono">
                          Confidence: {agentResponse.confidence}
                        </span>
                      </div>
                      <div className="text-xs text-[#2C2825]">
                        <span className="font-medium text-[#665E57] block text-[11px] mb-1">
                          Agent Response Payload:
                        </span>
                        <p className="bg-[#FFFFFF] p-3 rounded border border-[#E7E0D8] leading-relaxed">
                          {agentResponse.output}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Velvet-Brew Interactive Simulator */}
              {project.id === 'velvet-brew' && (
                <div className="space-y-4">
                  <div className="p-4 bg-[#FFFFFF] border border-[#E7E0D8] rounded-xl">
                    <h5 className="text-xs font-semibold text-[#2C2825] uppercase tracking-wider mb-2">
                      Cafe Slot Allocation & Cancellation Simulator
                    </h5>
                    <p className="text-xs text-[#665E57] mb-4">
                      Simulates atomic reservation locking and self-service cancellation workflows in Supabase PostgreSQL.
                    </p>

                    {bookingSuccessMsg && (
                      <div className="mb-4 p-3 bg-[#707A65]/10 border border-[#707A65]/30 rounded-lg text-xs text-[#2C2825] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#707A65] shrink-0" />
                        <span>{bookingSuccessMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      <div>
                        <label className="text-[11px] text-[#665E57] block mb-1">Select Table</label>
                        <select
                          value={selectedTable || ''}
                          onChange={(e) => setSelectedTable(Number(e.target.value))}
                          className="w-full p-2 text-xs border border-[#E7E0D8] rounded bg-[#FBF9F5] text-[#2C2825]"
                        >
                          <option value={1}>Table 1 (Patio · 4 Seats)</option>
                          <option value={2}>Table 2 (Window · 2 Seats)</option>
                          <option value={3}>Table 3 (Espresso Bar · 2 Seats)</option>
                          <option value={4}>Table 4 (Library Booth · 6 Seats)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] text-[#665E57] block mb-1">Party Size</label>
                        <input
                          type="number"
                          min={1}
                          max={8}
                          value={partySize}
                          onChange={(e) => setPartySize(Number(e.target.value))}
                          className="w-full p-2 text-xs border border-[#E7E0D8] rounded bg-[#FBF9F5] text-[#2C2825]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-[#665E57] block mb-1">Time Slot</label>
                        <select
                          value={bookingTime}
                          onChange={(e) => setBookingTime(e.target.value)}
                          className="w-full p-2 text-xs border border-[#E7E0D8] rounded bg-[#FBF9F5] text-[#2C2825]"
                        >
                          <option value="17:00">17:00 (5:00 PM)</option>
                          <option value="18:30">18:30 (6:30 PM)</option>
                          <option value="20:00">20:00 (8:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={handleBookTable}
                      className="w-full py-2.5 px-4 text-xs font-semibold text-[#FBF9F5] bg-[#2C2825] rounded-lg hover:bg-[#C88363] transition-colors"
                    >
                      Trigger ACID Slot Reservation
                    </button>
                  </div>

                  {/* Active Reservations in state */}
                  <div className="p-4 bg-[#F4F0EA] border border-[#E7E0D8] rounded-xl">
                    <h6 className="text-xs font-semibold text-[#2C2825] uppercase tracking-wider mb-3">
                      Current Active Reservations (Live Memory Store)
                    </h6>
                    <div className="space-y-2">
                      {reservations.map((res) => (
                        <div
                          key={res.id}
                          className="p-3 bg-[#FFFFFF] border border-[#E7E0D8] rounded-lg flex items-center justify-between text-xs"
                        >
                          <div>
                            <span className="font-semibold text-[#2C2825] mr-2">
                              {res.id} · Table {res.table}
                            </span>
                            <span className="text-[#665E57]">
                              ({res.time} · {res.party} Guests)
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] text-[#707A65] font-medium">
                              {res.status}
                            </span>
                            <button
                              onClick={() => handleCancelReservation(res.id)}
                              className="text-[11px] text-[#8A4F33] hover:underline"
                            >
                              Release / Cancel
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Craftverse Interactive Simulator */}
              {project.id === 'craftverse' && (
                <div className="space-y-4">
                  <div className="p-4 bg-[#FFFFFF] border border-[#E7E0D8] rounded-xl">
                    <h5 className="text-xs font-semibold text-[#2C2825] uppercase tracking-wider mb-2">
                      Artisanal Catalog & Cart Engine
                    </h5>
                    <p className="text-xs text-[#665E57] mb-4">
                      Simulates Craftverse’s zero-framework cart dispatcher and tactile artisan provenance cards.
                    </p>

                    <div className="p-4 bg-[#FBF9F5] border border-[#E7E0D8] rounded-lg mb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h6 className="font-serif text-base text-[#2C2825] font-medium">
                            {selectedArtisanProduct.name}
                          </h6>
                          <p className="text-xs text-[#8A4F33] mt-0.5">
                            {selectedArtisanProduct.artisan}
                          </p>
                        </div>
                        <span className="font-mono text-base font-semibold text-[#2C2825]">
                          ₹{selectedArtisanProduct.price}
                        </span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-[#E7E0D8] text-[11px] text-[#665E57] space-y-1">
                        <div><strong className="text-[#2C2825]">Clay Substrate:</strong> {selectedArtisanProduct.material}</div>
                        <div><strong className="text-[#2C2825]">Kiln Atmosphere:</strong> {selectedArtisanProduct.firing}</div>
                      </div>
                      <button
                        onClick={handleAddToCart}
                        className="mt-4 w-full py-2 px-3 text-xs font-semibold text-[#FBF9F5] bg-[#2C2825] rounded-md hover:bg-[#C88363] transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add To Artisan Cart</span>
                      </button>
                    </div>

                    <div className="text-xs border-t border-[#E7E0D8] pt-3 flex items-center justify-between">
                      <span className="text-[#665E57]">
                        Active Cart Count: <strong className="text-[#2C2825]">{cartItems.length} items</strong>
                      </span>
                      <span className="font-mono font-medium text-[#2C2825]">
                        Subtotal: ₹{cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E7E0D8] bg-[#F4F0EA] flex items-center justify-between text-xs">
          <div className="flex flex-wrap items-center gap-2 text-[#665E57]">
            <span className="font-medium text-[#2C2825]">Stack:</span>
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span key={i} className="text-[#53443D]">
                {tech}
                {i < 3 ? ' ·' : ''}
              </span>
            ))}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#2C2825] bg-[#FFFFFF] border border-[#E7E0D8] rounded-md hover:border-[#C88363]"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
