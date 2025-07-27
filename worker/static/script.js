
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
