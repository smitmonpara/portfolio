// Data from JSON file
const portfolioData = {
    "skills": [
        { "name": "Flutter" },
        { "name": "Node js" },
        { "name": "GitHub" },
        { "name": "Git" },
        { "name": "JavaScript" },
        { "name": "TypeScript" },
        { "name": "Flutter Bloc" },
        { "name": "Express" },
        { "name": "MongoDB" },
        { "name": "SQL" },
        { "name": "AWS EC2" },
        { "name": "Docker" }
    ],
    "services": [
        {
            "title": "Mobile App Development",
            "description": "Building cross-platform mobile applications using Flutter with beautiful UI and seamless performance.",
            "icon": "fas fa-mobile-alt",
            "features": ["Cross-platform development", "Custom UI/UX design", "App store deployment", "Performance optimization"]
        },
        {
            "title": "Backend Development",
            "description": "Creating robust and scalable backend systems using Node.js, Express, and modern databases.",
            "icon": "fas fa-server",
            "features": ["RESTful API development", "Database design", "Authentication systems", "Cloud deployment"]
        },
        {
            "title": "Full-Stack Solutions",
            "description": "End-to-end development solutions combining mobile apps with powerful backend systems.",
            "icon": "fas fa-code",
            "features": ["Complete app ecosystem", "Real-time features", "Third-party integrations", "Maintenance & support"]
        }
    ],
    "stats": [
        { "number": "2+", "label": "Years Experience" },
        { "number": "10+", "label": "Projects Completed" },
        { "number": "5+", "label": "Happy Clients" },
        { "number": "100%", "label": "Client Satisfaction" }
    ],
    "blogPosts": [
        {
            "title": "Getting Started with Flutter State Management",
            "excerpt": "A comprehensive guide to managing state in Flutter applications using BLoC pattern and other popular approaches.",
            "date": "2024-01-15",
            "tags": ["Flutter", "State Management", "BLoC"],
            "icon": "fas fa-mobile-alt"
        },
        {
            "title": "Building Scalable APIs with Node.js",
            "excerpt": "Best practices for creating robust and scalable REST APIs using Node.js, Express, and MongoDB.",
            "date": "2024-01-08",
            "tags": ["Node.js", "API", "Backend"],
            "icon": "fab fa-node-js"
        },
        {
            "title": "Mobile App Performance Optimization",
            "excerpt": "Tips and techniques to optimize your Flutter apps for better performance and user experience.",
            "date": "2024-01-01",
            "tags": ["Flutter", "Performance", "Optimization"],
            "icon": "fas fa-rocket"
        }
    ],
    "experiences": [
        {
            "title": "Bachelor of Computer Application",
            "address": "Surat",
            "description": "I have completed my BCA degree at Veer Narmad South Gujarat University.",
            "startDate": "2021-05-01T00:00:00.000Z",
            "endDate": "2024-05-01T00:00:00.000Z",
            "isNow": false,
            "isWork": false
        },
        {
            "title": "Flutter developer (1 year)",
            "address": "Surat",
            "description": "I am a Flutter developer at Tatvam Technology. I collaborate with team members to create numerous projects using Flutter technology for both our company and our clients. Additionally, I am learning Node.js at this company.",
            "startDate": "2023-01-01T00:00:00.000Z",
            "endDate": "2023-12-10T00:00:00.000Z",
            "isNow": false,
            "isWork": true
        },
        {
            "title": "Flutter developer",
            "address": "Surat",
            "description": "I am a Flutter developer at Vasundhara Infotech, where I collaborate with team members to create numerous projects using Flutter technology for both the company and our clients.",
            "startDate": "2023-12-25T00:00:00.000Z",
            "endDate": null,
            "isNow": true,
            "isWork": true
        },
        {
            "title": "Master of Computer Application",
            "address": "Surat",
            "description": "I am currently pursuing my MCA degree at Manipal university jaipur, where I am enhancing my skills in advanced computing and software development.",
            "isWork": false,
            "startDate": "2024-07-01T00:00:00.000Z",
            "endDate": null,
            "isNow": true
        }
    ],
    "projects": [
        {
            "title": "Music Booth",
            "description": "A mobile app for booking private music booths with secure access via Salto Door Lock SDK integration and native Flutter development.",
            "technology": [
                "Flutter",
                "Firebase",
                "Salto Lock",
                "Google Map"
            ],
            "playstoreLink": "https://play.google.com/store/apps/details?id=com.musicbooth",
            "appstoreLink": "https://apps.apple.com/pl/app/music-booth/id6475005668"
        },
        {
            "title": "Always Outdoors",
            "description": "A social media app inspired by Instagram with features like posts, reels, and real-time chat for outdoor enthusiasts.",
            "technology": [
                "Flutter",
                "Firebase",
                "Social Media",
                "Chat"
            ],
            "playstoreLink": "https://play.google.com/store/apps/details?id=com.always.outdoor",
            "appstoreLink": "https://apps.apple.com/in/app/always-outdoors/id6746796690"
        },
        {
            "title": "Luxchono Watch",
            "description": "In this project, I contributed as a back-end developer, implementing an online payment system that allows users to purchase watches seamlessly.",
            "technology": [
                "MongoDB",
                "Node js",
                "JavaScript",
                "Express"
            ],
            "gitHubLink": "https://github.com/hetdhameliya/luxchono-backend",
            "liveLink": "https://luxchono-watch.vercel.app/"
        },
    ]
};
// ... existing code ...
const skillIcons = {
    'Flutter': 'fab fa-google-play',
    'Node js': 'fab fa-node-js',
    'GitHub': 'fab fa-github',
    'Git': 'fab fa-git-alt',
    'JavaScript': 'fab fa-js-square',
    'TypeScript': 'fab fa-js-square',
    'Flutter Bloc': 'fas fa-cube',
    'Express': 'fas fa-server',
    'MongoDB': 'fas fa-database',
    'SQL': 'fas fa-database',
    'AWS EC2': 'fab fa-aws',
    'Docker': 'fab fa-docker'
};

// Populate services
function populateServices() {
    const servicesContainer = document.getElementById('servicesContainer');
    portfolioData.services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service-card';
        
        const features = service.features.map(feature => `<li>${feature}</li>`).join('');
        
        serviceElement.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul class="service-features">
                ${features}
            </ul>
        `;
        servicesContainer.appendChild(serviceElement);
    });
}

// Populate statistics
function populateStats() {
    const statsContainer = document.getElementById('statsContainer');
    portfolioData.stats.forEach(stat => {
        const statElement = document.createElement('div');
        statElement.className = 'stat-item';
        statElement.innerHTML = `
            <span class="stat-number">${stat.number}</span>
            <span class="stat-label">${stat.label}</span>
        `;
        statsContainer.appendChild(statElement);
    });
}

// Populate blog posts
function populateBlog() {
    const blogContainer = document.getElementById('blogContainer');
    portfolioData.blogPosts.forEach(post => {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog-card';
        
        const tags = post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('');
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        blogElement.innerHTML = `
            <div class="blog-image">
                <i class="${post.icon}"></i>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="fas fa-calendar"></i> ${formattedDate}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${tags}
                </div>
            </div>
        `;
        blogContainer.appendChild(blogElement);
    });
}

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const options = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
                const suffix = counter.textContent.replace(/[0-9]/g, '');
                let current = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + suffix;
                    }
                }, 40);
                
                observer.unobserve(counter);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Populate skills
function populateSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    portfolioData.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <i class="${skillIcons[skill.name] || 'fas fa-code'}"></i>
            <span>${skill.name}</span>
        `;
        skillsContainer.appendChild(skillElement);
    });
}

// Populate timeline
function populateTimeline() {
    const timelineContainer = document.getElementById('timelineContainer');
    
    // Sort experiences by start date (newest first)
    const sortedExperiences = portfolioData.experiences.sort((a, b) => 
        new Date(b.startDate) - new Date(a.startDate)
    );

    sortedExperiences.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const startDate = new Date(exp.startDate).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short' 
        });
        const endDate = exp.endDate ? 
            new Date(exp.endDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short' 
            }) : 'Present';

        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <div class="date">${startDate} - ${endDate} | ${exp.address}</div>
                <p>${exp.description}</p>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });
}

// Populate projects
function populateProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const techTags = project.technology.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        projectCard.innerHTML = `
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
                <div class="project-links">
                    ${project.gitHubLink ? `
                        <a href="${project.gitHubLink}" target="_blank" rel="noopener" title="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                    ` : ''}
                    ${project.liveLink ? `
                        <a href="${project.liveLink}" target="_blank" rel="noopener" title="Live Demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    ` : ''}
                    ${project.playstoreLink ? `
                        <a href="${project.playstoreLink}" target="_blank" rel="noopener" title="Play Store">
                            <i class="fab fa-google-play"></i>
                        </a>
                    ` : ''}
                    ${project.appstoreLink ? `
                        <a href="${project.appstoreLink}" target="_blank" rel="noopener" title="App Store">
                            <i class="fab fa-app-store-ios"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    navLinks.classList.toggle('active');
    
    // Animate hamburger menu
    mobileMenu.classList.toggle('active');
}

// Smooth scrolling for navigation links
function handleNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const offsetTop = targetSection.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
function handleScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
}

// Intersection Observer for animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .skill-item, .service-card, .blog-card, .stat-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Navbar background on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
}

// Active navigation highlighting
function handleActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Typing animation for hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Parallax effect disabled for static profile image
function handleParallax() {
    // Profile image is now static - no parallax effect
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateSkills();
    populateServices();
    populateStats();
    populateTimeline();
    populateProjects();
    populateBlog();
    handleNavigation();
    handleScrollToTop();
    handleNavbarScroll();
    handleActiveNavigation();
    handleParallax();
    
    // Setup mobile menu
    document.querySelector('.mobile-menu').addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const navLinks = document.querySelector('.nav-links');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
    
    // Setup intersection observer for animations
    setTimeout(observeElements, 500);
    setTimeout(animateCounters, 1000);
    
    // Add smooth scrolling to buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});