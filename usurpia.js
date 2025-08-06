// Usurpia Lens Bookmarklet - V2.5 (The "Interactive Analyzer" Model)
// Adds a control panel with on/off toggle, highlight density slider, and category filters.

(function() {

    // --- CONFIGURATION & DICTIONARY ---
    const config = {
        settings: {
            maxHighlights: 15,
            initialState: 'on' // 'on' or 'off'
        },
        dictionary: {
            core: {
                name: "Core Mechanics",
                words: [
                    { terms: ["economic growth", "growth", "growing pie"], primaryTerm: "economic growth", explanations: { headline: "Mandatory Expansion", summary: "The system's core imperative. It must expand exponentially to service the interest on past debt, chaining a mathematical function to a finite planet, which guarantees a future collision." } },
                    { terms: ["debt", "indebtedness"], primaryTerm: "debt", explanations: { headline: "The Tool of Control", summary: "Presented as a tool for commerce, its primary function in this system is control. Perpetual indebtedness ensures compliance, transfers power, and compels participation in the 'Competition Trap'." } },
                    { term: "debt-money", explanations: { headline: "Interest-Bearing Debt-Money", summary: "The core design flaw. Virtually all money is created by private banks when they make loans, meaning the money supply itself is an instrument of debt." } },
                    { term: "interest", explanations: { headline: "The Extraction Engine", summary: "The 'something for nothing' charge that powers wealth extraction from the real economy and mathematically necessitates the 'Mandatory Expansion'." } },
                    { term: "usury", explanations: { headline: "The Ancient Poison", summary: "The ancient term for lending money at interest, which was historically contained as a social poison before being rebranded as 'progress' to create the modern system." } },
                    { term: "financialization", explanations: { headline: "The Casino Economy", summary: "The core process of turning every aspect of the real economy (housing, food, health) into a speculative, debt-based asset, detaching 'value' from reality and subjecting it to the system's extractive logic." } },
                    { term: "inflation", explanations: { headline: "Systemic Currency Debasement", summary: "A necessary feature of the system, used to manage unpayable debt levels by devaluing the currency. This functions as a hidden tax, eroding the savings of the populace to keep the system afloat." } },
                    { term: "competition trap", explanations: { headline: "Mandated Competition", summary: "The forced state of conflict for survival, caused by the mathematical scarcity in the money system (always more debt owed than money exists). It structurally pits individuals and businesses against one another." } },
                    { term: "inequality", explanations: { headline: "A Feature, Not a Bug", summary: "The guaranteed mathematical outcome of a system where compounding interest systemically funnels wealth from debtors (the majority) to creditors (the few)." } },
                    { term: "legal tender", explanations: { headline: "The Mandatory Game", summary: "The law that forces citizens to use the state-sanctioned, debt-based currency to pay taxes and participate in society. This eliminates alternatives and ensures everyone is locked into the system." } }
                ]
            },
            institutional: {
                name: "Institutional Words",
                words: [
                    { terms: ["Federal Reserve", "The Fed", "central bank"], primaryTerm: "Federal Reserve", explanations: { headline: "The Creditors' Cartel", summary: "A private banking cartel with a public mandate. Its primary function is not to serve the public, but to manage the stability and profitability of the debt-based system for its member banks." } },
                    { terms: ["The Treasury", "Treasury Department"], primaryTerm: "The Treasury", explanations: { headline: "The Public Partner", summary: "The government's financial arm that works in lockstep with the central bank. It issues the government bonds which become the foundational collateral for new debt-money creation by the private banking system." } },
                    { terms: ["IMF", "World Bank"], primaryTerm: "IMF", explanations: { headline: "The Global Debt Enforcers", summary: "Institutions that use debt as a neocolonial weapon. They impose austerity and force the privatization of public assets on debtor nations, ensuring resources flow from the global south to the creditor class." } },
                    { terms: ["Wall Street"], primaryTerm: "Wall Street", explanations: { headline: "The System's Command Center", summary: "The symbolic and operational heart of financialization, where the real economy is abstracted into speculative instruments and the system's extracted wealth is concentrated and managed." } },
                    { terms: ["politician", "lawmaker", "government"], primaryTerm: "politician", explanations: { headline: "The System Manager", summary: "An actor in the political theater, primarily tasked with managing public discontent and passing legislation that serves the interests of the system's main beneficiaries (their donors)." } },
                    { term: "lobbying", explanations: { headline: "Systemic Bribery", summary: "The mechanism through which concentrated wealth, generated by the debt-engine, captures the political process. It ensures that laws protect and enhance the system, creating a feedback loop of power." } },
                    { term: "deregulation", explanations: { headline: "Unleashing the Engine", summary: "The process of removing legal and ethical safeguards, allowing the financial engine to operate with greater speed and ruthlessness, accelerating extraction and instability." } },
                    { term: "austerity", explanations: { headline: "Punishment for the Masses", summary: "The policy of cutting public services and social safety nets to ensure that government revenues are prioritized to service debts owed to the wealthy creditor class. It enforces the system's hierarchy." } },
                    { term: "technocracy", explanations: { headline: "The Rule of 'Experts'", summary: "The ideology that the system is too complex for democratic control and must be managed by an unelected, credentialed elite. This disempowers the public and shields the system's core principles from debate." } },
                    { term: "GDP", explanations: { headline: "Gross Destruction Product", summary: "The system's primary metric of 'progress.' A flawed number where pollution, clear-cutting a forest, and building prisons are all counted as economic positives, perfectly revealing the system's perverse values." } }
                ]
            },
            societal: {
                name: "Societal & Cultural",
                words: [
                    { term: "the economy", explanations: { headline: "The Abstraction We Serve", summary: "An abstract concept representing the flow of debt-money, which we are told we must serve. This inverts reality: a sane economy should serve human well-being, not demand its sacrifice." } },
                    { term: "the market", explanations: { headline: "The Myth of the Free Market", summary: "A system presented as free and fair, but which is fundamentally rigged by the centralized control of money creation, giving an insurmountable advantage to the creators of debt." } },
                    { term: "meritocracy", explanations: { headline: "The Noble Lie", summary: "The core myth used to justify inequality. It claims success is based purely on individual talent and effort, ignoring the system's rigged starting positions and the gravitational pull of debt." } },
                    { term: "success", explanations: { headline: "Victory in the Rat Race", summary: "The system's definition of a life well-lived: the accumulation of wealth and status. This channels our life energy into competing within the 'Competition Trap' instead of pursuing intrinsic human values." } },
                    { terms: ["jobs", "job creation"], primaryTerm: "jobs", explanations: { headline: "A Means of Debt Servitude", summary: "For the majority, not a source of purpose, but the necessary act of selling one's time to service the debts required to live in the system." } },
                    { term: "career", explanations: { headline: "The Rat Race", summary: "A lifelong commitment to the 'Competition Trap,' often in exchange for status and the means to take on and service ever-larger debts (mortgage, etc.)." } },
                    { term: "retirement", explanations: { headline: "A Bet on The Casino", summary: "The modern necessity of gambling one's life savings on speculative financial markets, because the system's inherent inflation makes traditional saving impossible." } },
                    { term: "consumer", explanations: { headline: "The Citizen, Commodified", summary: "The reframing of a human being from an active citizen into a passive vessel for consumption, whose primary civic duty is to take on debt to fuel 'economic growth'." } },
                    { terms: ["human resources", "human capital"], primaryTerm: "human resources", explanations: { headline: "The Dehumanization of Labor", summary: "The reframing of human beings as fungible assets or raw materials on a corporate balance sheet, a key part of the 'Humanistic Paradigm's' inversion." } },
                    { term: "productivity", explanations: { headline: "The Efficiency Mandate", summary: "A metric often used to justify wage stagnation and downsizing. The financial gains from 'increased productivity' are systemically funneled to capital holders, not labor." } },
                    { term: "education", explanations: { headline: "The Compliance Engine", summary: "The primary function of the modern education system: to produce compliant, specialized workers and indebted consumers, rather than liberated, critical thinkers who might challenge the system." } },
                    { term: "media", explanations: { headline: "Manufacturing Consent", summary: "A corporate-owned narrative machine that distracts with spectacle and divides with culture wars to prevent the public from questioning the foundational economic system." } },
                    { term: "news", explanations: { headline: "The Distraction Product", summary: "A commercial product, owned by the system's beneficiaries, designed to capture attention and emotional energy. Its purpose is narrative control, not the objective delivery of truth." } },
                    { term: "scapegoat", explanations: { headline: "The Distraction Target", summary: "A crucial tool of social control. When system-induced pain becomes too great, a target (another race, nation, or political group) is used to misdirect public anger away from the system's true architects." } },
                    { term: "conspiracy", explanations: { headline: "The Thought-Terminating Weapon", summary: "The system's rhetorical self-defense. This word is deployed to ridicule and dismiss any rational analysis of its foundational rules, conflating systemic critique with paranoia to shut down debate." } }
                ]
            },
            personal: {
                name: "Personal & Relational",
                words: [
                    { term: "student", explanations: { headline: "The Trainee Debtor", summary: "An individual being prepared by the 'Education Paradigm' for a life of debt servitude, ensuring their future labor is pre-claimed by the system before they even earn their first dollar." } },
                    { term: "doctor", explanations: { headline: "Agent of the Sickness Industry", summary: "A healer trapped within a 'Healthcare Paradigm' that often finds it more profitable to manage chronic symptoms with expensive drugs than to cultivate genuine wellness or address root causes." } },
                    { term: "parent", explanations: { headline: "The Indebted Guardian", summary: "A caregiver caught in the 'Competition Trap,' often needing dual incomes just to provide basic needs, forced to navigate the industrial 'Food Paradigm' and prepare their child for a future of debt." } },
                    { term: "anxiety", explanations: { headline: "A Rational Response", summary: "The logical psychological state that results from living in a system of constant precarity, mandated competition, and information overload. It is a symptom of the environment, not a personal failing." } },
                    { term: "stress", explanations: { headline: "System Friction", summary: "The physical and mental toll of trying to keep up with the impossible demands of the 'Competition Trap' and the constant pressure to service debt." } },
                    { term: "depression", explanations: { headline: "The System's Twin Collapse", summary: "A term mirroring both the system's economic end-state (a debt collapse) and its primary psychological product: the pervasive sense of hopelessness and alienation from living in a meaningless, extractive system." } },
                    { term: "addiction", explanations: { headline: "A Profitable Escape", summary: "A rational, and often profitable, response to the pain and meaninglessness generated by the system. It provides a temporary escape while often creating new cycles of debt and dependency." } },
                    { term: "family", explanations: { headline: "The Over-Stressed Economic Unit", summary: "A primary source of love and connection, now constantly strained by the need for multiple incomes just to service debt, pay for housing, and stay afloat in the 'Competition Trap'." } },
                    { term: "community", explanations: { headline: "The Eroded Commons", summary: "The web of local trust and mutual support that is systemically dissolved by the 'Competition Trap,' which pits neighbors against each other and forces constant mobility for work." } },
                    { term: "dating", explanations: { headline: "Transactional Romance", summary: "The modern process of seeking a partner, heavily influenced by the 'Love Paradigm's' logic of commodification, status signaling, and transactional value." } },
                    { term: "house", explanations: { headline: "A Financialized Human Need", summary: "A basic need for shelter, transformed by financialization into the primary vehicle for generational debt and a speculative asset for the wealthy." } },
                    { term: "food", explanations: { headline: "The Industrial Commodity", summary: "Our source of nourishment, corrupted by the 'Food Paradigm' into an industrial product designed for shelf-life and profit, not nutrition, leading to widespread chronic illness." } },
                    { term: "freedom", explanations: { headline: "The Freedom to Choose Your Creditor", summary: "The system's redefinition of liberty. It is not freedom from the system, but the consumer 'choice' between different brands of jobs, debts, and distractions within the mandatory game." } },
                    { term: "hope", explanations: { headline: "A Future Financed by Debt", summary: "The natural human aspiration for a better life, channeled by the system into the act of taking on debt. Hope for a home becomes a mortgage; hope for education becomes a student loan." } },
                    { term: "smartphone", explanations: { headline: "The Modern Leash", summary: "A powerful tool of convenience that doubles as a device for mass surveillance ('Technology Paradigm'), constant distraction ('Media Paradigm'), and 24/7 connection to the work machine." } }
                ]
            }
        }
    };

    // --- DATA PREPARATION ---
    let flatDictionary = [];
    let termToCategoryMap = {};
    for (const categoryKey in config.dictionary) {
        const category = config.dictionary[categoryKey];
        category.words.forEach(item => {
            const primaryTerm = item.primaryTerm || item.term;
            const terms = item.terms || [item.term];
            const enrichedItem = {
                ...item,
                primaryTerm: primaryTerm,
                category: categoryKey,
                link_free: "https://zipcadia.gumroad.com",
                link_paid: "https://zipcadia.gumroad.com/l/bundle1"
            };
            flatDictionary.push(enrichedItem);
            terms.forEach(t => termToCategoryMap[t.toLowerCase()] = categoryKey);
        });
    }

    // --- CORE LOGIC ---

    function main() {
        if (document.getElementById('usurpia-panel')) {
            console.log("Usurpia Lens is already active.");
            return;
        }
        console.log("Usurpia Lens v2.5 Activated.");
        injectStyles();
        const popup = createPopup();
        createControlPanel();
        setupPopupEventListeners(popup);

        if (config.settings.initialState === 'on') {
            document.body.classList.add('usurpia-active');
            runAnalysis();
        }
    }

    function runAnalysis() {
        cleanupHighlights(); // Important: Clean up before running a new analysis
        highlightKeywords(config.settings.maxHighlights);
        createScrollbarMarks();
    }

    function cleanupHighlights() {
        const highlights = document.querySelectorAll('.usurpia-highlight');
        highlights.forEach(span => {
            const parent = span.parentNode;
            parent.replaceChild(document.createTextNode(span.textContent), span);
            parent.normalize(); // Merges adjacent text nodes
        });
        const scrollbar = document.getElementById('usurpia-scrollbar');
        if (scrollbar) scrollbar.remove();
    }

    function injectStyles() {
        let style = document.getElementById('usurpia-styles');
        if (style) style.remove();
        
        style = document.createElement('style');
        style.id = 'usurpia-styles';

        let categoryStyles = '';
        for (const categoryKey in config.dictionary) {
            categoryStyles += `
                body.usurpia-hide-${categoryKey} .usurpia-highlight[data-category="${categoryKey}"] {
                    display: none;
                }
            `;
        }
        
        style.innerHTML = `
            /* Core Highlight Styles */
            .usurpia-highlight { background-color: #FFFF99 !important; color: #000 !important; cursor: help; padding: 1px 2px; border-radius: 3px; }
            body:not(.usurpia-active) .usurpia-highlight,
            body:not(.usurpia-active) #usurpia-scrollbar,
            body:not(.usurpia-active) #usurpia-panel {
                display: none;
            }

            /* Category Filtering Styles */
            ${categoryStyles}

            /* Popup Styles */
            #usurpia-popup { position: fixed; display: none; width: 280px; max-width: 90%; background-color: #fff; color: #111; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 15px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; z-index: 999999999; text-align: left; }
            #usurpia-popup p { margin: 0 0 12px 0; padding: 0; }
            #usurpia-popup a { color: #007bff !important; text-decoration: underline !important; display: block; margin-top: 5px; }
            #usurpia-popup .usurpia-link-paid { font-weight: bold; color: #0056b3 !important; }

            /* Scrollbar Styles */
            #usurpia-scrollbar { position: fixed; top: 0; right: 0; width: 10px; height: 100%; z-index: 999999998; }
            .usurpia-scrollbar-mark { position: absolute; right: 0; width: 10px; height: 3px; background: #FF0000; opacity: 0.7; }
            .usurpia-scrollbar-mark:hover { opacity: 1; cursor: pointer; }

            /* Control Panel Styles */
            #usurpia-panel { position: fixed; bottom: 20px; left: 20px; background: #f0f0f0; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); z-index: 1000000000; padding: 10px; font-family: sans-serif; font-size: 12px; color: #333; }
            #usurpia-panel-header { padding: 5px; background: #ddd; cursor: move; text-align: center; font-weight: bold; border-radius: 5px 5px 0 0; margin: -10px -10px 10px -10px; }
            #usurpia-panel label { display: block; margin-bottom: 5px; user-select: none; }
            #usurpia-panel input[type="range"] { width: 100%; }
            #usurpia-panel .usurpia-control-group { border-top: 1px solid #ccc; padding-top: 10px; margin-top: 10px; }
        `;
        document.head.appendChild(style);
    }

    function createControlPanel() {
        const panel = document.createElement('div');
        panel.id = 'usurpia-panel';

        let categoryCheckboxesHTML = '';
        for (const categoryKey in config.dictionary) {
            categoryCheckboxesHTML += `
                <label>
                    <input type="checkbox" class="usurpia-category-filter" value="${categoryKey}" checked>
                    ${config.dictionary[categoryKey].name}
                </label>
            `;
        }

        panel.innerHTML = `
            <div id="usurpia-panel-header">Usurpia Lens v2.5</div>
            <div>
                <label>
                    <input type="checkbox" id="usurpia-master-toggle" ${config.settings.initialState === 'on' ? 'checked' : ''}>
                    <strong>Lens Enabled</strong>
                </label>
            </div>
            <div class="usurpia-control-group">
                <label for="usurpia-density-slider">Highlight Density: <span id="usurpia-density-value">${config.settings.maxHighlights}</span></label>
                <input type="range" id="usurpia-density-slider" min="1" max="50" value="${config.settings.maxHighlights}">
            </div>
            <div class="usurpia-control-group">
                <strong>Filter Categories:</strong>
                ${categoryCheckboxesHTML}
            </div>
        `;
        document.body.appendChild(panel);
        
        // --- Event Listeners for Panel ---
        const masterToggle = document.getElementById('usurpia-master-toggle');
        const densitySlider = document.getElementById('usurpia-density-slider');
        const densityValue = document.getElementById('usurpia-density-value');
        const categoryFilters = document.querySelectorAll('.usurpia-category-filter');

        masterToggle.addEventListener('change', () => {
            if (masterToggle.checked) {
                document.body.classList.add('usurpia-active');
                runAnalysis();
            } else {
                document.body.classList.remove('usurpia-active');
                cleanupHighlights();
            }
        });

        densitySlider.addEventListener('input', () => {
            densityValue.textContent = densitySlider.value;
        });
        densitySlider.addEventListener('change', () => {
            config.settings.maxHighlights = parseInt(densitySlider.value, 10);
            if (masterToggle.checked) {
                runAnalysis();
            }
        });

        categoryFilters.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const category = checkbox.value;
                if (checkbox.checked) {
                    document.body.classList.remove(`usurpia-hide-${category}`);
                } else {
                    document.body.classList.add(`usurpia-hide-${category}`);
                }
            });
        });
        
        // Drag functionality
        makeDraggable(panel);
    }

    function makeDraggable(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        const header = document.getElementById('usurpia-panel-header');
        header.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
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
    
    // The rest of the functions (highlightKeywords, createScrollbarMarks, popup logic, etc.) are largely the same
    // as v2.4 but are included here for completeness.

    function createPopup() {
        let popup = document.createElement('div');
        popup.id = 'usurpia-popup';
        document.body.appendChild(popup);
        return popup;
    }

    function highlightKeywords(maxHighlights) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: node => (node.parentElement.tagName.match(/^(SCRIPT|STYLE|TEXTAREA|INPUT|SELECT|A)$/i) || node.parentElement.closest('.usurpia-highlight, #usurpia-popup, #usurpia-panel')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        });

        let candidates = [];
        let textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);

        const allTermStrings = Object.keys(termToCategoryMap);
        if (allTermStrings.length === 0) return;
        const masterRegex = new RegExp(`\\b(${allTermStrings.join('|')})\\b`, 'gi');

        textNodes.forEach(node => {
            node.nodeValue.replace(masterRegex, (match, offset) => {
                candidates.push({ node, match, offset });
            });
        });

        let highlightsToPerform = candidates;
        if (candidates.length > maxHighlights) {
            for (let i = candidates.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
            }
            highlightsToPerform = candidates.slice(0, maxHighlights);
        }

        const groupedByNode = highlightsToPerform.reduce((acc, { node, match, offset }) => {
            const key = node.textContent;
            if (!acc.has(key)) acc.set(key, { node, matches: [] });
            acc.get(key).matches.push({ match, offset });
            return acc;
        }, new Map());

        groupedByNode.forEach(({ node, matches }) => {
            matches.sort((a, b) => b.offset - a.offset);
            matches.forEach(({ match, offset }) => {
                const category = termToCategoryMap[match.toLowerCase()];
                const entry = flatDictionary.find(d => (d.terms || [d.term]).some(t => new RegExp(`^${match}$`, 'i').test(t)));
                if (entry) {
                    const span = document.createElement('span');
                    span.className = 'usurpia-highlight';
                    span.setAttribute('data-term', entry.primaryTerm);
                    span.setAttribute('data-category', category);
                    span.textContent = match;

                    const range = document.createRange();
                    range.setStart(node, offset);
                    range.setEnd(node, offset + match.length);
                    range.deleteContents();
                    range.insertNode(span);
                }
            });
        });
    }

    function createScrollbarMarks() {
        const scrollbar = document.createElement('div');
        scrollbar.id = 'usurpia-scrollbar';
        document.body.appendChild(scrollbar);

        const highlights = document.querySelectorAll('.usurpia-highlight');
        if (highlights.length === 0) return;

        const docHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        highlights.forEach(highlight => {
            const rect = highlight.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const absoluteTop = rect.top + scrollTop;
            const relativePosition = (absoluteTop / docHeight) * 100;

            const mark = document.createElement('div');
            mark.className = 'usurpia-scrollbar-mark';
            mark.style.top = `${relativePosition}%`;
            mark.title = `Jump to "${highlight.textContent}"`;
            mark.addEventListener('click', () => {
                highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            scrollbar.appendChild(mark);
        });
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
                        <a href="${wordData.link_free}" target="_blank">Get The Full Lens (Free Option)</a>
                        <a href="${wordData.link_paid}" target="_blank" class="usurpia-link-paid">Get The Ambassador's Toolkit</a>
                    `;
                    popup.style.display = 'block';
                    positionPopup(e, popup);
                }
            }
        });
        document.body.addEventListener('mouseout', e => {
            if (e.target.classList.contains('usurpia-highlight')) {
                hideTimer = setTimeout(() => { popup.style.display = 'none'; }, 200);
            }
        });
        popup.addEventListener('mouseenter', () => { clearTimeout(hideTimer); });
        popup.addEventListener('mouseleave', () => { popup.style.display = 'none'; });
    }

    function positionPopup(event, popup) {
        let x = event.clientX + 15;
        let y = event.clientY + 15;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;
        if (x + popupWidth > screenWidth) x = event.clientX - popupWidth - 15;
        if (y + popupHeight > screenHeight) y = event.clientY - popupHeight - 15;
        if (x < 0) x = 5; if (y < 0) y = 5;
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;
    }

    main();
})();
