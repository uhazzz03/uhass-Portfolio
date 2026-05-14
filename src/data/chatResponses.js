export const suggestedQuestions = [
  "Show me the projects",
  "How can I contact",
];

export function getChatResponse(message) {
  const input = message.toLowerCase();

  if (
    input.includes("who") ||
    input.includes("about") ||
    input.includes("uhass")
  ) {
    return {
        text: "Uhass Jayaweera is a Software Engineering Graduate heavy on project-based learning. I've opened the tab for you.",
        tab: "about",
    };
  }

  if (
    input.includes("project") ||
    input.includes("finance") ||
    input.includes("vibebot") ||
    input.includes("evacuatex") ||
    input.includes("capstone")
  ) {
    return {
        text: "I've opened the Projects tab and you can check everything out in detail now.",
        tab: "projects",
    }
  }

  if (
    input.includes("skill") ||
    input.includes("tech") ||
    input.includes("stack") ||
    input.includes("language")
  ) {
    return {
        text: "All the skills are categorized so you can find anything specific you are looking for in the tab I just opened.",
        tab: "skills",
    }
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
    return {
        text: "You can contact Uhass through the Contact tab, which I have opened for you.",
        tab: "contact",
    }
  }

  if (
    input.includes("education") ||
    input.includes("curtin") ||
    input.includes("monash")
  ) {
    return {
        text: "His education is detailed in this particular tab I have opened for you.",
        tab: "education",
    }
  }

  return "I can help you explore this portfolio. Try asking about Uhass, his projects, skills, education, CV, or contact details.";
}