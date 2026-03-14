# Eloquent JavaScript Exercises

A structured collection of exercises, experiments, and small **visualizations** while studying **JavaScript** using *Eloquent JavaScript (4th Edition)*.

The goal of this repository is to build strong foundations in modern JavaScript while practicing clean project structure and consistent, incremental learning.

---

## 🎯 Project Objectives

* **Foundational Mastery:** Develop a deep understanding of core JavaScript concepts such as values, types, functions, objects, and higher-order programming.
* **Structured Learning:** Organize exercises by chapter and topic for clarity and maintainability.
* **Code Quality:** Practice writing clear, readable, and well-structured JavaScript code.
* **Performance Awareness:** Experiment with small utilities (such as timers) to observe program execution behavior.

---

## 🛠 Tech Stack

* **Language:** JavaScript (ES Modules)
* **Runtime:** Node.js
* **Package Manager:** npm
* **Operating System:** macOS

---

## 📁 Repository Structure

The structure below shows the **general layout** of the repository.  
Additional chapters and exercises will be added progressively.

```
eloquent-javascript-exercises/
├── README.md
│
├── docs/                     # Notes and summaries
│   └── notes/
│       ├── 00_introduction.md
│       └── 01_values_types_operators.md
│
├── exercises/                # Chapter-based exercises
│   ├── 00_introduction/
│   │   └── 01_arcane_pattern_of_bits.js
│   │
│   └── 01_values_types_operators/
│
├── experiments/              # Performance tests & optimized variations
│
├── src/
│   ├── common/               # Shared utilities
│   │   ├── logger.js
│   │   └── timer.js
│   │
│   └── visualizations/       # DOM / browser experiments (later chapters)
│
└── package.json
```

---

## 🚀 How to Run the Code

### Example

Run a specific program using Node.js:

```bash
node exercises/00_introduction/arcane_pattern_of_bits.js
```

### General Pattern

You can execute any exercise in the repository using:

```bash
node path/to/file.js
```

Example:

```bash
node exercises/02_program_structure/some_exercise.js
```

### Using npm Scripts (Optional)

You may also define and run scripts:

```bash
npm start
```

---

## 📚 Learning Resource

Primary reference:

*Eloquent JavaScript (4th Edition)*

This repository follows the concepts introduced in the book while adding small experiments and utilities where helpful.

---

## 📝 Notes

Conceptual explanations, summaries, and study notes are stored in the `docs/` directory.

---

## 📈 Progress

* [ ] Introduction
* [ ] Chapter 1 — Values, Types, and Operators
* [ ] Chapter 2 — Program Structure
* [ ] Chapter 3 — Functions
* [ ] Chapter 4 — Data Structures: Objects and Arrays