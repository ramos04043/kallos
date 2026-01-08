// Kallos Aesthetics Chatbot
class KallosChatbot {
    constructor() {
        this.chatHistory = [];
        this.maxHistoryLength = 50; // Limit history to prevent memory issues
        this.faqData = this.initializeFAQData();
        this.initializeChatbot();
    }

    initializeFAQData() {
        return {
            // General Information
            "general": [
                {
                    question: "What is Kallos Aesthetics?",
                    answer: "Kallos Aesthetics is a leading aesthetic clinic in Chennai that provides advanced dermatological treatments. We have over 10 MD-certified dermatologists and use state-of-the-art US-FDA approved equipment to deliver safe, effective, and transformative care."
                },
                {
                    question: "Where is Kallos Aesthetics located?",
                    answer: "Kallos Aesthetics is located at Maya's Court, 1/1834, 18th Main Rd, Anna Nagar West, Anna Nagar, Chennai, Tamil Nadu 600040."
                },
                {
                    question: "What are your contact details?",
                    answer: "You can reach us at +91 95858 50306 or email us at kallosaesthetics.in@gmail.com. We're also active on Instagram: @kallos_aesthetics_chennai"
                },
                {
                    question: "What are your clinic hours?",
                    answer: "Our clinic hours are Monday to Saturday from 9:00 AM to 8:00 PM. Sunday appointments are available by prior arrangement. For the most accurate information, please call us directly."
                },
                {
                    question: "Are you open on weekends?",
                    answer: "Yes, we are open on Saturdays. Sunday appointments are available by prior arrangement. Please call us to schedule weekend appointments."
                }
            ],
            // Services
            "services": [
                {
                    question: "What services do you offer?",
                    answer: "We offer a comprehensive range of aesthetic services including: Acne Removal, Anti-Aging treatments, Hair Growth PRP, Laser Hair Removal, and Skin Lightening. Each service is personalized to meet your unique needs."
                },
                {
                    question: "Tell me about acne removal treatments",
                    answer: "Our Acne Removal Treatments are designed to clear blemishes, reduce inflammation, and restore healthy, glowing skin using advanced, dermatologist-approved technologies. Each session is personalized after a detailed skin analysis to address acne, blackheads, whiteheads, and breakouts."
                },
                {
                    question: "What is anti-aging treatment?",
                    answer: "Our Anti-Aging treatments rejuvenate your skin with age-defying solutions. These advanced treatments reduce wrinkles, fine lines, and restore youthful radiance. We use customized anti-aging protocols with safe, proven technologies for natural-looking results."
                },
                {
                    question: "What is hair growth PRP?",
                    answer: "Hair Growth PRP (Platelet-Rich Plasma) therapy stimulates natural hair growth safely. It uses platelet-rich plasma to promote hair follicle health and regrowth using your body's natural healing factors. It's a minimally invasive treatment with noticeable growth in 3-4 months."
                },
                {
                    question: "How does laser hair removal work?",
                    answer: "Our Laser Hair Removal uses precision laser technology to safely remove unwanted hair from any body area. It provides permanent hair reduction, is suitable for all skin types, and offers fast, comfortable sessions."
                },
                {
                    question: "What is skin lightening treatment?",
                    answer: "Our Skin Lightening treatments safely and effectively reduce hyperpigmentation and achieve a brighter, more even complexion. We use gentle, dermatologist-approved methods that reduce dark spots & blemishes while enhancing skin radiance."
                },
                {
                    question: "How much does acne removal cost?",
                    answer: "Acne removal treatment costs vary depending on the severity and extent of treatment needed. We offer personalized consultations to determine the best treatment plan and provide accurate pricing. For specific pricing information, please book a consultation with our specialists."
                },
                {
                    question: "How much does anti-aging treatment cost?",
                    answer: "Anti-aging treatment costs depend on the specific procedures selected and the treatment area. We provide transparent pricing during your consultation, where our specialists will create a personalized treatment plan based on your needs and goals."
                },
                {
                    question: "How much does hair growth PRP cost?",
                    answer: "Hair Growth PRP treatment costs vary based on the treatment area and number of sessions required. A consultation with our specialists will help determine the most effective treatment plan and associated costs for your specific hair loss concerns."
                },
                {
                    question: "How much does laser hair removal cost?",
                    answer: "Laser hair removal costs depend on the treatment area and number of sessions needed for optimal results. We offer competitive pricing and can provide specific costs during your consultation based on your individual needs."
                },
                {
                    question: "How much does skin lightening cost?",
                    answer: "Skin lightening treatment costs vary depending on the extent of hyperpigmentation and treatment area. Our specialists will provide detailed pricing during your consultation after evaluating your skin condition and creating a personalized treatment plan."
                }
            ],
            // Pricing and Consultation
            "pricing": [
                {
                    question: "How much do treatments cost?",
                    answer: "Treatment prices vary depending on the specific procedure and individual needs. We offer transparent pricing with no hidden costs. For accurate pricing information, please book a consultation with one of our specialists."
                },
                {
                    question: "Do you offer free consultations?",
                    answer: "Yes, we offer complimentary consultations where our MD-certified dermatologists will assess your skin/hair condition and create a personalized treatment plan tailored to your specific needs and goals."
                },
                {
                    question: "How do I book a consultation?",
                    answer: "You can book a consultation by clicking the 'Book Your Consultation' button on our website, calling us at +91 95858 50306, or visiting our clinic at Maya's Court, Anna Nagar West, Chennai."
                },
                {
                    question: "Can I book online?",
                    answer: "Yes, you can book appointments online through our website. Simply fill out the booking form with your name, mobile number, preferred date, and treatment selection, and we'll confirm your appointment."
                }
            ],
            // Treatment Procedures and Aftercare
            "procedures": [
                {
                    question: "How long does each treatment take?",
                    answer: "Treatment duration varies depending on the specific procedure and area being treated. Most sessions last between 30 minutes to 2 hours. During your consultation, we'll provide specific timing for your chosen treatment."
                },
                {
                    question: "How many sessions are needed?",
                    answer: "The number of sessions required varies based on the treatment and individual response. Some treatments show results in 4-6 weeks, while others may require multiple sessions. Your specialist will create a personalized treatment plan during your consultation."
                },
                {
                    question: "What is the aftercare like?",
                    answer: "Aftercare instructions are personalized based on your treatment. Generally, we recommend avoiding sun exposure, using gentle skincare products, and following our specialist's specific care instructions. We provide detailed aftercare guidance for each procedure."
                },
                {
                    question: "Are there any side effects?",
                    answer: "Our treatments use safe, FDA-approved technology with minimal side effects. Some temporary redness or mild discomfort may occur, but this typically resolves quickly. Your specialist will discuss any specific risks during your consultation."
                }
            ],
            // Safety and Staff Qualifications
            "safety": [
                {
                    question: "Are the treatments safe?",
                    answer: "Yes, all our treatments are safe. We use US-FDA approved equipment, follow strict hygiene protocols, and our procedures are performed by MD-certified dermatologists with years of experience in advanced skin treatments."
                },
                {
                    question: "Who performs the treatments?",
                    answer: "All treatments are performed by our team of over 10 MD-certified dermatologists and aesthetic specialists with years of experience in advanced skin treatments. Each professional is highly trained and qualified."
                },
                {
                    question: "Is the clinic hygienic?",
                    answer: "Absolutely. We maintain the highest standards of hygiene and follow strict safety protocols. All equipment is sterilized, and we use disposable materials wherever possible to ensure your safety and well-being."
                },
                {
                    question: "Do you use FDA-approved equipment?",
                    answer: "Yes, we utilize the latest, FDA-approved equipment and cutting-edge techniques for optimal results and safety. All our technology is state-of-the-art and regularly maintained."
                }
            ],
            // Appointment Scheduling
            "appointments": [
                {
                    question: "How do I schedule an appointment?",
                    answer: "You can schedule an appointment by calling us at +91 95858 50306, booking online through our website, or visiting our clinic at Maya's Court, Anna Nagar West, Chennai. We also offer online booking forms on our website."
                },
                {
                    question: "Can I reschedule my appointment?",
                    answer: "Yes, you can reschedule your appointment by calling us at least 24 hours in advance. We understand that schedules can change, and we'll do our best to accommodate your new preferred time."
                },
                {
                    question: "How early should I arrive for my appointment?",
                    answer: "Please arrive 10-15 minutes before your scheduled appointment time to complete any necessary paperwork and allow our specialists to prepare for your treatment."
                },
                {
                    question: "What should I bring to my appointment?",
                    answer: "Please bring a valid ID, any relevant medical records or photos (if applicable), and a list of any medications you're currently taking. If you have specific concerns, feel free to bring reference photos as well."
                },
                {
                    question: "What are the appointment booking procedures?",
                    answer: "To book an appointment, you can call us at +91 95858 50306, fill out our online booking form, or visit our clinic directly. For first-time visitors, we recommend booking a consultation to discuss your needs and create a personalized treatment plan. After your consultation, you can schedule your treatments based on availability."
                },
                {
                    question: "How do I book a consultation?",
                    answer: "You can book a consultation by clicking the 'Book Your Consultation' button on our website, calling us at +91 95858 50306, or visiting our clinic at Maya's Court, Anna Nagar West, Chennai. Consultations are complimentary and help our specialists understand your needs to create a personalized treatment plan."
                }
            ]
        };
    }

    initializeChatbot() {
        this.createChatbotHTML();
        this.attachEventListeners();
    }

    createChatbotHTML() {
        // Create chatbot container if it doesn't exist
        if (!document.querySelector('.chatbot-container')) {
            const chatbotHTML = `
                <div class="chatbot-container">
                    <div class="chatbot-btn" id="chatbotToggle">
                        <i class="fa fa-comments"></i>
                    </div>
                    <div class="chatbot-window" id="chatbotWindow">
                        <div class="chatbot-header">
                            <h4>Kallos Aesthetics Assistant</h4>
                            <span class="chatbot-close" id="chatbotClose">&times;</span>
                        </div>
                        <div class="chatbot-messages" id="chatbotMessages">
                            <div class="message bot-message">
                                <div class="message-content">
                                    <p>Hello! I'm your Kallos Aesthetics assistant. How can I help you today?</p>
                                    <p>You can ask me about our services, pricing, clinic location, appointment booking, or any other questions about our treatments.</p>
                                </div>
                            </div>
                        </div>
                        <div class="chatbot-input">
                            <input type="text" id="chatbotInput" placeholder="Type your message here..." autocomplete="off">
                            <button id="chatbotSend">
                                <i class="fa fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        }
    }

    attachEventListeners() {
        const toggleBtn = document.getElementById('chatbotToggle');
        const closeBtn = document.getElementById('chatbotClose');
        const sendBtn = document.getElementById('chatbotSend');
        const input = document.getElementById('chatbotInput');
        const messagesContainer = document.getElementById('chatbotMessages');
        
        toggleBtn.addEventListener('click', () => {
            const window = document.getElementById('chatbotWindow');
            window.style.display = window.style.display === 'none' ? 'flex' : 'none';
        });
        
        closeBtn.addEventListener('click', () => {
            document.getElementById('chatbotWindow').style.display = 'none';
        });
        
        sendBtn.addEventListener('click', () => {
            this.sendMessage();
        });
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        // Close chatbot when clicking outside
        document.addEventListener('click', (e) => {
            const chatbot = document.querySelector('.chatbot-container');
            if (chatbot && !chatbot.contains(e.target) && 
                !document.getElementById('chatbotWindow').contains(e.target)) {
                if (document.getElementById('chatbotWindow').style.display === 'flex') {
                    // Don't close if user is interacting with chatbot
                    return;
                }
            }
        });
        
        // Add event listener for clearing chat history (optional - could be triggered by a button)
        input.addEventListener('focus', () => {
            // Ensure the chat window is visible when user wants to type
            document.getElementById('chatbotWindow').style.display = 'flex';
        });
    }

    async sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Add user message to chat
        this.addMessageToChat(message, 'user');
        input.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Process the message and get response
        setTimeout(() => {
            const response = this.processMessage(message);
            this.removeTypingIndicator();
            this.addMessageToChat(response, 'bot');
        }, 1000);
    }

    addMessageToChat(message, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        
        messageElement.innerHTML = `
            <div class="message-content">
                <p>${this.escapeHtml(message)}</p>
            </div>
        `;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Save to chat history
        this.chatHistory.push({ sender, message, timestamp: new Date() });
        
        // Limit history to prevent memory issues
        if (this.chatHistory.length > this.maxHistoryLength) {
            this.chatHistory.shift(); // Remove oldest message
        }
    }

    showTypingIndicator() {
        // Remove any existing typing indicator first
        this.removeTypingIndicator();
        
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingElement = document.createElement('div');
        typingElement.id = 'typingIndicator';
        typingElement.classList.add('message', 'bot-message');
        typingElement.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for greetings
        if (this.containsAny(lowerMessage, ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'])) {
            return "Hello! Welcome to Kallos Aesthetics. I'm your virtual assistant. How can I help you today? You can ask me about our services, pricing, clinic location, appointment booking, or any other questions about our treatments.";
        }
        
        // Check for goodbye phrases
        if (this.containsAny(lowerMessage, ['bye', 'goodbye', 'see you', 'thanks', 'thank you'])) {
            return "Thank you for contacting Kallos Aesthetics! If you have more questions, feel free to ask. You can also book a consultation by calling +91 95858 50306.";
        }
        
        // Check for location related questions
        if (this.containsAny(lowerMessage, ['location', 'address', 'where', 'direction', 'reach', 'clinic', 'place', 'chennai'])) {
            return "Kallos Aesthetics is located at Maya's Court, 1/1834, 18th Main Rd, Anna Nagar West, Anna Nagar, Chennai, Tamil Nadu 600040. You can reach us at +91 95858 50306.";
        }
        
        // Check for contact information
        if (this.containsAny(lowerMessage, ['contact', 'phone', 'number', 'email', 'call', 'reach', 'mobile'])) {
            return "You can reach us at +91 95858 50306 or email us at Dotus@gmail.com. We're also active on Instagram: @kallos_aesthetics_chennai";
        }
        
        // Check for services
        if (this.containsAny(lowerMessage, ['service', 'treatment', 'procedure', 'what do you', 'offer', 'available'])) {
            return "We offer a range of aesthetic services including: Acne Removal, Anti-Aging treatments, Hair Growth PRP, Laser Hair Removal, and Skin Lightening. Each service is personalized to meet your unique needs.";
        }
        
        // Check for specific services
        if (this.containsAny(lowerMessage, ['acne', 'pimple', 'breakout', 'blemish'])) {
            return "Our Acne Removal Treatments are designed to clear blemishes, reduce inflammation, and restore healthy, glowing skin using advanced, dermatologist-approved technologies. Each session is personalized after a detailed skin analysis to address acne, blackheads, whiteheads, and breakouts.";
        }
        
        if (this.containsAny(lowerMessage, ['anti', 'aging', 'wrinkle', 'fine line', 'youth'])) {
            return "Our Anti-Aging treatments rejuvenate your skin with age-defying solutions. These advanced treatments reduce wrinkles, fine lines, and restore youthful radiance. We use customized anti-aging protocols with safe, proven technologies for natural-looking results.";
        }
        
        if (this.containsAny(lowerMessage, ['hair', 'growth', 'prp', 'regrowth', 'fall'])) {
            return "Hair Growth PRP (Platelet-Rich Plasma) therapy stimulates natural hair growth safely. It uses platelet-rich plasma to promote hair follicle health and regrowth using your body's natural healing factors. It's a miniminally invasive treatment with noticeable growth in 3-4 months.";
        }
        
        if (this.containsAny(lowerMessage, ['laser', 'hair', 'removal', 'smooth'])) {
            return "Our Laser Hair Removal uses precision laser technology to safely remove unwanted hair from any body area. It provides permanent hair reduction, is suitable for all skin types, and offers fast, comfortable sessions.";
        }
        
        if (this.containsAny(lowerMessage, ['skin', 'lightening', 'tone', 'bright', 'spot', 'pigmentation'])) {
            return "Our Skin Lightening treatments safely and effectively reduce hyperpigmentation and achieve a brighter, more even complexion. We use gentle, dermatologist-approved methods that reduce dark spots & blemishes while enhancing skin radiance.";
        }
        
        // Check for pricing
        if (this.containsAny(lowerMessage, ['price', 'cost', 'how much', 'expensive', 'affordable', 'budget'])) {
            return "Treatment prices vary depending on the specific procedure and individual needs. We offer transparent pricing with no hidden costs. For accurate pricing information, please book a consultation with one of our specialists.";
        }
        
        // Check for appointments
        if (this.containsAny(lowerMessage, ['appointment', 'book', 'schedule', 'consultation', 'visit', 'time'])) {
            return "You can book appointments by calling us at +91 95858 50306, booking online through our website, or visiting our clinic. We offer complimentary consultations where our MD-certified dermatologists will assess your needs and create a personalized treatment plan.";
        }
        
        // Check for safety
        if (this.containsAny(lowerMessage, ['safe', 'safety', 'risk', 'side effect', 'harm', 'danger'])) {
            return "Yes, all our treatments are safe. We use US-FDA approved equipment, follow strict hygiene protocols, and our procedures are performed by MD-certified dermatologists with years of experience in advanced skin treatments.";
        }
        
        // Check for staff qualifications
        if (this.containsAny(lowerMessage, ['doctor', 'staff', 'qualified', 'certified', 'experience', 'professional'])) {
            return "All treatments are performed by our team of over 10 MD-certified dermatologists and aesthetic specialists with years of experience in advanced skin treatments. Each professional is highly trained and qualified.";
        }
        
        // Check for treatment duration
        if (this.containsAny(lowerMessage, ['how long', 'duration', 'session', 'time', 'takes'])) {
            return "Treatment duration varies depending on the specific procedure and area being treated. Most sessions last between 30 minutes to 2 hours. During your consultation, we'll provide specific timing for your chosen treatment.";
        }
        
        // Check for number of sessions
        if (this.containsAny(lowerMessage, ['how many', 'sessions', 'times', 'repeat', 'course'])) {
            return "The number of sessions required varies based on the treatment and individual response. Some treatments show results in 4-6 weeks, while others may require multiple sessions. Your specialist will create a personalized treatment plan during your consultation.";
        }
        
        // Check for aftercare
        if (this.containsAny(lowerMessage, ['aftercare', 'after', 'care', 'recovery', 'healing', 'post'])) {
            return "Aftercare instructions are personalized based on your treatment. Generally, we recommend avoiding sun exposure, using gentle skincare products, and following our specialist's specific care instructions. We provide detailed aftercare guidance for each procedure.";
        }
        
        // Check for booking procedures
        if (this.containsAny(lowerMessage, ['booking', 'procedure', 'process', 'how to book'])) {
            return "To book an appointment, you can call us at +91 95858 50306, fill out our online booking form, or visit our clinic directly. For first-time visitors, we recommend booking a consultation to discuss your needs and create a personalized treatment plan. After your consultation, you can schedule your treatments based on availability.";
        }
        
        // Check for consultation
        if (this.containsAny(lowerMessage, ['consultation', 'free consultation', 'complimentary'])) {
            return "Yes, we offer complimentary consultations where our MD-certified dermatologists will assess your skin/hair condition and create a personalized treatment plan tailored to your specific needs and goals. You can book a consultation by calling us at +91 95858 50306 or visiting our clinic.";
        }
        
        // Check for clinic hours
        if (this.containsAny(lowerMessage, ['hours', 'timing', 'open', 'close', 'time', 'schedule', 'when'])) {
            return "Our clinic hours are Monday to Saturday from 9:00 AM to 8:00 PM. Sunday appointments are available by prior arrangement. For the most accurate information, please call us directly at +91 95858 50306.";
        }
        
        // Check for staff qualifications
        if (this.containsAny(lowerMessage, ['qualifications', 'certified', 'experience', 'doctors', 'staff'])) {
            return "Our team consists of over 10 MD-certified dermatologists and aesthetic specialists with years of experience in advanced skin treatments. All our procedures are performed by qualified professionals using US-FDA approved equipment.";
        }
        
        // Try to match with FAQ data
        const faqResponse = this.findFAQResponse(lowerMessage);
        if (faqResponse) {
            return faqResponse;
        }
        
        // Fallback response
        return "I understand you're interested in learning more about our services. For personalized information about treatments, pricing, or to book an appointment, please call us at +91 95858 50306 or visit our clinic at Maya's Court, Anna Nagar West, Chennai. Our MD-certified dermatologists are here to help you achieve your aesthetic goals.";
    }

    findFAQResponse(message) {
        let bestMatch = null;
        let bestScore = 0;
        const threshold = 0.6; // Lower threshold for better matching
        
        for (const category in this.faqData) {
            for (const item of this.faqData[category]) {
                // Calculate similarity between user message and FAQ question
                let score = this.calculateSimilarity(message, item.question.toLowerCase());
                
                // Additional keyword matching to boost score
                const messageWords = message.split(' ');
                const questionWords = item.question.toLowerCase().split(' ');
                
                // Count common words
                const commonWords = messageWords.filter(word => 
                    questionWords.includes(word) && word.length > 2 // Ignore short words like 'a', 'an', 'the'
                ).length;
                
                // Boost score based on common words
                if (commonWords > 0) {
                    score += (commonWords * 0.1); // Boost for each common word
                }
                
                // Check if this is the best match so far
                if (score > bestScore && score >= threshold) {
                    bestScore = score;
                    bestMatch = item.answer;
                }
            }
        }
        
        return bestMatch;
    }

    containsAny(text, keywords) {
        return keywords.some(keyword => text.includes(keyword.toLowerCase()));
    }

    calculateSimilarity(s1, s2) {
        // Convert to lowercase and remove extra whitespace
        s1 = s1.toLowerCase().trim();
        s2 = s2.toLowerCase().trim();
        
        // If strings are identical
        if (s1 === s2) return 1.0;
        
        // If one string is empty
        if (s1.length === 0 || s2.length === 0) return 0.0;
        
        // Calculate Levenshtein distance
        const distance = this.levenshteinDistance(s1, s2);
        
        // Calculate similarity as 1 - (distance / max possible distance)
        const maxLength = Math.max(s1.length, s2.length);
        return 1 - (distance / maxLength);
    }

    levenshteinDistance(str1, str2) {
        const matrix = Array(str2.length + 1).fill().map(() => Array(str1.length + 1).fill(0));

        for (let i = 0; i <= str1.length; i++) {
            matrix[0][i] = i;
        }

        for (let j = 0; j <= str2.length; j++) {
            matrix[j][0] = j;
        }

        for (let j = 1; j <= str2.length; j++) {
            for (let i = 1; i <= str1.length; i++) {
                const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
                matrix[j][i] = Math.min(
                    matrix[j][i - 1] + 1,     // insertion
                    matrix[j - 1][i] + 1,     // deletion
                    matrix[j - 1][i - 1] + cost // substitution
                );
            }
        }

        return matrix[str2.length][str1.length];
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new KallosChatbot();
});