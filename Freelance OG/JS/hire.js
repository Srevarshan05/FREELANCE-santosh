document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;
    const postedTime = new Date().toLocaleString(); // Current time

    // Save the job to local storage
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    jobs.push({ name: projectName, description: projectDescription, postedTime });
    localStorage.setItem('jobs', JSON.stringify(jobs));

    // Redirect to the JobListings page
    window.location.href = 'jobs.html';
});