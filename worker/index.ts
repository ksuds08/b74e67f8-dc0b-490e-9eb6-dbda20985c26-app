// Auto-generated entrypoint for Cloudflare Worker

import { ResumeGeneratorBackendHandler } from './api/ResumeGeneratorBackend';
import { AIGenerationEngineHandler } from './api/AIGenerationEngine';
import { ATSOptimizationServiceHandler } from './api/ATSOptimizationService';
import { AutomaticUpdateServiceHandler } from './api/AutomaticUpdateService';
import { UserManagementBackendHandler } from './api/UserManagementBackend';
import { SubscriptionManagementSystemHandler } from './api/SubscriptionManagementSystem';

const INDEX_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ResumeCraft AI</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body class="bg-gray-100">
    <header class="bg-blue-600 text-white py-4">
        <div class="container mx-auto flex justify-between items-center">
            <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-eeM7RLe3Wv2HZ7Toub47POas/user-rnGwZEmjnwoUoF8lEvadvt0O/img-cr6fYEPHOTYju81ALUQTddDH.png?st=2025-07-27T21%3A04%3A50Z&se=2025-07-27T23%3A04%3A50Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-27T12%3A19%3A26Z&ske=2025-07-28T12%3A19%3A26Z&sks=b&skv=2024-08-04&sig=A8ADYOJ40kamiP1KsW9MLmRcCAqfCc0J17JpnMZ21sg%3D" alt="ResumeCraft AI Logo" class="h-10">
            <h1 class="text-2xl font-bold">ResumeCraft AI</h1>
        </div>
    </header>

    <main class="container mx-auto py-8">
        <section class="bg-white p-6 rounded shadow-md">
            <h2 class="text-xl font-semibold mb-4">Crafting Your Future, One Resume at a Time</h2>
            <form id="resumeForm" class="space-y-4">
                <div class="flex flex-col">
                    <label for="name" class="mb-1">Full Name</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded p-2">
                </div>
                <div class="flex flex-col">
                    <label for="email" class="mb-1">Email Address</label>
                    <input type="email" id="email" name="email" class="border border-gray-300 rounded p-2">
                </div>
                <div class="flex flex-col">
                    <label for="jobTitle" class="mb-1">Desired Job Title</label>
                    <input type="text" id="jobTitle" name="jobTitle" class="border border-gray-300 rounded p-2">
                </div>
                <div class="flex flex-col">
                    <label for="jobDescription" class="mb-1">Job Description</label>
                    <textarea id="jobDescription" name="jobDescription" class="border border-gray-300 rounded p-2"></textarea>
                </div>
                <div class="flex flex-col">
                    <label for="careerObjectives" class="mb-1">Career Objectives</label>
                    <textarea id="careerObjectives" name="careerObjectives" class="border border-gray-300 rounded p-2"></textarea>
                </div>
                <button type="submit" class="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600">Generate Resume</button>
            </form>
        </section>

        <section id="resumeOutput" class="mt-8 bg-white p-6 rounded shadow-md hidden">
            <h2 class="text-xl font-semibold mb-4">Your AI-Generated Resume</h2>
            <pre id="resumeContent" class="whitespace-pre-wrap"></pre>
        </section>
    </main>

    <footer class="bg-blue-600 text-white py-4 mt-8">
        <div class="container mx-auto text-center">
            <p>&copy; 2023 ResumeCraft AI. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
`;
const STYLE_CSS = `
body {
    font-family: 'Inter', sans-serif;
}

input, textarea {
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
}

button {
    transition: background-color 0.3s ease;
}

@media (min-width: 640px) {
    main {
        max-width: 640px;
    }
}
`;
const SCRIPT_JS = `
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm");
    const resumeOutput = document.getElementById("resumeOutput");
    const resumeContent = document.getElementById("resumeContent");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/functions/api/generateResume", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to generate resume.");

            const result = await response.json();
            resumeContent.textContent = result.resume;
            resumeOutput.classList.remove("hidden");
        } catch (error) {
            console.error(error);
            alert("An error occurred while generating the resume. Please try again.");
        }
    });
});
`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === '/') return new Response(INDEX_HTML, { headers: { 'Content-Type': 'text/html' } });
    if (path === '/style.css') return new Response(STYLE_CSS, { headers: { 'Content-Type': 'text/css' } });
    if (path === '/script.js') return new Response(SCRIPT_JS, { headers: { 'Content-Type': 'application/javascript' } });
    if (path === '/api/ResumeGeneratorBackend') return ResumeGeneratorBackendHandler(request);
    if (path === '/api/AIGenerationEngine') return AIGenerationEngineHandler(request);
    if (path === '/api/ATSOptimizationService') return ATSOptimizationServiceHandler(request);
    if (path === '/api/AutomaticUpdateService') return AutomaticUpdateServiceHandler(request);
    if (path === '/api/UserManagementBackend') return UserManagementBackendHandler(request);
    if (path === '/api/SubscriptionManagementSystem') return SubscriptionManagementSystemHandler(request);
    return new Response('Not found', { status: 404 });
  }
};
