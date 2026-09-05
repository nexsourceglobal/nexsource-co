export interface Course {
  slug: string;
  title: string;
  tagline: string;
  audience: "Students" | "Working Professionals" | "Corporate Teams";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  price: string;
  oldPrice: string;
  rating: number;
  learners: string;
  topics: string[];
}

export const courses: Course[] = [
  {
    slug: "spring-boot-zero-to-hero",
    title: "Spring Boot Zero to Hero",
    tagline: "Core Java se lekar production-ready REST APIs tak — bilkul shuruaat se.",
    audience: "Students",
    level: "Beginner",
    duration: "10 weeks",
    lessons: 120,
    price: "₹3,499",
    oldPrice: "₹6,999",
    rating: 4.8,
    learners: "42,000+",
    topics: ["Core Java Refresher", "Spring IoC & DI", "Spring Boot Starters", "REST APIs", "Spring Data JPA", "Mini Projects"],
  },
  {
    slug: "spring-microservices-mastery",
    title: "Spring Microservices Mastery",
    tagline: "Monolith tod kar scalable microservices banao — service discovery, config, resilience sab kuch.",
    audience: "Working Professionals",
    level: "Advanced",
    duration: "8 weeks",
    lessons: 85,
    price: "₹5,999",
    oldPrice: "₹11,999",
    rating: 4.9,
    learners: "18,500+",
    topics: ["Eureka & Service Discovery", "Spring Cloud Config", "API Gateway", "Circuit Breaker (Resilience4j)", "Distributed Tracing", "Docker & Kubernetes Deploy"],
  },
  {
    slug: "java-backend-interview-crack",
    title: "Java + Spring Interview Crack",
    tagline: "FAANG aur product companies ke real interview questions, mock interviews ke saath.",
    audience: "Students",
    level: "Intermediate",
    duration: "6 weeks",
    lessons: 60,
    price: "₹2,499",
    oldPrice: "₹4,999",
    rating: 4.7,
    learners: "55,000+",
    topics: ["Java 8–21 Deep Dive", "Collections & Streams", "Spring Internals", "Hibernate Q&A", "System Design Basics", "5 Mock Interviews"],
  },
  {
    slug: "spring-security-pro",
    title: "Spring Security Pro",
    tagline: "JWT, OAuth2, RBAC — apni APIs ko enterprise-grade secure karo.",
    audience: "Working Professionals",
    level: "Intermediate",
    duration: "5 weeks",
    lessons: 48,
    price: "₹3,999",
    oldPrice: "₹7,999",
    rating: 4.8,
    learners: "12,000+",
    topics: ["Filter Chain Internals", "JWT Authentication", "OAuth2 & OIDC", "Method Security", "RBAC Design", "Security Testing"],
  },
  {
    slug: "corporate-spring-bootcamp",
    title: "Corporate Spring Bootcamp",
    tagline: "Aapki poori dev team ke liye customized, project-based Spring training.",
    audience: "Corporate Teams",
    level: "Intermediate",
    duration: "Custom (2–6 weeks)",
    lessons: 0,
    price: "Custom Quote",
    oldPrice: "",
    rating: 4.9,
    learners: "120+ teams",
    topics: ["Team Skill Assessment", "Custom Curriculum", "Live Project Sprints", "Code Reviews by Mentors", "Certification", "Post-training Support"],
  },
  {
    slug: "spring-data-hibernate-deep",
    title: "Spring Data & Hibernate Deep Dive",
    tagline: "N+1 problems, caching, transactions — database layer ko master karo.",
    audience: "Working Professionals",
    level: "Advanced",
    duration: "6 weeks",
    lessons: 54,
    price: "₹4,499",
    oldPrice: "₹8,999",
    rating: 4.7,
    learners: "9,800+",
    topics: ["JPA Mapping Mastery", "Transactions & Isolation", "Query Optimization", "Second-level Caching", "Flyway Migrations", "Performance Tuning"],
  },
];

export const testimonials = [
  {
    name: "Ananya Sharma",
    role: "SDE-2 @ Razorpay",
    quote: "College me sirf theory mili thi. Spring Boot Zero to Hero ne mujhe 4 mahine me job-ready bana diya. Projects resume me daale aur pehli hi company me selection ho gaya.",
  },
  {
    name: "Rohit Verma",
    role: "Backend Engineer @ PhonePe",
    quote: "6 saal support role me tha. Microservices Mastery course ke baad confidently backend role me switch kiya — 80% hike ke saath. Weekend batches working professionals ke liye perfect hain.",
  },
  {
    name: "Priya Nair",
    role: "Tech Lead @ Infosys",
    quote: "Humne apni 15-member team ka Corporate Bootcamp karaya. Curriculum hamare stack pe customized tha. Delivery timelines 3 sprint me hi improve ho gaye.",
  },
  {
    name: "Arjun Mehta",
    role: "Final Year, B.Tech CSE",
    quote: "Interview Crack course ke mock interviews ne confidence bana diya. TCS Digital aur ek product startup — dono ka offer mila. Simple language me padhana sabse badi baat hai.",
  },
];
