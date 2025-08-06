// Usurpia Lens Bookmarklet - V2.2 (The "Full Spectrum" Model)
// This version incorporates the complete, collaboratively expanded dictionary.
// It maps the system's influence from core mechanics to personal experience.

(function() {

    // --- CONFIGURATION & DICTIONARY ---
    const config = {
        settings: {
            maxHighlights: 15, // An intelligent cap to prevent overwhelm and encourage curiosity.
            depth: 'summary'
        },
        dictionary: [
            // --- CORE SYSTEM MECHANICS ---
            {
                terms: ["economic growth", "growth", "growing pie"],
                primaryTerm: "economic growth",
                explanations: {
                    headline: "Mandatory Expansion",
                    summary: "The system's core imperative. It must expand exponentially to service the interest on past debt, chaining a mathematical function to a finite planet, which guarantees a future collision."
                }
            }, {
                terms: ["debt", "indebtedness"],
                primaryTerm: "debt",
                explanations: {
                    headline: "The Tool of Control",
                    summary: "Presented as a tool for commerce, its primary function in this system is control. Perpetual indebtedness ensures compliance, transfers power, and compels participation in the 'Competition Trap'."
                }
            }, {
                term: "debt-money",
                explanations: {
                    headline: "Interest-Bearing Debt-Money",
                    summary: "The core design flaw. Virtually all money is created by private banks when they make loans, meaning the money supply itself is an instrument of debt."
                }
            }, {
                term: "interest",
                explanations: {
                    headline: "The Extraction Engine",
                    summary: "The 'something for nothing' charge that powers wealth extraction from the real economy and mathematically necessitates the 'Mandatory Expansion'."
                }
            }, {
                term: "usury",
                explanations: {
                    headline: "The Ancient Poison",
                    summary: "The ancient term for lending money at interest, which was historically contained as a social poison before being rebranded as 'progress' to create the modern system."
                }
            }, {
                term: "financialization",
                explanations: {
                    headline: "The Casino Economy",
                    summary: "The core process of turning every aspect of the real economy (housing, food, health) into a speculative, debt-based asset, detaching 'value' from reality and subjecting it to the system's extractive logic."
                }
            }, {
                term: "inflation",
                explanations: {
                    headline: "Systemic Currency Debasement",
                    summary: "A necessary feature of the system, used to manage unpayable debt levels by devaluing the currency. This functions as a hidden tax, eroding the savings of the populace to keep the system afloat."
                }
            }, {
                term: "competition trap",
                explanations: {
                    headline: "Mandated Competition",
                    summary: "The forced state of conflict for survival, caused by the mathematical scarcity in the money system (always more debt owed than money exists). It structurally pits individuals and businesses against one another."
                }
            }, {
                term: "inequality",
                explanations: {
                    headline: "A Feature, Not a Bug",
                    summary: "The guaranteed mathematical outcome of a system where compounding interest systemically funnels wealth from debtors (the majority) to creditors (the few)."
                }
            }, {
                term: "legal tender",
                explanations: {
                    headline: "The Mandatory Game",
                    summary: "The law that forces citizens to use the state-sanctioned, debt-based currency to pay taxes and participate in society. This eliminates alternatives and ensures everyone is locked into the system."
                }
            },

            // --- INSTITUTIONAL WORDS ---
            {
                terms: ["Federal Reserve", "The Fed", "central bank"],
                primaryTerm: "Federal Reserve",
                explanations: {
                    headline: "The Creditors' Cartel",
                    summary: "A private banking cartel with a public mandate. Its primary function is not to serve the public, but to manage the stability and profitability of the debt-based system for its member banks."
                }
            }, {
                terms: ["The Treasury", "Treasury Department"],
                primaryTerm: "The Treasury",
                explanations: {
                    headline: "The Public Partner",
                    summary: "The government's financial arm that works in lockstep with the central bank. It issues the government bonds which become the foundational collateral for new debt-money creation by the private banking system."
                }
            }, {
                terms: ["IMF", "World Bank"],
                primaryTerm: "IMF",
                explanations: {
                    headline: "The Global Debt Enforcers",
                    summary: "Institutions that use debt as a neocolonial weapon. They impose austerity and force the privatization of public assets on debtor nations, ensuring resources flow from the global south to the creditor class."
                }
            }, {
                terms: ["Wall Street"],
                primaryTerm: "Wall Street",
                explanations: {
                    headline: "The System's Command Center",
                    summary: "The symbolic and operational heart of financialization, where the real economy is abstracted into speculative instruments and the system's extracted wealth is concentrated and managed."
                }
            }, {
                terms: ["politician", "lawmaker", "government"],
                primaryTerm: "politician",
                explanations: {
                    headline: "The System Manager",
                    summary: "An actor in the political theater, primarily tasked with managing public discontent and passing legislation that serves the interests of the system's main beneficiaries (their donors)."
                }
            }, {
                term: "lobbying",
                explanations: {
                    headline: "Systemic Bribery",
                    summary: "The mechanism through which concentrated wealth, generated by the debt-engine, captures the political process. It ensures that laws protect and enhance the system, creating a feedback loop of power."
                }
            }, {
                term: "deregulation",
                explanations: {
                    headline: "Unleashing the Engine",
                    summary: "The process of removing legal and ethical safeguards, allowing the financial engine to operate with greater speed and ruthlessness, accelerating extraction and instability."
                }
            }, {
                term: "austerity",
                explanations: {
                    headline: "Punishment for the Masses",
                    summary: "The policy of cutting public services and social safety nets to ensure that government revenues are prioritized to service debts owed to the wealthy creditor class. It enforces the system's hierarchy."
                }
            }, {
                term: "technocracy",
                explanations: {
                    headline: "The Rule of 'Experts'",
                    summary: "The ideology that the system is too complex for democratic control and must be managed by an unelected, credentialed elite. This disempowers the public and shields the system's core principles from debate."
                }
            }, {
                term: "GDP",
                explanations: {
                    headline: "Gross Destruction Product",
                    summary: "The system's primary metric of 'progress.' A flawed number where pollution, clear-cutting a forest, and building prisons are all counted as economic positives, perfectly revealing the system's perverse values."
                }
            },

            // --- SOCIETAL & CULTURAL WORDS ("HIDDEN IN PLAIN SIGHT") ---
            {
                term: "the economy",
                explanations: {
                    headline: "The Abstraction We Serve",
                    summary: "An abstract concept representing the flow of debt-money, which we are told we must serve. This inverts reality: a sane economy should serve human well-being, not demand its sacrifice."
                }
            }, {
                term: "the market",
                explanations: {
                    headline: "The Myth of the Free Market",
                    summary: "A system presented as free and fair, but which is fundamentally rigged by the centralized control of money creation, giving an insurmountable advantage to the creators of debt."
                }
            }, {
                term: "meritocracy",
                explanations: {
                    headline: "The Noble Lie",
                    summary: "The core myth used to justify inequality. It claims success is based purely on individual talent and effort, ignoring the system's rigged starting positions and the gravitational pull of debt."
                }
            }, {
                term: "success",
                explanations: {
                    headline: "Victory in the Rat Race",
                    summary: "The system's definition of a life well-lived: the accumulation of wealth and status. This channels our life energy into competing within the 'Competition Trap' instead of pursuing intrinsic human values."
                }
            }, {
                terms: ["jobs", "job creation"],
                primaryTerm: "jobs",
                explanations: {
                    headline: "A Means of Debt Servitude",
                    summary: "For the majority, not a source of purpose, but the necessary act of selling one's time to service the debts required to live in the system."
                }
            }, {
                term: "career",
                explanations: {
                    headline: "The Rat Race",
                    summary: "A lifelong commitment to the 'Competition Trap,' often in exchange for status and the means to take on and service ever-larger debts (mortgage, etc.)."
                }
            }, {
                term: "retirement",
                explanations: {
                    headline: "A Bet on The Casino",
                    summary: "The modern necessity of gambling one's life savings on speculative financial markets, because the system's inherent inflation makes traditional saving impossible."
                }
            }, {
                term: "consumer",
                explanations: {
                    headline: "The Citizen, Commodified",
                    summary: "The reframing of a human being from an active citizen into a passive vessel for consumption, whose primary civic duty is to take on debt to fuel 'economic growth'."
                }
            }, {
                terms: ["human resources", "human capital"],
                primaryTerm: "human resources",
                explanations: {
                    headline: "The Dehumanization of Labor",
                    summary: "The reframing of human beings as fungible assets or raw materials on a corporate balance sheet, a key part of the 'Humanistic Paradigm's' inversion."
                }
            }, {
                term: "productivity",
                explanations: {
                    headline: "The Efficiency Mandate",
                    summary: "A metric often used to justify wage stagnation and downsizing. The financial gains from 'increased productivity' are systemically funneled to capital holders, not labor."
                }
            }, {
                term: "education",
                explanations: {
                    headline: "The Compliance Engine",
                    summary: "The primary function of the modern education system: to produce compliant, specialized workers and indebted consumers, rather than liberated, critical thinkers who might challenge the system."
                }
            }, {
                term: "media",
                explanations: {
                    headline: "Manufacturing Consent",
                    summary: "A corporate-owned narrative machine that distracts with spectacle and divides with culture wars to prevent the public from questioning the foundational economic system."
                }
            }, {
                term: "news",
                explanations: {
                    headline: "The Distraction Product",
                    summary: "A commercial product, owned by the system's beneficiaries, designed to capture attention and emotional energy. Its purpose is narrative control, not the objective delivery of truth."
                }
            }, {
                term: "scapegoat",
                explanations: {
                    headline: "The Distraction Target",
                    summary: "A crucial tool of social control. When system-induced pain becomes too great, a target (another race, nation, or political group) is used to misdirect public anger away from the system's true architects."
                }
            }, {
                term: "conspiracy",
                explanations: {
                    headline: "The Thought-Terminating Weapon",
                    summary: "The system's rhetorical self-defense. This word is deployed to ridicule and dismiss any rational analysis of its foundational rules, conflating systemic critique with paranoia to shut down debate."
                }
            },

            // --- PERSONAL & RELATIONAL WORDS ---
            {
                term: "student",
                explanations: {
                    headline: "The Trainee Debtor",
                    summary: "An individual being prepared by the 'Education Paradigm' for a life of debt servitude, ensuring their future labor is pre-claimed by the system before they even earn their first dollar."
                }
            }, {
                term: "doctor",
                explanations: {
                    headline: "Agent of the Sickness Industry",
                    summary: "A healer trapped within a 'Healthcare Paradigm' that often finds it more profitable to manage chronic symptoms with expensive drugs than to cultivate genuine wellness or address root causes."
                }
            }, {
                term: "parent",
                explanations: {
                    headline: "The Indebted Guardian",
                    summary: "A caregiver caught in the 'Competition Trap,' often needing dual incomes just to provide basic needs, forced to navigate the industrial 'Food Paradigm' and prepare their child for a future of debt."
                }
            }, {
                term: "anxiety",
                explanations: {
                    headline: "A Rational Response",
                    summary: "The logical psychological state that results from living in a system of constant precarity, mandated competition, and information overload. It is a symptom of the environment, not a personal failing."
                }
            }, {
                term: "stress",
                explanations: {
                    headline: "System Friction",
                    summary: "The physical and mental toll of trying to keep up with the impossible demands of the 'Competition Trap' and the constant pressure to service debt."
                }
            }, {
                term: "depression",
                explanations: {
                    headline: "The System's Twin Collapse",
                    summary: "A term mirroring both the system's economic end-state (a debt collapse) and its primary psychological product: the pervasive sense of hopelessness and alienation from living in a meaningless, extractive system."
                }
            }, {
                term: "addiction",
                explanations: {
                    headline: "A Profitable Escape",
                    summary: "A rational, and often profitable, response to the pain and meaninglessness generated by the system. It provides a temporary escape while often creating new cycles of debt and dependency."
                }
            }, {
                term: "family",
                explanations: {
                    headline: "The Over-Stressed Economic Unit",
                    summary: "A primary source of love and connection, now constantly strained by the need for multiple incomes just to service debt, pay for housing, and stay afloat in the 'Competition Trap'."
                }
            }, {
                term: "community",
                explanations: {
                    headline: "The Eroded Commons",
                    summary: "The web of local trust and mutual support that is systemically dissolved by the 'Competition Trap,' which pits neighbors against each other and forces constant mobility for work."
                }
            }, {
                term: "dating",
                explanations: {
                    headline: "Transactional Romance",
                    summary: "The modern process of seeking a partner, heavily influenced by the 'Love Paradigm's' logic of commodification, status signaling, and transactional value."
                }
            }, {
                term: "house",
                explanations: {
                    headline: "A Financialized Human Need",
                    summary: "A basic need for shelter, transformed by financialization into the primary vehicle for generational debt and a speculative asset for the wealthy."
                }
            }, {
                term: "food",
                explanations: {
                    headline: "The Industrial Commodity",
                    summary: "Our source of nourishment, corrupted by the 'Food Paradigm' into an industrial product designed for shelf-life and profit, not nutrition, leading to widespread chronic illness."
                }
            }, {
                term: "freedom",
                explanations: {
                    headline: "The Freedom to Choose Your Creditor",
                    summary: "The system's redefinition of liberty. It is not freedom from the system, but the consumer 'choice' between different brands of jobs, debts, and distractions within the mandatory game."
                }
            }, {
                term: "hope",
                explanations: {
                    headline: "A Future Financed by Debt",
                    summary: "The natural human aspiration for a better life, channeled by the system into the act of taking on debt. Hope for a home becomes a mortgage; hope for education becomes a student loan."
                }
            }, {
                term: "smartphone",
                explanations: {
                    headline: "The Modern Leash",
                    summary: "A powerful tool of convenience that doubles as a device for mass surveillance ('Technology Paradigm'), constant distraction ('Media Paradigm'), and 24/7 connection to the work machine."
                }
            }
        ].map(item => ({
            ...item,
            primaryTerm: item.primaryTerm || item.term,
            link_free: "https://zipcadia.gumroad.com",
            link_paid: "https://zipcadia.gumroad.com/l/bundle1"
        }))
    };

    // --- CORE LOGIC (V1.6 - Smart Cap Model) ---

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
                candidates.push({
                    node,
                    match,
                    offset
                });
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

        const groupedByNode = highlightsToPerform.reduce((acc, {
            node,
            match,
            offset
        }) => {
            const key = node.textContent;
            if (!acc.has(key)) acc.set(key, {
                node,
                matches: []
            });
            acc.get(key).matches.push({
                match,
                offset
            });
            return acc;
        }, new Map());

        groupedByNode.forEach(({
            node,
            matches
        }) => {
            matches.sort((a, b) => b.offset - a.offset); // Process from end to start
            matches.forEach(({
                match,
                offset
            }) => {
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
        document.body.addEventListener('mouseout', e => {
            if (e.target.classList.contains('usurpia-highlight') && !popup.matches(':hover')) popup.style.display = 'none';
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
        if (x + popupWidth > screenWidth) x = event.clientX - popupWidth - 15;
        if (y + popupHeight > screenHeight) y = event.clientY - popupHeight - 15;
        if (x < 0) x = 5;
        if (y < 0) y = 5;
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;
    }

    main();
})();
