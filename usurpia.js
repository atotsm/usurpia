javascript:(function() {
// Usurpia Lens v3.0 (The Analyst's Toolkit)
// This major update introduces two new, stackable analysis modes:
// 1. Flux Mode: Reveals the interconnected feedback loops between systemic problems.
// 2. Resonance Mode: Poses a Socratic question to connect a concept to personal experience.
// These are controlled by new checkboxes in the control panel.

// --- CONFIGURATION & DICTIONARY ---
const config = {
    settings: {
        densityLevels: { surgical: 10, standard: 20, deepscan: 50 },
        links: {
            free: "https://zipcadia.gumroad.com",
            paid: "https://zipcadia.gumroad.com/l/bundle1"
        }
    },
    dictionary: {
        core: {
            name: "The Engine",
            isSurgical: true,
            words: [
                { terms: ["economic growth", "growth"], primaryTerm: "economic growth", explanations: { headline: "Mandatory Expansion", summary: "The system's core imperative to expand exponentially to service interest on past debt." }, systemDefense: "Dismissed as 'anti-progress.' This is the Solution Fallacy, demanding a perfect alternative before a diagnosis is considered valid.", flux_connections: ["Energy Paradigm", "Environment Paradigm", "Work Paradigm"], resonance_prompt: "How has the pressure for constant 'growth' in your workplace or industry affected its culture and your personal stress levels?" },
                { terms: ["debt", "indebtedness"], primaryTerm: "debt", explanations: { headline: "The Tool of Control", summary: "The primary mechanism for control and wealth transfer. Perpetual indebtedness ensures compliance and participation in the 'Competition Trap'." }, systemDefense: "Normalized as a 'fact of life' or a 'tool for investment,' obscuring its function as a mechanism of control.", flux_connections: ["Work Paradigm", "Education Paradigm", "Humanistic Paradigm"], resonance_prompt: "Beyond a financial number, how has the feeling or reality of debt influenced your major life choices?" },
                { term: "debt-money", explanations: { headline: "Interest-Bearing Debt-Money", summary: "The core design flaw: virtually all money is created by private banks as interest-bearing debt." }, flux_connections: ["Governance Paradigm", "Justice Paradigm"], resonance_prompt: "If money is created with debt, where does the money to pay the interest come from? What does that imply for society?" },
                { term: "interest", explanations: { headline: "The Extraction Engine", summary: "The 'something for nothing' charge that powers wealth extraction and necessitates exponential growth." }, flux_connections: ["Inequality", "Financialization"], resonance_prompt: "Consider your mortgage, credit card, or student loan. How much of your life's energy is spent working to pay interest?" },
                { term: "usury", explanations: { headline: "The Ancient Poison", summary: "The ancient term for lending money at interest, rebranded as 'progress' to create the modern system." }, flux_connections: ["Moral Compromise", "Historical Roots"], resonance_prompt: "Why was this practice once considered a severe sin, and what changed to make it the foundation of our world?" },
                { term: "financialization", explanations: { headline: "The Casino Economy", summary: "The process of turning every aspect of the real economy (housing, food) into a speculative asset." }, flux_connections: ["Food Paradigm", "Healthcare Paradigm", "Housing"], resonance_prompt: "Where have you seen a basic human need in your community turned into a vehicle for financial speculation?" },
                { term: "inflation", explanations: { headline: "Systemic Currency Debasement", summary: "A hidden tax used to manage unpayable debt levels by devaluing the currency and eroding savings." }, flux_connections: ["Poverty as Punishment", "Retirement"], resonance_prompt: "Have your wages or savings kept pace with the rising cost of essentials like housing, food, and education?" },
                { term: "inequality", explanations: { headline: "A Feature, Not a Bug", summary: "The guaranteed mathematical outcome of a system where interest funnels wealth from debtors to creditors." }, systemDefense: "Framed as a natural outcome of 'meritocracy,' ignoring how the system's rules guarantee wealth concentration.", flux_connections: ["Society Paradigm", "Justice Paradigm", "Governance Paradigm"], resonance_prompt: "Where do you see the gap between the wealthy and the poor manifest most clearly in your daily life or community?" }
            ]
        },
        institutional: {
            name: "Institutional Capture",
            isSurgical: false,
            words: [
                { terms: ["Federal Reserve", "The Fed", "central bank"], primaryTerm: "Federal Reserve", explanations: { headline: "The Creditors' Cartel", summary: "A private banking cartel that manages the stability and profitability of the debt-based system." }, flux_connections: ["Governance Paradigm", "Debt-Money"], resonance_prompt: "Does an institution that is owned by private banks have the public's best interest as its primary goal?" },
                { term: "lobbying", explanations: { headline: "Systemic Bribery", summary: "The mechanism through which concentrated wealth captures the political process to protect the system." }, flux_connections: ["Governance Paradigm", "Justice Paradigm", "Media Paradigm"], resonance_prompt: "When you see a policy that harms the public but benefits a specific industry, do you suspect this mechanism is at play?" },
                { term: "technocracy", explanations: { headline: "The Rule of 'Experts'", summary: "The ideology that the system is too complex for democratic control, shielding it from debate." }, systemDefense: "The 'Appeal to Complexity' used to disempower public debate and protect the core engine from scrutiny.", flux_connections: ["Education Paradigm", "Governance Paradigm"], resonance_prompt: "Have you ever felt that a major societal issue was framed as too 'technical' for you to have a valid opinion on it?" },
                { term: "GDP", explanations: { headline: "Gross Destruction Product", summary: "A flawed metric where pollution and prisons count as economic positives, revealing the system's perverse values." }, flux_connections: ["Environment Paradigm", "Humanistic Paradigm"], resonance_prompt: "What important aspects of your life (family time, clean air, community) are treated as worthless by this primary metric of 'progress'?" }
            ]
        },
        societal: {
            name: "Societal Narratives",
            isSurgical: false,
            words: [
                { term: "the economy", explanations: { headline: "The Abstraction We Serve", summary: "A concept we are told we must serve, inverting the reality that an economy should serve human well-being." }, flux_connections: ["Humanistic Paradigm", "Work Paradigm"], resonance_prompt: "How often do you hear 'it's for the good of the economy' used to justify actions that seem to harm people or the planet?" },
                { term: "meritocracy", explanations: { headline: "The Noble Lie", summary: "The myth used to justify inequality by ignoring the system's rigged starting positions and the pull of debt." }, systemDefense: "A powerful tool for blaming the victims of the 'Competition Trap' for their own struggles.", flux_connections: ["Education Paradigm", "Society Paradigm", "Inequality"], resonance_prompt: "Does the idea of pure meritocracy hold up when you consider the impact of inherited wealth or crushing student debt?" },
                { terms: ["jobs", "job creation"], primaryTerm: "jobs", explanations: { headline: "A Means of Debt Servitude", summary: "For many, the necessary act of selling one's time to service the debts required to live in the system." }, flux_connections: ["Work Paradigm", "Debt", "Humanistic Paradigm"], resonance_prompt: "In your own career, have you felt the pressure to choose a path for financial security over one of personal meaning?" },
                { term: "media", explanations: { headline: "Manufacturing Consent", summary: "A corporate-owned narrative machine that distracts and divides to protect the economic status quo." }, systemDefense: "Defended under the banner of a 'free press,' ignoring the concentration of ownership by the system's beneficiaries.", flux_connections: ["Media Paradigm", "Governance Paradigm", "Society Paradigm"], resonance_prompt: "When watching the news, do you notice more time spent on divisive social issues than on the mechanics of the financial system?" },
                { term: "conspiracy", explanations: { headline: "The Thought-Terminating Weapon", summary: "A word deployed to ridicule and dismiss any rational analysis of the system's foundational rules." }, systemDefense: "Works by conflating a rational critique of the *rules of the game* with an irrational belief about a secret cabal of *players*.", flux_connections: ["Media Paradigm", "Society Paradigm"], resonance_prompt: "Have you ever hesitated to discuss a systemic issue for fear of being labeled with this term?" }
            ]
        }
    }
};

const state = { isLensActive: true, isDialecticActive: false, isFluxModeActive: false, isResonanceModeActive: false, density: 'standard' };
let flatDictionary = [];
for (const categoryKey in config.dictionary) {
    const category = config.dictionary[categoryKey];
    category.words.forEach(item => {
        flatDictionary.push({ ...item, primaryTerm: item.primaryTerm || item.term, category: categoryKey, isSurgical: category.isSurgical });
    });
}

function main() {
    if (document.getElementById('usurpia-panel-v3-0')) {
        document.getElementById('usurpia-panel-v3-0').remove();
        cleanupHighlights();
        return;
    }
    console.log("Usurpia Lens v3.0 (The Analyst's Toolkit) Activated.");
    injectStyles();
    createControlPanel();
    const popup = createPopup();
    setupPopupEventListeners(popup);
    runAnalysis();
}

function runAnalysis() {
    cleanupHighlights();
    if (state.isLensActive) {
        highlightKeywords();
        createScrollbarMarks();
    }
}

function cleanupHighlights() {
    const highlights = document.querySelectorAll('.usurpia-highlight');
    highlights.forEach(span => {
        const parent = span.parentNode;
        if (parent) {
            parent.replaceChild(document.createTextNode(span.textContent), span);
            parent.normalize();
        }
    });
    const scrollbar = document.getElementById('usurpia-scrollbar-v3-0');
    if (scrollbar) scrollbar.remove();
}

function getActiveTerms() {
    if (state.density === 'surgical') {
        return flatDictionary.filter(item => item.isSurgical);
    }
    return flatDictionary;
}

function highlightKeywords() {
    const activeTermEntries = getActiveTerms();
    const allTermStrings = activeTermEntries.flatMap(d => d.terms || [d.term]);
    if (allTermStrings.length === 0) return;

    const masterRegex = new RegExp(`\\b(${allTermStrings.join('|')})\\b`, 'gi');
    const maxHighlights = config.settings.densityLevels[state.density];
    let highlightCount = 0;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: n => (n.parentElement.closest('script, style, textarea, input, select, a, .usurpia-highlight, #usurpia-popup-v3-0, #usurpia-panel-v3-0')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });

    let nodesToProcess = [];
    while(walker.nextNode()) nodesToProcess.push(walker.currentNode);

    for (const node of nodesToProcess) {
        if (highlightCount >= maxHighlights) break;
        const matches = [...node.nodeValue.matchAll(masterRegex)];
        if (matches.length === 0) continue;

        const fragment = document.createDocumentFragment();
        let lastIndex = 0;

        for (const match of matches) {
            if (highlightCount >= maxHighlights) break;
            
            const matchedText = match[0];
            const offset = match.index;
            const entry = activeTermEntries.find(d => (d.terms || [d.term]).some(t => t.toLowerCase() === matchedText.toLowerCase()));

            if(entry) {
                if (lastIndex !== offset) fragment.appendChild(document.createTextNode(node.nodeValue.substring(lastIndex, offset)));
                const span = document.createElement('span');
                span.className = 'usurpia-highlight';
                span.setAttribute('data-term', entry.primaryTerm);
                span.textContent = matchedText;
                fragment.appendChild(span);
                lastIndex = offset + matchedText.length;
                highlightCount++;
            }
        }
        if (lastIndex > 0) {
            if (lastIndex < node.nodeValue.length) fragment.appendChild(document.createTextNode(node.nodeValue.substring(lastIndex)));
            if(node.parentNode) node.parentNode.replaceChild(fragment, node);
        }
    }
}

function injectStyles() {
    let style = document.getElementById('usurpia-styles-v3-0');
    if (style) return;
    style = document.createElement('style');
    style.id = 'usurpia-styles-v3-0';
    style.innerHTML = `
        .usurpia-highlight { background-color: #FFFF99 !important; color: #000 !important; cursor: help; padding: 1px 2px; border-radius: 3px; }
        #usurpia-popup-v3-0 { position: fixed; display: none; width: 320px; max-width: 90%; background-color: #fff; color: #111; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 15px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; z-index: 2147483647; text-align: left; }
        #usurpia-popup-v3-0 p { margin: 0 0 12px 0; padding: 0; }
        #usurpia-popup-v3-0 .usurpia-popup-section { border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px; }
        #usurpia-popup-v3-0 .usurpia-popup-section strong { display: block; margin-bottom: 5px; font-size: 13px; }
        #usurpia-popup-v3-0 .usurpia-defense strong { color: #c0392b; }
        #usurpia-popup-v3-0 .usurpia-flux strong { color: #2980b9; }
        #usurpia-popup-v3-0 .usurpia-flux-list { list-style-type: '→ '; font-size: 13px; padding-left: 20px; margin: 0; color: #34495e; }
        #usurpia-popup-v3-0 .usurpia-resonance { font-style: italic; color: #2c3e50; font-size: 13px; }
        #usurpia-popup-v3-0 .usurpia-resonance strong { color: #8e44ad; }
        #usurpia-popup-v3-0 .usurpia-links { border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px; }
        #usurpia-popup-v3-0 .usurpia-links a { display: block; color: #007bff !important; text-decoration: underline !important; margin-top: 5px; font-size: 13px; }
        #usurpia-popup-v3-0 .usurpia-links a.usurpia-link-paid { font-weight: bold; color: #0056b3 !important; }
        #usurpia-panel-v3-0 { position: fixed; bottom: 20px; left: 20px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 2147483646; padding: 10px 15px; font-family: sans-serif; font-size: 13px; color: #212529; min-width: 240px; }
        #usurpia-panel-v3-0-header { padding: 8px 0; cursor: move; text-align: center; font-weight: bold; font-size: 14px; border-bottom: 1px solid #dee2e6; margin-bottom: 10px; user-select: none; }
        #usurpia-panel-v3-0 .usurpia-control-group { margin-top: 12px; }
        #usurpia-panel-v3-0 label { display: block; margin-bottom: 6px; font-weight: bold; }
        #usurpia-panel-v3-0 .usurpia-density-control button { background: #e9ecef; border: 1px solid #ced4da; padding: 6px 10px; cursor: pointer; flex-grow: 1; }
        #usurpia-panel-v3-0 .usurpia-density-control button.active { background: #007bff; color: white; border-color: #007bff; font-weight: bold; }
        #usurpia-panel-v3-0 .usurpia-density-control { display: flex; }
        #usurpia-panel-v3-0 .usurpia-density-control button:first-child { border-radius: 4px 0 0 4px; }
        #usurpia-panel-v3-0 .usurpia-density-control button:last-child { border-radius: 0 4px 4px 0; }
        #usurpia-panel-v3-0 .usurpia-toggle-switch { display: flex; align-items: center; justify-content: space-between; }
        #usurpia-scrollbar-v3-0 { position: fixed; top: 0; right: 0; width: 10px; height: 100%; z-index: 2147483645; }
        .usurpia-scrollbar-mark { position: absolute; right: 0; width: 10px; height: 3px; background: #FF4500; opacity: 0.6; cursor: pointer; }
    `;
    document.head.appendChild(style);
}

function createControlPanel() {
    const panel = document.createElement('div');
    panel.id = 'usurpia-panel-v3-0';
    panel.innerHTML = `
        <div id="usurpia-panel-v3-0-header">Usurpia Lens v3.0</div>
        <div class="usurpia-toggle-switch">
            <label for="usurpia-master-toggle" style="margin-bottom:0;">Lens Enabled</label>
            <input type="checkbox" id="usurpia-master-toggle" checked>
        </div>
        <div class="usurpia-control-group">
            <label>Density</label>
            <div class="usurpia-density-control">
                <button data-density="surgical" title="Highlights only Core Engine terms.">Surgical</button>
                <button data-density="standard" class="active" title="A balanced scan for all defined terms.">Standard</button>
                <button data-density="deepscan" title="An extensive scan for all defined terms.">Deep Scan</button>
            </div>
        </div>
        <div class="usurpia-control-group">
            <div class="usurpia-toggle-switch">
                <label for="usurpia-dialectic-mode" title="Show the system's common counter-arguments." style="margin-bottom:0;">Dialectic Mode</label>
                <input type="checkbox" id="usurpia-dialectic-mode">
            </div>
        </div>
        <div class="usurpia-control-group">
            <div class="usurpia-toggle-switch">
                <label for="usurpia-flux-mode" title="Show how this concept connects to other parts of the system." style="margin-bottom:0;">Flux Mode</label>
                <input type="checkbox" id="usurpia-flux-mode">
            </div>
        </div>
        <div class="usurpia-control-group">
            <div class="usurpia-toggle-switch">
                <label for="usurpia-resonance-mode" title="Pose a question to connect this concept to personal experience." style="margin-bottom:0;">Resonance Mode</label>
                <input type="checkbox" id="usurpia-resonance-mode">
            </div>
        </div>
    `;
    document.body.appendChild(panel);
    setupPanelEventListeners(panel);
    makeDraggable(panel);
}

function setupPanelEventListeners(panel) {
    document.getElementById('usurpia-master-toggle').addEventListener('change', (e) => { state.isLensActive = e.target.checked; runAnalysis(); });
    document.getElementById('usurpia-dialectic-mode').addEventListener('change', (e) => { state.isDialecticActive = e.target.checked; });
    document.getElementById('usurpia-flux-mode').addEventListener('change', (e) => { state.isFluxModeActive = e.target.checked; });
    document.getElementById('usurpia-resonance-mode').addEventListener('change', (e) => { state.isResonanceModeActive = e.target.checked; });
    
    panel.querySelector('.usurpia-density-control').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            panel.querySelector('.usurpia-density-control .active').classList.remove('active');
            e.target.classList.add('active');
            state.density = e.target.dataset.density;
            runAnalysis();
        }
    });
}

function createPopup() {
    let popup = document.createElement('div');
    popup.id = 'usurpia-popup-v3-0';
    document.body.appendChild(popup);
    return popup;
}

function setupPopupEventListeners(popup) {
    let hideTimer;
    document.body.addEventListener('mouseover', e => {
        if (e.target.classList.contains('usurpia-highlight')) {
            clearTimeout(hideTimer);
            const primaryTerm = e.target.getAttribute('data-term');
            const wordData = flatDictionary.find(w => w.primaryTerm === primaryTerm);
            if (wordData) {
                let popupHTML = `<p><strong>${wordData.explanations.headline}:</strong> ${wordData.explanations.summary}</p>`;
                
                if (state.isDialecticActive && wordData.systemDefense) {
                    popupHTML += `<div class="usurpia-popup-section usurpia-defense"><strong>System Defense:</strong> ${wordData.systemDefense}</div>`;
                }
                if (state.isFluxModeActive && wordData.flux_connections && wordData.flux_connections.length > 0) {
                    popupHTML += `<div class="usurpia-popup-section usurpia-flux"><strong>Flux Connections:</strong><ul class="usurpia-flux-list">`;
                    wordData.flux_connections.forEach(conn => { popupHTML += `<li>${conn}</li>`; });
                    popupHTML += `</ul></div>`;
                }
                if (state.isResonanceModeActive && wordData.resonance_prompt) {
                    popupHTML += `<div class="usurpia-popup-section usurpia-resonance"><strong>Personal Resonance:</strong> ${wordData.resonance_prompt}</div>`;
                }

                popupHTML += `
                    <div class="usurpia-links">
                        <a href="${config.settings.links.free}" target="_blank">Get The Full Lens (Free Option)</a>
                        <a href="${config.settings.links.paid}" target="_blank" class="usurpia-link-paid">Become an Ambassador</a>
                    </div>`;
                popup.innerHTML = popupHTML;
                popup.style.display = 'block';
                positionPopup(e, popup);
            }
        }
    });
    document.body.addEventListener('mouseout', e => { if (e.target.classList.contains('usurpia-highlight')) { hideTimer = setTimeout(() => { popup.style.display = 'none'; }, 200); }});
    popup.addEventListener('mouseenter', () => { clearTimeout(hideTimer); });
    popup.addEventListener('mouseleave', () => { popup.style.display = 'none'; });
}

function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = document.getElementById('usurpia-panel-v3-0-header');
    if (header) header.onmousedown = dragMouseDown;
    function dragMouseDown(e) { 
        e = e || window.event; e.preventDefault(); 
        pos3 = e.clientX; pos4 = e.clientY;
        element.style.top = `${element.offsetTop}px`;
        element.style.bottom = 'auto';
        document.onmouseup = closeDragElement; document.onmousemove = elementDrag; 
    }
    function elementDrag(e) { 
        e = e || window.event; e.preventDefault(); 
        pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY; 
        pos3 = e.clientX; pos4 = e.clientY; 
        element.style.top = (element.offsetTop - pos2) + "px"; 
        element.style.left = (element.offsetLeft - pos1) + "px"; 
    }
    function closeDragElement() { document.onmouseup = null; document.onmousemove = null; }
}

function createScrollbarMarks() {
    const scrollbar = document.createElement('div');
    scrollbar.id = 'usurpia-scrollbar-v3-0';
    document.body.appendChild(scrollbar);
    const highlights = document.querySelectorAll('.usurpia-highlight');
    if (highlights.length === 0) return;
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    highlights.forEach(highlight => {
        const rect = highlight.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const relativePosition = ((rect.top + scrollTop) / docHeight) * 100;
        const mark = document.createElement('div');
        mark.className = 'usurpia-scrollbar-mark';
        mark.style.top = `${relativePosition}%`;
        mark.title = `Jump to "${highlight.textContent}"`;
        mark.addEventListener('click', () => { highlight.scrollIntoView({ behavior: 'smooth', block: 'center' }); });
        scrollbar.appendChild(mark);
    });
}

function positionPopup(event, popup) {
    let x = event.clientX + 15, y = event.clientY + 15;
    const popupWidth = popup.offsetWidth, popupHeight = popup.offsetHeight;
    if (x + popupWidth > window.innerWidth) x = event.clientX - popupWidth - 15;
    if (y + popupHeight > window.innerHeight) y = event.clientY - popupHeight - 15;
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
}

main();

})();
