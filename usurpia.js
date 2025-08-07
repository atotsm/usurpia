javascript:(function() {
// Usurpia Lens v3.2 (First Occurrence)
// This version introduces a key usability enhancement: "first-occurrence-only" highlighting.
// The script now tracks which terms have been highlighted and will only mark the first instance
// of each unique term, reducing clutter and increasing the analytical impact of each highlight.

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
        core_engine: {
            name: "Core Engine",
            isSurgical: true,
            words: [
                { terms: ["economic growth", "growth"], primaryTerm: "economic growth", explanations: { headline: "Mandatory Expansion", summary: "The system's core imperative to expand exponentially to service interest on past debt." }, systemDefense: "Dismissed as 'anti-progress.'", flux_connections: ["Energy Paradigm", "Environment Paradigm", "Work Paradigm"], resonance_prompt: "How has the pressure for constant 'growth' in your workplace affected its culture and your personal stress?" },
                { terms: ["debt", "indebtedness"], primaryTerm: "debt", explanations: { headline: "The Tool of Control", summary: "The primary mechanism for control and wealth transfer. Perpetual indebtedness ensures compliance." }, systemDefense: "Normalized as a 'fact of life' or a 'tool for investment.'", flux_connections: ["Work Paradigm", "Education Paradigm", "Humanistic Paradigm"], resonance_prompt: "Beyond a financial number, how has the feeling of debt influenced your major life choices?" },
                { term: "debt-money", explanations: { headline: "Interest-Bearing Debt-Money", summary: "The core design flaw: virtually all money is created by private banks as interest-bearing debt." }, flux_connections: ["Governance Paradigm", "Justice Paradigm"], resonance_prompt: "If money is created with debt, where does the money to pay the interest come from?" },
                { term: "interest", explanations: { headline: "The Extraction Engine", summary: "The 'something for nothing' charge that powers wealth extraction and necessitates exponential growth." }, flux_connections: ["Inequality", "Financialization"], resonance_prompt: "Consider your mortgage or credit card. How much of your life's energy is spent working to pay interest?" },
                { term: "usury", explanations: { headline: "The Ancient Poison", summary: "The ancient term for lending money at interest, rebranded as 'progress' to create the modern system." }, flux_connections: ["Moral Compromise", "Historical Roots"], resonance_prompt: "Why was this practice once considered a severe sin, and what changed to make it the foundation of our world?" },
                { term: "inflation", explanations: { headline: "Systemic Currency Debasement", summary: "A hidden tax used to manage unpayable debt levels by devaluing the currency and eroding savings." }, flux_connections: ["Poverty as Punishment", "Retirement"], resonance_prompt: "Have your wages kept pace with the rising cost of essentials like housing, food, and education?" },
                { term: "inequality", explanations: { headline: "A Feature, Not a Bug", summary: "The guaranteed mathematical outcome of a system where interest funnels wealth from debtors to creditors." }, systemDefense: "Framed as a natural outcome of 'meritocracy.'", flux_connections: ["Society Paradigm", "Justice Paradigm", "Governance Paradigm"], resonance_prompt: "Where do you see the gap between the wealthy and the poor manifest most clearly in your daily life?" },
                { term: "capitalism", explanations: { headline: "The Vehicle for the Engine", summary: "The ideological 'host' commandeered by the Debt-Money Operating System, forcing it into its most extractive and destructive form." }, flux_connections: ["Work Paradigm", "Environment Paradigm", "Society Paradigm"], resonance_prompt: "Is the 'capitalism' you see today focused on creating real value or on extracting financial value?" },
                { term: "loan", explanations: { headline: "The Point of Infection", summary: "The specific transaction where new debt-money is created. It is the vector through which an individual is hooked into the system of perpetual interest payments." }, flux_connections: ["Debt", "Work Paradigm", "Education Paradigm"], resonance_prompt: "How has the need to get (or avoid) a loan shaped a major decision in your life?" }
            ]
        },
        financial_control: {
            name: "Financial & Market Control",
            isSurgical: false,
            words: [
                { term: "financialization", explanations: { headline: "The Casino Economy", summary: "The process of turning every aspect of the real economy (housing, food) into a speculative asset." }, flux_connections: ["Food Paradigm", "Healthcare Paradigm", "Housing"], resonance_prompt: "Where have you seen a basic human need in your community turned into a vehicle for financial speculation?" },
                { term: "credit score", explanations: { headline: "The Digital Leash", summary: "A social control mechanism disguised as a neutral risk assessment, dictating access to shelter and resources to enforce compliance." }, flux_connections: ["Justice Paradigm", "Inequality", "Debt"], resonance_prompt: "Have you ever felt judged not as a person, but by a number you have little direct control over?" },
                { term: "shareholder value", explanations: { headline: "The Alibi for Destruction", summary: "The specific mandate used to justify prioritizing abstract financial returns over employee well-being, ecological health, or public good." }, flux_connections: ["Work Paradigm", "Environment Paradigm", "Moral Compromise"], resonance_prompt: "Have you seen a company make a decision that was good for its stock price but bad for its employees or community?" },
                { term: "pension", explanations: { headline: "A Retirement Bet on The Casino", summary: "A promise of future security that has been systematically financialized, forcing retirees' futures to be dependent on volatile markets." }, flux_connections: ["Financialization", "Work Paradigm", "Inequality"], resonance_prompt: "Does it feel secure to have your future well-being tied to the performance of the stock market?" },
                { term: "mortgage", explanations: { headline: "The 30-Year Debt Servitude Contract", summary: "The primary instrument for binding individuals into long-term debt, turning shelter into a source of interest for banks." }, flux_connections: ["Debt", "Financialization", "Work Paradigm"], resonance_prompt: "How much freedom or creativity in your life has been constrained by the need to make a monthly mortgage payment?" },
                { term: "assets", explanations: { headline: "The World, Quantified for Extraction", summary: "The language used to convert tangible reality—a forest, a home, a public utility—into a line item on a balance sheet for financial extraction." }, flux_connections: ["Financialization", "Environment Paradigm", "GDP"], resonance_prompt: "What is lost when a forest is described only as a 'timber asset'?" },
                { term: "dividends", explanations: { headline: "The Siphon of Corporate Earnings", summary: "The specific mechanism for funneling wealth from a productive company directly to the holders of capital, often at the expense of wages." }, flux_connections: ["Inequality", "Shareholder Value", "Work Paradigm"], resonance_prompt: "When a company announces record profits and dividends but also has layoffs, where is the value flowing?" },
                { term: "stimulus", explanations: { headline: "An Injection of New Debt", summary: "The act of creating vast new sums of debt-money to prevent a systemic collapse, often designed to inflate asset prices and benefit the wealthy." }, flux_connections: ["Debt", "Governance Paradigm", "Inequality"], resonance_prompt: "During the last 'stimulus,' did the money seem to help ordinary people or large corporations more?" }
            ]
        },
        governance_policy: {
            name: "Governance & Policy",
            isSurgical: false,
            words: [
                { terms: ["Federal Reserve", "The Fed", "central bank"], primaryTerm: "Federal Reserve", explanations: { headline: "The Creditors' Cartel", summary: "A private banking cartel that manages the stability and profitability of the debt-based system." }, flux_connections: ["Governance Paradigm", "Debt-Money"], resonance_prompt: "Does an institution that is owned by private banks have the public's best interest as its primary goal?" },
                { term: "lobbying", explanations: { headline: "Systemic Bribery", summary: "The mechanism through which concentrated wealth captures the political process to protect the system." }, flux_connections: ["Governance Paradigm", "Justice Paradigm", "Media Paradigm"], resonance_prompt: "When you see a policy that harms the public but benefits an industry, do you suspect this is at play?" },
                { term: "technocracy", explanations: { headline: "The Rule of 'Experts'", summary: "The ideology that the system is too complex for democratic control, shielding it from debate." }, systemDefense: "The 'Appeal to Complexity' used to disempower public debate.", flux_connections: ["Education Paradigm", "Governance Paradigm"], resonance_prompt: "Have you ever felt that an issue was framed as too 'technical' for you to have a valid opinion on it?" },
                { term: "GDP", explanations: { headline: "Gross Destruction Product", summary: "A flawed metric where pollution and prisons count as economic positives." }, flux_connections: ["Environment Paradigm", "Humanistic Paradigm"], resonance_prompt: "What important aspects of your life (family time, clean air) are treated as worthless by this metric of 'progress'?" },
                { term: "austerity", explanations: { headline: "Punishment for the Public", summary: "The specific policy of cutting public services to ensure that government debts to the financial creditor class are paid first." }, flux_connections: ["Governance Paradigm", "Inequality", "Poverty as Punishment"], resonance_prompt: "In your community, have you seen cuts to libraries, parks, or schools justified by 'budget shortfalls'?" },
                { term: "deregulation", explanations: { headline: "Unleashing the Financial Engine", summary: "The specific act of removing legal controls on the financial industry, allowing its extractive processes to operate with greater speed." }, flux_connections: ["Financialization", "Governance Paradigm", "Environment Paradigm"], resonance_prompt: "Can you think of a major crisis (financial, environmental) that was preceded by this?" },
                { term: "bipartisan", explanations: { headline: "The Consensus of the Captured", summary: "A political signal that a proposal serves the core interests of the system, endorsed by both sides of the political theater to manufacture consent." }, flux_connections: ["Governance Paradigm", "Media Paradigm"], resonance_prompt: "When politicians who normally disagree suddenly agree on a major spending bill, who truly benefits?" },
                { term: "national security", explanations: { headline: "The Ultimate Justification", summary: "A powerful term used to justify massive government debt, endless wars, and domestic surveillance." }, flux_connections: ["Peace Paradigm", "Technology Paradigm", "Governance Paradigm"], resonance_prompt: "How often is this term used to justify actions that have little to do with the actual safety of citizens?" },
                { term: "law", explanations: { headline: "The System's Code of Conduct", summary: "The set of enforceable rules designed primarily to protect the system's core function: the sanctity of debt contracts and the rights of capital." }, flux_connections: ["Justice Paradigm", "Governance Paradigm"], resonance_prompt: "Does the legal system seem more focused on protecting property and contracts or on ensuring human well-being?" },
                { term: "aid", explanations: { headline: "The Velvet Glove of Control", summary: "Presented as charity, but often functions as a tool for creating debt traps and dependency, without altering the underlying extractive system." }, flux_connections: ["Geopolitics Paradigm", "Governance Paradigm"], resonance_prompt: "Does international aid seem to lift countries out of poverty or trap them in cycles of debt?" }
            ]
        },
        work_culture: {
            name: "Work & Corporate Culture",
            isSurgical: false,
            words: [
                { terms: ["jobs", "job creation"], primaryTerm: "jobs", explanations: { headline: "A Means of Debt Servitude", summary: "For many, the necessary act of selling one's time to service the debts required to live in the system." }, flux_connections: ["Work Paradigm", "Debt", "Humanistic Paradigm"], resonance_prompt: "Have you ever felt pressure to choose a job for financial security over one of personal meaning?" },
                { term: "productivity", explanations: { headline: "The Efficiency Mandate", summary: "A metric often used to justify wage stagnation and downsizing, where the gains are captured by capital, not shared with labor." }, flux_connections: ["Work Paradigm", "Inequality", "Technology Paradigm"], resonance_prompt: "Have you worked in a place where technology increased 'productivity,' but the main result was more stress or fewer jobs?" },
                { term: "downsizing", explanations: { headline: "The Human Cost of Shareholder Value", summary: "A corporate euphemism for firing employees to cut costs, almost always in service of short-term stock performance." }, flux_connections: ["Work Paradigm", "Shareholder Value"], resonance_prompt: "Who bears the real, long-term cost of this decision: the company's stock price or the community?" },
                { term: "performance review", explanations: { headline: "The Ritual of the Competition Trap", summary: "A formal mechanism for ranking individuals against each other, reinforcing the Competition Trap and justifying unequal pay." }, flux_connections: ["Work Paradigm", "Society Paradigm", "Inequality"], resonance_prompt: "Have these rituals fostered genuine improvement or have they created anxiety and competition among colleagues?" },
                { term: "human resources", explanations: { headline: "The Dehumanization of Labor", summary: "The reframing of human beings as fungible, manageable assets on a corporate balance sheet." }, flux_connections: ["Humanistic Paradigm", "Work Paradigm"], resonance_prompt: "How does it feel to be referred to as a 'resource'?" },
                { term: "business", explanations: { headline: "The Engine's Local Agent", summary: "An entity, regardless of its owner's intent, that is forced to operate according to the rules of the Competition Trap to survive." }, flux_connections: ["Work Paradigm", "Competition Trap", "Moral Compromise"], resonance_prompt: "Have you seen a small business owner you admire have to make compromises to stay afloat?" },
                { term: "side hustle", explanations: { headline: "The Normalization of Precarity", summary: "A modern term for the necessity of working multiple jobs to survive, presented as an empowering choice rather than a symptom of wage stagnation." }, flux_connections: ["Work Paradigm", "Inequality", "Peace Paradigm"], resonance_prompt: "Is the rise of the 'side hustle' a sign of entrepreneurial freedom or economic desperation?" },
                { term: "supply chain", explanations: { headline: "The Debt-Fueled Global Conveyor", summary: "A network where every link is laden with its own debt, the interest on which is embedded in the final price of every product." }, flux_connections: ["Financialization", "Work Paradigm", "Environment Paradigm"], resonance_prompt: "When a product seems cheap, who or what, somewhere along this chain, is paying the hidden cost?" },
                { term: "rat-race", explanations: { headline: "The Lived Experience of the Trap", summary: "The daily psychological grind of the Competition Trap, sacrificing time and health on an endless treadmill of work and debt." }, flux_connections: ["Competition Trap", "Work Paradigm", "Peace Paradigm"], resonance_prompt: "What would you do with your life if you could step off this treadmill tomorrow?" }
            ]
        },
        societal_control: {
            name: "Societal Narratives & Control",
            isSurgical: false,
            words: [
                { term: "the economy", explanations: { headline: "The Abstraction We Serve", summary: "A concept we are told we must serve, inverting the reality that an economy should serve human well-being." }, flux_connections: ["Humanistic Paradigm", "Work Paradigm"], resonance_prompt: "How often do you hear 'it's for the good of the economy' used to justify actions that seem to harm people?" },
                { term: "meritocracy", explanations: { headline: "The Noble Lie", summary: "The myth used to justify inequality by ignoring the system's rigged starting positions and the pull of debt." }, systemDefense: "A powerful tool for blaming the victims of the 'Competition Trap.'", flux_connections: ["Education Paradigm", "Society Paradigm", "Inequality"], resonance_prompt: "Does pure meritocracy hold up when you consider the impact of inherited wealth or crushing debt?" },
                { term: "media", explanations: { headline: "Manufacturing Consent", summary: "A corporate-owned narrative machine that distracts and divides to protect the economic status quo." }, systemDefense: "Defended under the banner of a 'free press.'", flux_connections: ["Media Paradigm", "Governance Paradigm", "Society Paradigm"], resonance_prompt: "Does the news spend more time on divisive social issues than on the mechanics of the financial system?" },
                { term: "conspiracy", explanations: { headline: "The Thought-Terminating Weapon", summary: "A word deployed to ridicule and dismiss any rational analysis of the system's foundational rules." }, systemDefense: "Works by conflating a critique of the *rules* with a belief about a secret cabal of *players*.", flux_connections: ["Media Paradigm", "Society Paradigm"], resonance_prompt: "Have you ever hesitated to discuss a systemic issue for fear of being labeled with this term?" },
                { term: "scapegoat", explanations: { headline: "The Distraction Target", summary: "When system-induced pain becomes unbearable, a target is selected to absorb the public's anger, misdirecting it from the architects of the system." }, flux_connections: ["Media Paradigm", "Society Paradigm", "Justice Paradigm"], resonance_prompt: "When you see intense media focus on the supposed failings of one group, what larger issue might be being ignored?" },
                { term: "jew", explanations: { headline: "The System's Perfect Lightning Rod", summary: "The most historically potent Scapegoat used to misdirect anger from the impersonal mechanism of usury onto a specific group of people." }, flux_connections: ["Scapegoat", "Media Paradigm", "Historical Roots"], resonance_prompt: "How does focusing on a group of people prevent us from analyzing the mathematical rules of the system itself?" },
                { term: "war", explanations: { headline: "A Profit Center & Reset Mechanism", summary: "The most extreme expression of the Peace Paradigm's inversion. Immensely profitable, it justifies new debt and serves as a tool for resource seizure." }, flux_connections: ["Peace Paradigm", "Geopolitics Paradigm", "Debt"], resonance_prompt: "Who profits from war, and who pays the price?" },
                { term: "bias", explanations: { headline: "The Weapon of Division", summary: "The system's Competition Trap naturally amplifies our latent biases. The Media Paradigm then weaponizes this division to prevent a unified populace." }, flux_connections: ["Society Paradigm", "Media Paradigm", "Competition Trap"], resonance_prompt: "How are we encouraged to blame each other for problems that may have a systemic root?" },
                { term: "consumer", explanations: { headline: "The Citizen, Commodified", summary: "The reframing of a citizen as a passive economic unit whose primary social duty is to borrow and spend, fueling the mandatory growth engine." }, flux_connections: ["Humanistic Paradigm", "Work Paradigm", "Debt"], resonance_prompt: "How does it change your perspective to think of yourself as a 'citizen' rather than a 'consumer'?" },
                { term: "student loan", explanations: { headline: "The Indenture of the Young", summary: "The specific debt instrument used to capture the next generation, ensuring they begin their working lives already deep within the Competition Trap." }, flux_connections: ["Education Paradigm", "Debt", "Work Paradigm"], resonance_prompt: "How does the prospect of decades of payments affect a student's choice of major or career path?" }
            ]
        },
        health_body: {
            name: "Health, Body & Planet",
            isSurgical: false,
            words: [
                { term: "sustainability", explanations: { headline: "Sustaining the Un-sustainable", summary: "A term co-opted to mean 'making exponential growth appear green,' ignoring the impossibility of infinite growth on a finite planet." }, flux_connections: ["Environment Paradigm", "Energy Paradigm", "GDP"], resonance_prompt: "Does 'sustainable growth' sound like a logical possibility or a contradiction in terms?" },
                { term: "bread", explanations: { headline: "The Interest Loaf", summary: "A staple food where a significant portion of its final price pays for the interest on debts accumulated throughout its entire supply chain." }, flux_connections: ["Food Paradigm", "Financialization", "Debt"], resonance_prompt: "What does it mean if even a simple loaf of bread is carrying its own burden of interest?" },
                { term: "prescription", explanations: { headline: "The Tool of Sickness Management", summary: "The primary output of a Healthcare Paradigm that often prioritizes the profitable, long-term management of symptoms over cures." }, flux_connections: ["Healthcare Paradigm", "Financialization"], resonance_prompt: "Is our healthcare system designed for health, or is it designed to manage sickness?" },
                { term: "self-care", explanations: { headline: "The Privatization of Well-being", summary: "The modern reframing of coping with systemic stress as an individual, consumer-based responsibility. It creates a market to treat the symptoms of a sick system." }, flux_connections: ["Healthcare Paradigm", "Humanistic Paradigm", "Society Paradigm"], resonance_prompt: "Is 'self-care' a solution to burnout, or is it a temporary patch on a systemic problem?" }
            ]
        },
        technology_amplifiers: {
            name: "Technology & Amplifiers",
            isSurgical: false,
            words: [
                { term: "algorithm", explanations: { headline: "The New Engine of Control", summary: "Presented as a neutral tool, it is deployed to make the system's mechanisms of control more efficient: algorithmic censorship, predictive policing, and work automation." }, flux_connections: ["Technology Paradigm", "Media Paradigm", "Justice Paradigm"], resonance_prompt: "Who writes the rules for the algorithms that curate your reality? What are their goals?" }
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
    if (document.getElementById('usurpia-panel-v3-2')) {
        document.getElementById('usurpia-panel-v3-2').remove();
        cleanupHighlights();
        return;
    }
    console.log("Usurpia Lens v3.2 (First Occurrence) Activated.");
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
    const scrollbar = document.getElementById('usurpia-scrollbar-v3-2');
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
    const alreadyHighlightedTerms = new Set(); // <<< The new tracker for unique terms

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: n => (n.parentElement.closest('script, style, textarea, input, select, a, .usurpia-highlight, #usurpia-popup-v3-2, #usurpia-panel-v3-2')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
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
            const entry = activeTermEntries.find(d => (d.terms || [d.term]).some(t => t.toLowerCase() === matchedText.toLowerCase()));

            if (entry && !alreadyHighlightedTerms.has(entry.primaryTerm)) { // <<< The crucial check
                alreadyHighlightedTerms.add(entry.primaryTerm); // <<< Mark this term as highlighted

                const offset = match.index;
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
    let style = document.getElementById('usurpia-styles-v3-2');
    if (style) return;
    style = document.createElement('style');
    style.id = 'usurpia-styles-v3-2';
    style.innerHTML = `
        .usurpia-highlight { background-color: #FFFF99 !important; color: #000 !important; cursor: help; padding: 1px 2px; border-radius: 3px; }
        #usurpia-popup-v3-2 { position: fixed; display: none; width: 320px; max-width: 90%; background-color: #fff; color: #111; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 15px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; z-index: 2147483647; text-align: left; }
        #usurpia-popup-v3-2 p { margin: 0 0 12px 0; padding: 0; }
        #usurpia-popup-v3-2 .usurpia-popup-section { border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px; }
        #usurpia-popup-v3-2 .usurpia-popup-section strong { display: block; margin-bottom: 5px; font-size: 13px; }
        #usurpia-popup-v3-2 .usurpia-defense strong { color: #c0392b; }
        #usurpia-popup-v3-2 .usurpia-flux strong { color: #2980b9; }
        #usurpia-popup-v3-2 .usurpia-flux-list { list-style-type: '→ '; font-size: 13px; padding-left: 20px; margin: 0; color: #34495e; }
        #usurpia-popup-v3-2 .usurpia-resonance { font-style: italic; color: #2c3e50; font-size: 13px; }
        #usurpia-popup-v3-2 .usurpia-resonance strong { color: #8e44ad; }
        #usurpia-popup-v3-2 .usurpia-links { border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px; }
        #usurpia-popup-v3-2 .usurpia-links a { display: block; color: #007bff !important; text-decoration: underline !important; margin-top: 5px; font-size: 13px; }
        #usurpia-popup-v3-2 .usurpia-links a.usurpia-link-paid { font-weight: bold; color: #0056b3 !important; }
        #usurpia-panel-v3-2 { position: fixed; bottom: 20px; left: 20px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 2147483646; padding: 10px 15px; font-family: sans-serif; font-size: 13px; color: #212529; min-width: 240px; }
        #usurpia-panel-v3-2-header { padding: 8px 0; cursor: move; text-align: center; font-weight: bold; font-size: 14px; border-bottom: 1px solid #dee2e6; margin-bottom: 10px; user-select: none; }
        #usurpia-panel-v3-2 .usurpia-control-group { margin-top: 12px; }
        #usurpia-panel-v3-2 label { display: block; margin-bottom: 6px; font-weight: bold; }
        #usurpia-panel-v3-2 .usurpia-density-control button { background: #e9ecef; border: 1px solid #ced4da; padding: 6px 10px; cursor: pointer; flex-grow: 1; }
        #usurpia-panel-v3-2 .usurpia-density-control button.active { background: #007bff; color: white; border-color: #007bff; font-weight: bold; }
        #usurpia-panel-v3-2 .usurpia-density-control { display: flex; }
        #usurpia-panel-v3-2 .usurpia-density-control button:first-child { border-radius: 4px 0 0 4px; }
        #usurpia-panel-v3-2 .usurpia-density-control button:last-child { border-radius: 0 4px 4px 0; }
        #usurpia-panel-v3-2 .usurpia-toggle-switch { display: flex; align-items: center; justify-content: space-between; }
        #usurpia-scrollbar-v3-2 { position: fixed; top: 0; right: 0; width: 10px; height: 100%; z-index: 2147483645; }
        .usurpia-scrollbar-mark { position: absolute; right: 0; width: 10px; height: 3px; background: #FF4500; opacity: 0.6; cursor: pointer; }
    `;
    document.head.appendChild(style);
}

function createControlPanel() {
    const panel = document.createElement('div');
    panel.id = 'usurpia-panel-v3-2';
    panel.innerHTML = `
        <div id="usurpia-panel-v3-2-header">Usurpia Lens v3.2</div>
        <div class="usurpia-toggle-switch">
            <label for="usurpia-master-toggle" style="margin-bottom:0;">Lens Enabled</label>
            <input type="checkbox" id="usurpia-master-toggle" checked>
        </div>
        <div class="usurpia-control-group">
            <label>Density</label>
            <div class="usurpia-density-control">
                <button data-density="surgical" title="Highlights only Core Engine terms.">Surgical</button>
                <button data-density="standard" class="active" title="A balanced scan for unique terms.">Standard</button>
                <button data-density="deepscan" title="An extensive scan for unique terms.">Deep Scan</button>
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
    popup.id = 'usurpia-popup-v3-2';
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
    const header = document.getElementById('usurpia-panel-v3-2-header');
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
    scrollbar.id = 'usurpia-scrollbar-v3-2';
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
