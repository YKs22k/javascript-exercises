const directions = {
  biologics: {
    title: "Biologics Drug Development",
    subtitle: "Antibody, protein, and in-vitro function work",
    summary: "Role fit depends on evidence for cell-based assays, ELISA, qPCR, documentation, and standard protocol execution.",
    fields: {
      "Cell & Molecular Assays": 82,
      "Analytical Methods": 58,
      "Data & Documentation": 79,
      "Troubleshooting": 66
    }
  },
  smallMolecule: {
    title: "Small-Molecule Drug Development",
    subtitle: "Screening, SAR, and pharmacology support",
    summary: "Role fit depends on target validation, screening interpretation, analytical readouts, and assay transferability.",
    fields: {
      "Target Biology": 70,
      "Screening Assays": 62,
      "Analytical Methods": 55,
      "Data & Documentation": 52
    }
  },
  vaccine: {
    title: "Vaccine R&D",
    subtitle: "Antigen, adjuvant, and immune readouts",
    summary: "Role fit depends on antigen rationale, immune assay execution, sample handling, and safety-aware interpretation.",
    fields: {
      "Antigen Design": 73,
      "Immune Assays": 88,
      "Sample Handling": 61,
      "Data & Documentation": 60
    }
  },
  diagnostics: {
    title: "Diagnostic Reagent Development",
    subtitle: "IVD assay design and validation",
    summary: "Assay design, sensitivity, specificity, and validation records need visible proof.",
    fields: {
      "Assay Design": 80,
      "Analytical Validation": 72,
      "Sample Workflow": 65,
      "Data & Documentation": 48
    }
  },
  croTesting: {
    title: "CRO Testing Services",
    subtitle: "SOP execution, QC, and reporting",
    summary: "Standardized execution and report quality matter; proof should show SOP, QC, and turnaround discipline.",
    fields: {
      "SOP Execution": 74,
      "Quality Control": 67,
      "Report Traceability": 57,
      "Turnaround Discipline": 45
    }
  },
  academicLab: {
    title: "Academic Research Lab",
    subtitle: "Research question and publication",
    summary: "Independent hypothesis, experiment planning, and publishable evidence are the core evaluation points.",
    fields: {
      "Hypothesis Framing": 78,
      "Experiment Design": 70,
      "Data Interpretation": 69,
      "Publication Evidence": 64
    }
  },
  cellTherapy: {
    title: "Cell Therapy Development",
    subtitle: "Cell engineering and translational assay",
    summary: "Cell handling, potency assays, immune mechanism, and safety evidence should be marked clearly.",
    fields: {
      "Cell Handling": 76,
      "Potency Assays": 86,
      "Immune Mechanism": 69,
      "Safety Evidence": 60
    }
  },
  synbio: {
    title: "Synthetic Biology",
    subtitle: "Circuit, strain, pathway design",
    summary: "Design-build-test evidence and pathway reasoning drive the assessment.",
    fields: {
      "Construct Design": 72,
      "Pathway Reasoning": 90,
      "Build-Test Cycle": 76,
      "Biosafety Constraints": 45
    }
  }
};

const requirements = {
  "Cell & Molecular Assays": ["Independent cell culture", "ELISA or qPCR execution", "Western blot exposure", "Protocol-following evidence"],
  "Analytical Methods": ["HPLC or plate-reader readout", "Sensitivity and specificity reasoning", "Calibration or standard curve handling", "Result review evidence"],
  "Data & Documentation": ["Raw-data traceability", "Experiment notebook quality", "Deviation recording", "Report-ready summary"],
  Troubleshooting: ["Failed-run diagnosis", "Contamination response", "Parameter adjustment", "Escalation judgment"],
  "Target Biology": ["Target mechanism explanation", "Literature-backed rationale", "Assay relevance to target", "Transferable biology evidence"],
  "Screening Assays": ["Screening workflow exposure", "Hit confirmation reasoning", "Dose-response interpretation", "Assay artifact awareness"],
  "Antigen Design": ["Antigen selection rationale", "Expression or purification awareness", "Immunogenicity reasoning", "Variant coverage thinking"],
  "Immune Assays": ["ELISA or neutralization assay", "Cellular immune readout", "Marker-panel reasoning", "Cohort or sample interpretation"],
  "Sample Handling": ["Biosample preparation", "Cold-chain or storage discipline", "Batch labeling", "Contamination prevention"],
  "Assay Design": ["Primer or probe rationale", "Positive and negative controls", "Limit-of-detection thinking", "Workflow usability"],
  "Analytical Validation": ["Precision and accuracy evidence", "Sensitivity and specificity evidence", "Interference awareness", "QC acceptance criteria"],
  "Sample Workflow": ["Collection-to-result mapping", "Pre-analytical risk control", "Hands-on processing evidence", "User-error prevention"],
  "SOP Execution": ["Strict protocol execution", "Batch record completion", "Instrument readiness", "Deviation escalation"],
  "Quality Control": ["Control acceptance judgment", "Repeat-run decision logic", "QC trend awareness", "Audit-ready evidence"],
  "Report Traceability": ["Raw data to report mapping", "Chain-of-custody evidence", "Review response", "Client-ready reporting"],
  "Turnaround Discipline": ["Deadline reliability", "Queue prioritization", "Handoff clarity", "Operational bottleneck awareness"],
  "Hypothesis Framing": ["Research question clarity", "Literature gap explanation", "Assumption statement", "Expected outcome logic"],
  "Experiment Design": ["Control design", "Replicate plan", "Variable isolation", "Feasibility judgment"],
  "Data Interpretation": ["Result-to-claim discipline", "Alternative explanation handling", "Statistical awareness", "Figure or table evidence"],
  "Publication Evidence": ["Manuscript, thesis, or poster evidence", "Reviewer response exposure", "Reproducible methods", "Contribution clarity"],
  "Cell Handling": ["Aseptic technique", "Cell expansion record", "Viability and passage control", "Contamination response"],
  "Potency Assays": ["Assay endpoint rationale", "Functional readout execution", "Acceptance threshold awareness", "Batch comparison"],
  "Immune Mechanism": ["Target-cell interaction reasoning", "Cytokine or marker interpretation", "Safety signal awareness", "Mechanistic evidence"],
  "Safety Evidence": ["Risk-control documentation", "Release-test awareness", "Adverse-signal escalation", "GMP-adjacent discipline"],
  "Construct Design": ["Sequence or vector rationale", "Part selection logic", "Screening plan", "Build documentation"],
  "Pathway Reasoning": ["Pathway bottleneck explanation", "Flux or expression tradeoff", "Host-strain fit", "Design assumption"],
  "Build-Test Cycle": ["Iteration record", "Failure learning", "Metric-driven redesign", "Reproducible test setup"],
  "Biosafety Constraints": ["Containment awareness", "Genetic stability risk", "Scale-up risk", "Regulatory boundary"]
};

const jobRequirements = {
  biologics: ["Can execute standard in-vitro function tasks", "Can support developability or CMC evidence", "Needs training for independent assay setup"],
  smallMolecule: ["Can support target-validation experiments", "Can interpret screening and SAR-adjacent readouts", "Needs training for independent pharmacology decisions"],
  vaccine: ["Can run immune readout assays", "Can explain antigen and adjuvant evidence", "Needs training for safety-risk interpretation"],
  diagnostics: ["Can support sensitivity and specificity validation", "Can handle sample-to-result workflow", "Needs training for independent IVD validation design"],
  croTesting: ["Can follow SOP and QC requirements", "Can produce traceable reports", "Needs training for client-facing deviation decisions"],
  academicLab: ["Can frame a research question", "Can design controlled experiments", "Needs training for publishable independent claims"],
  cellTherapy: ["Can handle cell-processing tasks", "Can support potency and immune-mechanism assays", "Needs training for translational safety judgment"],
  synbio: ["Can participate in design-build-test cycles", "Can reason about pathway or circuit changes", "Needs training for scale-up and biosafety tradeoffs"]
};

let currentDirection = "biologics";
let selectedField = "Cell & Molecular Assays";
let selectedLevel = "directFit";
let selectedComponentIndex = 0;
let toastTimer;
let activeDrag = null;
const evidenceEntries = [];

const fieldColumns = document.querySelector("#fieldColumns");
const directionList = document.querySelector("#directionList");
const directionTitle = document.querySelector("#directionTitle");
const directionScore = document.querySelector("#directionScore");
const directionSummary = document.querySelector("#directionSummary");
const selectedDirectionTag = document.querySelector("#selectedDirectionTag");
const selectedBranch = document.querySelector("#selectedBranch");
const selectedLayer = document.querySelector("#selectedLayer");
const requirementsNode = document.querySelector("#requirements");
const evidenceLabel = document.querySelector("#evidenceLabel");
const evidenceInput = document.querySelector("#evidenceInput");
const evidenceLog = document.querySelector("#evidenceLog");
const toast = document.querySelector("#toast");

const fitLevelLabels = {
  directFit: "Direct Fit",
  trainableFit: "Trainable Fit",
  riskGap: "Risk Gap"
};

function levelFromScore(value) {
  if (value >= 67) return "directFit";
  if (value >= 34) return "trainableFit";
  return "riskGap";
}

function scoreFromRect(rect, clientY) {
  const percent = 100 - ((clientY - rect.top) / rect.height) * 100;
  return Math.round(Math.min(100, Math.max(0, percent)));
}

function setColumnScore(fieldName, value) {
  selectedField = fieldName;
  directions[currentDirection].fields[selectedField] = value;
  selectedLevel = levelFromScore(value);
  selectedComponentIndex = 0;
  renderDirection();
}

function scoreForDirection(direction) {
  const values = Object.values(directions[direction].fields);
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function renderDirection() {
  const direction = directions[currentDirection];
  directionTitle.textContent = direction.title;
  directionScore.textContent = scoreForDirection(currentDirection);
  directionSummary.textContent = direction.summary;
  selectedDirectionTag.textContent = direction.title;

  renderDirectionButtons();
  renderColumns();
  renderInspector();
}

function renderDirectionButtons() {
  directionList.innerHTML = "";
  Object.entries(directions).forEach(([key, direction]) => {
    const button = document.createElement("button");
    button.className = "direction";
    button.dataset.direction = key;
    button.classList.toggle("active", key === currentDirection);
    button.innerHTML = `
      <span>${direction.title}</span>
      <small>${direction.subtitle}</small>
    `;
    directionList.appendChild(button);
  });
}

function renderColumns() {
  const fields = directions[currentDirection].fields;
  fieldColumns.innerHTML = "";

  Object.entries(fields).forEach(([fieldName, levels]) => {
    const card = document.createElement("article");
    card.className = "field-card";

    const value = levels;
    const activeLevel = levelFromScore(value);
    card.innerHTML = `
      <div class="field-title">
        <strong>${fieldName}</strong>
        <span class="field-score">${value}</span>
      </div>
      <div class="single-column" data-field="${fieldName}">
        <div class="level-band direct-fit-band" data-level="directFit">
          <span>Direct Fit</span>
          <strong>${activeLevel === "directFit" ? "MARK" : ""}</strong>
        </div>
        <div class="level-band trainable-fit-band" data-level="trainableFit">
          <span>Trainable Fit</span>
          <strong>${activeLevel === "trainableFit" ? "MARK" : ""}</strong>
        </div>
        <div class="level-band risk-gap-band" data-level="riskGap">
          <span>Risk Gap</span>
          <strong>${activeLevel === "riskGap" ? "MARK" : ""}</strong>
        </div>
        <span class="column-dot" style="bottom: calc(${value}% - 13px)" aria-hidden="true"></span>
        <input class="column-range" type="range" min="0" max="100" value="${value}" aria-label="${fieldName} level position">
      </div>
    `;
    card.querySelector(`.level-band[data-level="${activeLevel}"]`).classList.add("active");
    card.classList.toggle("selected-card", selectedField === fieldName);

    fieldColumns.appendChild(card);
  });
}

function renderInspector() {
  const value = directions[currentDirection].fields[selectedField];
  selectedLevel = levelFromScore(value);
  selectedBranch.textContent = selectedField;
  selectedLayer.textContent = `${fitLevelLabels[selectedLevel]} evidence selected · ${value}/100`;

  requirementsNode.innerHTML = "";
  const combinedRequirements = [...jobRequirements[currentDirection], ...requirements[selectedField]];
  if (selectedComponentIndex >= combinedRequirements.length) selectedComponentIndex = 0;
  combinedRequirements.forEach((requirement, index) => {
    const weight = Math.min(100, Math.max(20, value - index * 9 + (selectedLevel === "directFit" ? 6 : 0)));
    const proofCount = evidenceEntries.filter((entry) => (
      entry.direction === currentDirection &&
      entry.field === selectedField &&
      entry.level === selectedLevel &&
      entry.component === requirement
    )).length;
    const item = document.createElement("button");
    item.className = "requirement";
    item.type = "button";
    item.dataset.index = index;
    item.classList.toggle("active", index === selectedComponentIndex);
    item.innerHTML = `
      <div class="requirement-top">
        <span>${requirement}</span>
        <span>${weight}%</span>
      </div>
      <div class="meter"><span style="width: ${weight}%"></span></div>
      <small>${proofCount ? `${proofCount} proof item${proofCount > 1 ? "s" : ""} saved` : "No proof yet"}</small>
    `;
    requirementsNode.appendChild(item);
  });
  evidenceLabel.textContent = `Proof for: ${combinedRequirements[selectedComponentIndex]}`;
  evidenceInput.placeholder = `State concrete proof for "${combinedRequirements[selectedComponentIndex]}": context, action, result, validation, and artifacts.`;
  renderEvidenceLog();
}

function addEvidence() {
  const text = evidenceInput.value.trim();
  if (!text) {
    showToast("Add a proof statement before saving evidence.");
    return;
  }

  const combinedRequirements = [...jobRequirements[currentDirection], ...requirements[selectedField]];
  evidenceEntries.unshift({
    direction: currentDirection,
    directionTitle: directions[currentDirection].title,
    field: selectedField,
    level: selectedLevel,
    component: combinedRequirements[selectedComponentIndex],
    text
  });
  evidenceInput.value = "";
  renderInspector();
  showToast("Evidence added to the selected branch.");
}

function renderEvidenceLog() {
  evidenceLog.innerHTML = "";
  const relevantEntries = evidenceEntries.filter((entry) => (
    entry.direction === currentDirection &&
    entry.field === selectedField
  ));

  if (!relevantEntries.length) {
    const empty = document.createElement("li");
    empty.textContent = "No evidence saved for this role scenario and task area yet.";
    evidenceLog.appendChild(empty);
    return;
  }

  relevantEntries.forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = `${entry.directionTitle} / ${entry.field} / ${fitLevelLabels[entry.level]} / ${entry.component}: ${entry.text}`;
    evidenceLog.appendChild(item);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2400);
}

directionList.addEventListener("click", (event) => {
  const button = event.target.closest(".direction");
  if (!button) return;
  currentDirection = button.dataset.direction;
  selectedField = Object.keys(directions[currentDirection].fields)[0];
  selectedLevel = levelFromScore(directions[currentDirection].fields[selectedField]);
  selectedComponentIndex = 0;
  renderDirection();
});

requirementsNode.addEventListener("click", (event) => {
  const item = event.target.closest(".requirement");
  if (!item) return;
  selectedComponentIndex = Number(item.dataset.index);
  renderInspector();
});

fieldColumns.addEventListener("click", (event) => {
  const column = event.target.closest(".single-column");
  if (!column) return;
  selectedField = column.dataset.field;
  selectedLevel = levelFromScore(directions[currentDirection].fields[selectedField]);
  selectedComponentIndex = 0;
  renderColumns();
  renderInspector();
});

fieldColumns.addEventListener("pointerdown", (event) => {
  const column = event.target.closest(".single-column");
  if (!column) return;
  activeDrag = {
    fieldName: column.dataset.field,
    rect: column.getBoundingClientRect()
  };
  column.setPointerCapture?.(event.pointerId);
  setColumnScore(activeDrag.fieldName, scoreFromRect(activeDrag.rect, event.clientY));
});

fieldColumns.addEventListener("pointermove", (event) => {
  if (!activeDrag) return;
  setColumnScore(activeDrag.fieldName, scoreFromRect(activeDrag.rect, event.clientY));
});

fieldColumns.addEventListener("pointerup", () => {
  activeDrag = null;
});

fieldColumns.addEventListener("input", (event) => {
  if (!event.target.classList.contains("column-range")) return;
  const column = event.target.closest(".single-column");
  const value = Number(event.target.value);
  directions[currentDirection].fields[column.dataset.field] = value;
  selectedField = column.dataset.field;
  selectedLevel = levelFromScore(value);
  selectedComponentIndex = 0;
  renderDirection();
});

document.querySelector("#addEvidence").addEventListener("click", addEvidence);

document.querySelector("#resetButton").addEventListener("click", () => {
  selectedField = Object.keys(directions[currentDirection].fields)[0];
  selectedLevel = levelFromScore(directions[currentDirection].fields[selectedField]);
  selectedComponentIndex = 0;
  renderDirection();
  showToast("Selection reset for current direction.");
});

document.querySelector("#exportButton").addEventListener("click", () => {
  const snapshot = {
    direction: directions[currentDirection].title,
    score: scoreForDirection(currentDirection),
    selectedField,
    selectedLevel,
    selectedComponent: [...jobRequirements[currentDirection], ...requirements[selectedField]][selectedComponentIndex],
    position: directions[currentDirection].fields[selectedField],
    proofCount: evidenceEntries.length
  };
  navigator.clipboard?.writeText(JSON.stringify(snapshot, null, 2));
  showToast("Snapshot copied as JSON.");
});

renderDirection();
