export const suggestedQuestions = [
  "Who is Uhass?",
  "Show me the projects",
  "What skills does he have?",
  "Where can I download the CV?",
  "How can I contact him?",
];

export function getChatResponse(message) {
  const input = message.toLowerCase();

  if (
    input.includes("who") ||
    input.includes("about") ||
    input.includes("uhass")
  ) {
    return "Uhass Jayaweera is a Software Engineering Graduate heavy on project-based learning.. He focuses on full-stack development, practical software projects, deployment, and AI-related learning.";
  }

  if (
    input.includes("project") ||
    input.includes("finance") ||
    input.includes("vibebot") ||
    input.includes("evacuatex") ||
    input.includes("capstone")
  ) {
    return "You can view Uhass’s projects in the Projects tab. Key projects include Finance Tracker, VibeBot, CPU Scheduling Visualizer, EvacuateX, and the Sessional Manager Capstone project.";
  }

  if (
    input.includes("skill") ||
    input.includes("tech") ||
    input.includes("stack") ||
    input.includes("language")
  ) {
    return "Uhass has experience with React, Vite, Tailwind CSS, JavaScript, TypeScript, Vue.js, Node.js, Express, MySQL, Python, Java, C, C++, C#, ASP.NET Core, Postman, Git, GitHub, GitLab, Vercel, Render, Railway, training a NLP model and Streamlit Cloud.";
  }

  if (
    input.includes("cv") ||
    input.includes("resume") ||
    input.includes("download")
  ) {
    return "You can download Uhass’s CV using the Download CV button near the top of the page.";
  }

  if (
    input.includes("contact") ||
    input.includes("email") ||
    input.includes("linkedin") ||
    input.includes("github")
  ) {
    return "You can contact Uhass through the Contact tab, which includes email, LinkedIn, and GitHub links.";
  }

  if (
    input.includes("education") ||
    input.includes("curtin") ||
    input.includes("monash")
  ) {
    return "Uhass is a Software Engineering graduate at Curtin University and is also starting a Graduate Certificate of Artificial Intelligence with Monash Online.";
  }

  return "I can help you explore this portfolio. Try asking about Uhass, his projects, skills, education, CV, or contact details.";
}