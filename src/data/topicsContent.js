export const topicsData = {
  Aptitude: ["Percentages", "Profit & Loss", "Time & Work", "Averages"],
  Coding: ["Arrays", "Recursion", "Sorting", "OOP"],
  "IT Core": ["Networking", "DBMS", "Operating Systems", "Software Engineering"],
  Engineering: ["Algorithms", "Data Structures", "Circuits", "Thermodynamics", "Fluid Mechanics", "Structures", "Surveying"],
};

export const topicsContent = {
  // ---------------- Aptitude ----------------
  Percentages: {
    preparation:
      "Understand the basic formula: Percentage = (Part/Total) * 100. Learn shortcut methods and practice conversions between fractions, decimals, and percentages.",
    questions: [
      {
        question: "20% of 150?",
        answer: "30",
        approach: "Multiply 150 by 20/100. 150 × 0.2 = 30.",
      },
      {
        question: "50% of 80?",
        answer: "40",
        approach: "50% is half. 80 ÷ 2 = 40.",
      },
      {
        question: "10% of 200?",
        answer: "20",
        approach: "Convert 10% to decimal → 0.1, then multiply 200 × 0.1 = 20.",
      },
      {
        question: "25% of 400?",
        answer: "100",
        approach: "25% = 1/4, 400 ÷ 4 = 100.",
      },
      {
        question: "60% of 50?",
        answer: "30",
        approach: "0.6 × 50 = 30.",
      },
      {
        question: "12% of 300?",
        answer: "36",
        approach: "0.12 × 300 = 36.",
      },
      {
        question: "75% of 120?",
        answer: "90",
        approach: "3/4 × 120 = 90.",
      },
      {
        question: "40% of 250?",
        answer: "100",
        approach: "0.4 × 250 = 100.",
      },
      {
        question: "15% of 600?",
        answer: "90",
        approach: "0.15 × 600 = 90.",
      },
      {
        question: "33% of 300?",
        answer: "99",
        approach: "0.33 × 300 ≈ 99.",
      },
      {
        question: "80% of 150?",
        answer: "120",
        approach: "0.8 × 150 = 120.",
      },
      {
        question: "5% of 1000?",
        answer: "50",
        approach: "0.05 × 1000 = 50.",
      },
      {
        question: "70% of 90?",
        answer: "63",
        approach: "0.7 × 90 = 63.",
      },
      {
        question: "30% of 400?",
        answer: "120",
        approach: "0.3 × 400 = 120.",
      },
      {
        question: "90% of 200?",
        answer: "180",
        approach: "0.9 × 200 = 180.",
      },
      {
        question: "18% of 500?",
        answer: "90",
        approach: "0.18 × 500 = 90.",
      },
      {
        question: "22% of 450?",
        answer: "99",
        approach: "0.22 × 450 = 99.",
      },
      {
        question: "65% of 60?",
        answer: "39",
        approach: "0.65 × 60 = 39.",
      },
      {
        question: "48% of 250?",
        answer: "120",
        approach: "0.48 × 250 = 120.",
      },
      {
        question: "11% of 900?",
        answer: "99",
        approach: "0.11 × 900 = 99.",
      },
      {
        question: "7% of 700?",
        answer: "49",
        approach: "0.07 × 700 = 49.",
      },
      {
        question: "95% of 200?",
        answer: "190",
        approach: "0.95 × 200 = 190.",
      },
      {
        question: "12.5% of 240?",
        answer: "30",
        approach: "0.125 × 240 = 30.",
      },
      {
        question: "33.33% of 300?",
        answer: "100",
        approach: "0.3333 × 300 ≈ 100.",
      },
      {
        question: "15% of 1200?",
        answer: "180",
        approach: "0.15 × 1200 = 180.",
      },
    ],
  },

  ProfitAndLoss: {
    preparation:
      "Use Profit% = (Profit / CP) * 100 and Loss% = (Loss / CP) * 100. Remember: Profit = SP - CP, Loss = CP - SP.",
    questions: [
      {
        question: "CP = 200, SP = 250. Find Profit%",
        answer: "25%",
        approach: "Profit = SP - CP = 250 - 200 = 50. Profit% = 50/200 ×100 = 25%",
      },
      {
        question: "CP = 500, SP = 400. Find Loss%",
        answer: "20%",
        approach: "Loss = CP - SP = 500 - 400 = 100. Loss% = 100/500 ×100 = 20%",
      },
      {
        question: "Bought at 150, sold at 180. Find Profit%",
        answer: "20%",
        approach: "Profit = 180 - 150 = 30. Profit% = 30/150 ×100 = 20%",
      },
      {
        question: "CP = 400, SP = 360. Find Loss%",
        answer: "10%",
        approach: "Loss = 400 - 360 = 40. Loss% = 40/400 ×100 = 10%",
      },
      {
        question: "CP = 250, SP = 300. Find Profit%",
        answer: "20%",
        approach: "Profit = 300 - 250 = 50. Profit% = 50/250 ×100 = 20%",
      },
      {
        question: "CP = 600, SP = 540. Find Loss%",
        answer: "10%",
        approach: "Loss = 600 - 540 = 60. Loss% = 60/600 ×100 = 10%",
      },
      {
        question: "CP = 1000, SP = 1200. Find Profit%",
        answer: "20%",
        approach: "Profit = 1200 - 1000 = 200. Profit% = 200/1000 ×100 = 20%",
      },
      {
        question: "CP = 800, SP = 720. Find Loss%",
        answer: "10%",
        approach: "Loss = 800 - 720 = 80. Loss% = 80/800 ×100 = 10%",
      },
      {
        question: "CP = 450, SP = 500. Find Profit%",
        answer: "11.11%",
        approach: "Profit = 500 - 450 = 50. Profit% = 50/450 ×100 ≈ 11.11%",
      },
      {
        question: "CP = 600, SP = 570. Find Loss%",
        answer: "5%",
        approach: "Loss = 600 - 570 = 30. Loss% = 30/600 ×100 = 5%",
      },
      // Add 15 more questions similarly
    ],
  },

  TimeAndWork: {
    preparation:
      "Use Work = Rate × Time. Learn combined work formula: (A×B)/(A+B) for two persons working together. Practice unit conversions.",
    questions: [
      {
        question: "A can do a work in 10 days. B in 15 days. How long together?",
        answer: "6 days",
        approach: "A's 1 day work = 1/10, B's 1 day work = 1/15. Together: 1/10 + 1/15 = 1/6. So total days = 6.",
      },
      {
        question: "3 men do 9 days work. 6 men?",
        answer: "4.5 days",
        approach: "Total work = 3 × 9 = 27 man-days. 6 men complete in 27/6 = 4.5 days.",
      },
      {
        question: "A works 1/2 day, B 1/3 day. Work completed?",
        answer: "5/6",
        approach: "A's fraction = 1/2, B = 1/3. Total = 1/2 + 1/3 = 3/6 + 2/6 = 5/6 of work done.",
      },
      // Add 22 more questions
    ],
  },

  Averages: {
    preparation:
      "Average = Sum of terms / Number of terms. Practice quickly adding series and using shortcuts.",
    questions: [
      {
        question: "Average of 10,20,30?",
        answer: "20",
        approach: "(10+20+30)/3 = 60/3 = 20",
      },
      {
        question: "Average of 5,15,25,35?",
        answer: "20",
        approach: "(5+15+25+35)/4 = 80/4 = 20",
      },
      {
        question: "Average of 12,14,16?",
        answer: "14",
        approach: "(12+14+16)/3 = 42/3 = 14",
      },
      // Add 22 more questions
    ],
  },

  // ---------------- Coding ----------------
  // ---------------- Coding ----------------
Sorting: {
  preparation: "Understand different sorting algorithms: Bubble, Selection, Insertion, Merge, Quick. Practice tracing them with small arrays.",
  questions: [
    {
      question: "Sort [5, 2, 4, 1] using Bubble Sort.",
      answer: "[1,2,4,5]",
      approach: "Compare adjacent elements and swap if needed. Repeat passes until sorted. Pass1: [2,4,1,5], Pass2: [2,1,4,5], Pass3: [1,2,4,5]"
    },
    {
      question: "Sort [3,6,2,8] using Selection Sort.",
      answer: "[2,3,6,8]",
      approach: "Find minimum element and place it at first position, repeat for remaining array."
    },
  ],
},

OOP: {
  preparation: "Understand OOP principles: Encapsulation, Inheritance, Polymorphism, Abstraction. Practice with real-life examples.",
  questions: [
    {
      question: "Define encapsulation in OOP.",
      answer: "Encapsulation is the concept of wrapping data and methods together into a single unit (class) and restricting access using access modifiers.",
      approach: "Encapsulation hides internal details from outside code; use private variables and public methods."
    },
    {
      question: "Example of inheritance?",
      answer: "A 'Car' class inherits from 'Vehicle' class.",
      approach: "Child class acquires properties/methods of parent class using extends keyword."
    },
  ],
},

// ---------------- IT Core ----------------
Networking: {
  preparation: "Learn OSI and TCP/IP models, IP addressing, subnetting, protocols. Understand how data flows in networks.",
  questions: [
    {
      question: "What is the OSI model?",
      answer: "7-layer model: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
      approach: "Understand purpose of each layer and how data moves from sender to receiver."
    },
    {
      question: "Difference between TCP and UDP?",
      answer: "TCP is connection-oriented, reliable; UDP is connectionless, faster but unreliable.",
      approach: "TCP ensures delivery with acknowledgements; UDP does not."
    },
  ],
},

DBMS: {
  preparation: "Understand SQL commands, normalization, indexing, relationships, joins.",
  questions: [
    {
      question: "What is normalization?",
      answer: "Process of organizing tables to reduce redundancy and dependency.",
      approach: "Apply 1NF, 2NF, 3NF rules to ensure database efficiency."
    },
    {
      question: "Difference between INNER JOIN and LEFT JOIN?",
      answer: "INNER JOIN returns matching records only; LEFT JOIN returns all left table records and matching right table records.",
      approach: "Use JOIN clauses in SQL and understand result sets."
    },
  ],
},

OperatingSystems: {
  preparation: "Study process scheduling, memory management, file systems, threads, deadlocks.",
  questions: [
    {
      question: "What is a process?",
      answer: "A program in execution.",
      approach: "Understand difference between program (static) and process (dynamic execution)."
    },
    {
      question: "What is deadlock?",
      answer: "State where processes wait indefinitely for resources held by each other.",
      approach: "Understand four Coffman conditions and methods to prevent, avoid, or detect deadlocks."
    },
  ],
},

SoftwareEngineering: {
  preparation: "Learn SDLC models (Waterfall, Agile), requirement gathering, design, testing, maintenance.",
  questions: [
    {
      question: "What is Agile methodology?",
      answer: "Iterative development process with collaboration, flexibility, and customer feedback.",
      approach: "Deliver software in small increments, adapt to changing requirements."
    },
    {
      question: "Difference between verification and validation?",
      answer: "Verification checks if product is built correctly; Validation checks if correct product is built.",
      approach: "Use reviews, inspections (verification) and testing (validation)."
    },
  ],
},

// ---------------- Engineering ----------------
Algorithms: {
  preparation: "Practice common algorithms: searching, sorting, recursion, dynamic programming, greedy.",
  questions: [
    {
      question: "What is binary search?",
      answer: "Efficient algorithm to find an element in sorted array by repeatedly dividing search interval in half.",
      approach: "Compare middle element; if target < middle, search left; else search right; repeat until found."
    },
    {
      question: "Time complexity of Merge Sort?",
      answer: "O(n log n)",
      approach: "Divide array recursively (log n), merge takes O(n) each level, total O(n log n)."
    },
  ],
},

DataStructures: {
  preparation: "Learn arrays, linked lists, stacks, queues, trees, graphs. Understand operations and complexities.",
  questions: [
    {
      question: "Difference between stack and queue?",
      answer: "Stack: LIFO; Queue: FIFO",
      approach: "Push/pop for stack, enqueue/dequeue for queue."
    },
    {
      question: "Binary tree vs Binary search tree?",
      answer: "BST has left<root<right property; Binary tree has no ordering constraints.",
      approach: "Use BST for efficient searching."
    },
  ],
},

Circuits: {
  preparation: "Study Ohm’s law, Kirchhoff’s laws, series/parallel circuits, power calculations.",
  questions: [
    {
      question: "Find current if V=12V, R=4Ω.",
      answer: "3A",
      approach: "I = V/R = 12/4 = 3A."
    },
    {
      question: "Total resistance in series: 2Ω + 3Ω + 5Ω?",
      answer: "10Ω",
      approach: "R_total = R1+R2+R3 = 2+3+5 = 10Ω."
    },
  ],
},

Thermodynamics: {
  preparation: "Understand laws of thermodynamics, work, heat, energy conversions.",
  questions: [
    {
      question: "First law of thermodynamics?",
      answer: "ΔU = Q - W",
      approach: "Internal energy change equals heat added minus work done by system."
    },
    {
      question: "Define entropy.",
      answer: "Measure of disorder in a system.",
      approach: "Understand spontaneous processes increase entropy."
    },
  ],
},

FluidMechanics: {
  preparation: "Learn Bernoulli’s principle, pressure, flow rate, continuity equation.",
  questions: [
    {
      question: "Bernoulli’s equation?",
      answer: "P + ½ρv² + ρgh = constant",
      approach: "Energy conservation in fluid flow."
    },
    {
      question: "Continuity equation?",
      answer: "A1V1 = A2V2",
      approach: "Mass flow rate remains constant in incompressible flow."
    },
  ],
},

Structures: {
  preparation: "Study stress, strain, bending moment, shear force, deflection.",
  questions: [
    {
      question: "Define stress.",
      answer: "Force per unit area.",
      approach: "σ = F/A."
    },
    {
      question: "Define strain.",
      answer: "Deformation per unit length.",
      approach: "ε = ΔL / L."
    },
  ],
},

Surveying: {
  preparation: "Understand measurement techniques, leveling, theodolite usage, area calculations.",
  questions: [
    {
      question: "What is leveling?",
      answer: "Determining height differences between points.",
      approach: "Use leveling instrument and staff readings."
    },
    {
      question: "Purpose of a theodolite?",
      answer: "Measure horizontal and vertical angles.",
      approach: "Used in triangulation for surveying distances and heights."
    },
  ],
}
};