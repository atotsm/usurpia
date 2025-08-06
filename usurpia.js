// Usurpia Lens Bookmarklet - V1.4 (Expanded & Tiered Dictionary)
// This script is the main engine. It is loaded by the bookmarklet and performs all actions.

(function() {

    // --- CONFIGURATION & DICTIONARY ---
    // This is the "brain" of the tool. It is strategically tiered to align with future sensitivity controls.
    const config = {
        settings: {
            sensitivity: 25, // Default: highlights up to 25 unique terms for maximum initial impact
            depth: 'summary'  // Default: shows the 'summary' text
        },
        dictionary: [
            // --- TIER 1: THE SILVER BULLETS ---
            {
                terms: ["economic growth", "growth"],
                primaryTerm: "economic growth",
                explanations: { headline: "Mandatory Expansion", summary: "The system's mandate to expand exponentially simply to service the interest on past debt. It chains a mathematical function to a finite planet." }
            },
            {
                term: "debt-money",
                explanations: { headline: "Interest-Bearing Debt-Money", summary: "The core design flaw: virtually all money is created by private banks as interest-bearing debt, ensuring there is always more debt owed than money exists." }
            },
            {
                term: "interest",
                explanations: { headline: "The Extraction Engine", summary: "The 'something for nothing' charge on money creation that powers the entire system of wealth extraction and necessitates exponential growth." }
            },
            {
                term: "competition trap",
                explanations: { headline: "Mandated Competition", summary: "The forced state of competition for survival against everyone else, caused by the mathematical certainty of scarcity in the Debt-Money system." }
            },
            {
                term: "usury",
                explanations: { headline: "The Ancient Poison", summary: "The ancient term for the socially corrosive practice of lending money at interest, which was rebranded as 'progress' to create the modern system." }
            },

            // --- TIER 2: INSTITUTIONAL & PARADIGM CONCEPTS ---
            {
                term: "inflation",
                explanations: { headline: "Currency Debasement", summary: "The official narrative used to obscure the systemic debasement of the currency. The real inflation is felt in non-discretionary assets like housing and education." }
            },
            {
                term: "inequality",
                explanations: { headline: "A Feature, Not a Bug", summary: "The guaranteed mathematical outcome of a system where interest funnels wealth from the many (debtors) to the few (creditors)." }
            },
            {
                terms: ["Federal Reserve", "The Fed"],
                primaryTerm: "Federal Reserve",
                explanations: { headline: "The Creditors' Cartel", summary: "A private banking cartel given a public mandate to manage the money supply, ensuring the stability and profitability of the debt-based system for its member banks." }
            },
            {
                term: "GDP",
                explanations: { headline: "Gross Destruction Product", summary: "A flawed metric that measures the speed of converting nature and community into cash. A clear-cut forest and a car crash both increase GDP." }
            },
            {
                term: "climate change",
                explanations: { headline: "A Symptom of Mandatory Growth", summary: "The inevitable ecological consequence of chaining a physical planet to a mathematical system demanding infinite, compounding growth." }
            },
            {
                term: "student debt",
                explanations: { headline: "The Education Compliance Trap", summary: "A mechanism to ensure the next generation is too financially compromised to challenge the status quo, producing indebted workers instead of critical thinkers." }
            },
            {
                term: "financialization",
                explanations: { headline: "The Casino Economy", summary: "The process of turning every aspect of the real economy (housing, food, health) into a complex, tradable financial asset for speculative profit." }
            },
            {
                term: "austerity",
                explanations: { headline: "Punishment for the Poor", summary: "Policies that cut public services to repay creditors, enforced upon debtor nations and populations to ensure the flow of wealth continues upward." }
            },
            {
                term: "deregulation",
                explanations: { headline: "Unleashing the Engine", summary: "The process of removing legal and social controls on the financial sector, allowing the debt engine to operate with greater speed and ruthlessness." }
            },
            {
                term: "healthcare",
                explanations: { headline: "Sickness as a Revenue Stream", summary: "The commodification of health, where treating symptoms is more profitable than preventing illness, turning human suffering into a debt-generating industry." }
            },
            {
                term: "media",
                explanations: { headline: "Manufacturing Consent", summary: "The corporate-owned narrative machine that distracts, divides, and misinforms the public to prevent any questioning of the foundational economic system." }
            },
            {
                term: "lobbying",
                explanations: { headline: "Systemic Bribery", summary: "The mechanism through which concentrated wealth, generated by the system, captures the political process to ensure the rules continue to favor the creditor class." }
            },
            
            // --- TIER 3: CULTURAL VERNACULAR ---
            {
                term: "consumer",
                explanations: { headline: "The Citizen, Commodified", summary: "The reframing of a citizen as a passive vessel for consumption, whose primary civic duty is to take on debt to fuel mandatory growth." }
            },
            {
                term: "the market",
                explanations: { headline: "The Myth of the Free Market", summary: "A term used to describe a system that is, in fact, heavily rigged by the central control of money creation and interest rates by a banking cartel." }
            },
            {
                terms: ["jobs", "job creation"],
                primaryTerm: "jobs",
                explanations: { headline: "Debt Servitude", summary: "For many, not a source of meaning or purpose, but a necessary act of selling one's time to service debt and survive within the Competition Trap." }
            },
            {
                term: "wages",
                explanations: { headline: "Stagnant by Design", summary: "The price of labor, systematically suppressed because linear wage growth cannot mathematically keep pace with the exponential growth of debt and capital." }
            },
            {
                term: "asset",
                explanations: { headline: "A Claim on Future Labor", summary: "Anything that generates a return, typically by extracting value from the real economy. The system incentivizes the acquisition of assets over productive work." }
            },
            {
                terms: ["human resources", "human capital"],
                primaryTerm: "human resources",
                explanations: { headline: "The Dehumanization of Labor", summary: "The reframing of human beings as fungible, depreciable assets on a corporate balance sheet, valued only for their economic utility." }
            },
            {
                term: "anxiety",
                explanations: { headline: "A Rational Response to an Insane System", summary: "The predictable psychological state that results from living within the 'Competition Trap'—a constant, low-grade fear of being left behind." }
            },
            {
                term: "productivity",
                explanations: { headline: "The Efficiency Mandate", summary: "A measure of output per hour worked, often used to justify wage stagnation while gains from efficiency are captured by capital holders." }
            }
        ].map(item => ({ // This part adds your links to every item automatically
            ...item,
            // If an item has multiple terms, use the primaryTerm for data-linking
            primaryTerm: item.primaryTerm || item.term,
            link_free: "https://zipcadia.gumroad.com",
            link_paid: "https://zipcadia.gumroad.com/l/bundle1"
        }))
    };

    // --- CORE LOGIC ---

    function main() {
        if (document.getElementById('usurpia-popup')) {
             console.log("Usurpia Lens is already active.");
             return;
        }

        console.log("Usurpia Lens Activated.");
        injectStyles();
        const popup = createPopup();
        highlightKeywords();
        setupEventListeners(popup);
    }

    function injectStyles() {
        const style = document.createElement('style');
        style.id = 'usurpia-styles';
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
        let popup = document.createElement('div');
        popup.id = 'usurpia-popup';
        document.body.appendChild(popup);
        return popup;
    }

    function highlightKeywords() {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function(node) {
                // Ignore nodes within scripts, styles, and already highlighted elements
                if (node.parentElement.tagName.match(/^(SCRIPT|STYLE|TEXTAREA|INPUT|SELECT|A)$/i) || node.parentElement.closest('.usurpia-highlight, #usurpia-popup')) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        let nodesToProcess = [];
        while (walker.nextNode()) nodesToProcess.push(walker.currentNode);

        const dictionarySlice = config.dictionary.slice(0, config.settings.sensitivity);

        nodesToProcess.forEach(node => {
            let combinedRegexParts = [];
            dictionarySlice.forEach(wordData => {
                const terms = wordData.terms || [wordData.term];
                terms.forEach(term => {
                    // Escape special characters for regex
                    combinedRegexParts.push(`\\b${term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`);
                });
            });

            if (combinedRegexParts.length === 0) return;
            const masterRegex = new RegExp(combinedRegexParts.join('|'), 'gi');
            
            if (masterRegex.test(node.nodeValue)) {
                const fragment = document.createDocumentFragment();
                let lastIndex = 0;
                node.nodeValue.replace(masterRegex, (match, offset) => {
                    // Add text before the match
                    fragment.appendChild(document.createTextNode(node.nodeValue.substring(lastIndex, offset)));
                    
                    // Find the primary term for the matched word
                    const matchedWordData = dictionarySlice.find(d => (d.terms || [d.term]).some(t => new RegExp(`\\b${t}\\b`, 'i').test(match)));

                    const span = document.createElement('span');
                    span.className = 'usurpia-highlight';
                    span.setAttribute('data-term', matchedWordData.primaryTerm);
                    span.textContent = match;
                    fragment.appendChild(span);
                    
                    lastIndex = offset + match.length;
                });
                // Add any remaining text
                fragment.appendChild(document.createTextNode(node.nodeValue.substring(lastIndex)));
                
                node.parentNode.replaceChild(fragment, node);
            }
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
                        <p>${explanationText}</p>
                        <a href="${wordData.link_free}" target="_blank">Get The Full Lens (Free Option)</a>
                        <a href="${wordData.link_paid}" target="_blank" class="usurpia-link-paid">Get The Ambassador's Toolkit</a>
                    `;
                    
                    popup.style.display = 'block';
                    positionPopup(e, popup);
                }
            }
        });

        document.body.addEventListener('mouseout', e => {
            if (e.target.classList.contains('usurpia-highlight') && !popup.matches(':hover')) {
                popup.style.display = 'none';
            }
        });

        popup.addEventListener('mouseleave', () => {
            popup.style.display = 'none';
        });
    }

    function positionPopup(event, popup) {
        let x = event.clientX + 15;
        let y = event.clientY + 15;
        
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;

        if (x + popupWidth > screenWidth) {
            x = event.clientX - popupWidth - 15;
        }
        if (y + popupHeight > screenHeight) {
            y = event.clientY - popupHeight - 15;
        }
        if (x < 0) x = 5;
        if (y < 0) y = 5;

        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;
    }

    // --- EXECUTION ---
    main();

})();
