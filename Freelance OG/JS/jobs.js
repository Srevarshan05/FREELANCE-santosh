document.addEventListener('DOMContentLoaded', function() {
    const jobCardContainer = document.getElementById('job-card-container');
    const deleteJobsBtn = document.getElementById('delete-jobs-btn');

    // Load jobs from local storage
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    displayJobs();

    // Function to display jobs
    function displayJobs() {
        jobCardContainer.innerHTML = '';
        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            jobCard.innerHTML = `
                <h2>${job.name}</h2>
                <p>${job.description}</p>
                <p>Posted on: ${job.postedTime}</p>
                <button class="apply-btn" data-job-name="${job.name}">View and Apply</button>
            `;
            jobCardContainer.appendChild(jobCard);
        });

        // Add event listeners to the buttons
        const applyButtons = document.querySelectorAll('.apply-btn');
        applyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const jobName = button.getAttribute('data-job-name');
                // Your logic to view and apply goes here
                alert('You clicked to apply for: ' + jobName); // Placeholder action
            });
        });
    }

    // Handle delete jobs button click
    deleteJobsBtn.addEventListener('click', function() {
        jobs = [];
        localStorage.removeItem('jobs');
        displayJobs();
    });
});