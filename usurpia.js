// Usurpia Lens Bookmarklet - V1.2
// This script is the main engine. It is loaded by the bookmarklet and performs all actions.

(function() {

    // --- CONFIGURATION & DICTIONARY ---
    // This is the "brain" of the tool. Add or edit keywords here.
    const config = {
        settings: {
            sensitivity: 10, // Default: highlights up to 10 unique words
            depth: 'summary'  // Default: shows the 'summary' text
        },
        dictionary: [
            {
                term: "economic growth",
                explanations: {
                    headline: "Mandatory Expansion",
                    summary: "The system's mandate to expand exponentially simply to service the interest on past debt. It chains a mathematical function to a finite planet.",
                    full: "A structural necessity for preventing mass defaults in a system where more debt is always owed than money exists. This forces the conversion of nature, community, and relationships into monetized assets, regardless of the human or ecological cost."
                },
                // IMPORTANT: Replace these placeholder links with your actual URLs
                link_free: "https://atotsm.github.io/usurpia/", // Link to your main page for now
                link_paid: "https://your-gumroad.com/ambassador-toolkit"
            },
            {
                term: "inflation",
                explanations: {
                    headline: "Currency Debasement",
                    summary: "The official narrative used to obscure the systemic debasement of the currency. The real inflation is felt in non-discretionary assets like housing and education.",
                    full: "While the official CPI measures a selected basket of goods, the true cost of living (housing, education, healthcare) has dramatically outpaced wages, representing a stealth tax and a transfer of wealth from labor to asset holders."
                },
                link_free: "https://atotsm.github.io/usurpia/",
                link_paid: "https://your-gumroad.com/ambassador-toolkit"
            },
            {
                term: "consumer spending",
                explanations: {
                    headline: "Debt-Fueled Consumption",
                    summary: "Reframing citizens as 'consumers' whose primary civic duty is to take on debt to fuel mandatory 'economic growth'.",
                    full: "This metric treats citizen well-being as synonymous with the rate of consumption. It obscures the fact that much of this 'spending' is financed by debt, further tightening the chains of servitude to the financial system."
                },
                link_free: "https://atotsm.github.io/usurpia/",
                link_paid: "https://your-gumroad.com/ambassador-toolkit"
            },
            {
                term: "Debt-Money",
                explanations: {
                    headline: "Interest-Bearing Debt-Money",
                    summary: "The core design flaw: virtually all money is created by private banks as interest-bearing debt, ensuring there is always more debt owed than money exists.",
                    full: "This creates a system-wide scarcity, forcing all participants into a ruthless game of musical chairs to capture enough money to pay principal plus interest from a pool that is, by definition, insufficient."
                },
                link_free: "https://atotsm.github.io/usurpia/",
                link_paid: "https://your-gumroad.com/ambassador-toolkit"
            },
            {
                term: "Competition Trap",
                explanations: {
                    headline: "Mandated Competition",
                    summary: "The forced state of competition for survival against everyone else, caused by the mathematical certainty of scarcity in the Debt-Money system.",
                    full: "This isn't a choice or a personality trait; it's a structural mandate. It turns potential cooperation into a zero-sum game, eroding social trust and fueling the 'rat race'."
                },
                link_free: "https://atotsm.github.io/usurpia/",
                link_paid: "https://your-gumroad.com/ambassador-toolkit"
            },
             {
                term: "Humanistic Paradigm",
                explanations: {
                    headline: "Reduction of Human Value",
                    summary: "The ultimate consequence of the system: the reduction of human beings to their economic utility as 'consumers' or 'human resources'.",
                    full: "Anything that cannot be priced—creativity, wisdom, play, spiritual connection—is devalued. The purpose of human life becomes serving the economy, when the only sane purpose of an economy is to serve human life."
                },
                link_free: "https://atotsm.github.io/usurpia/",
                link_paid: "https://your-gumroad.com/ambassador-toolkit"
            }
        ]
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
            #usurpia-popup { position: absolute; display: none; width: 280px; background-color: #fff; color: #111; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 15px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; z-index: 999999999; text-align: left; }
            #usurpia-popup p { margin: 0 0 12px 0; padding: 0; }
            #usurpia-popup a { color: #007bff !important; text-decoration: underline !important; display: block; margin-top: 5px; }
            #usurpia-popup .usurpia-link-paid { font-weight: bold; }
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
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let node;
        const nodesToReplace = [];

        while (node = walker.nextNode()) {
            if (node.parentElement.tagName.match(/^(SCRIPT|STYLE|TEXTAREA|INPUT|SELECT)$/i)) continue;
            
            let originalText = node.nodeValue;
            let newHtml = originalText;
            
            config.dictionary.slice(0, config.settings.sensitivity).forEach(word => {
                const regex = new RegExp(`\\b(${word.term})\\b`, 'gi');
                newHtml = newHtml.replace(regex, `<span class="usurpia-highlight" data-term="${word.term}">$1</span>`);
            });

            if (newHtml !== originalText) {
                nodesToReplace.push({ oldNode: node, newHtml: newHtml });
            }
        }

        nodesToReplace.forEach(item => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = item.newHtml;
            const parent = item.oldNode.parentNode;
            while(tempDiv.firstChild) {
                parent.insertBefore(tempDiv.firstChild, item.oldNode);
            }
            parent.removeChild(item.oldNode);
        });
    }

    function setupEventListeners(popup) {
        document.body.addEventListener('mouseover', e => {
            if (e.target.classList.contains('usurpia-highlight')) {
                const term = e.target.getAttribute('data-term');
                const wordData = config.dictionary.find(w => w.term.toLowerCase() === term.toLowerCase());
                
                if (wordData) {
                    const explanationText = wordData.explanations[config.settings.depth] || wordData.explanations['summary'];
                    
                    popup.innerHTML = `
                        <p>${explanationText}</p>
                        <a href="${wordData.link_free}" target="_blank">Learn More: Download The Lens (Free)</a>
                        <a href="${wordData.link_paid}" target="_blank" class="usurpia-link-paid">Become an Ambassador: Get the Toolkit</a>
                    `;
                    
                    popup.style.display = 'block';
                    positionPopup(e, popup);
                }
            }
        });

        document.body.addEventListener('mouseout', e => {
            if (e.target.classList.contains('usurpia-highlight')) {
                if (!popup.matches(':hover')) {
                    popup.style.display = 'none';
                }
            }
        });

        popup.addEventListener('mouseleave', () => {
            popup.style.display = 'none';
        });
    }

    function positionPopup(event, popup) {
        let x = event.pageX + 15;
        let y = event.pageY + 15;
        const screenWidth = window.innerWidth;
        const popupWidth = popup.offsetWidth;

        if (x + popupWidth > screenWidth) {
            x = event.pageX - popupWidth - 15;
        }

        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;
    }

    main();

})();
