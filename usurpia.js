javascript:(function() {
// Usurpia Lens v2.9 (MVP Focus)
// Simplifies the tool by removing the "Analysis Mode" feature. The lens now performs a full-spectrum
// scan by default, with "Density" as the primary control. This aligns with a Minimum Viable Product strategy.

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
            isSurgical: true, // This category is high-priority
            words: [
                { terms: ["economic growth", "growth"], primaryTerm: "economic growth", explanations: { headline: "Mandatory Expansion", summary: "The system's core imperative to expand exponentially to service interest on past debt." }, systemDefense: "Dismissed as 'anti-progress.' This is the Solution Fallacy, demanding a perfect alternative before a diagnosis is considered valid." },
                { terms: ["debt", "indebtedness"], primaryTerm: "debt", explanations: { headline: "The Tool of Control", summary: "The primary mechanism for control and wealth transfer. Perpetual indebtedness ensures compliance and participation in the 'Competition Trap'." }, systemDefense: "Normalized as a 'fact of life' or a 'tool for investment,' obscuring its function as a mechanism of control." },
                { term: "debt-money", explanations: { headline: "Interest-Bearing Debt-Money", summary: "The core design flaw: virtually all money is created by private banks as interest-bearing debt." } },
                { term: "interest", explanations: { headline: "The Extraction Engine", summary: "The 'something for nothing' charge that powers wealth extraction and necessitates exponential growth." } },
                { term: "usury", explanations: { headline: "The Ancient Poison", summary: "The ancient term for lending money at interest, rebranded as 'progress' to create the modern system." } },
                { term: "financialization", explanations: { headline: "The Casino Economy", summary: "The process of turning every aspect of the real economy (housing, food) into a speculative asset." } },
                { term: "inflation", explanations: { headline: "Systemic Currency Debasement", summary: "A hidden tax used to manage unpayable debt levels by devaluing the currency and eroding savings." } },
                { term: "inequality", explanations: { headline: "A Feature, Not a Bug", summary: "The guaranteed mathematical outcome of a system where interest funnels wealth from debtors to creditors." }, systemDefense: "Framed as a natural outcome of 'meritocracy,' ignoring how the system's rules guarantee wealth concentration." }
            ]
        },
        institutional: {
            name: "Institutional Capture",
            isSurgical: false,
            words: [
                { terms: ["Federal Reserve", "The Fed", "central bank"], primaryTerm: "Federal Reserve", explanations: { headline: "The Creditors' Cartel", summary: "A private banking cartel that manages the stability and profitability of the debt-based system." } },
                { term: "lobbying", explanations: { headline: "Systemic Bribery", summary: "The mechanism through which concentrated wealth captures the political process to protect the system." } },
                { term: "technocracy", explanations: { headline: "The Rule of 'Experts'", summary: "The ideology that the system is too complex for democratic control, shielding it from debate." } },
                { term: "GDP", explanations: { headline: "Gross Destruction Product", summary: "A flawed metric where pollution and prisons count as economic positives, revealing the system's perverse values." } }
            ]
        },
        societal: {
            name: "Societal Narratives",
            isSurgical: false,
            words: [
                { term: "the economy", explanations: { headline: "The Abstraction We Serve", summary: "A concept we are told we must serve, inverting the reality that an economy should serve human well-being." } },
                { term: "meritocracy", explanations: { headline: "The Noble Lie", summary: "The myth used to justify inequality by ignoring the system's rigged starting positions and the pull of debt." } },
                { terms: ["jobs", "job creation"], primaryTerm: "jobs", explanations: { headline: "A Means of Debt Servitude", summary: "For many, the necessary act of selling one's time to service the debts required to live in the system." } },
                { term: "media", explanations: { headline: "Manufacturing Consent", summary: "A corporate-owned narrative machine that distracts and divides to protect the economic status quo." }, systemDefense: "Defended under the banner of a 'free press,' ignoring the concentration of ownership by the system's beneficiaries." },
                { term: "conspiracy", explanations: { headline: "The Thought-Terminating Weapon", summary: "A word deployed to ridicule and dismiss any rational analysis of the system's foundational rules." }, systemDefense: "Works by conflating a rational critique of the *rules of the game* with an irrational belief about a secret cabal of *players*." }
            ]
        }
    }
};

const state = { isLensActive: true, isDialecticActive: false, density: 'standard' };
let flatDictionary = [];
for (const categoryKey in config.dictionary) {
    const category = config.dictionary[categoryKey];
    category.words.forEach(item => {
        flatDictionary.push({ ...item, primaryTerm: item.primaryTerm || item.term, category: categoryKey, isSurgical: category.isSurgical });
    });
}

function main() {
    if (document.getElementById('usurpia-panel-v2-9')) {
        document.getElementById('usurpia-panel-v2-9').remove();
        cleanupHighlights();
        return;
    }
    console.log("Usurpia Lens v2.9 (MVP Focus) Activated.");
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
    const scrollbar = document.getElementById('usurpia-scrollbar-v2-9');
    if (scrollbar) scrollbar.remove();
}

function getActiveTerms() {
    if (state.density === 'surgical') {
        return flatDictionary.filter(item => item.isSurgical);
    }
    // If not 'surgical', all defined terms in the dictionary are now active by default.
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
        acceptNode: n => (n.parentElement.closest('script, style, textarea, input, select, a, .usurpia-highlight, #usurpia-popup-v2-9, #usurpia-panel-v2-9')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
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
    let style = document.getElementById('usurpia-styles-v2-9');
    if (style) return;
    style = document.createElement('style');
    style.id = 'usurpia-styles-v2-9';
    style.innerHTML = `
        .usurpia-highlight { background-color: #FFFF99 !important; color: #000 !important; cursor: help; padding: 1px 2px; border-radius: 3px; }
        #usurpia-popup-v2-9 { position: fixed; display: none; width: 300px; max-width: 90%; background-color: #fff; color: #111; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 15px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; z-index: 2147483647; text-align: left; }
        #usurpia-popup-v2-9 p { margin: 0 0 12px 0; padding: 0; }
        #usurpia-popup-v2-9 .usurpia-defense { border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px; font-size: 13px; color: #444; }
        #usurpia-popup-v2-9 .usurpia-defense strong { color: #c0392b; }
        #usurpia-popup-v2-9 .usurpia-links { border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px; }
        #usurpia-popup-v2-9 .usurpia-links a { display: block; color: #007bff !important; text-decoration: underline !important; margin-top: 5px; font-size: 13px; }
        #usurpia-popup-v2-9 .usurpia-links a.usurpia-link-paid { font-weight: bold; color: #0056b3 !important; }
        #usurpia-panel-v2-9 { position: fixed; bottom: 20px; left: 20px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 2147483646; padding: 10px 15px; font-family: sans-serif; font-size: 13px; color: #212529; min-width: 240px; }
        #usurpia-panel-v2-9-header { padding: 8px 0; cursor: move; text-align: center; font-weight: bold; font-size: 14px; border-bottom: 1px solid #dee2e6; margin-bottom: 10px; user-select: none; }
        #usurpia-panel-v2-9 .usurpia-control-group { margin-top: 12px; }
        #usurpia-panel-v2-9 label { display: block; margin-bottom: 6px; font-weight: bold; }
        #usurpia-panel-v2-9 .usurpia-density-control button { background: #e9ecef; border: 1px solid #ced4da; padding: 6px 10px; cursor: pointer; flex-grow: 1; }
        #usurpia-panel-v2-9 .usurpia-density-control button.active { background: #007bff; color: white; border-color: #007bff; font-weight: bold; }
        #usurpia-panel-v2-9 .usurpia-density-control { display: flex; }
        #usurpia-panel-v2-9 .usurpia-density-control button:first-child { border-radius: 4px 0 0 4px; }
        #usurpia-panel-v2-9 .usurpia-density-control button:last-child { border-radius: 0 4px 4px 0; }
        #usurpia-panel-v2-9 .usurpia-toggle-switch { display: flex; align-items: center; justify-content: space-between; }
        #usurpia-scrollbar-v2-9 { position: fixed; top: 0; right: 0; width: 10px; height: 100%; z-index: 2147483645; }
        .usurpia-scrollbar-mark { position: absolute; right: 0; width: 10px; height: 3px; background: #FF4500; opacity: 0.6; cursor: pointer; }
    `;
    document.head.appendChild(style);
}

function createControlPanel() {
    const panel = document.createElement('div');
    panel.id = 'usurpia-panel-v2-9';
    panel.innerHTML = `
        <div id="usurpia-panel-v2-9-header">Usurpia Lens v2.9</div>
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
                <label for="usurpia-dialectic-mode" title="Show the system's common counter-arguments in the popup." style="margin-bottom:0;">Dialectic Mode</label>
                <input type="checkbox" id="usurpia-dialectic-mode">
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
    popup.id = 'usurpia-popup-v2-9';
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
                    popupHTML += `<div class="usurpia-defense"><strong>System Defense:</strong> ${wordData.systemDefense}</div>`;
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
    const header = document.getElementById('usurpia-panel-v2-9-header');
    if (header) header.onmousedown = dragMouseDown;
    function dragMouseDown(e) { 
        e = e || window.event; 
        e.preventDefault(); 
        pos3 = e.clientX; 
        pos4 = e.clientY;
        element.style.top = `${element.offsetTop}px`;
        element.style.bottom = 'auto';
        document.onmouseup = closeDragElement; 
        document.onmousemove = elementDrag; 
    }
    function elementDrag(e) { 
        e = e || window.event; 
        e.preventDefault(); 
        pos1 = pos3 - e.clientX; 
        pos2 = pos4 - e.clientY; 
        pos3 = e.clientX; 
        pos4 = e.clientY; 
        element.style.top = (element.offsetTop - pos2) + "px"; 
        element.style.left = (element.offsetLeft - pos1) + "px"; 
    }
    function closeDragElement() { 
        document.onmouseup = null; 
        document.onmousemove = null; 
    }
}

function createScrollbarMarks() {
    const scrollbar = document.createElement('div');
    scrollbar.id = 'usurpia-scrollbar-v2-9';
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
