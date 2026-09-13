import './style.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface RoadmapItem {
  id: string;
  title: string;
  content: string;
}

export interface RoadmapLevel {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: RoadmapItem[];
}

const roadmapStructuredData: RoadmapLevel[] = [
  {
    id: "Level 1",
    title: "LEVEL 1: Digital Electronics Foundation (Summer 45 Days)",
    icon: "📘",
    description: "This is your current phase. Must complete fully before moving to Verilog.",
    items: [
      { id: "L1-W1", title: "Week 1", content: "Logic Gates, K-Map, De Morgans Law. Key Skills: Truth tables, Gate simplification. Status: DONE" },
      { id: "L1-W2", title: "Week 2", content: "All Flip Flops (SR,D,JK,T) + Counters. Key Skills: Memory elements, Counting circuits. Status: DONE" },
      { id: "L1-W2.5", title: "Week 2.5", content: "Number Systems + Boolean Algebra. Key Skills: Binary, Hex, Circuit simplification. Status: DONE" },
      { id: "L1-W3", title: "Week 3", content: "Combinational Circuits (Adder, MUX, Decoder). Key Skills: Data selection, Arithmetic. Status: IN PROGRESS" },
      { id: "L1-W4", title: "Week 4", content: "Sequential Circuits, FSM, Registers. Key Skills: State machines, Data storage. Status: Coming" },
      { id: "L1-W5", title: "Week 5", content: "Timing: Setup, Hold, Metastability. Key Skills: Timing analysis basics. Status: Coming" },
      { id: "L1-W6", title: "Week 6", content: "MOSFET + CMOS Basics. Key Skills: Transistor switching, Inverter. Status: Coming" },
    ]
  },
  {
    id: "Level 2",
    title: "LEVEL 2 - Verilog Basics (2nd Year Sem 1)",
    icon: "🚀",
    description: "Most important coding skill for RTL jobs. Practice daily!",
    items: [
      { id: "L2-W1", title: "Week 1", content: "Verilog Introduction (Modules, Ports, Wire, Reg). Practice: Write simple module, Half adder in Verilog" },
      { id: "L2-W2", title: "Week 2", content: "always block, assign, if/else, case statement. Practice: MUX in Verilog, Decoder in Verilog" },
      { id: "L2-W3", title: "Week 3", content: "Blocking vs Non-blocking, Sequential vs Combinational. Practice: Flip flop in Verilog, Counter in Verilog" },
      { id: "L2-W4", title: "Week 4", content: "Testbench Basics, Simulation basics. Practice: Write testbench for adder, Simulate using Xilinx Vivado" },
      { id: "L2-W5", title: "Week 5", content: "Parameters, Generate block, Tasks and Functions. Practice: Parameterized MUX, Reusable modules" },
      { id: "L2-W6", title: "Week 6", content: "Synthesizable RTL, Reset design (sync/async), Pipelining basics. Practice: Pipeline adder, Proper reset coding" },
      { id: "L2-P1", title: "Project: 4-bit ALU", content: "Arithmetic, Logic operations in RTL. Difficulty: Medium - MUST DO" },
      { id: "L2-P2", title: "Project: Traffic Light Controller", content: "FSM design in Verilog. Difficulty: Medium - MUST DO" },
      { id: "L2-P3", title: "Project: FIFO", content: "Memory design, Read/Write pointers. Difficulty: Hard - Very impressive" },
      { id: "L2-P4", title: "Project: UART", content: "Protocol implementation. Difficulty: Hard - Industry standard" },
      { id: "L2-P5", title: "Project: SPI Interface", content: "Serial Peripheral Interface. Difficulty: Hard - Industry standard" },
      { id: "L2-T1", title: "Tools to Learn", content: "GTKWave, ModelSim, Xilinx Vivado" }
    ]
  },
  {
    id: "Level 3",
    title: "LEVEL 3: SystemVerilog (2nd Year Sem 2)",
    icon: "🧩",
    description: "SystemVerilog is Verilog with advanced features. Used for both design and verification.",
    items: [
      { id: "L3-W1", title: "Week 1", content: "SystemVerilog Features (Differences from Verilog, Data types, logic, enum). Learn: New data types" },
      { id: "L3-W2", title: "Week 2", content: "Classes and OOP (Object Oriented Programming). Learn: Create classes, Inheritance basics" },
      { id: "L3-W3", title: "Week 3", content: "Randomization (Constraints). Learn: Randomize variables, Constrained random testing" },
      { id: "L3-W4", title: "Week 4", content: "Assertions (SVA), Interface. Learn: Write simple assertions, Connect modules with interface" },
      { id: "L3-W5", title: "Week 5", content: "Mailbox, Event, Semaphore. Learn: Inter-process communication, Synchronization" },
      { id: "L3-W6", title: "Week 6", content: "Verification Basics (Directed and Random testing). Learn: Write directed tests, Random test generation" }
    ]
  },
  {
    id: "Level 4",
    title: "LEVEL 4: Verification Concepts (3rd Year Sem 1)",
    icon: "🔍",
    description: "Verification is HIGH DEMAND field. Easier entry than RTL. Good for abroad!",
    items: [
      { id: "L4-W1", title: "Week 1", content: "Verification Methodology (Coverage basics). Concepts: Why verification needed, Code coverage, FSM coverage" },
      { id: "L4-W2", title: "Week 2", content: "Testbench Components (Scoreboard, Monitor). Concepts: Self-checking testbench, Data checking automatically" },
      { id: "L4-W3", title: "Week 3", content: "Driver, Agent, Checker, Reference model. Concepts: Stimulus generation, Expected vs actual comparison" },
      { id: "L4-W4", title: "Week 4", content: "Protocols (UART, SPI, I2C). Concepts: Protocol verification, Bus functional models" },
      { id: "L4-W5", title: "Week 5", content: "Verification Projects (UART verification). Concepts: End to end verification, Full testbench" },
      { id: "L4-W6", title: "Week 6", content: "FIFO Verification (Coverage closure). Concepts: Close 100% coverage, Regression basics" }
    ]
  },
  {
    id: "Level 5",
    title: "LEVEL 5: UVM Beginner (3rd Year Sem 2)",
    icon: "🛠️",
    description: "UVM = Universal Verification Methodology. Industry standard. Every company uses it!",
    items: [
      { id: "L5-W1", title: "Week 1", content: "UVM Basics (uvm_component, uvm_object). Build: First UVM testbench, Understand hierarchy" },
      { id: "L5-W2", title: "Week 2", content: "Sequence and Sequencer, Driver. Build: Write sequences, Connect driver to DUT" },
      { id: "L5-W3", title: "Week 3", content: "Monitor and Agent, Environment. Build: Collect data, Full agent" },
      { id: "L5-W4", title: "Week 4", content: "Test and Factory, TLM basics. Build: Run first UVM test, Understand factory" },
      { id: "L5-W5", title: "Week 5", content: "Config DB, Phases. Build: Pass configurations, Phase ordering" },
      { id: "L5-W6", title: "Week 6", content: "UVM Project (Full UVM testbench). Build: UART UVM verification, FIFO UVM verification" }
    ]
  },
  {
    id: "Level 6",
    title: "LEVEL 6 - Advanced Verification (4th Year Sem 1)",
    icon: "🏆",
    description: "Advanced verification techniques and industry standard tools.",
    items: [
      { id: "L6-I1", title: "Advanced UVM", content: "Virtual sequencer, RAL (Register Abstraction Layer), Callbacks, Factory override" },
      { id: "L6-I2", title: "Coverage Closure", content: "Close 100% functional coverage, Regression testing" },
      { id: "L6-I3", title: "Assertions", content: "Concurrent assertions, Protocol assertions (APB, AXI Lite)" },
      { id: "L6-I4", title: "Advanced Protocols", content: "APB (Advanced Peripheral Bus), AXI Lite protocol verification" },
      { id: "L6-I5", title: "Industry Tools", content: "VCS (Synopsys), Questa (Mentor), Verdi (debug), Xcelium (Cadence)" }
    ]
  },
  {
    id: "Level 7",
    title: "LEVEL 7 - Frontend VLSI Depth (4th Year Sem 2)",
    icon: "⚡",
    description: "Deep dive into frontend VLSI timing and synthesis.",
    items: [
      { id: "L7-I1", title: "Timing Analysis", content: "Setup time, Hold time, Slack, Clock skew, Metastability" },
      { id: "L7-I2", title: "STA Basics", content: "Static Timing Analysis, Design Compiler (DC), Timing reports" },
      { id: "L7-I3", title: "Synthesis Basics", content: "RTL to gate level, Area constraints, Timing constraints" },
      { id: "L7-I4", title: "Clock Domains", content: "CDC (Clock Domain Crossing), Synchronizers" }
    ]
  },
  {
    id: "Level 8",
    title: "LEVEL 8: Computer Architecture + Industry RTL (Year 5 Working)",
    icon: "🏛️",
    description: "Advanced architecture and real industry RTL design.",
    items: [
      { id: "L8-I1", title: "Pipeline Architecture", content: "Pipeline stages, Hazards (data, control, structural). Every processor uses this" },
      { id: "L8-I2", title: "Cache Memory", content: "Cache design, Replacement policies, Miss handling. Performance optimization" },
      { id: "L8-I3", title: "RISC-V", content: "Open source processor architecture. Most popular in VLSI now" },
      { id: "L8-I4", title: "APB Slave", content: "APB protocol implementation in RTL. Industry standard protocol" },
      { id: "L8-I5", title: "Cache Controller", content: "RTL design of cache controller. Advanced RTL project" },
      { id: "L8-I6", title: "Arbiter Design", content: "Round robin, Priority arbiter. Chip resource sharing" }
    ]
  },
  {
    id: "Level 10",
    title: "LEVEL 10 - Industry Ready Engineer (Year 5-6)",
    icon: "👑",
    description: "Mastery of VLSI engineering. The final destination.",
    items: [
      { id: "L10-I1", title: "Coverage Closure", content: "Close 100% functional and code coverage in real projects" },
      { id: "L10-I2", title: "Debugging Failures", content: "Debug waveforms, find root cause, fix RTL or testbench" },
      { id: "L10-I3", title: "Large UVM Environment", content: "Build complete UVM environment with multiple agents" },
      { id: "L10-I4", title: "Regression Flows", content: "Run hundreds of tests automatically, analyze results" },
      { id: "L10-I5", title: "Low Power Basics", content: "Clock gating, Power gating, UPF basics" },
      { id: "L10-I6", title: "Emulation Basics", content: "Palladium, ZeBu emulation platforms" },
      { id: "L10-I7", title: "Tools Mastery", content: "VCS (Synopsys), Questa (Mentor), Verdi (Synopsys), Xcelium (Cadence)" }
    ]
  },
  {
    id: "Timeline",
    title: "6 YEAR COMPLETE TIMELINE",
    icon: "📅",
    description: "Your structured path from college to international industry roles.",
    items: [
      { id: "T-Y1", title: "Year 1 (Now)", content: "Digital Foundations (45day - summer plan). Level 1. Target: Strong basics (Logic, Flip Flops, CMOS). Salary: Student" },
      { id: "T-Y2", title: "Year 2", content: "Verilog + SystemVerilog (2nd year college). Level 2+3. Target: First internship, 2 projects on resume. Salary: Internship stipend" },
      { id: "T-Y3", title: "Year 3", content: "Verification + UVM (3rd year college). Level 4+5. Target: Major internship, UVM testbench. Salary: 5-8 LPA internship" },
      { id: "T-Y4", title: "Year 4", content: "Advanced + Job Hunt (Final year). Level 6+7. Target: Job offer before graduation. Salary: 8-15 LPA full time" },
      { id: "T-Y5", title: "Year 5", content: "Industry Work (1st year job). Level 8. Target: Real chip projects, IELTS prep. Salary: 10-18 LPA + growth" },
      { id: "T-Y6", title: "Year 6", content: "Move Abroad (2nd year job). Level 10. Target: Intel/Qualcomm USA/UK/Europe. Salary: 70-120 LPA abroad!" }
    ]
  },
  {
    id: "Companies",
    title: "TARGET COMPANIES India and Abroad",
    icon: "🏢",
    description: "The dream companies to apply for.",
    items: [
      { id: "C-1", title: "Intel India (Bangalore)", content: "RTL/Verification | 10-20 LPA | 4th Year" },
      { id: "C-2", title: "Qualcomm India (Hyderabad)", content: "RTL/Verification | 12-22 LPA | 4th Year" },
      { id: "C-3", title: "Texas Instruments (Bangalore)", content: "Analog/Digital | 10-18 LPA | 4th Year" },
      { id: "C-4", title: "Synopsys India (Bangalore/Hyderabad)", content: "Verification | 12-20 LPA | 4th Year" },
      { id: "C-5", title: "Cadence India (Bangalore/Noida)", content: "Verification/RTL | 12-20 LPA | 4th Year" },
      { id: "C-6", title: "NVIDIA India (Pune/Bangalore)", content: "RTL Design | 15-30 LPA | 4th Year" },
      { id: "C-7", title: "AMD India (Hyderabad/Bangalore)", content: "RTL/Verification | 12-22 LPA | 4th Year" },
      { id: "C-8", title: "Intel USA/Europe (USA/Ireland/Israel)", content: "Sr Verification | 70-100 LPA | Year 5-6" },
      { id: "C-9", title: "Qualcomm USA (San Diego)", content: "Sr RTL/Verif | 80-120 LPA | Year 5-6" },
      { id: "C-10", title: "ARM UK (Cambridge UK)", content: "RTL/Verification | 60-90 LPA | Year 5-6" },
      { id: "C-11", title: "NVIDIA USA (Santa Clara)", content: "RTL Design | 90-130 LPA | Year 5-6" },
      { id: "C-12", title: "TSMC Taiwan (Taiwan)", content: "Design Engineer | 70-100 LPA | Year 5-6" }
    ]
  },
  {
    id: "Tools",
    title: "TOOLS TO LEARN - Level by Level",
    icon: "💻",
    description: "The software tools required for the job.",
    items: [
      { id: "T-1", title: "Xilinx Vivado", content: "FPGA + Verilog Simulation | Level 2 (Year 2) | Free: YES - Free" },
      { id: "T-2", title: "GTKWave", content: "Waveform Viewer | Level 2 (Year 2) | Free: YES - Free" },
      { id: "T-3", title: "ModelSim", content: "Simulation + Debug | Level 2-3 (Year 2) | Free: Student version free" },
      { id: "T-4", title: "Cadence Xcelium", content: "Industry Simulation | Level 4 (Year 3) | Free: College lab" },
      { id: "T-5", title: "Synopsys VCS", content: "Industry Simulation | Level 4 (Year 3) | Free: College lab" },
      { id: "T-6", title: "Verdi", content: "Debug + Waveform | Level 6 (Year 4) | Free: College lab" },
      { id: "T-7", title: "Questa", content: "Verification | Level 5-6 | Free: College lab" },
      { id: "T-8", title: "Design Compiler", content: "Synthesis | Level 7 | Free: College lab" }
    ]
  }
];

let completedWeeks: string[] = [];

let expandedLevelId: string | null = null;

const daysData = [
  "NAND, NOR Universal Gates", "NOT, AND, OR using NAND", "XOR, XNOR, De Morgan", "K-Map 2-variable", "SR Flip Flop",
  "D Flip Flop + Clock", "JK Flip Flop", "T Flip Flop + Counters", "Number Systems", "Boolean Algebra",
  "Half Adder", "Full Adder", "MUX Multiplexer", "Decoder + Encoder", "Sequential + FSM",
  "2s Complement + Gray Code", "SOP + POS + 3-var K-Map", "Ripple Carry + Subtractor", "Mealy vs Moore FSM", "Shift Registers",
  "Ring + Johnson Counter", "Excitation Tables", "Sync vs Async Reset", "Pipeline + Hazards", "Signed Numbers + ALU"
];

let userRole: 'admin' | 'user' | null = localStorage.getItem('quanovix-role') as any;
let authToken = localStorage.getItem('quanovix-token') || '';

let showPublicly = false;
let showPhasePlan = false;
let completedDays: number[] = [];

let isSignupMode = false;

const loginBtn = document.getElementById('nav-login-btn') as HTMLAnchorElement;
const adminBtn = document.getElementById('nav-admin-btn') as HTMLAnchorElement;
const logoutBtn = document.getElementById('nav-logout-btn') as HTMLAnchorElement;

const loginModal = document.getElementById('login-modal') as HTMLDivElement;
const adminModal = document.getElementById('admin-modal') as HTMLDivElement;
const toggleVisBtn = document.getElementById('toggle-visibility') as HTMLButtonElement;
const togglePhaseBtn = document.getElementById('toggle-phase-plan') as HTMLButtonElement;
const trackerSection = document.getElementById('tracker') as HTMLDivElement;
// const roadmapDisplayBoard = document.getElementById('advanced-roadmap-display') as HTMLDivElement;
// const roadmapButtons = document.querySelectorAll('.roadmap-btn');
const clearRoadmapBtn = document.getElementById('clear-roadmap-btn') as HTMLButtonElement;

const authTitle = document.getElementById('auth-title') as HTMLHeadingElement;
const submitLoginBtn = document.getElementById('submit-login') as HTMLButtonElement;
const toggleSignupLink = document.getElementById('toggle-signup') as HTMLAnchorElement;

let cart: any[] = JSON.parse(localStorage.getItem('quavonix_cart') || '[]');
const navCartBtn = document.getElementById('nav-cart-btn') as HTMLAnchorElement;
const navOrdersBtn = document.getElementById('nav-orders-btn') as HTMLAnchorElement;
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal') as HTMLDivElement;
const ordersModal = document.getElementById('orders-modal') as HTMLDivElement;
const closeCartBtn = document.getElementById('close-cart');
const closeOrdersBtn = document.getElementById('close-orders-modal');
const cartItemsList = document.getElementById('cart-items-list') as HTMLDivElement;
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Load Data from Backend API
async function loadState() {
  try {
    const res = await fetch(`${API_BASE}/state`);
    if (res.ok) {
      const data = await res.json();
      showPublicly = data.showPublicly;
      showPhasePlan = data.showPhasePlan;
      completedDays = data.completedDays;
      completedWeeks = data.completedWeeks || [];
    }
  } catch (e) {
    console.error('Failed to load state from API', e);
  }
  updateUI();
  renderAdminRoadmap();
  renderHomePageRoadmap();
}

async function saveVisibility(newVal: boolean) {
  if (userRole !== 'admin') return;
  try {
    const res = await fetch(`${API_BASE}/toggle-visibility`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({ showPublicly: newVal })
    });
    if (res.ok) {
      showPublicly = newVal;
      updateUI();
    } else {
      alert('Failed to update visibility');
    }
  } catch (e) {
    console.error(e);
  }
}

async function savePhasePlan(newVal: boolean) {
  if (userRole !== 'admin') return;
  try {
    const res = await fetch(`${API_BASE}/toggle-phase-plan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({ showPhasePlan: newVal })
    });
    if (res.ok) {
      showPhasePlan = newVal;
      updateUI();
    } else {
      alert('Failed to update phase plan visibility');
    }
  } catch (e) {
    console.error(e);
  }
}

async function toggleDayApi(dayNum: number) {
  if (userRole !== 'admin') return;
  
  try {
    const res = await fetch(`${API_BASE}/toggle-day`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({ dayNum })
    });
    
    if (res.ok) {
      const data = await res.json();
      if (data.newStatus) {
        if (!completedDays.includes(dayNum)) completedDays.push(dayNum);
      } else {
        completedDays = completedDays.filter(d => d !== dayNum);
      }
      renderGrids();
    } else if (res.status === 403 || res.status === 401) {
      alert('Session expired or unauthorized.');
      logout();
    }
  } catch (e) {
    console.error(e);
  }
}

function logout() {
  userRole = null;
  authToken = '';
  localStorage.removeItem('quanovix-token');
  localStorage.removeItem('quanovix-role');
  updateUI();
  adminModal.style.display = 'none';
}

function renderGrids() {
  const publicGrid = document.getElementById('public-day-grid') as HTMLDivElement;
  const adminGrid = document.getElementById('admin-day-grid') as HTMLDivElement;
  let publicHtml = '';
  let adminHtml = '';

  const firstIncomplete = daysData.findIndex((_, i) => !completedDays.includes(i + 1));
  const nextDay = firstIncomplete === -1 ? null : firstIncomplete + 1;

  daysData.forEach((topic, index) => {
    const dayNum = index + 1;
    const isCompleted = completedDays.includes(dayNum);
    const isCurrent = !isCompleted && dayNum === nextDay;
    let cellClass = 'day-cell';
    let mark = String(dayNum);
    
    if (isCompleted) { 
      cellClass += ' completed'; 
      mark = '✓ ' + dayNum; 
    }
    else if (isCurrent) { 
      cellClass += ' current'; 
      mark = '→ ' + dayNum; 
    }

    publicHtml += `<div class="${cellClass}"><div class="day-num">${mark}</div><div class="day-topic">${topic}</div></div>`;
    adminHtml += `<div class="${cellClass}" data-day="${dayNum}"><div class="day-num">${mark}</div><div class="day-topic">${topic}</div></div>`;
  });

  if (publicGrid) publicGrid.innerHTML = publicHtml;
  if (adminGrid) {
    adminGrid.innerHTML = adminHtml;
    // Add event listeners to admin grid items
    adminGrid.querySelectorAll('.day-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        const day = (cell as HTMLElement).getAttribute('data-day');
        if (day) toggleDayApi(parseInt(day, 10));
      });
    });
  }

  const statCompleted = document.getElementById('stat-completed');
  if (statCompleted) statCompleted.textContent = completedDays.length.toString();
  
  const mainProgressFill = document.getElementById('main-progress-fill');
  if (mainProgressFill) {
    const pct = Math.round((completedDays.length / 45) * 100);
    mainProgressFill.style.width = `${pct}%`;
  }
}

function updateUI() {
  const adminPhasePlan = document.getElementById('admin-phase-plan');

  if (userRole === 'admin') {
    loginBtn.style.display = 'none';
    adminBtn.style.display = 'inline-block';
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
    if (adminPhasePlan) adminPhasePlan.style.display = 'block';
    if (navCartBtn) navCartBtn.style.display = 'inline-block';
    if (navOrdersBtn) navOrdersBtn.style.display = 'inline-block';
    loadMyOrders();
  } else if (userRole === 'user') {
    loginBtn.style.display = 'none';
    adminBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
    if (adminPhasePlan) adminPhasePlan.style.display = 'none';
    if (navCartBtn) navCartBtn.style.display = 'inline-block';
    if (navOrdersBtn) navOrdersBtn.style.display = 'inline-block';
    loadMyOrders();
  } else {
    loginBtn.style.display = 'inline-block';
    adminBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (adminPhasePlan) adminPhasePlan.style.display = 'none';
    if (navCartBtn) navCartBtn.style.display = 'none';
    if (navOrdersBtn) navOrdersBtn.style.display = 'none';
  }

  if (showPhasePlan || userRole === 'admin') {
    if (adminPhasePlan) adminPhasePlan.style.display = 'block';
  } else {
    if (adminPhasePlan) adminPhasePlan.style.display = 'none';
  }

  if (showPublicly || userRole === 'admin') {
    trackerSection.style.display = 'block';
  } else {
    trackerSection.style.display = 'none';
  }

  toggleVisBtn.textContent = showPublicly ? 'Show in Website: ON' : 'Show in Website: OFF';
  toggleVisBtn.style.background = showPublicly ? '#4a9a5a' : 'var(--black)';
  toggleVisBtn.style.color = showPublicly ? '#fff' : 'var(--brown)';

  if (togglePhaseBtn) {
    togglePhaseBtn.textContent = showPhasePlan ? '6-Year Plan: ON' : '6-Year Plan: OFF';
    togglePhaseBtn.style.background = showPhasePlan ? '#4a9a5a' : 'var(--black)';
    togglePhaseBtn.style.color = showPhasePlan ? '#fff' : 'var(--brown)';
  }

  renderGrids();
}

function toggleAuthMode(e: Event) {
  e.preventDefault();
  isSignupMode = !isSignupMode;
  if (isSignupMode) {
    authTitle.textContent = 'Create Account';
    submitLoginBtn.textContent = 'Sign Up';
    toggleSignupLink.textContent = 'Log in to existing account';
  } else {
    authTitle.textContent = 'Account Login';
    submitLoginBtn.textContent = 'Log In';
    toggleSignupLink.textContent = 'Create an account';
  }
}

// Event Listeners for Login & Admin Panels
loginBtn.addEventListener('click', (e) => { e.preventDefault(); loginModal.style.display = 'flex'; });
document.getElementById('close-login')?.addEventListener('click', () => { loginModal.style.display = 'none'; });
if (logoutBtn) logoutBtn.addEventListener('click', (e) => { e.preventDefault(); logout(); });
if (toggleSignupLink) toggleSignupLink.addEventListener('click', toggleAuthMode);

document.getElementById('submit-login')?.addEventListener('click', async () => {
  const emailInput = document.getElementById('login-email') as HTMLInputElement;
  const passInput = document.getElementById('login-pass') as HTMLInputElement;
  const email = emailInput.value;
  const password = passInput.value;

  const endpoint = isSignupMode ? '/signup' : '/login';

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      const data = await res.json();
      authToken = data.token;
      userRole = data.role;
      localStorage.setItem('quanovix-token', authToken);
      localStorage.setItem('quanovix-role', userRole!);
      loginModal.style.display = 'none';
      updateUI();
    } else {
      const errData = await res.json();
      alert(errData.error || 'Authentication failed.');
    }
  } catch (e) {
    console.error(e);
    alert('Failed to reach server.');
  }
});

adminBtn.addEventListener('click', (e) => { e.preventDefault(); adminModal.style.display = 'block'; });
document.getElementById('close-admin')?.addEventListener('click', () => { adminModal.style.display = 'none'; });

toggleVisBtn.addEventListener('click', () => {
  saveVisibility(!showPublicly);
});

if (togglePhaseBtn) {
  togglePhaseBtn.addEventListener('click', () => {
    savePhasePlan(!showPhasePlan);
  });
}

function renderAdminRoadmap() {
  const container = document.getElementById('admin-accordion-container');
  if (!container) return;
  
  let html = '';
  roadmapStructuredData.forEach(level => {
    const isExpanded = expandedLevelId === level.id;
    const arrow = isExpanded ? '▼' : '▶';
    html += `
      <div style="margin-bottom: 10px; background: var(--black); border-radius: 8px; border: 1px solid var(--line); overflow: hidden;">
        <button class="level-header-btn" data-id="${level.id}" style="width: 100%; text-align: left; background: none; border: none; padding: 12px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
          <h4 style="color: var(--brown); margin: 0; display: flex; align-items: center; gap: 8px; font-size: 16px;">
            <span style="font-size: 1.2em;">${level.icon}</span> ${level.title}
          </h4>
          <span style="color: var(--muted); font-size: 12px;">${arrow}</span>
        </button>
    `;
    
    if (isExpanded) {
      html += `
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 12px; border-top: 1px solid var(--line); background: rgba(0,0,0,0.2);">
      `;
      level.items.forEach(item => {
        const isTicked = completedWeeks.includes(item.id);
        const checkedAttr = isTicked ? 'checked' : '';
        html += `
          <div style="display: flex; align-items: flex-start; gap: 10px;">
            <input type="checkbox" class="tick-btn" data-id="${item.id}" ${checkedAttr} style="cursor: pointer; width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px;">
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <span style="color: var(--text); font-size: 14px; font-weight: bold; line-height: 1.2;">${item.title}</span>
              <span style="color: var(--muted); font-size: 12px; line-height: 1.4;">${item.content}</span>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    }
    html += `</div>`;
  });
  container.innerHTML = html;

  container.querySelectorAll('.level-header-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      if (expandedLevelId === id) {
        expandedLevelId = null; // collapse
      } else {
        expandedLevelId = id; // expand
      }
      renderAdminRoadmap();
    });
  });

  container.querySelectorAll('.tick-btn').forEach(btn => {
    btn.addEventListener('change', async (e) => {
      e.stopPropagation();
      if (userRole !== 'admin') return;
      
      const id = btn.getAttribute('data-id');
      if (id) {
        try {
          const res = await fetch(`${API_BASE}/toggle-week`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({ weekId: id })
          });
          
          if (res.ok) {
            const data = await res.json();
            const newStatus = data.newStatus;
            
            if (newStatus) {
              if (!completedWeeks.includes(id)) completedWeeks.push(id);
              
              // Auto-advance logic
              const levelIndex = roadmapStructuredData.findIndex(l => l.items.some(i => i.id === id));
              if (levelIndex !== -1) {
                const level = roadmapStructuredData[levelIndex];
                const allTicked = level.items.every(item => completedWeeks.includes(item.id));
                if (allTicked) {
                  // Collapse current, expand next
                  if (levelIndex + 1 < roadmapStructuredData.length) {
                    expandedLevelId = roadmapStructuredData[levelIndex + 1].id;
                  } else {
                    expandedLevelId = null;
                  }
                }
              }
            } else {
              completedWeeks = completedWeeks.filter(i => i !== id);
            }
            
            renderAdminRoadmap();
            renderHomePageRoadmap();
            updatePhaseProgress();
          } else {
            console.error('Failed to toggle week');
          }
        } catch (error) {
          console.error('API Error:', error);
        }
      }
    });
  });
}

function renderHomePageRoadmap() {
  const board = document.getElementById('advanced-roadmap-display');
  if (!board) return;

  if (completedWeeks.length === 0) {
    board.style.display = 'none';
    board.innerHTML = '';
    return;
  }

  let html = '';
  // 1. Global Loop: Loop through every single Level in the roadmapData array
  roadmapStructuredData.forEach(level => {
    // 2. Filter Ticked Weeks: ONLY the weeks that currently exist in completedWeeks
    const activeItems = level.items.filter(item => completedWeeks.includes(item.id));
    
    // 3. Stacked HTML Generation:
    if (activeItems.length > 0) {
      // Generate a header for that Level
      html += `
        <div style="margin-bottom: 30px; padding: 25px; background: var(--panel); border: 1px solid var(--line); border-radius: 12px;">
          <h3 style="color: var(--brown); margin-top: 0; margin-bottom: 15px; display: flex; align-items: center; gap: 10px; font-size: 1.4rem;">
            <span>${level.icon}</span> ${level.title}
          </h3>
          <p style="color: var(--muted); margin-bottom: 20px; font-size: 14px;">${level.description}</p>
          <div style="display: flex; flex-direction: column; gap: 12px;">
      `;
      
      // Directly underneath that header, generate a list of the ticked weeks
      activeItems.forEach(item => {
        html += `
            <div style="display: flex; align-items: flex-start; gap: 12px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px; border-left: 3px solid #4a9a5a;">
              <span style="font-size: 1.2rem; line-height: 1;">✅</span>
              <div style="line-height: 1.4;">
                <strong style="color: var(--text); font-size: 15px;">${item.title}:</strong> 
                <span style="color: var(--muted); font-size: 14px;">${item.content}</span>
              </div>
            </div>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
  });

  board.innerHTML = html;
  board.style.display = 'block';

  updatePhaseProgress();
}

function updatePhaseProgress() {
  const phaseDependencies = [
    { cardId: 'phase-card-1', levels: ['Level 1'] },
    { cardId: 'phase-card-2', levels: ['Level 2'] },
    { cardId: 'phase-card-3', levels: ['Level 3'] },
    { cardId: 'phase-card-4', levels: ['Level 4'] },
    { cardId: 'phase-card-5', levels: ['Level 5'] },
    { cardId: 'phase-card-6', levels: ['Level 6', 'Level 7', 'Level 8', 'Level 10'] },
  ];

  let currentPhaseIndex = 0;

  for (let i = 0; i < phaseDependencies.length; i++) {
    const phase = phaseDependencies[i];
    
    let allTicked = true;
    for (const levelId of phase.levels) {
      const level = roadmapStructuredData.find(l => l.id === levelId);
      if (level) {
        for (const item of level.items) {
          if (!completedWeeks.includes(item.id)) {
            allTicked = false;
            break;
          }
        }
      }
      if (!allTicked) break;
    }

    const card = document.getElementById(phase.cardId);
    if (!card) continue;
    
    const statusSpan = card.querySelector('.phase-status') as HTMLSpanElement;

    if (allTicked) {
      // Phase is completed
      card.className = 'phase-card';
      if (statusSpan) {
        statusSpan.className = 'phase-status';
        statusSpan.innerHTML = '✓ Completed';
        statusSpan.style.color = '#4a9a5a';
      }
      currentPhaseIndex = i + 1;
    } else {
      if (i === currentPhaseIndex) {
        // This is the active phase
        card.className = 'phase-card active';
        if (statusSpan) {
          statusSpan.className = 'phase-status status-now';
          statusSpan.innerHTML = '● In Progress';
          statusSpan.style.color = ''; // Use CSS default
        }
      } else {
        // This is upcoming
        card.className = 'phase-card';
        if (statusSpan) {
          statusSpan.className = 'phase-status status-next';
          statusSpan.innerHTML = i === 5 ? '○ The Destination' : '○ Upcoming';
          statusSpan.style.color = ''; // Use CSS default
        }
      }
    }
  }
}

if (clearRoadmapBtn) {
  clearRoadmapBtn.addEventListener('click', async () => {
    if (userRole !== 'admin') return;
    try {
      const res = await fetch(`${API_BASE}/clear-weeks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });
      if (res.ok) {
        completedWeeks = [];
        renderAdminRoadmap();
        renderHomePageRoadmap();
        updatePhaseProgress();
      }
    } catch (e) {
      console.error('Failed to clear weeks', e);
    }
  });
}

renderAdminRoadmap();
renderHomePageRoadmap();

// Start the application
loadState();

// --- Product Management Logic ---
const addProductForm = document.getElementById('add-product-form') as HTMLFormElement;
const adminProductsList = document.getElementById('admin-products-list') as HTMLDivElement;

async function loadAdminProducts() {
  if (userRole !== 'admin') return;
  if (!adminProductsList) return;
  try {
    const res = await fetch(`${API_BASE}/products`);
    if (res.ok) {
      const products = await res.json();
      let html = '';
      products.forEach((p: any) => {
        html += `
          <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.2); padding: 12px; border-radius: 6px; border: 1px solid var(--line); margin-bottom: 8px;">
            <div style="flex-grow: 1;">
              <strong style="color: var(--text);">${p.name}</strong> - ₹${p.price} <br/>
              <span style="color: var(--muted); font-size: 14px;">Current Stock: <strong>${p.quantity}</strong></span>
            </div>
            <div style="display: flex; gap: 10px; align-items: center;">
              <input type="number" class="restock-input" data-id="${p.id}" placeholder="+Qty" style="width: 70px; padding: 6px; background: var(--black); color: var(--text); border: 1px solid var(--line); border-radius: 4px;">
              <button class="restock-prod-btn" data-id="${p.id}" style="padding: 6px 12px; background: #4a9a5a; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Restock</button>
              <button class="delete-prod-btn" data-id="${p.id}" style="padding: 6px 12px; background: #8B0000; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Delete</button>
            </div>
          </div>
        `;
      });
      adminProductsList.innerHTML = html;

      // Attach restock listeners
      adminProductsList.querySelectorAll('.restock-prod-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          const id = btn.getAttribute('data-id');
          const input = adminProductsList.querySelector(`.restock-input[data-id="${id}"]`) as HTMLInputElement;
          const qty = parseInt(input.value, 10);
          
          if (!qty || qty <= 0) return alert('Enter a valid quantity to restock');
          if (id) {
            try {
              const res = await fetch(`${API_BASE}/admin/products/${id}/restock`, {
                method: 'PUT',
                headers: { 
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${authToken}` 
                },
                body: JSON.stringify({ addedQuantity: qty })
              });
              if (res.ok) {
                alert(`Restocked ${qty} units!`);
                loadAdminProducts();
                loadPublicProducts();
              } else {
                alert('Failed to restock product');
              }
            } catch (err) {
              console.error(err);
            }
          }
        });
      });

      // Attach delete listeners
      adminProductsList.querySelectorAll('.delete-prod-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          const id = btn.getAttribute('data-id');
          if (id && confirm('Delete this product?')) {
            try {
              const delRes = await fetch(`${API_BASE}/products/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${authToken}` }
              });
              if (delRes.ok) {
                loadAdminProducts();
                loadPublicProducts();
              } else {
                alert('Failed to delete product');
              }
            } catch (err) {
              console.error(err);
            }
          }
        });
      });
    }
  } catch (err) {
    console.error('Failed to load products', err);
  }
}

if (adminBtn) {
  adminBtn.addEventListener('click', () => {
    if (userRole === 'admin') loadAdminProducts();
  });
}

if (addProductForm) {
  addProductForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (userRole !== 'admin') return;
    
    const nameInput = document.getElementById('prod-name') as HTMLInputElement;
    const priceInput = document.getElementById('prod-price') as HTMLInputElement;
    const qtyInput = document.getElementById('prod-quantity') as HTMLInputElement;
    const imgInput = document.getElementById('prod-image') as HTMLInputElement;

    const newProduct = {
      name: nameInput.value,
      price: parseFloat(priceInput.value),
      quantity: parseInt(qtyInput.value, 10),
      image_url: imgInput.value
    };

    try {
      const res = await fetch(`${API_BASE}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(newProduct)
      });

       if (res.ok) {
        addProductForm.reset();
        loadAdminProducts();
        loadPublicProducts();
      } else {
        const errorText = await res.text();
        alert(`SERVER REJECTED IT!\nStatus Code: ${res.status}\nError Details: ${errorText}`);
      }
    } catch (err) {
      console.error('Error adding product:', err);
      alert('An error occurred while adding the product.');
    }
  });
}

async function loadPublicProducts() {
  const container = document.getElementById('public-products-container');
  if (!container) return;
  
  try {
    const res = await fetch(`${API_BASE}/products`);
    if (res.ok) {
      const products = await res.json();
      let html = '';
      if (products.length === 0) {
        html = '<p style="color: var(--muted); width: 100%; text-align: center;">No products available right now.</p>';
      } else {
        products.forEach((p: any) => {
          const imgHtml = p.image_url 
            ? `<img src="${p.image_url}" alt="${p.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;">`
            : `<div style="width: 100%; height: 200px; background: var(--black); border-radius: 8px; margin-bottom: 12px; display: flex; align-items: center; justify-content: center; color: var(--muted);">No Image</div>`;
            
          const isOutOfStock = p.quantity <= 0;
          const qtyInputHtml = isOutOfStock
            ? `<input type="number" disabled value="0" style="width: 60px; padding: 6px; background: #555; color: #999; border: 1px solid var(--line); border-radius: 4px; text-align: center;">`
            : `<input type="number" min="1" max="${p.quantity}" value="1" class="prod-qty-select" data-id="${p.id}" style="width: 60px; padding: 6px; background: var(--black); color: var(--text); border: 1px solid var(--line); border-radius: 4px; text-align: center;">`;

          const buttonHtml = isOutOfStock
            ? `<button disabled style="flex-grow: 1; padding: 8px; background: #555; color: #999; font-weight: bold; border: none; border-radius: 6px; cursor: not-allowed;">Out of Stock</button>`
            : `<button class="add-to-cart-btn" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-stock="${p.quantity}" style="flex-grow: 1; padding: 8px; background: var(--brown); color: white; font-weight: bold; border: none; border-radius: 6px; cursor: pointer;">Add to Cart</button>`;

          html += `
            <div style="background: var(--panel); border: 1px solid var(--line); border-radius: 12px; padding: 16px; width: 280px; text-align: left; display: flex; flex-direction: column; position: relative;">
              ${isOutOfStock ? '<div style="position: absolute; top: 10px; right: 10px; background: #8B0000; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; z-index: 2;">OUT OF STOCK</div>' : ''}
              ${imgHtml}
              <h3 style="margin: 0 0 8px 0; color: var(--brown); font-size: 1.2rem; flex-grow: 1;">${p.name}</h3>
              <div style="font-weight: bold; font-size: 1.1rem; color: var(--text);">₹${p.price}</div>
              <div style="display: flex; gap: 10px; margin-top: 10px; align-items: center;">
                ${qtyInputHtml}
                ${buttonHtml}
              </div>
            </div>
          `;
        });
      }
      container.innerHTML = html;
      
      container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          if (!userRole) return alert('Please login to add to cart!');
          const target = e.target as HTMLElement;
          const id = target.getAttribute('data-id');
          const name = target.getAttribute('data-name');
          const price = parseFloat(target.getAttribute('data-price')!);
          const stock = parseInt(target.getAttribute('data-stock')!, 10);
          
          const qtyInput = container.querySelector(`.prod-qty-select[data-id="${id}"]`) as HTMLInputElement;
          const selectedQty = qtyInput ? parseInt(qtyInput.value, 10) : 1;
          
          if (!selectedQty || selectedQty <= 0) return alert('Select a valid quantity');
          
          const existing = cart.find(i => i.id === id);
          if (existing) {
            if (existing.quantity + selectedQty > stock) {
              return alert(`Cannot add more. Only ${stock} left in stock.`);
            }
            existing.quantity += selectedQty;
          } else {
            if (selectedQty > stock) {
              return alert(`Cannot add more. Only ${stock} left in stock.`);
            }
            cart.push({ id, name, price, quantity: selectedQty, stock });
          }
          
          updateCartUI();
          alert(`Added ${selectedQty}x ${name} to cart!`);
        });
      });
    }
  } catch (err) {
    console.error('Failed to load public products', err);
  }
}

// Load public products on page load
loadPublicProducts();

// --- Cart & Orders Logic ---

function updateCartUI() {
  if (cartCount) cartCount.textContent = cart.length.toString();
  localStorage.setItem('quavonix_cart', JSON.stringify(cart));
}

function renderCartModal() {
  if (!cartItemsList || !cartTotal) return;
  let html = '';
  let total = 0;
  cart.forEach((item, index) => {
    html += `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: rgba(0,0,0,0.2); border: 1px solid var(--line); border-radius: 6px;">
        <div style="display: flex; flex-direction: column;">
            <span>${item.name}</span>
            <span style="color: var(--muted); font-size: 12px;">₹${item.price} each</span>
        </div>
        <div style="display: flex; align-items: center; gap: 15px;">
          <div style="display: flex; align-items: center; gap: 5px; background: var(--black); border-radius: 4px; padding: 2px;">
            <button class="cart-dec-btn" data-index="${index}" style="background: transparent; color: var(--text); border: none; cursor: pointer; padding: 4px 8px; font-weight: bold;">-</button>
            <span style="min-width: 20px; text-align: center; font-weight: bold;">${item.quantity}</span>
            <button class="cart-inc-btn" data-index="${index}" data-stock="${item.stock || 999}" style="background: transparent; color: var(--text); border: none; cursor: pointer; padding: 4px 8px; font-weight: bold;">+</button>
          </div>
          <span style="font-weight: bold; width: 60px; text-align: right;">₹${(item.price * item.quantity).toFixed(2)}</span>
          <button class="remove-cart-item" data-index="${index}" style="background: #8B0000; color: white; border: none; border-radius: 4px; padding: 6px 10px; cursor: pointer; font-weight: bold;">X</button>
        </div>
      </div>
    `;
    total += item.price * item.quantity;
  });
  cartItemsList.innerHTML = html;
  cartTotal.textContent = total.toFixed(2);

  cartItemsList.querySelectorAll('.cart-dec-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt((e.target as HTMLElement).getAttribute('data-index')!);
      if (cart[idx].quantity > 1) {
        cart[idx].quantity -= 1;
      } else {
        if(confirm('Remove item from cart?')) {
            cart.splice(idx, 1);
        }
      }
      updateCartUI();
      renderCartModal();
    });
  });

  cartItemsList.querySelectorAll('.cart-inc-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const idx = parseInt(target.getAttribute('data-index')!);
      const stock = parseInt(target.getAttribute('data-stock')!);
      if (cart[idx].quantity < stock) {
        cart[idx].quantity += 1;
      } else {
          alert(`Cannot add more. Only ${stock} in stock.`);
      }
      updateCartUI();
      renderCartModal();
    });
  });

  cartItemsList.querySelectorAll('.remove-cart-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt((e.target as HTMLElement).getAttribute('data-index')!);
      cart.splice(idx, 1);
      updateCartUI();
      renderCartModal();
    });
  });
}

if (navCartBtn) {
  navCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderCartModal();
    if (cartModal) cartModal.style.display = 'flex';
  });
}

if (closeCartBtn) {
  closeCartBtn.addEventListener('click', () => {
    if (cartModal) cartModal.style.display = 'none';
  });
}

if (navOrdersBtn) {
  navOrdersBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (ordersModal) ordersModal.style.display = 'flex';
  });
}

if (closeOrdersBtn) {
  closeOrdersBtn.addEventListener('click', () => {
    if (ordersModal) ordersModal.style.display = 'none';
  });
}

if (checkoutBtn) {
  checkoutBtn.addEventListener('click', async () => {
    if (cart.length === 0) return alert('Cart is empty!');
    if (!userRole) return alert('Please login to checkout');
    
    const phone = (document.getElementById('ship-phone') as HTMLInputElement)?.value.trim();
    const flat = (document.getElementById('ship-flat') as HTMLInputElement)?.value.trim();
    const road = (document.getElementById('ship-road') as HTMLInputElement)?.value.trim();
    const town = (document.getElementById('ship-town') as HTMLInputElement)?.value.trim();
    const state = (document.getElementById('ship-state') as HTMLInputElement)?.value.trim();

    if (!phone || !flat || !road || !town || !state) {
      return alert('Please fill in all Shipping Details fields.');
    }

    processCheckout('Cash on Delivery', null, { phone, flat_colony: flat, road_highway: road, town_village: town, state });
  });
}

async function processCheckout(payment_method: string, transaction_id: string | null, addressDetails?: any) {
  const btn = document.getElementById('checkout-btn');
  if (btn) btn.textContent = 'Processing...';
  try {
    const payload = { cart, payment_method, transaction_id, ...addressDetails };
    const res = await fetch(`${API_BASE}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      alert('Order Placed Successfully! Pay on Delivery.');
      cart = [];
      updateCartUI();
      if (cartModal) cartModal.style.display = 'none';
      
      const phoneIn = document.getElementById('ship-phone') as HTMLInputElement;
      if (phoneIn) phoneIn.value = '';
      const flatIn = document.getElementById('ship-flat') as HTMLInputElement;
      if (flatIn) flatIn.value = '';
      const roadIn = document.getElementById('ship-road') as HTMLInputElement;
      if (roadIn) roadIn.value = '';
      const townIn = document.getElementById('ship-town') as HTMLInputElement;
      if (townIn) townIn.value = '';
      const stateIn = document.getElementById('ship-state') as HTMLInputElement;
      if (stateIn) stateIn.value = '';

      loadMyOrders();
      loadAdminOrders();
      loadPublicProducts();
    } else {
      alert('Failed to place order.');
    }
  } catch (e) {
    console.error(e);
    alert('An error occurred during checkout.');
  } finally {
    if (btn) btn.textContent = 'Place Order (Cash on Delivery)';
  }
}

async function loadMyOrders() {
  const activeContainer = document.getElementById('my-orders-active-list');
  const historyContainer = document.getElementById('my-orders-history-list');
  if (!activeContainer || !historyContainer || !userRole) return;
  try {
    const res = await fetch(`${API_BASE}/my-orders`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    if (res.ok) {
      const orders = await res.json();
      
      const activeOrders = orders.filter((o: any) => o.status === 'Pending' || o.status === 'Confirmed');
      const historyOrders = orders.filter((o: any) => o.status === 'Delivered' || o.status === 'Cancelled');

      let activeHtml = '';
      if (activeOrders.length === 0) {
        activeHtml = '<p style="color: var(--muted);">No active orders.</p>';
      } else {
        activeOrders.forEach((o: any) => {
          const deliveryHtml = o.status === 'Confirmed' && o.delivery_date 
            ? `<div style="color: #4a9a5a; font-weight: bold; margin-top: 10px;">🚚 Delivery Date: ${new Date(o.delivery_date).toLocaleDateString()}</div>`
            : '';
          const cancelHtml = o.status === 'Pending'
            ? `<button class="cancel-order-btn" data-id="${o.id}" style="margin-top: 10px; padding: 6px 12px; background: #8B0000; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Cancel Order</button>`
            : '';
          const transactionHtml = o.transaction_id ? `<div style="color: var(--muted); font-size: 14px; margin-top: 5px;">Transaction ID: ${o.transaction_id}</div>` : '';
          activeHtml += `
            <div style="background: var(--panel); border: 1px solid var(--line); border-radius: 8px; padding: 15px; margin-bottom: 10px;">
              <h4 style="margin: 0 0 10px 0; color: var(--brown);">Order #${o.id} - ₹${o.total_price}</h4>
              <div style="color: var(--text);">Status: <strong>${o.status}</strong></div>
              <div style="color: var(--muted); font-size: 14px; margin-top: 5px;">Payment Method: ${o.payment_method || 'Cash on Delivery'}</div>
              ${transactionHtml}
              ${deliveryHtml}
              ${cancelHtml}
              <div style="color: var(--muted); font-size: 12px; margin-top: 5px;">Placed on: ${new Date(o.created_at).toLocaleString()}</div>
            </div>
          `;
        });
      }
      activeContainer.innerHTML = activeHtml;

      let historyHtml = '';
      if (historyOrders.length === 0) {
        historyHtml = '<p style="color: var(--muted);">No past orders.</p>';
      } else {
        historyOrders.forEach((o: any) => {
          const statusColor = o.status === 'Delivered' ? '#4a9a5a' : '#ff4444';
          historyHtml += `
            <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--line); border-radius: 8px; padding: 15px; margin-bottom: 10px; opacity: 0.8;">
              <h4 style="margin: 0 0 10px 0; color: var(--muted);">Order #${o.id} - ₹${o.total_price}</h4>
              <div style="color: ${statusColor}; font-weight: bold;">Status: ${o.status}</div>
              <div style="color: var(--muted); font-size: 12px; margin-top: 5px;">Placed on: ${new Date(o.created_at).toLocaleString()}</div>
            </div>
          `;
        });
      }
      historyContainer.innerHTML = historyHtml;

      activeContainer.querySelectorAll('.cancel-order-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const id = (e.target as HTMLElement).getAttribute('data-id');
          if (confirm('Are you sure you want to cancel this order?')) {
            try {
              const res = await fetch(`${API_BASE}/my-orders/${id}/cancel`, {
                method: 'PUT',
                headers: { 'Authorization': `Bearer ${authToken}` }
              });
              if (res.ok) {
                alert('Order Cancelled');
                loadMyOrders();
                loadAdminOrders();
              } else {
                alert('Failed to cancel order');
              }
            } catch (err) {
              console.error(err);
            }
          }
        });
      });
    }
  } catch (err) {
    console.error('Failed to load my orders', err);
  }
}

async function loadAdminOrders() {
  const activeContainer = document.getElementById('admin-orders-active-list');
  const historyContainer = document.getElementById('admin-orders-history-list');
  if (!activeContainer || !historyContainer || userRole !== 'admin') return;
  try {
    const res = await fetch(`${API_BASE}/admin/orders`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    if (res.ok) {
      const orders = await res.json();
      
      const activeOrders = orders.filter((o: any) => o.status === 'Pending' || o.status === 'Confirmed');
      const historyOrders = orders.filter((o: any) => o.status === 'Delivered' || o.status === 'Cancelled' || o.status === 'Admin Cancelled');

      let activeHtml = '';
      if (activeOrders.length === 0) {
        activeHtml = '<p style="color: var(--muted);">No active orders.</p>';
      } else {
        activeOrders.forEach((o: any) => {
          const dateVal = o.delivery_date ? o.delivery_date.split('T')[0] : '';
          const transactionHtml = o.transaction_id ? `<div style="color: var(--muted); font-size: 14px; margin-bottom: 10px;">Transaction ID: ${o.transaction_id}</div>` : '';
          const addressHtml = (o.phone || o.flat_colony) ? `
            <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 6px; margin-bottom: 10px;">
              <strong style="color: var(--brown);">Shipping Details:</strong><br/>
              <span style="color: var(--text); font-size: 14px; line-height: 1.5;">
                <strong>Phone:</strong> ${o.phone || 'N/A'}<br/>
                <strong>Address:</strong> ${o.flat_colony || ''}, ${o.road_highway || ''}, ${o.town_village || ''}, ${o.state || ''}
              </span>
            </div>
          ` : '';

          const markDeliveredBtn = o.status === 'Confirmed' 
            ? `<button class="mark-delivered-btn" data-id="${o.id}" style="padding: 6px 12px; background: #4a9a5a; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; margin-left: auto;">Mark as Delivered</button>`
            : '';

          activeHtml += `
            <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--line); border-radius: 8px; padding: 15px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <strong style="color: var(--text);">Order #${o.id} (${o.user_email})</strong>
                <span style="color: var(--brown); font-weight: bold;">₹${o.total_price}</span>
              </div>
              <div style="color: var(--muted); font-size: 14px; margin-bottom: 10px;">Payment Method: ${o.payment_method || 'Cash on Delivery'}</div>
              ${transactionHtml}
              ${addressHtml}
              <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                <select class="order-status-select" data-id="${o.id}" style="padding: 6px; background: var(--black); color: var(--text); border: 1px solid var(--line); border-radius: 4px;">
                  <option value="Pending" ${o.status === 'Pending' ? 'selected' : ''}>Pending</option>
                  <option value="Confirmed" ${o.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                  <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                  <option value="Admin Cancelled" ${o.status === 'Admin Cancelled' ? 'selected' : ''}>Admin Cancelled (Hide)</option>
                </select>
                <input type="date" class="order-date-input" data-id="${o.id}" value="${dateVal}" style="padding: 6px; background: var(--black); color: var(--text); border: 1px solid var(--line); border-radius: 4px;">
                <button class="update-order-btn" data-id="${o.id}" style="padding: 6px 12px; background: var(--brown); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Save</button>
                ${markDeliveredBtn}
              </div>
            </div>
          `;
        });
      }
      activeContainer.innerHTML = activeHtml;

      let historyHtml = '';
      if (historyOrders.length === 0) {
        historyHtml = '<p style="color: var(--muted);">No past orders.</p>';
      } else {
        historyOrders.forEach((o: any) => {
          const statusColor = o.status === 'Delivered' ? '#4a9a5a' : '#ff4444';
          historyHtml += `
            <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--line); border-radius: 8px; padding: 15px; opacity: 0.8;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <strong style="color: var(--muted);">Order #${o.id} (${o.user_email})</strong>
                <span style="color: var(--brown); font-weight: bold;">₹${o.total_price}</span>
              </div>
              <div style="color: ${statusColor}; font-weight: bold; margin-bottom: 10px;">Status: ${o.status}</div>
              <div style="color: var(--muted); font-size: 14px; margin-bottom: 5px;">Payment Method: ${o.payment_method || 'Cash on Delivery'}</div>
            </div>
          `;
        });
      }
      historyContainer.innerHTML = historyHtml;

      const bindUpdate = async (id: string, status: string, delivery_date: string | null, btn: HTMLElement) => {
        const originalText = btn.textContent;
        btn.textContent = '...';
        try {
          const res = await fetch(`${API_BASE}/admin/orders/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({ status, delivery_date })
          });
          if (res.ok) {
            alert('Order updated!');
            loadAdminOrders();
            loadMyOrders();
          } else {
            alert('Failed to update order');
          }
        } catch (err) {
          console.error(err);
        } finally {
          btn.textContent = originalText || 'Save';
        }
      };

      activeContainer.querySelectorAll('.update-order-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const id = (e.target as HTMLElement).getAttribute('data-id')!;
          const statusSelect = activeContainer.querySelector(`.order-status-select[data-id="${id}"]`) as HTMLSelectElement;
          const dateInput = activeContainer.querySelector(`.order-date-input[data-id="${id}"]`) as HTMLInputElement;
          bindUpdate(id, statusSelect.value, dateInput.value || null, btn as HTMLElement);
        });
      });

      activeContainer.querySelectorAll('.mark-delivered-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const id = (e.target as HTMLElement).getAttribute('data-id')!;
          const dateInput = activeContainer.querySelector(`.order-date-input[data-id="${id}"]`) as HTMLInputElement;
          if (confirm('Mark this order as Delivered?')) {
            bindUpdate(id, 'Delivered', dateInput.value || null, btn as HTMLElement);
          }
        });
      });

    }
  } catch (e) {
    console.error(e);
  }
}

if (adminBtn) {
  adminBtn.addEventListener('click', () => {
    if (userRole === 'admin') loadAdminOrders();
  });
}