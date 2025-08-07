javascript:(function() {

    // Usurpia Lens v2.7 - The Focused Analysis Engine
    // This version implements a unified "Analysis Depth" control for true surgical precision
    // and removes unnecessary complexity based on user feedback.

    // --- CONFIGURATION & DICTIONARY ---
    const config = {
        dictionary: [
            // Level 1: The absolute core engine. These are the "Surgical" terms.
            { level: 1, terms: ["economic growth", "growth", "growing pie"], primaryTerm: "economic growth", explanations: { headline: "Mandatory Expansion", summary: "The system's core imperative to expand exponentially, chaining a mathematical function to a finite planet, which guarantees a future collision." } },
            { level: 1, terms: ["debt", "indebtedness"], primaryTerm: "debt", explanations: { headline: "The Tool of Control", summary: "Presented as a tool for commerce, its primary function is control. Perpetual indebtedness ensures compliance and transfers power." } },
            { level: 1, term: "interest", explanations: { headline: "The Extraction Engine", summary: "The 'something for nothing' charge that powers wealth extraction and mathematically necessitates 'Mandatory Expansion'." } },
            { level: 1, term: "competition trap", explanations: { headline: "Mandated Competition", summary: "The forced state of conflict for survival, caused by the mathematical scarcity in the money system (always more debt owed than money exists)." } },
            { level: 1, term: "inequality", explanations: { headline: "A Feature, Not a Bug", summary: "The guaranteed mathematical outcome of a system where compounding interest systemically funnels wealth from debtors to creditors." } },

            // Level 2: Institutional and major societal mechanisms. Added in "Standard" mode.
            { level: 2, terms: ["Federal Reserve", "The Fed", "central bank"], primaryTerm: "Federal Reserve", explanations: { headline: "The Creditors' Cartel", summary: "A private banking cartel whose primary function is to manage the stability and profitability of the debt-based system for its member banks." } },
            { level: 2, term: "lobbying", explanations: { headline: "Systemic Bribery", summary: "The mechanism through which concentrated wealth captures the political process, ensuring laws protect and enhance the system." } },
            { level: 2, term: "GDP", explanations: { headline: "Gross Destruction Product", summary: "A flawed metric where pollution and clear-cutting a forest are counted as economic positives, revealing the system's perverse values." } },
            { level:2, term: "financialization", explanations: { headline: "The Casino Economy", summary: "The process of turning every aspect of the real economy (housing, food, health) into a speculative, debt-based asset." } },
            { level: 2, term: "inflation", explanations: { headline: "Systemic Currency Debasement", summary: "A hidden tax used to manage unpayable debt levels by devaluing the currency, eroding the savings of the populace." } },
            { level: 2, term: "media", explanations: { headline: "Manufacturing Consent", summary: "A corporate-owned narrative machine that distracts and divides to prevent questioning of the foundational economic system." } },
            { level: 2, terms: ["jobs", "job creation"], primaryTerm: "jobs", explanations: { headline: "A Means of Debt Servitude", summary: "For the majority, the necessary act of selling one's time to service the debts required to live in the system." } },
            { level: 2, term: "education", explanations: { headline: "The Compliance Engine", summary: "A system often geared toward producing compliant workers and indebted consumers, rather than liberated, critical thinkers." } },

            // Level 3: Personal, psychological, and deeper societal impacts. Added in "Deep Scan" mode.
            { level: 3, term: "anxiety", explanations: { headline: "A Rational Response", summary: "The logical psychological state that results from living in a system of constant precarity, mandated competition, and information overload." } },
            { level: 3, term: "community", explanations: { headline: "The Eroded Commons", summary: "The web of local trust and mutual support that is systemically dissolved by the 'Competition Trap,' which pits neighbors against each other." } },
            { level: 3, term: "house", explanations: { headline: "A Financialized Human Need", summary: "A basic need for shelter, transformed by financialization into the primary vehicle for generational debt and a speculative asset." } },
            { level: 3, term: "freedom", explanations: { headline: "The Freedom to Choose Your Creditor", summary: "The system's redefinition of liberty as consumer 'choice' between different brands of jobs, debts, and distractions." } },
            { level: 3, term: "meritocracy", explanations: { headline: "The Noble Lie", summary: "The core myth used to justify inequality, ignoring the system's rigged starting positions and the gravitational pull of debt." } },
            { level: 3, term: "conspiracy", explanations: { headline: "The Thought-Terminating Weapon", summary: "A word deployed to ridicule and dismiss any rational analysis of the system's foundational rules, conflating systemic critique with paranoia." } }
        ].map(item => ({ ...item, primaryTerm: item.primaryTerm || item.term }))
    };

    const state = { isLensActive: true, analysisDepth: 'standard' };

    function main() {
        if (document.getElementById('usurpia-panel-v2-7')) {
            const panel = document.getElementById('usurpia-panel-v2-7');
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
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
        document.querySelectorAll('.usurpia-highlight').forEach(span => {
            const parent = span.parentNode;
            if (parent) {
                parent.replaceChild(document.createTextNode(span.textContent), span);
                parent.normalize();
            }
        });
        const scrollbar = document.getElementById('usurpia-scrollbar-v2-7');
        if (scrollbar) scrollbar.remove();
    }

    function injectStyles() {
        let style = document.getElementById('usurpia-styles-v2-7');
        if (style) return;
        style = document.createElement('style');
        style.id = 'usurpia-styles-v2-7';
        style.innerHTML = `
            .usurpia-highlight { background-color: #FFFF99 !important; color: #000 !important; cursor: help; padding: 1px 2px; border-radius: 3px; }
            #usurpia-popup-v2-7 { position: fixed; display: none; width: 300px; max-width: 90%; background-color: #fff; color: #111; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 15px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; z-index: 2147483647; text-align: left; }
            #usurpia-popup-v2-7 p { margin: 0 0 12px 0; padding: 0; }
            #usurpia-panel-v2-7 { position: fixed; bottom: 20px; left: 20px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 2147483646; padding: 10px 15px; font-family: sans-serif; font-size: 13px; color: #212529; min-width: 260px; }
            #usurpia-panel-v2-7-header { padding: 8px 0; cursor: move; text-align: center; font-weight: bold; font-size: 14px; border-bottom: 1px solid #dee2e6; margin-bottom: 10px; user-select: none; }
            #usurpia-panel-v2-7 label { display: block; margin-bottom: 6px; font-weight: bold; }
            #usurpia-panel-v2-7 .usurpia-depth-control button { background: #e9ecef; border: 1px solid #ced4da; padding: 8px 10px; cursor: pointer; flex-grow: 1; }
            #usurpia-panel-v2-7 .usurpia-depth-control button.active { background: #007bff; color: white; border-color: #007bff; font-weight: bold; }
            #usurpia-panel-v2-7 .usurpia-depth-control { display: flex; }
            #usurpia-panel-v2-7 .usurpia-depth-control button:first-child { border-radius: 4px 0 0 4px; }
            #usurpia-panel-v2-7 .usurpia-depth-control button:last-child { border-radius: 0 4px 4px 0; }
            #usurpia-panel-v2-7 .usurpia-toggle-switch { display: flex; align-items: center; justify-content: space-between; padding: 5px 0;}
            #usurpia-scrollbar-v2-7 { position: fixed; top: 0; right: 0; width: 10px; height: 100%; z-index: 2147483645; }
            .usurpia-scrollbar-mark { position: absolute; right: 0; width: 10px; height: 3px; background: #FF4500; opacity: 0.6; cursor: pointer; }
            .usurpia-scrollbar-mark:hover { opacity: 1; }
        `;
        document.head.appendChild(style);
    }

    function createControlPanel() {
        const panel = document.createElement('div');
        panel.id = 'usurpia-panel-v2-7';
        panel.innerHTML = `
            <div id="usurpia-panel-v2-7-header">Usurpia Lens v2.7</div>
            <div class="usurpia-toggle-switch">
                <label for="usurpia-master-toggle" style="margin-bottom:0;">Lens Enabled</label>
                <input type="checkbox" id="usurpia-master-toggle" checked>
            </div>
            <div class="usurpia-control-group" style="margin-top: 12px;">
                <label>Analysis Depth</label>
                <div class="usurpia-depth-control">
                    <button data-depth="surgical">Surgical</button>
                    <button data-depth="standard" class="active">Standard</button>
                    <button data-depth="deepscan">Deep Scan</button>
                </div>
            </div>
        `;
        document.body.appendChild(panel);
        setupPanelEventListeners(panel);
        makeDraggable(panel);
    }
    
    function setupPanelEventListeners(panel) {
        document.getElementById('usurpia-master-toggle').addEventListener('change', e => { state.isLensActive = e.target.checked; runAnalysis(); });
        panel.querySelector('.usurpia-depth-control').addEventListener('click', e => {
            if (e.target.tagName === 'BUTTON') {
                panel.querySelector('.usurpia-depth-control .active').classList.remove('active');
                e.target.classList.add('active');
                state.analysisDepth = e.target.dataset.depth;
                runAnalysis();
            }
        });
    }

    function makeDraggable(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        const header = document.getElementById('usurpia-panel-v2-7-header');
        if (header) header.onmousedown = dragMouseDown;
        function dragMouseDown(e) { e = e || window.event; e.preventDefault(); pos3 = e.clientX; pos4 = e.clientY; document.onmouseup = closeDragElement; document.onmousemove = elementDrag; }
        function elementDrag(e) { e = e || window.event; e.preventDefault(); pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY; pos3 = e.clientX; pos4 = e.clientY; element.style.top = (element.offsetTop - pos2) + "px"; element.style.left = (element.offsetLeft - pos1) + "px"; }
        function closeDragElement() { document.onmouseup = null; document.onmousemove = null; }
    }

    function createPopup() {
        let popup = document.createElement('div');
        popup.id = 'usurpia-popup-v2-7';
        document.body.appendChild(popup);
        return popup;
    }

    function getActiveTerms() {
        const depthLevels = { surgical: 1, standard: 2, deepscan: 3 };
        const maxLevel = depthLevels[state.analysisDepth];
        return config.dictionary.filter(item => item.level <= maxLevel);
    }

    function highlightKeywords() {
        const activeTermEntries = getActiveTerms();
        const sortedTerms = activeTermEntries.flatMap(d => d.terms || [d.term]).sort((a, b) => b.length - a.length);
        if (sortedTerms.length === 0) return;

        const masterRegex = new RegExp(`\\b(${sortedTerms.map(t => t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})\\b`, 'gi');
        
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: n => (n.parentElement.closest('script, style, textarea, input, select, a, .usurpia-highlight, #usurpia-popup-v2-7, #usurpia-panel-v2-7')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        });

        let nodesToProcess = [];
        while(walker.nextNode()) nodesToProcess.push(walker.currentNode);

        for (const node of nodesToProcess) {
            if (!masterRegex.test(node.nodeValue)) continue;

            const fragment = document.createDocumentFragment();
            let lastIndex = 0;
            node.nodeValue.replace(masterRegex, (match, offset) => {
                const entry = activeTermEntries.find(d => (d.terms || [d.term]).some(t => t.toLowerCase() === match.toLowerCase()));
                if (entry) {
                    if (lastIndex !== offset) fragment.appendChild(document.createTextNode(node.nodeValue.substring(lastIndex, offset)));
                    const span = document.createElement('span');
                    span.className = 'usurpia-highlight';
                    span.setAttribute('data-term', entry.primaryTerm);
                    span.textContent = match;
                    fragment.appendChild(span);
                    lastIndex = offset + match.length;
                }
            });

            if (lastIndex > 0) {
                if (lastIndex < node.nodeValue.length) fragment.appendChild(document.createTextNode(node.nodeValue.substring(lastIndex)));
                node.parentNode.replaceChild(fragment, node);
            }
        }
    }
    
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

    function setupPopupEventListeners(popup) {
        let hideTimer;
        document.body.addEventListener('mouseover', e => {
            if (e.target.classList.contains('usurpia-highlight')) {
                clearTimeout(hideTimer);
                const primaryTerm = e.target.getAttribute('data-term');
                const wordData = config.dictionary.find(w => w.primaryTerm === primaryTerm);
                if (wordData) {
                    popup.innerHTML = `<p><strong>${wordData.explanations.headline}:</strong> ${wordData.explanations.summary}</p>`;
                    popup.style.display = 'block';
                    positionPopup(e, popup);
                }
            }
        });
        document.body.addEventListener('mouseout', e => { if (e.target.classList.contains('usurpia-highlight')) { hideTimer = setTimeout(() => { popup.style.display = 'none'; }, 200); }});
        popup.addEventListener('mouseenter', () => { clearTimeout(hideTimer); });
        popup.addEventListener('mouseleave', () => { popup.style.display = 'none'; });
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
