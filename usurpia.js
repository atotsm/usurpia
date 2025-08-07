javascript:(function() {
// Usurpia Lens v3.6.1 (Dictionary Integrity Patch)
// This patch adds a critical data integrity check to the v3.6 dictionary consolidation.
// It validates that no primaryTerm is duplicated, preventing the regression of the v3.5 error.
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
                { term: "profit", explanations: { headline: "The System's Prime Directive", summary: "The signal that the system values above all others. In a debt-based economy, the relentless pursuit of profit is necessary to outrun compounding interest." }, flux_connections: ["Work Paradigm", "Financialization", "Moral Compromise"], resonance_prompt: "What have you seen sacrificed in the name of maximizing profit?" },
                { term: "usury", explanations: { headline: "The Ancient Poison", summary: "The ancient term for lending money at interest, rebranded as 'progress' to create the modern system." }, flux_connections: ["Moral Compromise", "Historical Roots"], resonance_prompt: "Why was this practice once considered a severe sin, and what changed to make it the foundation of our world?" },
                { term: "capitalism", explanations: { headline: "The Vehicle for the Engine", summary: "The ideological 'host' commandeered by the Debt-Money Operating System, forcing it into its most extractive and destructive form." }, flux_connections: ["Work Paradigm", "Environment Paradigm", "Society Paradigm"], resonance_prompt: "Is the 'capitalism' you see today focused on creating real value or on extracting financial value?" },
                { term: "commodification", explanations: { headline: "The 'Everything for Sale' Logic", summary: "The system's core process of turning everything—nature, knowledge, relationships, time—into a product that can be priced and sold." }, flux_connections: ["Financialization", "Humanistic Paradigm", "Love Paradigm", "Environment Paradigm"], resonance_prompt: "What part of your life do you feel is being relentlessly turned into something to be bought and sold?" },
                { term: "Usurpia", explanations: { headline: "A Name for the System", summary: "A term for the global empire built upon the principles of usury; a world captured by the logic of debt-money and mandatory growth." }, flux_connections: ["All Paradigms"], resonance_prompt: "Does giving the system a name help you to see it more clearly as a distinct, external force?" }
            ]
        },
        financial_control: {
            name: "Financial & Market Control",
            isSurgical: false,
            words: [
               { term: "financialization", explanations: { headline: "The Casino Economy", summary: "The process of turning every aspect of the real economy (housing, food) into a speculative asset." }, flux_connections: ["Food Paradigm", "Healthcare Paradigm", "Housing"], resonance_prompt: "Where have you seen a basic human need in your community turned into a vehicle for financial speculation?" },
               { term: "inflation", explanations: { headline: "Systemic Currency Debasement", summary: "A hidden tax used to manage unpayable debt levels by devaluing the currency and eroding savings." }, flux_connections: ["Poverty as Punishment", "Retirement"], resonance_prompt: "Have your wages kept pace with the rising cost of essentials?" },
               { term: "stagflation", explanations: { headline: "The Engine Seizing", summary: "The system's nightmare scenario: the 'growth' engine stalls, yet currency debasement (inflation) accelerates, signaling the system can no longer outrun its own debt." }, flux_connections: ["Inflation", "Economic Growth", "Work Paradigm"], resonance_prompt: "When prices rise but wages don't, how does this 'squeeze' feel in your daily life?" },
               { term: "credit score", explanations: { headline: "The Digital Leash", summary: "A social control mechanism disguised as a neutral risk assessment, dictating access to shelter and resources to enforce compliance." }, flux_connections: ["Justice Paradigm", "Inequality", "Debt"], resonance_prompt: "Have you ever felt judged not as a person, but by this number?" },
               { term: "shareholder value", explanations: { headline: "The Alibi for Destruction", summary: "The specific mandate used to justify prioritizing abstract financial returns over employee well-being, ecological health, or public good." }, flux_connections: ["Work Paradigm", "Environment Paradigm", "Moral Compromise"], resonance_prompt: "Have you seen a company make a decision good for its stock but bad for its community?" },
               { term: "mortgage", explanations: { headline: "The 30-Year Debt Servitude Contract", summary: "The primary instrument for binding individuals into long-term debt, turning shelter into a source of interest for banks." }, flux_connections: ["Debt", "Financialization", "Work Paradigm"], resonance_prompt: "How much freedom in your life has been constrained by the need to make a mortgage payment?" },
               { term: "rent", explanations: { headline: "The Subscription Fee for Shelter", summary: "The financialization of a basic human need, representing a constant wealth transfer from tenants to property owners." }, flux_connections: ["Financialization", "Inequality", "Work Paradigm"], resonance_prompt: "What percentage of your income is immediately transferred to a landlord or property owner?" },
               { term: "loan", explanations: { headline: "The Point of Infection", summary: "The specific transaction where new debt-money is created and an individual is hooked into the system of perpetual interest payments." }, flux_connections: ["Debt", "Work Paradigm", "Education Paradigm"], resonance_prompt: "How has the need to get (or avoid) a loan shaped a major decision in your life?" },
               { term: "investment", explanations: { headline: "The Forced Gamble", summary: "In a debt-money system, a desperate act to protect savings from the system's own inflation, forcing citizens to become gamblers in the financial casino." }, flux_connections: ["Financialization", "Inflation", "Retirement"], resonance_prompt: "Are you investing to build something real, or just to make sure your money doesn't lose value?" },
               { terms: ["stock market", "stocks"], primaryTerm: "stock market", explanations: { headline: "The National Casino", summary: "Presented as the barometer of economic health, but functions as a platform for speculative gambling, disconnected from the real economy." }, flux_connections: ["Financialization", "Media Paradigm", "Inequality"], resonance_prompt: "When the stock market hits a new high, does your personal financial situation feel correspondingly better?" },
               { term: "recession", explanations: { headline: "The System Taking a Breath", summary: "A periodic contraction in the mandatory growth system, often the predictable result of debt saturation, used to justify interventions that benefit the financial class." }, flux_connections: ["GDP", "Work Paradigm", "Governance Paradigm"], resonance_prompt: "During a recession, who seems to receive the most help: ordinary people or large financial institutions?" },
               { term: "assets", explanations: { headline: "The World, Quantified for Extraction", summary: "The language used to convert tangible reality—a forest, a home, a public utility—into a line item on a balance sheet for financialization." }, flux_connections: ["Financialization", "Environment Paradigm", "GDP"], resonance_prompt: "What is lost when a forest is described only as a 'timber asset'?" },
               { terms: ["rich", "wealth"], primaryTerm: "wealth", explanations: { headline: "The Creditor Class Position", summary: "In a debt-money system, wealth is the strategic position of being a net creditor, accumulating interest-bearing assets that provide an escape from the Competition Trap." }, flux_connections: ["Inequality", "Financialization", "Justice Paradigm"], resonance_prompt: "Do the wealthiest people get richer by working, or by owning things that grow in value on their own?" },
               { term: "ubi", explanations: { headline: "The System's Pressure-Release Valve", summary: "Universal Basic Income. Often presented as a solution, but within the current system, it can function as a subsidy to landlords and corporations, preventing revolt while changing nothing about the underlying debt-engine." }, systemDefense: "Framed as a compassionate solution, diverting attention from questioning the system that creates the poverty in the first place.", flux_connections: ["Poverty as Punishment", "Governance Paradigm", "Commodification"], resonance_prompt: "Would a UBI solve the core problem of ever-increasing debt, or would it just become another income stream to be extracted by interest and rent?" }
            ]
        },
        governance_policy: {
            name: "Governance & Policy",
            isSurgical: false,
            words: [
                { terms: ["Federal Reserve", "The Fed", "central bank"], primaryTerm: "Federal Reserve", explanations: { headline: "The Creditors' Cartel", summary: "A private banking cartel that manages the stability and profitability of the debt-based system." }, flux_connections: ["Governance Paradigm", "Debt-Money"], resonance_prompt: "Does an institution owned by private banks have the public's best interest as its primary goal?" },
                { term: "lobbying", explanations: { headline: "Systemic Bribery", summary: "The mechanism through which concentrated wealth captures the political process to protect the system." }, flux_connections: ["Governance Paradigm", "Justice Paradigm", "Media Paradigm"], resonance_prompt: "When you see a policy that harms the public but benefits an industry, do you suspect this is at play?" },
                { term: "technocracy", explanations: { headline: "The Rule of 'Experts'", summary: "The ideology that the system is too complex for democratic control, shielding it from debate." }, systemDefense: "The 'Appeal to Complexity' used to disempower public debate.", flux_connections: ["Education Paradigm", "Governance Paradigm"], resonance_prompt: "Have you ever felt that an issue was framed as too 'technical' for you to have a valid opinion on it?" },
                { term: "austerity", explanations: { headline: "Punishment for the Public", summary: "The specific policy of cutting public services to ensure that government debts to the financial creditor class are paid first." }, flux_connections: ["Governance Paradigm", "Inequality", "Poverty as Punishment"], resonance_prompt: "In your community, have you seen cuts to libraries, parks, or schools justified by 'budget shortfalls'?" },
                { term: "deregulation", explanations: { headline: "Unleashing the Financial Engine", summary: "The specific act of removing legal controls on the financial industry, allowing its extractive processes to operate with greater speed." }, flux_connections: ["Financialization", "Governance Paradigm", "Environment Paradigm"], resonance_prompt: "Can you think of a major crisis (financial, environmental) that was preceded by this?" },
                { term: "national security", explanations: { headline: "The Ultimate Justification", summary: "A powerful term used to justify massive government debt, endless wars, and domestic surveillance." }, flux_connections: ["Peace Paradigm", "Technology Paradigm", "Governance Paradigm"], resonance_prompt: "How often is this term used to justify actions that have little to do with the actual safety of citizens?" },
                { term: "law", explanations: { headline: "The System's Code of Conduct", summary: "The set of enforceable rules designed primarily to protect the system's core function: the sanctity of debt contracts and the rights of capital." }, flux_connections: ["Justice Paradigm", "Governance Paradigm"], resonance_prompt: "Does the legal system seem more focused on protecting property or on ensuring human well-being?" },
                { term: "history", explanations: { headline: "The Narrative Written by the Victors", summary: "The official story of the past, often curated to legitimize the present power structure and omit the history of usury's rebranding as 'progress'." }, flux_connections: ["Education Paradigm", "Media Paradigm", "Historical Roots"], resonance_prompt: "Were you taught the history of money and debt as a central force in shaping world events?" },
                { term: "censorship", explanations: { headline: "The Immune Response of the Narrative", summary: "The active suppression of information or analysis that threatens the foundational legitimacy of the system, often under the guise of 'safety'." }, flux_connections: ["Media Paradigm", "Technology Paradigm", "Governance Paradigm"], resonance_prompt: "Are conversations challenging economic power suppressed more than those challenging a political party?" },
                { term: "constitution", explanations: { headline: "The Subordinated Document", summary: "A nation's foundational legal document whose principles are often reinterpreted or ignored when they conflict with the necessities of the financial system." }, flux_connections: ["Governance Paradigm", "Justice Paradigm", "Legal Tender"], resonance_prompt: "Does the principle of 'We the People' seem to hold true when it comes to who controls the money supply?" },
                { term: "politics", explanations: { headline: "The Management of the Narrative", summary: "The art of directing public attention toward partisan conflicts, effectively preventing a unified focus on the underlying economic operating system." }, flux_connections: ["Media Paradigm", "Governance Paradigm", "Society Paradigm"], resonance_prompt: "Do political debates feel like they address root causes, or do they feel like a distracting spectator sport?" },
                { term: "science", explanations: { headline: "The Oracle of the System", summary: "A method of inquiry often captured by funding. Its authority is invoked to legitimize system-serving policies, while research that challenges powerful economic interests is often marginalized." }, flux_connections: ["Science & Research Paradigm", "Healthcare Paradigm", "Technocracy"], resonance_prompt: "Have you noticed that scientific consensus is most loudly promoted when it aligns with a profitable new product or policy?" }
            ]
        },
        societal_narratives: {
            name: "Societal Narratives & Concepts",
            isSurgical: false,
            words: [
                { term: "the economy", explanations: { headline: "The Abstraction We Serve", summary: "A concept we are told we must serve, inverting the reality that an economy should serve human well-being." }, flux_connections: ["Humanistic Paradigm", "Work Paradigm"], resonance_prompt: "How often do you hear 'it's for the good of the economy' used to justify actions that seem to harm people?" },
                { term: "meritocracy", explanations: { headline: "The Noble Lie", summary: "The myth used to justify inequality by ignoring the system's rigged starting positions and the pull of debt." }, systemDefense: "A powerful tool for blaming the victims of the 'Competition Trap.'", flux_connections: ["Education Paradigm", "Society Paradigm", "Inequality"], resonance_prompt: "Does pure meritocracy hold up when you consider the impact of inherited wealth or crushing debt?" },
                { term: "media", explanations: { headline: "Manufacturing Consent", summary: "A corporate-owned narrative machine that distracts and divides to protect the economic status quo." }, systemDefense: "Defended under the banner of a 'free press.'", flux_connections: ["Media Paradigm", "Governance Paradigm", "Society Paradigm"], resonance_prompt: "Does the news spend more time on divisive social issues than on the mechanics of the financial system?" },
                { term: "conspiracy", explanations: { headline: "The Thought-Terminating Weapon", summary: "A word deployed to ridicule and dismiss any rational analysis of the system's foundational rules." }, systemDefense: "Works by conflating a critique of the *rules* with a belief about a secret cabal of *players*.", flux_connections: ["Media Paradigm", "Society Paradigm"], resonance_prompt: "Have you ever hesitated to discuss a systemic issue for fear of being labeled with this term?" },
                { terms: ["war", "conflict"], primaryTerm: "war", explanations: { headline: "A Profit Center & Reset Mechanism", summary: "The most extreme expression of the Peace Paradigm's inversion. Immensely profitable, it justifies new debt and serves as a tool for resource seizure." }, flux_connections: ["Peace Paradigm", "Geopolitics Paradigm", "Debt"], resonance_prompt: "Who profits from war, and who pays the price?" },
                { term: "competition", explanations: { headline: "A Mandated State of Being", summary: "Presented as a natural driver of innovation, but is in fact the engineered outcome of the mathematical scarcity created by debt-money." }, flux_connections: ["Competition Trap", "Society Paradigm", "Work Paradigm"], resonance_prompt: "Does the competition in your field feel like it's creating excellence, or just anxiety?" },
                { term: "migration", explanations: { headline: "The Movement of People, Driven by Scarcity", summary: "Often framed as a cultural issue, it is frequently a direct consequence of the Geopolitics Paradigm—where resource wars, debt traps, and ecological devastation make staying home impossible." }, flux_connections: ["Geopolitics Paradigm", "Environment Paradigm", "Society Paradigm", "Media Paradigm"], resonance_prompt: "Are people leaving their homes by choice, or are they being pushed by economic and environmental pressures?" },
                { term: "culture", explanations: { headline: "The Operating System of the Psyche", summary: "The collection of stories and values shaped by the underlying economic system. A culture of competition and scarcity will produce art and media that reflect that reality." }, flux_connections: ["Society Paradigm", "Media Paradigm", "Humanistic Paradigm"], resonance_prompt: "How much of modern culture is about genuine human expression versus selling a product or an identity?" },
                { term: "freedom", explanations: { headline: "The Freedom to Choose Your Creditor", summary: "The system's redefinition of freedom from genuine autonomy to a limited set of consumer choices within a mandatory, debt-based framework." }, systemDefense: "Often defended as the pinnacle of individual liberty, ignoring the structural coercion of the debt-money system.", flux_connections: ["Humanistic Paradigm", "Governance Paradigm", "Commodification"], resonance_prompt: "Does the 'freedom' to choose between different brands, jobs, or lenders feel like true liberty if you are not free from the underlying system of debt?" },
                { term: "success", explanations: { headline: "Victory in the Rat Race", summary: "The system's narrow definition of a good life: the accumulation of wealth and status symbols, which channels human aspiration into fueling the engine of mandatory growth." }, flux_connections: ["Humanistic Paradigm", "Work Paradigm", "Competition Trap"], resonance_prompt: "What would 'success' look like to you if it had nothing to do with money or social status?" },
                { term: "democracy", explanations: { headline: "The Theater of Governance", summary: "The presentation of political choice as a meaningful act, while the most critical decisions (money creation, debt policy) remain controlled by an unelected financial oligarchy." }, systemDefense: "The system's defenders will point to the ritual of voting as proof of democracy, while ignoring the influence of money in politics.", flux_connections: ["Governance Paradigm", "Media Paradigm", "Lobbying"], resonance_prompt: "If democracy is 'rule by the people,' why do policies that are unpopular but profitable to large corporations so often become law?" },
                { term: "progress", explanations: { headline: "The Forward March to Collapse", summary: "A term that conflates technological advancement and economic expansion with genuine human betterment. It is the primary narrative used to justify the system's relentless consumption of the planet." }, flux_connections: ["Economic Growth", "Technology Paradigm", "Environment Paradigm"], resonance_prompt: "If we have so much 'progress,' why do rates of stress, debt, and ecological destruction seem to be increasing?" },
                { term: "mainstream", explanations: { headline: "The Overton Window of the System", summary: "The range of ideas and narratives deemed 'acceptable' for public discussion by the Media and Governance Paradigms, carefully managed to exclude fundamental critiques of the debt-money engine." }, flux_connections: ["Media Paradigm", "Education Paradigm", "Society Paradigm"], resonance_prompt: "What important topics do you find are almost never discussed within mainstream news or entertainment?" },
                { term: "identity", explanations: { headline: "The Vertical Silo of Division", summary: "The system encourages focus on group identity (political, social, cultural) because it divides the populace into vertical silos. This prevents the formation of a horizontal alliance based on shared economic class interests (debtors vs. creditors)." }, flux_connections: ["Society Paradigm", "Media Paradigm", "Scapegoat"], resonance_prompt: "How often are we encouraged to see people of different identities as the problem, rather than people in different economic positions?" },
                { term: "normal", explanations: { headline: "Manufactured Acquiescence", summary: "The state of being so deeply immersed in the system's logic that its pathological outcomes—high stress, endless debt, social isolation—are perceived as natural, inevitable, or even desirable facts of life." }, flux_connections: ["Humanistic Paradigm", "Society Paradigm", "Media Paradigm"], resonance_prompt: "What is one thing that society treats as 'normal' that you feel is actually deeply unhealthy or strange?" },
                { terms: ["global warming", "climate change"], primaryTerm: "global warming", explanations: { headline: "The Inevitable Symptom", summary: "The predictable ecological consequence of a global economic system that demands infinite exponential growth, powered by finite energy sources, on a finite planet." }, flux_connections: ["Environment Paradigm", "Energy Paradigm", "Economic Growth", "Financialization"], resonance_prompt: "Do the proposed solutions to climate change seem to challenge the idea of perpetual economic growth, or do they try to make it 'green'?" }
            ]
        },
        human_experience: {
            name: "The Human Experience & Inner World",
            isSurgical: false,
            words: [
                { terms: ["stress", "depression"], primaryTerm: "stress", explanations: { headline: "A Rational Response to an Insane System", summary: "The logical psychological state resulting from the constant precarity, competition, and meaninglessness generated by the system." }, flux_connections: ["Peace Paradigm (Internal)", "Work Paradigm", "Society Paradigm"], resonance_prompt: "How much of your personal stress or low mood can be traced to financial pressure or a lack of meaningful connection?" },
                { term: "suicide", explanations: { headline: "The Ultimate Systemic Failure", summary: "The tragic endpoint of the system's pressures, where the despair from the Competition Trap, social isolation, and lack of meaning becomes unbearable." }, flux_connections: ["Humanistic Paradigm", "Peace Paradigm", "Society Paradigm", "Depression"], resonance_prompt: "When a society sees rising 'deaths of despair,' what does this signal about the health of the underlying system itself?" },
                { terms: ["love", "friendship", "relationship"], primaryTerm: "relationship", explanations: { headline: "The Last Bastion Against Commodification", summary: "Core human bonds based on intrinsic worth, a logic directly opposed to the system's transactional and utilitarian nature." }, flux_connections: ["Love Paradigm", "Humanistic Paradigm", "Society Paradigm", "Commodification"], resonance_prompt: "Have you felt the pressure to evaluate relationships based on what you can 'get' from them?" },
                { terms: ["home", "family"], primaryTerm: "family", explanations: { headline: "The Economic Unit", summary: "The primary source of human connection, now often strained to the breaking point by the need for dual incomes just to service debt and stay afloat in the Competition Trap." }, flux_connections: ["Humanistic Paradigm", "Work Paradigm", "Debt", "Financialization"], resonance_prompt: "How much has financial pressure impacted the time and quality of your family life?" },
                { term: "time", explanations: { headline: "The Ultimate Finite Resource", summary: "The system's primary act of extraction is the monetization of your life-time. Your time is converted into labor to service debt, a process that is infinite, while your time is finite." }, flux_connections: ["Work Paradigm", "Debt", "Humanistic Paradigm"], resonance_prompt: "If your time was not needed to service debt, what would you spend it on?" },
                { term: "leisure", explanations: { headline: "The Re-creation of the Worker", summary: "In the system, leisure is not true rest or play, but the scheduled time needed to recover just enough energy to return to the Work Paradigm." }, flux_connections: ["Work Paradigm", "Peace Paradigm", "Humanistic Paradigm"], resonance_prompt: "Does your 'time off' feel like genuine freedom, or just a brief pause to recharge for more work?" },
                { term: "community", explanations: { headline: "The System's Primary Threat", summary: "A network of people based on mutual support, trust, and non-transactional relationships. It is a direct threat to the system's logic of commodification and competition." }, flux_connections: ["Society Paradigm", "Love Paradigm", "Commodification", "Commons"], resonance_prompt: "In what ways has the need to compete for jobs or housing made it harder to build strong community bonds where you live?" },
                { term: "consent", explanations: { headline: "Consent Under Duress", summary: "The illusion of voluntary participation in a mandatory system. Real consent requires the freedom to choose a viable alternative, a freedom the system is designed to eliminate." }, flux_connections: ["Humanistic Paradigm", "Work Paradigm", "Governance Paradigm"], resonance_prompt: "Did you freely choose your job and debts, or did the need to survive narrow your options to a series of forced 'choices'?" },
                { term: "privacy", explanations: { headline: "The Annihilated Commons", summary: "The personal space of sovereignty and thought, now systematically harvested as a raw material ('data') by the Technology Paradigm to better predict, control, and monetize human behavior." }, flux_connections: ["Technology Paradigm", "Commodification", "Humanistic Paradigm"], resonance_prompt: "How does the feeling of being constantly watched or monitored change your behavior and your internal sense of freedom?" }
            ]
        },
        physical_world: {
            name: "Physical World, Health & Tech",
            isSurgical: false,
            words: [
                { term: "healthcare", explanations: { headline: "The Sickness Industry", summary: "A system financialized to profit from managing sickness rather than creating wellness. The profitable backstop for the illnesses created by the Food and Work Paradigms." }, flux_connections: ["Healthcare Paradigm", "Financialization", "Food Paradigm", "Work Paradigm"], resonance_prompt: "Have you felt like a 'customer' rather than a patient being healed within the healthcare system?" },
                { term: "education", explanations: { headline: "The Compliance Onboarding System", summary: "The core function of the modern Education Paradigm is to prepare individuals for their role in the system: as indebted, compliant workers, not as liberated, critical thinkers." }, flux_connections: ["Education Paradigm", "Debt (Student Loans)", "Work Paradigm"], resonance_prompt: "Did your education teach you how the money system works, or did it primarily prepare you to get a job and take on debt?" },
                { term: "research", explanations: { headline: "The Compass of Profit", summary: "Within the Science & Research Paradigm, funding is overwhelmingly directed toward what is patentable and profitable, not necessarily what is most beneficial for humanity." }, flux_connections: ["Science & Research Paradigm", "Healthcare Paradigm", "Technology Paradigm"], resonance_prompt: "Why is there more research for a new profitable drug than for a non-patentable preventative health strategy?" },
                { term: "innovation", explanations: { headline: "Progress in Service of the Engine", summary: "A term implying pure human progress, but systemically channeled toward creating more efficient methods of profit extraction, surveillance, and consumerism." }, flux_connections: ["Technology Paradigm", "Financialization", "Work Paradigm"], resonance_prompt: "Does the 'innovation' you see seem to make life more meaningful, or just more monitored?" },
                { term: "city", explanations: { headline: "The System's Pressure Cooker", summary: "An environment where the system's logic is hyper-concentrated: high cost of living (rent), intense job competition, and social anonymity, maximizing economic activity and human stress." }, flux_connections: ["Work Paradigm", "Financialization", "Society Paradigm", "Environment Paradigm"], resonance_prompt: "How does the pace and cost of city life affect your sense of community and well-being?" },
                { term: "car", explanations: { headline: "The Debt-Fueled Isolation Chamber", summary: "A technology that promises freedom but often delivers debt, pollution, and urban design that atomizes communities." }, flux_connections: ["Technology Paradigm", "Debt", "Energy Paradigm", "Environment Paradigm"], resonance_prompt: "How much of your city's design and personal budget is dedicated to this single machine?" },
                { term: "pollution", explanations: { headline: "The Externalized Cost of Growth", summary: "The physical waste product of the mandatory growth engine. The system's logic demands that the costs are socialized (borne by the public) while the profits are privatized." }, flux_connections: ["Environment Paradigm", "Energy Paradigm", "GDP", "Health Paradigm"], resonance_prompt: "Who profits from the activities that pollute your local environment, and who pays the price in health?" },
                { terms: ["library", "book"], primaryTerm: "library", explanations: { headline: "The Uncommodified Archive", summary: "A Library represents a threat to the system's logic: a commons where knowledge (Book) is shared based on citizenship, not ability to pay. Its chronic underfunding is predictable." }, flux_connections: ["Commons", "Education Paradigm", "Commodification"], resonance_prompt: "What is the difference in the 'logic' of a library versus a bookstore or a subscription service?" },
                { terms: ["AI", "algorithm"], primaryTerm: "AI", explanations: { headline: "The New Engine of Opaque Control", summary: "Presented as neutral, AI is deployed to automate and accelerate the system's logic with no transparency: algorithmic censorship, predictive policing, and workforce automation." }, flux_connections: ["Technology Paradigm", "Media Paradigm", "Justice Paradigm", "Work Paradigm"], resonance_prompt: "Who writes the rules for the algorithms that curate your reality? What are their goals?" },
                { term: "study", explanations: { headline: "The Act of Forging a Lens", summary: "The personal effort to look past the official narrative and understand the foundational rules of the system. A necessary act of intellectual self-defense." }, flux_connections: ["Education Paradigm (Counter-act)", "Media Paradigm (Counter-act)"], resonance_prompt: "How has actively studying this framework changed the way you see the world?" }
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
// v3.6.1: Dictionary Integrity Check
function validateDictionary() {
    const seenTerms = new Set();
    const duplicates = [];
    flatDictionary.forEach(entry => {
        const term = entry.primaryTerm.toLowerCase();
        if (seenTerms.has(term)) {
            duplicates.push(term);
        } else {
            seenTerms.add(term);
        }
    });
    if (duplicates.length > 0) {
        console.error(`Usurpia Lens v3.6.1: DICTIONARY INTEGRITY VIOLATION - Duplicate primaryTerm found: '${duplicates[0]}'. This will cause unpredictable behavior.`);
    }
}
function main() {
    if (document.getElementById('usurpia-panel-v3-6')) {
        document.getElementById('usurpia-panel-v3-6').remove();
        cleanupHighlights();
        return;
    }
    console.log("Usurpia Lens v3.6.1 (Dictionary Integrity Patch) Activated.");
    validateDictionary(); // Run the integrity check
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
    const scrollbar = document.getElementById('usurpia-scrollbar-v3-6');
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
    const alreadyHighlightedTerms = new Set();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: n => (n.parentElement.closest('script, style, textarea, input, select, a, .usurpia-highlight, #usurpia-popup-v3-6, #usurpia-panel-v3-6')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
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
            if (entry && !alreadyHighlightedTerms.has(entry.primaryTerm)) {
                alreadyHighlightedTerms.add(entry.primaryTerm);
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
    let style = document.getElementById('usurpia-styles-v3-6');
    if (style) return;
    style = document.createElement('style');
    style.id = 'usurpia-styles-v3-6';
    style.innerHTML = `
        .usurpia-highlight { background-color: #FFFF99 !important; color: #000 !important; cursor: help; padding: 1px 2px; border-radius: 3px; }
        #usurpia-popup-v3-6 { position: fixed; display: none; width: 320px; max-width: 90%; background-color: #fff; color: #111; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 15px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.5; z-index: 2147483647; text-align: left; }
        #usurpia-popup-v3-6 p { margin: 0 0 12px 0; padding: 0; }
        #usurpia-popup-v3-6 .usurpia-popup-section { border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px; }
        #usurpia-popup-v3-6 .usurpia-popup-section strong { display: block; margin-bottom: 5px; font-size: 13px; }
        #usurpia-popup-v3-6 .usurpia-defense strong { color: #c0392b; }
        #usurpia-popup-v3-6 .usurpia-flux strong { color: #2980b9; }
        #usurpia-popup-v3-6 .usurpia-flux-list { list-style-type: '→ '; font-size: 13px; padding-left: 20px; margin: 0; color: #34495e; }
        #usurpia-popup-v3-6 .usurpia-resonance { font-style: italic; color: #2c3e50; font-size: 13px; }
        #usurpia-popup-v3-6 .usurpia-resonance strong { color: #8e44ad; }
        #usurpia-popup-v3-6 .usurpia-links { border-top: 1px solid #eee; margin-top: 10px; padding-top: 10px; }
        #usurpia-popup-v3-6 .usurpia-links a { display: block; color: #007bff !important; text-decoration: underline !important; margin-top: 5px; font-size: 13px; }
        #usurpia-popup-v3-6 .usurpia-links a.usurpia-link-paid { font-weight: bold; color: #0056b3 !important; }
        #usurpia-panel-v3-6 { position: fixed; bottom: 20px; left: 20px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 2147483646; padding: 10px 15px; font-family: sans-serif; font-size: 13px; color: #212529; min-width: 240px; }
        #usurpia-panel-v3-6-header { padding: 8px 0; cursor: move; text-align: center; font-weight: bold; font-size: 14px; border-bottom: 1px solid #dee2e6; margin-bottom: 10px; user-select: none; }
        #usurpia-panel-v3-6 .usurpia-control-group { margin-top: 12px; }
        #usurpia-panel-v3-6 label { display: block; margin-bottom: 6px; font-weight: bold; }
        #usurpia-panel-v3-6 .usurpia-density-control button { background: #e9ecef; border: 1px solid #ced4da; padding: 6px 10px; cursor: pointer; flex-grow: 1; }
        #usurpia-panel-v3-6 .usurpia-density-control button.active { background: #007bff; color: white; border-color: #007bff; font-weight: bold; }
        #usurpia-panel-v3-6 .usurpia-density-control { display: flex; }
        #usurpia-panel-v3-6 .usurpia-density-control button:first-child { border-radius: 4px 0 0 4px; }
        #usurpia-panel-v3-6 .usurpia-density-control button:last-child { border-radius: 0 4px 4px 0; }
        #usurpia-panel-v3-6 .usurpia-toggle-switch { display: flex; align-items: center; justify-content: space-between; }
        #usurpia-scrollbar-v3-6 { position: fixed; top: 0; right: 0; width: 10px; height: 100%; z-index: 2147483645; }
        .usurpia-scrollbar-mark { position: absolute; right: 0; width: 10px; height: 3px; background: #FF4500; opacity: 0.6; cursor: pointer; }
    `;
    document.head.appendChild(style);
}
function createControlPanel() {
    const panel = document.createElement('div');
    panel.id = 'usurpia-panel-v3-6';
    panel.innerHTML = `
        <div id="usurpia-panel-v3-6-header">Usurpia Lens v3.6.1</div>
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
                <label for="usurpia-dialectic-mode" title="Show the system's common counter-arguments.">Dialectic Mode</label>
                <input type="checkbox" id="usurpia-dialectic-mode">
            </div>
        </div>
        <div class="usurpia-control-group">
            <div class="usurpia-toggle-switch">
                <label for="usurpia-flux-mode" title="Show how this concept connects to other parts of the system.">Flux Mode</label>
                <input type="checkbox" id="usurpia-flux-mode">
            </div>
        </div>
        <div class="usurpia-control-group">
            <div class="usurpia-toggle-switch">
                <label for="usurpia-resonance-mode" title="Pose a question to connect this concept to personal experience.">Resonance Mode</label>
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
    popup.id = 'usurpia-popup-v3-6';
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
    const header = document.getElementById('usurpia-panel-v3-6-header');
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
    scrollbar.id = 'usurpia-scrollbar-v3-6';
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
