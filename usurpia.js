// Usurpia Lens Bookmarklet - V1.6 (The "Curiosity Engine" Model)
// This version implements a vastly expanded dictionary to maximize the "surprise effect" and hit-rate.
// It relies on the "Smart Cap" feature to prevent overwhelming the user.

(function() {

    // --- CONFIGURATION & DICTIONARY ---
    const config = {
        settings: {
            maxHighlights: 15, // The intelligent cap is now CRITICAL.
            depth: 'summary'
        },
        dictionary: [
            // --- CORE SYSTEM MECHANICS ---
            { terms: ["economic growth", "growth"], primaryTerm: "economic growth", explanations: { headline: "Mandatory Expansion", summary: "The system's mandate to expand exponentially to service interest on past debt." } },
            { term: "debt-money", explanations: { headline: "Interest-Bearing Debt-Money", summary: "The core design flaw: virtually all money is created by private banks as interest-bearing debt." } },
            { term: "interest", explanations: { headline: "The Extraction Engine", summary: "The 'something for nothing' charge that powers wealth extraction and necessitates exponential growth." } },
            { term: "competition trap", explanations: { headline: "Mandated Competition", summary: "The forced state of competition for survival, caused by the mathematical scarcity in the money system." } },
            { term: "usury", explanations: { headline: "The Ancient Poison", summary: "The ancient term for lending money at interest, rebranded as 'progress' to create the modern system." } },
            { term: "inflation", explanations: { headline: "Currency Debasement", summary: "The official narrative obscuring the reality that your money buys less of what matters (housing, education, health)." } },
            { term: "inequality", explanations: { headline: "A Feature, Not a Bug", summary: "The guaranteed mathematical outcome of a system where interest funnels wealth from debtors to creditors." } },
            
            // --- INSTITUTIONAL WORDS ---
            { terms: ["Federal Reserve", "The Fed", "central bank"], primaryTerm: "Federal Reserve", explanations: { headline: "The Creditors' Cartel", summary: "A private banking cartel with a public mandate to protect the profitability of the debt-based system." } },
            { term: "GDP", explanations: { headline: "Gross Destruction Product", summary: "A flawed metric where a car crash and a clear-cut forest are counted as economic positives." } },
            { term: "financialization", explanations: { headline: "The Casino Economy", summary: "The process of turning every aspect of the real economy (housing, food, health) into a speculative asset." } },
            { term: "austerity", explanations: { headline: "Punishment for the Poor", summary: "Cutting public services to ensure debts to the wealthy are paid first." } },
            { term: "deregulation", explanations: { headline: "Unleashing the Engine", summary: "Removing legal controls, allowing the financial sector to operate with greater speed and ruthlessness." } },
            { term: "lobbying", explanations: { headline: "Systemic Bribery", summary: "The mechanism through which concentrated wealth captures the political process to write its own rules." } },
            { terms: ["politician", "lawmaker"], primaryTerm: "politician", explanations: { headline: "System Manager", summary: "An actor in the political theater, often more responsive to campaign donors than to voters." } },

            // --- SOCIETAL & CULTURAL WORDS ("HIDDEN IN PLAIN SIGHT") ---
            { term: "the market", explanations: { headline: "The Myth of the Free Market", summary: "A system heavily rigged by the central control of money creation by a banking cartel." } },
            { term: "consumer", explanations: { headline: "The Citizen, Commodified", summary: "The reframing of a citizen as a passive vessel for consumption, whose duty is to take on debt." } },
            { terms: ["jobs", "job creation"], primaryTerm: "jobs", explanations: { headline: "Debt Servitude", summary: "For many, not a source of purpose, but the act of selling one's time to service debt and survive." } },
            { term: "career", explanations: { headline: "The Rat Race", summary: "A lifelong commitment to the 'Competition Trap', often in exchange for status and the means to service larger debts." } },
            { term: "retirement", explanations: { headline: "A Bet on The Casino", summary: "The modern need to gamble on financial markets because traditional savings are constantly devalued by inflation." } },
            { terms: ["human resources", "human capital"], primaryTerm: "human resources", explanations: { headline: "The Dehumanization of Labor", summary: "The reframing of human beings as fungible assets on a corporate balance sheet." } },
            { term: "productivity", explanations: { headline: "The Efficiency Mandate", summary: "A metric often used to justify wage stagnation while the gains are captured by capital holders." } },
            { term: "media", explanations: { headline: "Manufacturing Consent", summary: "A corporate-owned narrative machine that distracts and divides to prevent questioning of the economic system." } },
            { term: "news", explanations: { headline: "The Distraction Product", summary: "A commercial product designed to capture your attention and emotional energy, not to deliver truth." } },
            
            // --- PERSONAL & RELATIONAL WORDS ---
            { term: "student", explanations: { headline: "Trainee Debtor", summary: "An individual being prepared for a life of debt servitude through the student loan system." } },
            { term: "anxiety", explanations: { headline: "A Rational Response", summary: "The logical psychological state that results from living in a system of constant precarity and competition." } },
            { term: "stress", explanations: { headline: "System Friction", summary: "The physical and mental toll of trying to keep up with the demands of the 'Competition Trap'." } },
            { term: "house", explanations: { headline: "A Financial Asset", summary: "A basic human need for shelter, transformed by financialization into a primary vehicle for debt and speculation." } },
            { term: "bread", explanations: { headline: "The Interest Loaf", summary: "A staple food where a significant portion of its final price pays for the interest on debts accumulated throughout its supply chain." } },
            { term: "family", explanations: { headline: "The Economic Unit", summary: "A source of love and connection, now often strained by the need for dual incomes just to service debt and stay afloat." } },
            { term: "dating", explanations: { headline: "Transactional Romance", summary: "The modern process of seeking a partner, often influenced by the system's logic of commodification and transactional value." } },
            { term: "vacation", explanations: { headline: "A Financed Escape", summary: "A temporary reprieve from debt servitude, frequently paid for with more debt, ensuring the cycle continues." } },
            { term: "smartphone", explanations: { headline: "The Modern Leash", summary: "A powerful tool of convenience that doubles as a device for surveillance, distraction, and 24/7 connection to the work machine." } },
            { term: "doctor", explanations: { headline: "Agent of the Sickness Industry", summary: "A healer trapped within a healthcare system that often finds treating chronic symptoms more profitable than creating true wellness." } }

        ].map(item => ({ // This part adds your links to every item automatically
            ...item,
            primaryTerm: item.primaryTerm || item.term,
            link_free: "https://zipcadia.gumroad.com",
            link_paid: "https://zipcadia.gumroad.com/l/bundle1"
        }))
    };

    // --- CORE LOGIC (V1.5 - Smart Cap Model) ---

    function main() {
        if (document.getElementById('usurpia-popup')) {
            console.log("Usurpia Lens is already active."); return;
        }
        console.log("Usurpia Lens Activated.");
        injectStyles();
        const popup = createPopup();
        highlightKeywords();
        setupEventListeners(popup);
    }

    function injectStyles() {
        const style = document.createElement('style'); style.id = 'usurpia-styles';
        style.innerHTML = `
            .usurpia-highlight { background-color: #FFFF99 !important; color: #000 !important; cursor: help; padding: 1px 2px; border-radius: 3px; }
            #usurpia-popup { position: fixed; display: none; width: 280px; max-width: 90%; background-color: #fff; color: #111; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 15px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; z-index: 999999999; text-align: left; }
            #usurpia-popup p { margin: 0 0 12px 0; padding: 0; }
            #usurpia-popup a { color: #007bff !important; text-decoration: underline !important; display: block; margin-top: 5px; }
            #usurpia-popup .usurpia-link-paid { font-weight: bold; color: #0056b3 !important; }
        `;
        document.head.appendChild(style);
    }

    function createPopup() {
        let popup = document.createElement('div'); popup.id = 'usurpia-popup';
        document.body.appendChild(popup);
        return popup;
    }

    function highlightKeywords() {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: node => (node.parentElement.tagName.match(/^(SCRIPT|STYLE|TEXTAREA|INPUT|SELECT|A)$/i) || node.parentElement.closest('.usurpia-highlight, #usurpia-popup')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        });

        let candidates = [];
        let textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);

        const allTerms = config.dictionary.flatMap(d => d.terms || [d.term]);
        if (allTerms.length === 0) return;
        const masterRegex = new RegExp(`\\b(${allTerms.join('|')})\\b`, 'gi');

        textNodes.forEach(node => {
            node.nodeValue.replace(masterRegex, (match, offset) => {
                candidates.push({ node, match, offset });
            });
        });

        let highlightsToPerform = candidates;
        if (candidates.length > config.settings.maxHighlights) {
            for (let i = candidates.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
            }
            highlightsToPerform = candidates.slice(0, config.settings.maxHighlights);
        }
        
        const groupedByNode = highlightsToPerform.reduce((acc, {node, match, offset}) => {
            const key = node.textContent; // Use textContent as a key for the Map
            if (!acc.has(key)) acc.set(key, {node, matches: []});
            acc.get(key).matches.push({match, offset});
            return acc;
        }, new Map());
        
        groupedByNode.forEach(({node, matches}) => {
            matches.sort((a,b) => b.offset - a.offset); // Process from end to start to not mess up indices
            matches.forEach(({match, offset}) => {
                const primaryTerm = config.dictionary.find(d => (d.terms || [d.term]).some(t => new RegExp(`^${match}$`, 'i').test(t))).primaryTerm;
                const span = document.createElement('span');
                span.className = 'usurpia-highlight';
                span.setAttribute('data-term', primaryTerm);
                span.textContent = match;
                
                const range = document.createRange();
                range.setStart(node, offset);
                range.setEnd(node, offset + match.length);
                range.deleteContents();
                range.insertNode(span);
            });
        });
    }

    function setupEventListeners(popup) {
        document.body.addEventListener('mouseover', e => {
            if (e.target.classList.contains('usurpia-highlight')) {
                const primaryTerm = e.target.getAttribute('data-term');
                const wordData = config.dictionary.find(w => w.primaryTerm === primaryTerm);
                if (wordData) {
                    const explanationText = wordData.explanations[config.settings.depth] || wordData.explanations['summary'];
                    popup.innerHTML = `
                        <p><strong>${wordData.explanations.headline}:</strong> ${explanationText}</p>
                        <a href="${wordData.link_free}" target="_blank">Get The Full Lens (Free Option)</a>
                        <a href="${wordData.link_paid}" target="_blank" class="usurpia-link-paid">Get The Ambassador's Toolkit</a>
                    `;
                    popup.style.display = 'block';
                    positionPopup(e, popup);
                }
            }
        });
        document.body.addEventListener('mouseout', e => { if (e.target.classList.contains('usurpia-highlight') && !popup.matches(':hover')) popup.style.display = 'none'; });
        popup.addEventListener('mouseleave', () => { popup.style.display = 'none'; });
    }

    function positionPopup(event, popup) {
        let x = event.clientX + 15; let y = event.clientY + 15;
        const screenWidth = window.innerWidth; const screenHeight = window.innerHeight;
        const popupWidth = popup.offsetWidth; const popupHeight = popup.offsetHeight;
        if (x + popupWidth > screenWidth) x = event.clientX - popupWidth - 15;
        if (y + popupHeight > screenHeight) y = event.clientY - popupHeight - 15;
        if (x < 0) x = 5; if (y < 0) y = 5;
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;
    }

    main();
})();
