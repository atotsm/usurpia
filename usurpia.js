// Usurpia Lens Bookmarklet - V2.5.2 (Enhanced for Dynamic Content, Touch, Persistence, and Cleanup)
// Implements dynamic content handling, touch support, persistent settings, and event listener cleanup.

(function() {
    // --- CONFIGURATION & DICTIONARY ---
    const config = {
        settings: {
            maxHighlights: 15,
            initialState: 'on'
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
    let eventListeners = [];
    let mutationObserver = null;

    function main() {
        if (document.getElementById('usurpia-panel')) {
            console.log("Usurpia Lens is already active. Cleaning up and reinitializing.");
            cleanup();
        }
        console.log("Usurpia Lens v2.5.2 Activated.");
        injectStyles();
        const popup = createPopup();
        createControlPanel();
        setupPopupEventListeners(popup);
        setupMutationObserver();

        // Load settings from localStorage
        try {
            const savedMaxHighlights = localStorage.getItem('usurpia-maxHighlights');
            if (savedMaxHighlights) {
                config.settings.maxHighlights = parseInt(savedMaxHighlights, 10);
            }
        } catch (e) {
            console.warn("Usurpia Lens: localStorage access failed, using default settings.");
        }

        if (config.settings.initialState === 'on') {
            document.body.classList.add('usurpia-active');
            runAnalysis();
        }
    }

    function runAnalysis() {
        cleanupHighlights();
        highlightKeywords(config.settings.maxHighlights);
        createScrollbarMarks();
    }

    function cleanupHighlights() {
        const highlights = document.querySelectorAll('.usurpia-highlight');
        highlights.forEach(span => {
            const parent = span.parentNode;
            parent.replaceChild(document.createTextNode(span.textContent), span);
            parent.normalize();
        });
        const scrollbar = document.getElementById('usurpia-scrollbar');
        if (scrollbar) scrollbar.remove();
    }

    function cleanup() {
        // Remove event listeners
        eventListeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        eventListeners = [];

        // Disconnect MutationObserver
        if (mutationObserver) {
            mutationObserver.disconnect();
            mutationObserver = null;
        }

        // Remove DOM elements
        document.getElementById('usurpia-panel')?.remove();
        document.getElementById('usurpia-popup')?.remove();
        document.getElementById('usurpia-scrollbar')?.remove();
        document.getElementById('usurpia-styles')?.remove();
        document.body.classList.remove('usurpia-active');
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
                    background-color: transparent !important;
                    color: inherit !important;
                    cursor: default;
                    padding: 0;
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
            #usurpia-panel { position: fixed; bottom: 20px; left: 20px; background: #f0f0f0; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); z-index: 1000000000; padding: 15px; font-family: sans-serif; font-size: 12px; color: #333; width: 200px; }
            #usurpia-panel-header { padding: 5px; background: #ddd; cursor: move; text-align: center; font-weight: bold; border-radius: 5px 5px 0 0; margin: -15px -15px 10px -15px; }
            #usurpia-panel label { display: flex; align-items: center; margin-bottom: 8px; user-select: none; }
            #usurpia-panel input[type="range"] { width: 100%; margin-top: 4px; }
            #usurpia-panel input[type="checkbox"] { margin-right: 8px; }
            #usurpia-panel .usurpia-control-group { border-top: 1px solid #ccc; padding-top: 10px; margin-top: 10px; }
            #usurpia-panel .usurpia-density-label { display: flex; justify-content: space-between; align-items: center; }
            #usurpia-panel #usurpia-density-value { font-weight: bold; }
        `;
        document.head.appendChild(style);
    }

    function createControlPanel() {
        const panel = document.createElement('div');
        panel.id = 'usurpia-panel';

        let categoryCheckboxesHTML = '';
        for (const categoryKey in config.dictionary) {
            let isChecked = true;
            try {
                const savedState = localStorage.getItem(`usurpia-category-${categoryKey}`);
                isChecked = savedState !== null ? savedState === 'true' : true;
            } catch (e) {
                console.warn(`Usurpia Lens: Failed to load category state for ${categoryKey} from localStorage.`);
            }
            categoryCheckboxesHTML += `
                <label>
                    <input type="checkbox" class="usurpia-category-filter" value="${categoryKey}" ${isChecked ? 'checked' : ''}>
                    <span>${config.dictionary[categoryKey].name}</span>
                </label>
            `;
            if (!isChecked) {
                document.body.classList.add(`usurpia-hide-${categoryKey}`);
            }
        }

        panel.innerHTML = `
            <div id="usurpia-panel-header">Usurpia Lens v2.5.2</div>
            <label>
                <input type="checkbox" id="usurpia-master-toggle" ${config.settings.initialState === 'on' ? 'checked' : ''}>
                <strong>Lens Enabled</strong>
            </label>
            <div class="usurpia-control-group">
                <div class="usurpia-density-label">
                    <span>Highlight Density:</span>
                    <span id="usurpia-density-value">${config.settings.maxHighlights}</span>
                </div>
                <input type="range" id="usurpia-density-slider" min="1" max="50" value="${config.settings.maxHighlights}">
            </div>
            <div class="usurpia-control-group">
                <strong>Filter Categories:</strong>
                <div style="margin-top: 5px;">${categoryCheckboxesHTML}</div>
            </div>
        `;
        document.body.appendChild(panel);
        
        // --- Event Listeners for Panel ---
        const masterToggle = document.getElementById('usurpia-master-toggle');
        const densitySlider = document.getElementById('usurpia-density-slider');
        const densityValue = document.getElementById('usurpia-density-value');
        const categoryFilters = document.querySelectorAll('.usurpia-category-filter');

        const masterToggleHandler = () => {
            if (masterToggle.checked) {
                document.body.classList.add('usurpia-active');
                runAnalysis();
            } else {
                document.body.classList.remove('usurpia-active');
                cleanupHighlights();
            }
        };
        masterToggle.addEventListener('change', masterToggleHandler);
        eventListeners.push({ element: masterToggle, event: 'change', handler: masterToggleHandler });

        const densityInputHandler = () => {
            densityValue.textContent = densitySlider.value;
        };
        densitySlider.addEventListener('input', densityInputHandler);
        eventListeners.push({ element: densitySlider, event: 'input', handler: densityInputHandler });

        const densityChangeHandler = () => {
            config.settings.maxHighlights = parseInt(densitySlider.value, 10);
            try {
                localStorage.setItem('usurpia-maxHighlights', config.settings.maxHighlights);
            } catch (e) {
                console.warn("Usurpia Lens: Failed to save maxHighlights to localStorage.");
            }
            if (masterToggle.checked) {
                runAnalysis();
            }
        };
        densitySlider.addEventListener('change', densityChangeHandler);
        eventListeners.push({ element: densitySlider, event: 'change', handler: densityChangeHandler });

        categoryFilters.forEach(checkbox => {
            const categoryHandler = () => {
                const category = checkbox.value;
                if (checkbox.checked) {
                    document.body.classList.remove(`usurpia-hide-${category}`);
                } else {
                    document.body.classList.add(`usurpia-hide-${category}`);
                }
                try {
                    localStorage.setItem(`usurpia-category-${category}`, checkbox.checked);
                } catch (e) {
                    console.warn(`Usurpia Lens: Failed to save category state for ${category} to localStorage.`);
                }
            };
            checkbox.addEventListener('change', categoryHandler);
            eventListeners.push({ element: checkbox, event: 'change', handler: categoryHandler });
        });
        
        makeDraggable(panel);
    }

    function makeDraggable(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        const header = document.getElementById('usurpia-panel-header');

        const dragStart = (e) => {
            e.preventDefault();
            const event = e.type === 'touchstart' ? e.touches[0] : e;
            pos3 = event.clientX;
            pos4 = event.clientY;
            document.onmouseup = closeDragElement;
            document.ontouchend = closeDragElement;
            document.onmousemove = elementDrag;
            document.ontouchmove = elementDrag;
        };

        const elementDrag = (e) => {
            e.preventDefault();
            const event = e.type === 'touchmove' ? e.touches[0] : e;
            pos1 = pos3 - event.clientX;
            pos2 = pos4 - event.clientY;
            pos3 = event.clientX;
            pos4 = event.clientY;
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        };

        const closeDragElement = () => {
            document.onmouseup = null;
            document.ontouchend = null;
            document.onmousemove = null;
            document.ontouchmove = null;
        };

        header.onmousedown = dragStart;
        header.ontouchstart = dragStart;
        eventListeners.push(
            { element: header, event: 'mousedown', handler: dragStart },
            { element: header, event: 'touchstart', handler: dragStart }
        );
    }

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
            const clickHandler = () => {
                highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
            };
            mark.addEventListener('click', clickHandler);
            eventListeners.push({ element: mark, event: 'click', handler: clickHandler });
            scrollbar.appendChild(mark);
        });
    }

    function setupPopupEventListeners(popup) {
        let hideTimer;
        const mouseOverHandler = e => {
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
        };
        document.body.addEventListener('mouseover', mouseOverHandler);
        eventListeners.push({ element: document.body, event: 'mouseover', handler: mouseOverHandler });

 cruciale de l'économie mondiale. Ils imposent l'austérité et la privatisation des actifs publics aux nations débitrices, garantissant ainsi le transfert des ressources du Sud global vers la classe des créanciers." } },
                    { terms: ["Wall Street"], primaryTerm: "Wall Street", explanations: { headline: "Le Centre de Commandement du Système", summary: "Le cœur symbolique et opérationnel de la financiarisation, où l'économie réelle est abstraite en instruments spéculatifs et où la richesse extraite par le système est concentrée et gérée." } },
                    { terms: ["politicien", "législateur", "gouvernement"], primaryTerm: "politicien", explanations: { headline: "Le Gestionnaire du Système", summary: "Un acteur du théâtre politique, principalement chargé de gérer le mécontentement public et de faire adopter des lois qui servent les intérêts des principaux bénéficiaires du système (leurs donateurs)." } },
                    { term: "lobbying", explanations: { headline: "Corruption Systémique", summary: "Le mécanisme par lequel la richesse concentrée, générée par le moteur de la dette, capture le processus politique. Il garantit que les lois protègent et renforcent le système, créant une boucle de rétroaction de pouvoir." } },
                    { term: "dérégulation", explanations: { headline: "Libérer le Moteur", summary: "Le processus de suppression des garde-fous légaux et éthiques, permettant au moteur financier de fonctionner avec plus de vitesse et de brutalité, accélérant l'extraction et l'instabilité." } },
                    { term: "austérité", explanations: { headline: "Punition pour les Masses", summary: "La politique de réduction des services publics et des filets de sécurité sociaux pour garantir que les revenus gouvernementaux soient priorisés pour rembourser les dettes dues à la classe des créanciers riches. Elle renforce la hiérarchie du système." } },
                    { term: "technocratie", explanations: { headline: "Le Règne des 'Experts'", summary: "L'idéologie selon laquelle le système est trop complexe pour un contrôle démocratique et doit être géré par une élite non élue et diplômée. Cela prive le public de pouvoir et protège les principes fondamentaux du système du débat." } },
                    { term: "PIB", explanations: { headline: "Produit de Destruction Brute", summary: "La principale mesure de 'progrès' du système. Un chiffre erroné où la pollution, l'abattage d'une forêt et la construction de prisons sont tous comptés comme des positifs économiques, révélant parfaitement les valeurs perverses du système." } }
                ]
            },
            societal: {
                name: "Sociétal & Culturel",
                words: [
                    { term: "l'économie", explanations: { headline: "L'Abstraction que Nous Servons", summary: "Un concept abstrait représentant le flux de la monnaie-dette, que l'on nous dit de servir. Cela inverse la réalité : une économie saine devrait servir le bien-être humain, et non exiger son sacrifice." } },
                    { term: "le marché", explanations: { headline: "Le Mythe du Marché Libre", summary: "Un système présenté comme libre et équitable, mais fondamentalement truqué par le contrôle centralisé de la création monétaire, donnant un avantage insurmontable aux créateurs de dettes." } },
                    { term: "méritocratie", explanations: { headline: "Le Noble Mensonge", summary: "Le mythe central utilisé pour justifier l'inégalité. Il prétend que le succès repose uniquement sur le talent et l'effort individuels, ignorant les positions de départ truquées du système et l'attraction gravitationnelle de la dette." } },
                    { term: "succès", explanations: { headline: "Victoire dans la Course de Rats", summary: "La définition du système d'une vie bien vécue : l'accumulation de richesse et de statut. Cela canalise notre énergie vitale dans la compétition au sein du 'Piège de la Compétition' au lieu de poursuivre des valeurs humaines intrinsèques." } },
                    { terms: ["emplois", "création d'emplois"], primaryTerm: "emplois", explanations: { headline: "Un Moyen de Servitude par la Dette", summary: "Pour la majorité, non une source de sens, mais l'acte nécessaire de vendre son temps pour rembourser les dettes nécessaires pour vivre dans le système." } },
                    { term: "carrière", explanations: { headline: "La Course de Rats", summary: "Un engagement à vie dans le 'Piège de la Compétition', souvent en échange de statut et des moyens de contracter et de rembourser des dettes toujours plus importantes (hypothèque, etc.)." } },
                    { term: "retraite", explanations: { headline: "Un Pari sur le Casino", summary: "La nécessité moderne de jouer ses économies sur les marchés financiers spéculatifs, car l'inflation inhérente au système rend l'épargne traditionnelle impossible." } },
                    { term: "consommateur", explanations: { headline: "Le Citoyen, Commodifié", summary: "La redéfinition d'un être humain d'un citoyen actif en un réceptacle passif pour la consommation, dont le principal devoir civique est de contracter des dettes pour alimenter la 'croissance économique'." } },
                    { terms: ["ressources humaines", "capital humain"], primaryTerm: "ressources humaines", explanations: { headline: "La Déshumanisation du Travail", summary: "La redéfinition des êtres humains en actifs fongibles ou en matières premières dans un bilan d'entreprise, une partie clé de l'inversion du 'Paradigme Humaniste'." } },
                    { term: "productivité", explanations: { headline: "Le Mandat d'Efficacité", summary: "Une métrique souvent utilisée pour justifier la stagnation des salaires et les licenciements. Les gains financiers d'une 'productivité accrue' sont systématiquement canalisés vers les détenteurs de capital, et non vers le travail." } },
                    { term: "éducation", explanations: { headline: "Le Moteur de Conformité", summary: "La fonction principale du système éducatif moderne : produire des travailleurs spécialisés et conformes et des consommateurs endettés, plutôt que des penseurs critiques libérés qui pourraient remettre en question le système." } },
                    { term: "médias", explanations: { headline: "Fabriquer le Consentement", summary: "Une machine narrative appartenant aux entreprises qui distrait avec du spectacle et divise avec des guerres culturelles pour empêcher le public de remettre en question le système économique fondamental." } },
                    { term: "actualités", explanations: { headline: "Le Produit de Distraction", summary: "Un produit commercial, appartenant aux bénéficiaires du système, conçu pour capter l'attention et l'énergie émotionnelle. Son but est le contrôle narratif, et non la livraison objective de la vérité." } },
                    { term: "bouc émissaire", explanations: { headline: "La Cible de Distraction", summary: "Un outil crucial de contrôle social. Lorsque la douleur induite par le système devient trop forte, une cible (une autre race, nation ou groupe politique) est utilisée pour détourner la colère publique des véritables architectes du système." } },
                    { term: "conspiration", explanations: { headline: "L'Arme de Terminaison de Pensée", summary: "La défense rhétorique du système. Ce mot est utilisé pour ridiculiser et rejeter toute analyse rationnelle de ses règles fondamentales, confondant la critique systémique avec la paranoïa pour mettre fin au débat." } }
                ]
            },
            personal: {
                name: "Personnel & Relationnel",
                words: [
                    { term: "étudiant", explanations: { headline: "L'Apprenant Endetté", summary: "Un individu préparé par le 'Paradigme Éducatif' pour une vie de servitude par la dette, garantissant que son travail futur est pré-occupé par le système avant même qu'il ne gagne son premier dollar." } },
                    { term: "médecin", explanations: { headline: "Agent de l'Industrie de la Maladie", summary: "Un soignant piégé dans un 'Paradigme de Soins de Santé' qui trouve souvent plus rentable de gérer les symptômes chroniques avec des médicaments coûteux que de cultiver un véritable bien-être ou d'adresser les causes profondes." } },
                    { term: "parent", explanations: { headline: "Le Gardien Endetté", summary: "Un soignant pris dans le 'Piège de la Compétition', souvent nécessitant deux revenus juste pour répondre aux besoins de base, forcé de naviguer dans le 'Paradigme Alimentaire' industriel et de préparer son enfant à un avenir de dettes." } },
                    { term: "anxiété", explanations: { headline: "Une Réponse Rationnelle", summary: "L'état psychologique logique résultant de la vie dans un système de précarité constante, de compétition imposée et de surcharge d'informations. C'est un symptôme de l'environnement, pas un échec personnel." } },
                    { term: "stress", explanations: { headline: "Frottement Systémique", summary: "Le coût physique et mental de tenter de répondre aux exigences impossibles du 'Piège de la Compétition' et à la pression constante de rembourser la dette." } },
                    { term: "dépression", explanations: { headline: "L'Effondrement Jumelé du Système", summary: "Un terme reflétant à la fois l'état final économique du système (un effondrement de la dette) et son principal produit psychologique : le sentiment généralisé de désespoir et d'aliénation de vivre dans un système extractif et dénué de sens." } },
                    { term: "addiction", explanations: { headline: "Une Évasion Rentable", summary: "Une réponse rationnelle, et souvent rentable, à la douleur et au manque de sens généré par le système. Elle offre une évasion temporaire tout en créant souvent de nouveaux cycles de dettes et de dépendance." } },
                    { term: "famille", explanations: { headline: "L'Unité Économique Surchargée", summary: "Une source principale d'amour et de connexion, maintenant constamment sous tension par la nécessité de plusieurs revenus juste pour rembourser la dette, payer le logement et rester à flot dans le 'Piège de la Compétition'." } },
                    { term: "communauté", explanations: { headline: "Le Commun Érodé", summary: "Le réseau de confiance locale et de soutien mutuel systématiquement dissous par le 'Piège de la Compétition', qui oppose les voisins les uns aux autres et impose une mobilité constante pour le travail." } },
                    { term: "rencontres", explanations: { headline: "Romance Transactionnelle", summary: "Le processus moderne de recherche d'un partenaire, fortement influencé par la logique de commodification, de signalisation de statut et de valeur transactionnelle du 'Paradigme de l'Amour'." } },
                    { term: "maison", explanations: { headline: "Un Besoin Humain Financiarisé", summary: "Un besoin fondamental de logement, transformé par la financiarisation en principal véhicule de la dette générationnelle et en actif spéculatif pour les riches." } },
                    { term: "nourriture", explanations: { headline: "Le Produit Industriel", summary: "Notre source de nourriture, corrompue par le 'Paradigme Alimentaire' en un produit industriel conçu pour la durée de conservation et le profit, et non pour la nutrition, entraînant des maladies chroniques généralisées." } },
                    { term: "liberté", explanations: { headline: "La Liberté de Choisir Votre Créancier", summary: "La redéfinition de la liberté par le système. Ce n'est pas une liberté hors du système, mais le 'choix' du consommateur entre différentes marques d'emplois, de dettes et de distractions au sein du jeu obligatoire." } },
                    { term: "espoir", explanations: { headline: "Un Avenir Financé par la Dette", summary: "L'aspiration humaine naturelle à une vie meilleure, canalisée par le système dans l'acte de contracter une dette. L'espoir d'un logement devient une hypothèque ; l'espoir d'une éducation devient un prêt étudiant." } },
                    { term: "smartphone", explanations: { headline: "La Laisse Moderne", summary: "Un outil puissant de commodité qui sert également de dispositif de surveillance de masse ('Paradigme Technologique'), de distraction constante ('Paradigme Médiatique') et de connexion 24/7 à la machine de travail." } }
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
    let eventListeners = [];
    let mutationObserver = null;

    function main() {
        if (document.getElementById('usurpia-panel')) {
            console.log("Usurpia Lens is already active. Cleaning up and reinitializing.");
            cleanup();
        }
        console.log("Usurpia Lens v2.5.2 Activated.");
        injectStyles();
        const popup = createPopup();
        createControlPanel();
        setupPopupEventListeners(popup);
        setupMutationObserver();

        // Load settings from localStorage
        try {
            const savedMaxHighlights = localStorage.getItem('usurpia-maxHighlights');
            if (savedMaxHighlights) {
                config.settings.maxHighlights = parseInt(savedMaxHighlights, 10);
            }
        } catch (e) {
            console.warn("Usurpia Lens: localStorage access failed, using default settings.");
        }

        if (config.settings.initialState === 'on') {
            document.body.classList.add('usurpia-active');
            runAnalysis();
        }
    }

    function runAnalysis() {
        cleanupHighlights();
        highlightKeywords(config.settings.maxHighlights);
        createScrollbarMarks();
    }

    function cleanupHighlights() {
        const highlights = document.querySelectorAll('.usurpia-highlight');
        highlights.forEach(span => {
            const parent = span.parentNode;
            parent.replaceChild(document.createTextNode(span.textContent), span);
            parent.normalize();
        });
        const scrollbar = document.getElementById('usurpia-scrollbar');
        if (scrollbar) scrollbar.remove();
    }

    function cleanup() {
        // Remove event listeners
        eventListeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        eventListeners = [];

        // Disconnect MutationObserver
        if (mutationObserver) {
            mutationObserver.disconnect();
            mutationObserver = null;
        }

        // Remove DOM elements
        document.getElementById('usurpia-panel')?.remove();
        document.getElementById('usurpia-popup')?.remove();
        document.getElementById('usurpia-scrollbar')?.remove();
        document.getElementById('usurpia-styles')?.remove();
        document.body.classList.remove('usurpia-active');
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
                    background-color: transparent !important;
                    color: inherit !important;
                    cursor: default;
                    padding: 0;
                }
            `;
        }
        
        style.innerHTML = `
            /* Core Highlight Styles */
            .usurpia-highlight { background-color: #FFFFව

            /* Popup Styles */
            #usurpia-popup { position: fixed; display: none; width: 280px; max-width: 90%; background-color: #fff; color: #111; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 15px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; z-index: 999999999; text-align: left; }
            #usurpia-popup p { margin:  Ascendant-descendant: none; }
            #usurpia-popup a { color: #007bff !important; text-decoration: underline !important; display: block; margin-top: 5px; }
            #usurpia-popup .usurpia-link-paid { font-weight: bold; color: #0056b3 !important; }

            /* Scrollbar Styles */
            #usurpia-scrollbar { position: fixed; top: 0; right: 0; width: 10px; height: 100%; z-index: 999999998; }
            .usurpia-scrollbar-mark { position: absolute; right: 0; width: 10px; height: 3px; background: #FF0000; opacity: 0.7; }
            .usurpia-scrollbar-mark:hover { opacity: 1; cursor: pointer; }

            /* Control Panel Styles */
            #usurpia-panel { position: fixed; bottom: 20px; left: 20px; background: #f4f4f4; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); z-index: 1000000000; padding: 15px; font-family: sans-serif; font-size: 12px; color: #333; width: 200px; }
            #usurpia-panel-header { padding: 5px; background: #ddd; cursor: move; text-align: center; font-weight: bold; border-radius: 5px 5px 0 0; margin: -15px -15px 10px -15px; }
            #usurpia-panel label { display: flex; align-items: center; margin-bottom: 8px; user-select: none; }
            #usurpia-panel input[type="range"] { width: 100%; margin-top: 4px; }
            #usurpia-panel input[type="checkbox"] { margin-right: 8px; }
            #usurpia-panel .usurpia-control-group { border-top: 1px solid #ccc; padding-top: 10px; margin-top: 10px; }
            #usurpia-panel .usurpia-density-label { display: flex; justify-content: space-between; align-items: center; }
            #usurpia-panel #usurpia-density-value { font-weight: bold; }
        `;
        document.head.appendChild(style);
    }

    function createControlPanel() {
        const panel = document.createElement('div');
        panel.id = 'usurpia-panel';

        let categoryCheckboxesHTML = '';
        for (const categoryKey in config.dictionary) {
            let isChecked = true;
            try {
                const savedState = localStorage.getItem(`usurpia-category-${categoryKey}`);
                isChecked = savedState !== null ? savedState === 'true' : true;
            } catch (e) {
                console.warn(`Usurpia Lens: Failed to load category state for ${categoryKey} from localStorage.`);
            }
            categoryCheckboxesHTML += `
                <label>
                    <input type="checkbox" class="usurpia-category-filter" value="${categoryKey}" ${isChecked ? 'checked' : ''}>
                    <span>${config.dictionary[categoryKey].name}</span>
                </label>
            `;
            if (!isChecked) {
                document.body.classList.add(`usurpia-hide-${categoryKey}`);
            }
        }

        panel.innerHTML = `
            <div id="usurpia-panel-header">Usurpia Lens v2.5.2</div>
            <label>
                <input type="checkbox" id="usurpia-master-toggle" ${config.settings.initialState === 'on' ? 'checked' : ''}>
                <strong>Lens Enabled</strong>
            </label>
            <div class="usurpia-control-group">
                <div class="usurpia-density-label">
                    <span>Highlight Density:</span>
                    <span id="usurpia-density-value">${config.settings.maxHighlights}</span>
                </div>
                <input type="range" id="usurpia-density-slider" min="1" max="50" value="${config.settings.maxHighlights}">
            </div>
            <div class="usurpia-control-group">
                <strong>Filter Categories:</strong>
                <div style="margin-top: 5px;">${categoryCheckboxesHTML}</div>
            </div>
        `;
        document.body.appendChild(panel);
        
        // --- Event Listeners for Panel ---
        const masterToggle = document.getElementById('usurpia-master-toggle');
        const densitySlider = document.getElementById('usurpia-density-slider');
        const densityValue = document.getElementById('usurpia-density-value');
        const categoryFilters = document.querySelectorAll('.usurpia-category-filter');

        const masterToggleHandler = () => {
            if (masterToggle.checked) {
                document.body.classList.add('usurpia-active');
                runAnalysis();
            } else {
                document.body.classList.remove('usurpia-active');
                cleanupHighlights();
            }
        };
        masterToggle.addEventListener('change', masterToggleHandler);
        eventListeners.push({ element: masterToggle, event: 'change', handler: masterToggleHandler });

        const densityInputHandler = () => {
            densityValue.textContent = densitySlider.value;
        };
        densitySlider.addEventListener('input', densityInputHandler);
        eventListeners.push({ element: densitySlider, event: 'input', handler: densityInputHandler });

        const densityChangeHandler = () => {
            config.settings.maxHighlights = parseInt(densitySlider.value, 10);
            try {
                localStorage.setItem('usurpia-maxHighlights', config.settings.maxHighlights);
            } catch (e) {
                console.warn("Usurpia Lens: Failed to save maxHighlights to localStorage.");
            }
            if (masterToggle.checked) {
                runAnalysis();
            }
        };
        densitySlider.addEventListener('change', densityChangeHandler);
        eventListeners.push({ element: densitySlider, event: 'change', handler: densityChangeHandler });

        categoryFilters.forEach(checkbox => {
            const categoryHandler = () => {
                const category = checkbox.value;
                if (checkbox.checked) {
                    document.body.classList.remove(`usurpia-hide-${category}`);
                } else {
                    document.body.classList.add(`usurpia-hide-${category}`);
                }
                try {
                    localStorage.setItem(`usurpia-category-${category}`, checkbox.checked);
                } catch (e) {
                    console.warn(`Usurpia Lens: Failed to save category state for ${category} to localStorage.`);
                }
            };
            checkbox.addEventListener('change', categoryHandler);
            eventListeners.push({ element: checkbox, event: 'change', handler: categoryHandler });
        });
        
        makeDraggable(panel);
    }

    function makeDraggable(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        const header = document.getElementById('usurpia-panel-header');

        const dragStart = (e) => {
            e.preventDefault();
            const event = e.type === 'touchstart' ? e.touches[0] : e;
            pos3 = event.clientX;
            pos4 = event.clientY;
            document.onmouseup = closeDragElement;
            document.ontouchend = closeDragElement;
            document.onmousemove = elementDrag;
            document.ontouchmove = elementDrag;
        };

        const elementDrag = (e) => {
            e.preventDefault();
            const event = e.type === 'touchmove' ? e.touches[0] : e;
            pos1 = pos3 - event.clientX;
            pos2 = pos4 - event.clientY;
            pos3 = event.clientX;
            pos4 = event.clientY;
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        };

        const closeDragElement = () => {
            document.onmouseup = null;
            document.ontouchend = null;
            document.onmousemove = null;
            document.ontouchmove = null;
        };

        header.onmousedown = dragStart;
        header.ontouchstart = dragStart;
        eventListeners.push(
            { element: header, event: 'mousedown', handler: dragStart },
            { element: header, event: 'touchstart', handler: dragStart }
        );
    }

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
            const clickHandler = () => {
                highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
            };
            mark.addEventListener('click', clickHandler);
            eventListeners.push({ element: mark, event: 'click', handler: clickHandler });
            scrollbar.appendChild(mark);
        });
    }

    function setupPopupEventListeners(popup) {
        let hideTimer;
        const mouseOverHandler = e => {
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
        };
        document.body.addEventListener('mouseover', mouseOverHandler);
        eventListeners.push({ element: document.body, event: 'mouseover', handler: mouseOverHandler });

        const mouseOutHandler = e => {
            if (e.target.classList.contains('usurpia-highlight')) {
                hideTimer = setTimeout(() => { popup.style.display = 'none'; }, 200);
            }
        };
        document.body.addEventListener('mouseout', mouseOutHandler);
        eventListeners.push({ element: document.body, event: 'mouseout', handler: mouseOutHandler });

        const popupEnterHandler = () => { clearTimeout(hideTimer); };
        popup.addEventListener('mouseenter', popupEnterHandler);
        eventListeners.push({ element: popup, event: 'mouseenter', handler: popupEnterHandler });

        const popupLeaveHandler = () => { popup.style.display = 'none'; };
        popup.addEventListener('mouseleave', popupLeaveHandler);
        eventListeners.push({ element: popup, event: 'mouseleave', handler: popupLeaveHandler });
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

    function setupMutationObserver() {
        if (!window.MutationObserver) {
            console.warn("Usurpia Lens: MutationObserver not supported in this browser.");
            return;
        }

        let timeout;
        const debounceAnalysis = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (document.body.classList.contains('usurpia-active')) {
                    runAnalysis();
                }
            }, 500);
        };

        mutationObserver = new MutationObserver(debounceAnalysis);
        mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    main();
})();
