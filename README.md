# Essay Helper

**Essay Helper** is a writing assistant that aims to enhance creativity without controlling it. This tool focuses on **post-creation analysis** rather than pre-creation assistance. It allows you to express your thoughts freely and receive constructive feedback afterward.

The goal is to support **free thought, clarity, and autonomy**, while still offering the benefits of AI—such as logic checking, sentence-level issue highlighting, and helpful suggestions.

---

## Features

- Rich-text editor with intuitive formatting
- AI-powered issue detection (e.g., logical fallacies, vague reasoning)
- Sentence-level highlighting of flagged issues
- Sidebar explanation of detected problems
- Local LLM using [Ollama](https://ollama.com)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/essay-helper.git
cd essay-helper

#INSTALL DEPENDENCIES 
npm install
# or
yarn
# or
pnpm install

#START DEVELOPMENT SERVER
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


The app will run at http://localhost:3000.

##Local LLM Setup with Ollama
This project uses Ollama to run a local language model.

##Install and Run Mistral
Install Ollama: https://ollama.com/download

##Run the following command:
ollama run mistral

#FUTURE GOALS
Detect stylistic issues (e.g., passive voice, redundancy)

Add citation and source-checking support

Customize feedback based on writing goals (persuasive, narrative, academic)

Enable export to formats like PDF or Google Docs with margin comments

#Philosophy
This tool is designed to support reflection, not restriction. AI is used here to enhance thought, not replace it. Essay Helper encourages critical thinking and revision without compromising the writer’s voice.

##Contributors
Vishal Vunnam

##License
MIT License — free to use and modify. Contributions are welcome.
Let me know if you want to add a usage GIF, contribution guide, or environment variables section.
