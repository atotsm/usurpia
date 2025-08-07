// Usurpia Lens v2.7 - The "Precision Engine" Model
// Solves the "Surgical" mode logic by adding a priority system and restores the critical user-pathway links in the popup.

javascript:(function() {

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
                isSurgical: true, // This entire category is considered high-priority
                words: [
                    { terms: ["economic growth", "growth"], primaryTerm: "economic growth", explanations: { headline: "Mandatory Expansion", summary: "The system's core imperative to expand exponentially to service interest on past debt." } },
                    { terms: ["debt", "indebtedness"], primaryTerm: "debt", explanations: { headline: "The Tool of Control", summary: "The primary mechanism for control and wealth transfer. Perpetual indebtedness ensures compliance and participation in the 'Competition Trap'." } },
                    { term: "debt-money", explanations: { headline: "Interest-Bearing Debt-Money", summary: "The core design flaw: virtually all money is created by private banks as interest-bearing debt." } },
                    { term: "interest", explanations: { headline: "The Extraction Engine", summary: "The 'something for nothing' charge that powers wealth extraction and necessitates exponential growth." } },
                    { term: "usury", explanations: { headline: "The Ancient Poison", summary: "The ancient term for lending money at interest, rebranded as 'progress' to create the modern system." } },
                    { term: "financialization", explanations: { headline: "The Casino Economy", summary: "The process of turning every aspect of the real economy (housing, food) into a speculative asset." } },
                    { term: "inflation", explanations: { headline: "Systemic Currency Debasement", summary: "A hidden tax used to manage unpayable debt levels by devaluing the currency and eroding savings." } },
                    { term: "competition trap", explanations: { headline: "Mandated Competition", summary: "The forced state of conflict for survival, caused by the mathematical scarcity in the money system." } },
                    { term: "inequality", explanations: { headline: "A Feature, Not a Bug", summary: "The guaranteed mathematical outcome of a system where interest funnels wealth from debtors to creditors." } }
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
                    { term: "education", explanations: { headline: "The Compliance Engine", summary: "An institution designed to produce compliant workers and indebted consumers, not liberated critical thinkers." } },
                    { term: "media", explanations: { headline: "Manufacturing Consent", summary: "A corporate-owned narrative machine that distracts and divides to protect the economic status quo." } },
                    { term: "conspiracy", explanations: { headline: "The Thought-Terminating Weapon", summary: "A word deployed to ridicule and dismiss any rational analysis of the system's foundational rules." } }
                ]
            },
            personal: {
                name: "Personal Impact",
                isSurgical: false,
                words: [
                    { term: "anxiety", explanations: { headline: "A Rational Response", summary: "The logical psychological state resulting from living in a system of constant precarity and competition." } },
                    { term: "house", explanations: { headline: "A Financialized Human Need", summary: "A basic need for shelter, transformed into the primary vehicle for generational debt and speculation." } },
                    { term: "freedom", explanations: { headline: "The Freedom to Choose Your Creditor", summary: "The redefinition of liberty as consumer choice within a mandatory, inescapable economic game." } }
                ]
            }
        }
    };

    // --- State & Data Preparation ---
    const state = { isLensActive: true, density: 'standard' };
    let flatDictionary = [];
    for (const categoryKey in config.dictionary) {
        const category = config.dictionary[categoryKey];
        category.words.forEach(item => {
            flatDictionary.push({ ...item, primaryTerm: item.primaryTerm || item.term, category: categoryKey, isSurgical: category.isSurgical });
        });
    }

    // --- Core Functions ---
    function main() {
        if (document.getElementById('usurpia-panel-v2-7')) {
            document.getElementById('usurpia-panel-v2-7').remove();
            cleanupHighlights();
            return;
        }
        console.log("Usurpia Lens v2.7 Activated.");
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
        const scrollbar = document.getElementById('usurpia-scrollbar-v2-7');
        if (scrollbar) scrollbar.remove();
    }

    function highlightKeywords() {
        let termsToSearch;
        if (state.density === 'surgical') {
            // PRIORITY LOGIC: "Surgical" mode ONLY looks for high-priority terms.
            termsToSearch = flatDictionary.filter(item => item.isSurgical);
        } else {
            // Standard and Deep Scan use all terms.
            termsToSearch = flatDictionary;
        }

        const allTermStrings = termsToSearch.flatMap(d => d.terms || [d.term]);
        if (allTermStrings.length === 0) return;

        // Use a more robust regex to ensure whole-word matching.
        const masterRegex = new RegExp(`\\b(${allTermStrings.join('|')})\\b`, 'gi');
        const maxHighlights = config.settings.densityLevels[state.density];
        let highlightCount = 0;

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: n => (n.parentElement.closest('script, style, textarea, input, select, a, .usurpia-highlight, #usurpia-popup-v2-7, #usurpia-panel-v2-7')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
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
                const entry = flatDictionary.find(d => (d.terms || [d.term]).some(t => t.toLowerCase() === matchedText.toLowerCase()));

                if(entry) {
                    if (lastIndex !== offset) {
                        fragment.appendChild(document.createTextNode(node.nodeValue.substring(lastIndex, offset)));
                    }
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
                if (lastIndex < node.nodeValue.length) {
                    fragment.appendChild(document.createTextNode(node.nodeValue.substring(lastIndex)));
                }
                node.parentNode.replaceChild(fragment, node);
            }
        }
    }

    // --- UI & Event Listeners ---
    function injectStyles() {
        let style = document.getElementById('usurpia-styles-v2-7');
        if (style) return;
        style = document.createElement('style');
        style.id = 'usurpia-styles-v2-7';
        style.innerHTML = `
            .usurpia-highlight { background-color: #FFFF99 !important; color: #000 !important; cursor: help; padding: 1px 2px; border-radius: 3px; }
            #usurpia-popup-v2-7 { position: fixed; display: none; width: 300px; max-width: 90%; background-color: #fff; color: #111; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 15px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; z-index: 2147483647; text-align: left; }
            #usurpia-popup-v2-7 p { margin: 0 0 12px 0; padding: 0; }
            #usurpia-popup-v2-7 .usurpia-links { border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px; }
            #usurpia-popup-v2-7 .usurpia-links a { display: block; color: #007bff !important; text-decoration: underline !important; margin-top: 5px; }
            #usurpia-popup-v2-7 .usurpia-links a.usurpia-link-paid { font-weight: bold; color: #0056b3 !important; }
            #usurpia-panel-v2-7 { position: fixed; bottom: 20px; right: 20px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 2147483646; padding: 10px 15px; font-family: sans-serif; font-size: 13px; color: #212529; min-width: 220px; }
            #usurpia-panel-v2-7-header { padding-bottom: 8px; cursor: default; text-align: center; font-weight: bold; font-size: 14px; border-bottom: 1px solid #dee2e6; margin-bottom: 10px; user-select: none; }
            #usurpia-panel-v2-7 .usurpia-control-group { margin-top: 12px; }
            #usurpia-panel-v2-7 label { display: block; margin-bottom: 6px; font-weight: 500; }
            #usurpia-panel-v2-7 .usurpia-density-control { display: flex; }
            #usurpia-panel-v2-7 .usurpia-density-control button { background: #e9ecef; border: 1px solid #ced4da; padding: 6px 10px; cursor: pointer; flex-grow: 1; transition: background-color 0.2s; }
            #usurpia-panel-v2-7 .usurpia-density-control button.active { background: #343a40; color: white; border-color: #343a40; font-weight: bold; }
            #usurpia-panel-v2-7 .usurpia-density-control button:first-child { border-radius: 4px 0 0 4px; }
            #usurpia-panel-v2-7 .usurpia-density-control button:last-child { border-radius: 0 4px 4px 0; }
            #usurpia-scrollbar-v2-7 { position: fixed; top: 0; right: 0; width: 10px; height: 100%; z-index: 2147483645; }
            .usurpia-scrollbar-mark { position: absolute; right: 0; width: 10px; height: 3px; background: #FF4500; opacity: 0.6; cursor: pointer; }
        `;
        document.head.appendChild(style);
    }

    function createControlPanel() {
        const panel = document.createElement('div');
        panel.id = 'usurpia-panel-v2-7';
        panel.innerHTML = `
            <div id="usurpia-panel-v2-7-header">Usurpia Lens v2.7</div>
            <div class="usurpia-control-group">
                <label>Analysis Density</label>
                <div class="usurpia-density-control">
                    <button data-density="surgical" title="Highlights only core engine terms like 'debt' and 'interest'.">Surgical</button>
                    <button data-density="standard" class="active" title="A balanced scan of all term categories.">Standard</button>
                    <button data-density="deepscan" title="An extensive scan for maximum term discovery.">Deep Scan</button>
                </div>
            </div>
        `;
        document.body.appendChild(panel);
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
        popup.id = 'usurpia-popup-v2-7';
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
                    popup.innerHTML = `
                        <p><strong>${wordData.explanations.headline}:</strong> ${wordData.explanations.summary}</p>
                        <div class="usurpia-links">
                            <a href="${config.settings.links.free}" target="_blank">Get The Full Lens (Free Option)</a>
                            <a href="${config.settings.links.paid}" target="_blank" class="usurpia-link-paid">Become an Ambassador</a>
                        </div>
                    `;
                    popup.style.display = 'block';
                    positionPopup(e, popup);
                }
            }
        });
        document.body.addEventListener('mouseout', e => { if (e.target.classList.contains('usurpia-highlight')) { hideTimer = setTimeout(() => { popup.style.display = 'none'; }, 200); }});
        popup.addEventListener('mouseenter', () => { clearTimeout(hideTimer); });
        popup.addEventListener('mouseleave', () => { popup.style.display = 'none'; });
    }
    
    // Utility functions for scrollbar and positioning
    function createScrollbarMarks() {
        const scrollbar = document.createElement('div');
        scrollbar.id = 'usurpia-scrollbar-v2-7';
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

    // --- Start the Engine ---
    main();

})();
