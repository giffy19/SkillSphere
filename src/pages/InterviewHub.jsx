import React, { useState } from "react";
import "./InterviewHub.css";

const InterviewHub = () => {
  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [collapsedTopics, setCollapsedTopics] = useState({
    Aptitude: false,
    Coding: false,
    "IT Core": false,
    Engineering: false,
    Circuits: false,
    Thermodynamics: false,
    "Fluid Mechanics": false,
    Structures: false,
    Surveying: false,
  });

  const toggleTopic = (topic) => {
    setCollapsedTopics((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
    setSelectedSubtopic(""); // collapse previous subtopic selection
    setQuestionIndex(0);
  };

  // Add full topicsData here (your existing object)
  // Full topicsData with realistic questions
  const topicsData = {
    Aptitude: [
      {
        subtopic: "Percentages",
        preparation: "Understand formulas, shortcuts, and practice problems.",
        questions: [
          { question: "20% of 150?", answer: "30", approach: "20% of 150 = (150*20)/100 = 30" },
          { question: "50% of 80?", answer: "40", approach: "50% = half of 80 → 40" },
          { question: "10% of 200?", answer: "20", approach: "10% of 200 = 200*10/100 = 20" },
          { question: "25% of 400?", answer: "100", approach: "400*25/100=100" },
          { question: "60% of 50?", answer: "30", approach: "50*60/100=30" },
          { question: "12% of 300?", answer: "36", approach: "300*12/100=36" },
          { question: "75% of 120?", answer: "90", approach: "120*75/100=90" },
          { question: "40% of 250?", answer: "100", approach: "250*40/100=100" },
          { question: "15% of 600?", answer: "90", approach: "600*15/100=90" },
          { question: "33% of 300?", answer: "99", approach: "300*33/100=99" },
          { question: "80% of 150?", answer: "120", approach: "150*80/100=120" },
          { question: "5% of 1000?", answer: "50", approach: "1000*5/100=50" },
          { question: "70% of 90?", answer: "63", approach: "90*70/100=63" },
          { question: "30% of 400?", answer: "120", approach: "400*30/100=120" },
          { question: "90% of 200?", answer: "180", approach: "200*90/100=180" },
        ],
      },
      {
        subtopic: "Profit & Loss",
        preparation: "Learn CP, SP, Profit%, Loss% formulas with examples.",
        questions: [
          { question: "CP=200, SP=250. Profit %?", answer: "25%", approach: "Profit = 250-200=50, Profit%=50/200*100=25%" },
          { question: "CP=500, SP=400. Loss %?", answer: "20%", approach: "Loss = 500-400=100, Loss%=100/500*100=20%" },
          { question: "Gain=50, CP=500. Profit %?", answer: "10%", approach: "50/500*100=10%" },
          { question: "SP=600, CP=500. Profit %?", answer: "20%", approach: "100/500*100=20%" },
          { question: "CP=400, SP=360. Loss %?", answer: "10%", approach: "40/400*100=10%" },
          { question: "Bought at 150, sold 180. Profit %?", answer: "20%", approach: "(180-150)/150*100=20%" },
          { question: "CP=250, SP=225. Loss %?", answer: "10%", approach: "(250-225)/250*100=10%" },
          { question: "Profit=60, CP=400. Profit %?", answer: "15%", approach: "60/400*100=15%" },
          { question: "Loss=30, CP=300. Loss %?", answer: "10%", approach: "30/300*100=10%" },
          { question: "SP=450, CP=500. Loss %?", answer: "10%", approach: "50/500*100=10%" },
          { question: "CP=1200, SP=1500. Profit %?", answer: "25%", approach: "300/1200*100=25%" },
          { question: "CP=800, SP=680. Loss %?", answer: "15%", approach: "120/800*100=15%" },
          { question: "Gain=75, CP=500. Profit %?", answer: "15%", approach: "75/500*100=15%" },
          { question: "CP=900, SP=1080. Profit %?", answer: "20%", approach: "180/900*100=20%" },
          { question: "Loss=50, CP=500. Loss %?", answer: "10%", approach: "50/500*100=10%" },
        ],
      },
      {
    subtopic: "Time & Work",
    preparation: "Understand work = rate × time, combined work, efficiency problems, and pipes & cisterns.",
    questions: [
      { question: "A can do a work in 10 days, B in 15 days. Together?", answer: "6 days", approach: "1/10 + 1/15 = 1/x → x=6" },
      { question: "A alone in 12 days, B alone in 8 days, both 6 days done, remaining by B?", answer: "2 days", approach: "Find work done in 6 days, remaining / B's rate" },
      { question: "Pipe fills tank in 20 hrs, another empties in 30 hrs, net fill time?", answer: "60 hrs", approach: "1/20 - 1/30 = 1/x → x=60" },
      { question: "3 workers finish in 18 days, 2 more join, total days?", answer: "10.8 days", approach: "Calculate daily work rate" },
      { question: "A does 40% work, B does remaining in 6 days, B alone 10 days?", answer: "Check consistency", approach: "Remaining work / B's rate = 6 → B=10 days" },
      { question: "A & B complete 50% in 4 days, how many days for total?", answer: "8 days", approach: "Work proportionally" },
      { question: "Work efficiency doubles, time reduces by?", answer: "Half", approach: "Time inversely proportional to efficiency" },
      { question: "A works 1 day, B 2 days alternately, total 6 days, fraction of work?", answer: "Calculate combined alternated work", approach: "Sum contributions day by day" },
    ]
  },

  {
    subtopic: "Averages",
    preparation: "Understand mean, weighted average, sum of numbers, relation between averages.",
    questions: [
      { question: "Average of 5, 10, 15?", answer: "10", approach: "(5+10+15)/3=10" },
      { question: "Average of 10 numbers is 12, one number 16 removed, new avg?", answer: "11.78", approach: "(12*10 - 16)/9" },
      { question: "Average of 7 numbers 20, increase by 3, new avg?", answer: "23", approach: "Add 3 to each, new avg = old avg + 3" },
      { question: "Average marks of 5 students 60, sixth scored 80, new avg?", answer: "63.33", approach: "(60*5 + 80)/6" },
      { question: "Weighted avg of 3,4,5 with weights 2,3,5?", answer: "4.2", approach: "(3*2 + 4*3 + 5*5)/10" },
      { question: "Two sets of 8, 12 numbers with avg 15, 20, combined avg?", answer: "18", approach: "(15*8 + 20*12)/(8+12)" },
      { question: "Average of 10 consecutive numbers?", answer: "Middle number", approach: "For consecutive numbers, average = middle" },
      { question: "Average height 5 people 160cm, one replaced by 170cm, new avg?", answer: "162cm", approach: "New avg = old avg + (change/number)" },
    ]
  },

  {
    subtopic: "Ratio",
    preparation: "Understand proportion, mixture, sharing, inverse ratio problems.",
    questions: [
      { question: "Divide 120 in ratio 2:3?", answer: "48 and 72", approach: "120*(2/5) and 120*(3/5)" },
      { question: "A:B = 3:4, B:C = 5:6, A:C?", answer: "15:24", approach: "Convert to common B, then ratio A:C" },
      { question: "Mix 2 liters milk & 3 liters water, new ratio if 1 liter water removed?", answer: "2:2", approach: "Milk remains, water reduced" },
      { question: "Salary ratio A:B = 5:6, 10% increment each, new ratio?", answer: "55:66 → 5:6", approach: "Same ratio after same percentage increase" },
      { question: "Divide profit 10000 in ratio 7:3?", answer: "7000 & 3000", approach: "Split proportionally" },
      { question: "A:B = 2:3, B:C = 4:5, find A:B:C?", answer: "8:12:15", approach: "Make B same in both ratios, combine" },
      { question: "Mix of 3kg sugar & 2kg flour, ratio sugar:flour?", answer: "3:2", approach: "Direct ratio of quantities" },
      { question: "3 persons share 600 in ratio of 1:2:3?", answer: "100, 200, 300", approach: "Divide total according to ratio" },
    ]
  }
    ],
    Coding: [
      {
        subtopic: "Arrays",
        preparation: "Focus on indexing, traversal, length, and manipulation.",
        questions: [
          { question: "First index of array?", answer: "0", approach: "Arrays start from index 0 in JS, C, Java." },
          { question: "Length of [1,2,3,4]?", answer: "4", approach: "Count elements: 1,2,3,4 → 4" },
          { question: "Last index of [1,2,3,4]?", answer: "3", approach: "Length-1 → 4-1=3" },
          { question: "Access 2nd element?", answer: "2", approach: "arr[1] = 2" },
          { question: "Add element at end?", answer: "push()", approach: "Use push() method" },
          { question: "Remove last element?", answer: "pop()", approach: "Use pop() method" },
          { question: "Index of 3?", answer: "2", approach: "arr.indexOf(3) → 2" },
          { question: "Slice [1,2,3] first 2?", answer: "[1,2]", approach: "arr.slice(0,2) → [1,2]" },
          { question: "Reverse [1,2,3]?", answer: "[3,2,1]", approach: "arr.reverse()" },
          { question: "Sort [3,1,2]?", answer: "[1,2,3]", approach: "arr.sort()" },
          { question: "Check includes 2?", answer: "true", approach: "arr.includes(2) → true" },
          { question: "Remove first element?", answer: "shift()", approach: "arr.shift()" },
          { question: "Add element start?", answer: "unshift()", approach: "arr.unshift(0)" },
          { question: "Concat arrays?", answer: "[1,2,3,4,5]", approach: "[1,2].concat([3,4,5])" },
          { question: "Join array?", answer: "'1-2-3'", approach: "arr.join('-')" },
        ],
      },
      {
        subtopic: "Recursion",
        preparation: "Learn base case, recursive calls, and stack tracing.",
        questions: [
          { question: "Factorial of 3?", answer: "6", approach: "3! = 3*2*1 = 6" },
          { question: "Factorial of 5?", answer: "120", approach: "5! = 5*4*3*2*1 = 120" },
          { question: "Fibonacci 5th term?", answer: "3", approach: "0,1,1,2,3 → 5th=3" },
          { question: "Sum 1+2+3 recursively?", answer: "6", approach: "sum(n) = n + sum(n-1)" },
          { question: "Power 2^3 recursively?", answer: "8", approach: "2*2*2=8" },
          { question: "Reverse string recursively?", answer: "dcba", approach: "Reverse rest + first char" },
          { question: "GCD of 12,18?", answer: "6", approach: "Euclid: gcd(18,12)=gcd(12,6)=6" },
          { question: "Palindrome check?", answer: "true", approach: "Compare first & last chars recursively" },
          { question: "Binary search recursively?", answer: "index", approach: "Divide array mid recursively" },
          { question: "Count digits of 123?", answer: "3", approach: "Recursive divide by 10" },
          { question: "Sum array recursively?", answer: "sum", approach: "arr[0]+sum(rest)" },
          { question: "Max element recursively?", answer: "max", approach: "Compare arr[0] and max of rest" },
          { question: "Print 1 to N recursively?", answer: "1..N", approach: "Print n-1 then n" },
          { question: "Fibonacci nth term?", answer: "fib(n)", approach: "fib(n-1)+fib(n-2)" },
          { question: "Power of 5^0?", answer: "1", approach: "Any number^0 = 1" },
        ],
      },
      {
    subtopic: "Sorting",
    preparation: "Understand Bubble, Selection, Insertion, Merge, Quick sort algorithms and their complexities.",
    questions: [
      { question: "Sort [5,2,4,1] using Bubble sort?", answer: "[1,2,4,5]", approach: "Compare adjacent elements repeatedly and swap if needed" },
      { question: "Sort [3,1,2] using Selection sort?", answer: "[1,2,3]", approach: "Select minimum and place at correct position iteratively" },
      { question: "Sort [4,2,5,1] using Insertion sort?", answer: "[1,2,4,5]", approach: "Insert each element at correct position in sorted part" },
      { question: "Time complexity of Quick sort?", answer: "O(n log n) average", approach: "Divide & conquer using pivot, partition array recursively" },
      { question: "Time complexity of Merge sort?", answer: "O(n log n)", approach: "Divide array into halves, sort recursively, merge sorted halves" },
      { question: "Sort [6,5,3,2] using Heap sort?", answer: "[2,3,5,6]", approach: "Build max-heap, extract max to sort" },
      { question: "Stable sort meaning?", answer: "Preserves order of equal elements", approach: "Elements with same value keep relative order" },
      { question: "Difference between in-place and out-of-place sort?", answer: "In-place uses no extra space", approach: "Out-of-place requires additional memory for sorting" },
    ]
  },

  {
    subtopic: "Searching",
    preparation: "Understand Linear and Binary search, their implementation, time complexity.",
    questions: [
      { question: "Linear search 4 in [1,2,3,4,5]?", answer: "Index 3", approach: "Check each element sequentially" },
      { question: "Binary search 3 in [1,2,3,4,5]?", answer: "Index 2", approach: "Divide sorted array, compare with middle element" },
      { question: "Time complexity Linear search?", answer: "O(n)", approach: "Check all n elements in worst case" },
      { question: "Time complexity Binary search?", answer: "O(log n)", approach: "Divide array into halves each step" },
      { question: "Search 10 in empty array?", answer: "Not found", approach: "Return -1 if array length = 0" },
      { question: "Search in descending sorted array using Binary search?", answer: "Compare and adjust search logic", approach: "Reverse comparison due to descending order" },
      { question: "Difference Linear vs Binary search?", answer: "Linear: O(n), Binary: O(log n)", approach: "Linear unsorted, Binary needs sorted array" },
      { question: "Search first occurrence of 5 in [1,5,5,7]?", answer: "Index 1", approach: "Check elements sequentially until first match" },
    ]
  },

  {
    subtopic: "Strings",
    preparation: "Learn string manipulation, length, concatenation, substring, reversal, and comparison.",
    questions: [
      { question: "Length of 'Hello'?", answer: "5", approach: "Count characters" },
      { question: "Reverse 'abc'?", answer: "'cba'", approach: "Iterate from end or use built-in reverse" },
      { question: "Concatenate 'Hi' and 'There'?", answer: "'HiThere'", approach: "Use + operator or concat() method" },
      { question: "Substring of 'Hello' from 1 to 3?", answer: "'el'", approach: "Extract using indices 1 to 3" },
      { question: "Compare 'abc' and 'abd'?", answer: "abc < abd", approach: "Lexicographic comparison" },
      { question: "Check if 'Hello' contains 'll'?", answer: "true", approach: "Use includes() method or iterate to find substring" },
      { question: "Convert 'abc' to uppercase?", answer: "'ABC'", approach: "Use toUpperCase() method" },
      { question: "Remove whitespace from ' a b c '?", answer: "'abc'", approach: "Use trim() and replace all spaces" },
    ]
  },

  {
    subtopic: "OOP",
    preparation: "Understand Classes, Objects, Inheritance, Polymorphism, Encapsulation, and Abstraction.",
    questions: [
      { question: "What is a class?", answer: "Blueprint for objects", approach: "Defines properties and methods for objects" },
      { question: "What is an object?", answer: "Instance of class", approach: "Object holds data defined by class" },
      { question: "Difference between inheritance types?", answer: "Single, multiple, multilevel, hierarchical", approach: "Inheritance allows reuse of code from parent class" },
      { question: "What is polymorphism?", answer: "Ability to take many forms", approach: "Method overloading and overriding are examples" },
      { question: "What is encapsulation?", answer: "Hiding internal details", approach: "Use private fields and getter/setter methods" },
      { question: "What is abstraction?", answer: "Hide implementation, show functionality", approach: "Abstract classes or interfaces" },
      { question: "Difference between method overloading & overriding?", answer: "Overloading: same class, different params; Overriding: subclass modifies parent method", approach: "Conceptual understanding" },
      { question: "What is constructor?", answer: "Special method to initialize object", approach: "Called when object is created" },
    ]
  }
  ],

  "IT Core": [
    {
      subtopic: "Networking",
      preparation: "Understand OSI layers, IP addressing, TCP/UDP, DNS, routing, and protocols.",
      questions: [
        { question: "What is IP Address?", answer: "Unique identifier for device", approach: "Identifies device on network, IPv4/IPv6" },
        { question: "Difference TCP vs UDP?", answer: "TCP reliable, UDP faster", approach: "TCP ensures delivery, UDP is connectionless" },
        { question: "What is DNS?", answer: "Domain Name System", approach: "Converts domain names to IP addresses" },
        { question: "OSI Layer 3 purpose?", answer: "Routing & addressing", approach: "Layer 3 handles logical addressing" },
        { question: "What is subnet mask?", answer: "Divides network & host parts", approach: "Helps identify network vs host bits" },
        { question: "What is DHCP?", answer: "Dynamic Host Configuration Protocol", approach: "Automatically assigns IPs" },
        { question: "What is a router?", answer: "Forwards packets", approach: "Connects networks & chooses optimal path" },
        { question: "What is a switch?", answer: "Connects LAN devices", approach: "Uses MAC addresses to forward frames" },
      ]
    },
    // Add DBMS, OS, Software Engineering, Cloud, Cybersecurity, Web, DSA subtopics similarly
  ],

  "Engineering": [
    {
      subtopic: "Algorithms",
      preparation: "Understand common algorithms, sorting, searching, graph traversal, and complexity.",
      questions: [
        { question: "What is binary search?", answer: "Search sorted array in log(n)", approach: "Divide array, compare middle, repeat" },
        { question: "What is merge sort?", answer: "Divide & conquer sorting", approach: "Split array, sort halves, merge" },
        { question: "Time complexity of bubble sort?", answer: "O(n^2)", approach: "Nested loops compare adjacent elements" },
        { question: "What is DFS?", answer: "Depth First Search", approach: "Traverse graph deeply first, then backtrack" },
        { question: "What is BFS?", answer: "Breadth First Search", approach: "Traverse graph level by level" },
        { question: "What is quicksort?", answer: "Divide & conquer sort", approach: "Select pivot, partition, recursively sort" },
        { question: "What is dynamic programming?", answer: "Optimized recursion", approach: "Store intermediate results to avoid recomputation" },
        { question: "What is greedy algorithm?", answer: "Locally optimal choices", approach: "Pick best option at each step hoping for global optimum" },
      ]
    },
    {
      subtopic: "Data Structures",
      preparation: "Understand stack, queue, linked list, tree, graph, hash tables.",
      questions: [
        { question: "What is stack?", answer: "LIFO", approach: "Push adds top, pop removes top" },
        { question: "What is queue?", answer: "FIFO", approach: "Enqueue adds rear, dequeue removes front" },
        { question: "Array vs Linked List?", answer: "Array fixed, list dynamic", approach: "Arrays contiguous, lists use nodes"},
      
        { question: "Array vs Linked List?", answer: "Array fixed, list dynamic", approach: "Arrays contiguous, lists use nodes connected by pointers" },
        { question: "What is a tree?", answer: "Hierarchical structure", approach: "Nodes connected with parent-child relation" },
        { question: "Binary tree?", answer: "Tree with max 2 children per node", approach: "Each node ≤ 2 children" },
        { question: "What is graph?", answer: "Vertices and edges", approach: "Represents network connections" },
        { question: "What is hash table?", answer: "Key-value store", approach: "Map keys to values for fast lookup" },
        { question: "What is stack overflow?", answer: "Exceed stack memory", approach: "Too many nested function calls" },
        { question: "What is circular queue?", answer: "Queue in circular manner", approach: "Last element points to first" },
        { question: "What is doubly linked list?", answer: "Nodes with prev & next pointers", approach: "Traverse forward/backward" },
      ]
    }
  ],

  "Circuits": [
    {
      subtopic: "Basic Circuits",
      preparation: "Learn Ohm’s law, Kirchhoff’s laws, series-parallel circuits, voltage, and current calculations.",
      questions: [
        { question: "Ohm's Law?", answer: "V=IR", approach: "Voltage = Current × Resistance" },
        { question: "Series resistance of 2Ω & 3Ω?", answer: "5Ω", approach: "R_total = R1 + R2" },
        { question: "Parallel resistance of 2Ω & 3Ω?", answer: "1.2Ω", approach: "1/R = 1/2 + 1/3 → R≈1.2Ω" },
        { question: "Kirchhoff's Current Law?", answer: "Sum of currents at node = 0", approach: "Current entering = current leaving" },
        { question: "Kirchhoff's Voltage Law?", answer: "Sum of voltages in loop = 0", approach: "Voltage rises & drops sum to 0" },
        { question: "Power in resistor 5Ω, I=2A?", answer: "20W", approach: "P=I^2*R → 2^2*5=20" },
        { question: "Voltage across resistor 10Ω, I=3A?", answer: "30V", approach: "V=IR → 3*10=30" },
        { question: "Current in series circuit, V=12V, R_total=6Ω?", answer: "2A", approach: "I=V/R → 12/6=2" },
      ]
    }
  ],

  "Thermodynamics": [
    {
      subtopic: "Laws & Concepts",
      preparation: "Understand laws of thermodynamics, heat transfer, efficiency, PV diagrams.",
      questions: [
        { question: "First law?", answer: "ΔU = Q - W", approach: "Change in internal energy = Heat added - Work done" },
        { question: "Second law?", answer: "Entropy of universe increases", approach: "Heat cannot spontaneously flow from cold to hot" },
        { question: "Third law?", answer: "Entropy → 0 as T→0K", approach: "Perfect crystal at 0K has zero entropy" },
        { question: "PV work formula?", answer: "W = PΔV", approach: "Work done = Pressure × Change in volume" },
        { question: "Carnot efficiency?", answer: "η = 1 - Tc/Th", approach: "Maximum efficiency = 1 - (T cold / T hot)" },
        { question: "Isothermal process?", answer: "ΔT = 0", approach: "Temperature remains constant" },
        { question: "Adiabatic process?", answer: "Q = 0", approach: "No heat transfer occurs" },
        { question: "Specific heat?", answer: "Q=mcΔT", approach: "Heat required = mass × specific heat × temp change" },
      ]
    }
  ],

  "Fluid Mechanics": [
    {
      subtopic: "Fluid Properties & Flow",
      preparation: "Study density, pressure, Bernoulli, continuity equation, laminar & turbulent flow.",
      questions: [
        { question: "Density formula?", answer: "ρ = m/V", approach: "Density = Mass / Volume" },
        { question: "Pressure at depth h?", answer: "P = ρgh", approach: "Pressure = density × gravity × height" },
        { question: "Bernoulli’s equation?", answer: "P + ½ρv² + ρgh = constant", approach: "Energy conservation in fluid flow" },
        { question: "Continuity equation?", answer: "A1V1 = A2V2", approach: "Flow rate constant in pipe" },
        { question: "Laminar flow?", answer: "Smooth & parallel layers", approach: "Flow is orderly at low velocity" },
        { question: "Turbulent flow?", answer: "Chaotic flow", approach: "Irregular eddies at high velocity" },
        { question: "Viscosity definition?", answer: "Fluid resistance to flow", approach: "High viscosity = thick fluid" },
        { question: "Hydrostatic pressure?", answer: "Pressure exerted by fluid at rest", approach: "Depends on depth & density" },
      ]
    }
  ],

  "Structures": [
    {
      subtopic: "Strength of Materials",
      preparation: "Understand stress, strain, bending moment, shear force, torsion.",
      questions: [
        { question: "Stress formula?", answer: "σ = F/A", approach: "Force per unit area" },
        { question: "Strain formula?", answer: "ε = ΔL/L", approach: "Change in length / original length" },
        { question: "Young's modulus?", answer: "E = σ/ε", approach: "Stress / Strain" },
        { question: "Bending moment definition?", answer: "Force × distance causing bending", approach: "Moment at a section of beam" },
        { question: "Shear force?", answer: "Internal force along section", approach: "Force causing sliding between sections" },
        { question: "Torsion?", answer: "Twisting moment on shaft", approach: "Torque causing shear stress" },
        { question: "Axial load?", answer: "Force along member axis", approach: "Pulling/pushing along length" },
        { question: "Beam deflection?", answer: "Δ = PL³/48EI", approach: "Maximum deflection formula for simply supported beam" },
      ]
    }
  ],

  "Surveying": [
    {
      subtopic: "Measurement Techniques",
      preparation: "Learn linear/angular measurement, leveling, triangulation, contouring.",
      questions: [
        { question: "What is chain surveying?", answer: "Measuring distances using chain", approach: "Simple surveying for small areas" },
        { question: "Purpose of leveling?", answer: "Determine height differences", approach: "Measure elevations between points" },
        { question: "What is theodolite?", answer: "Instrument to measure angles", approach: "Measures horizontal & vertical angles" },
        { question: "Triangulation?", answer: "Locate point using triangle", approach: "Form triangles and measure angles" },
        { question: "Contour lines?", answer: "Lines of equal elevation", approach: "Show terrain profile" },
        { question: "Traverse survey?", answer: "Connected series of lines", approach: "Determine positions & angles" },
        { question: "Total station use?", answer: "Measure distance & angles electronically", approach: "Modern surveying instrument" },
        { question: "Plane table surveying?", answer: "Plot field directly on table", approach: "Used for small-scale surveys" },
      ]
    }
  ]
};

  

  const getCurrentQuestions = () => {
    const topicSub = Object.values(topicsData)
      .flat()
      .find((s) => s.subtopic === selectedSubtopic);
    return topicSub ? topicSub.questions : [];
  };

  const questions = getCurrentQuestions();
  const currentQuestion = questions[questionIndex];

  const handleNextQuestion = (e) => {
    e.stopPropagation();
    setQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrevQuestion = (e) => {
    e.stopPropagation();
    setQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="hub-container">
      <h1>Interview Hub</h1>

      {Object.keys(topicsData).map((topic, tIdx) => (
        <div key={tIdx} className="topic-container">
          <div className="topic-header" onClick={() => toggleTopic(topic)}>
            {topic} {collapsedTopics[topic] ? "▲" : "▼"}
          </div>

          {collapsedTopics[topic] &&
            topicsData[topic].map((sub, sIdx) => (
              <div
                key={sIdx}
                className="subtopic-item"
                onClick={() => {
                  setSelectedSubtopic(sub.subtopic);
                  setQuestionIndex(0);
                }}
              >
                {sub.subtopic}

                {selectedSubtopic === sub.subtopic && currentQuestion && (
                  <div
                    className="subtopic-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="preparation">{sub.preparation}</div>

                    <div className="question-card">
                      <strong>Q: {currentQuestion.question}</strong>
                      <div>Answer: {currentQuestion.answer}</div>
                      <div>Approach: {currentQuestion.approach}</div>

                      <div className="buttons">
                        <button
                          onClick={handlePrevQuestion}
                          disabled={questionIndex === 0}
                        >
                          Previous
                        </button>
                        <button
                          onClick={handleNextQuestion}
                          disabled={questionIndex === questions.length - 1}
                        >
                          Next
                        </button>
                      </div>

                      <div className="progress">
                        {questionIndex + 1} / {questions.length}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default InterviewHub;



    