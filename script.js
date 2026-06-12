function performSearch() {
    // 1. Get the value the user typed
    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsDiv = document.getElementById("results");
    
    // 2. Clear any previous results
    resultsDiv.innerHTML = "";

    // 3. Define your list of topics/tasks
    const studyTopics = ["Mathematics", "Physics", "Chemistry", "Assignments", "Exam Prep"];

    // 4. Search and show matching results
    let filtered = studyTopics.filter(topic => topic.toLowerCase().includes(input));
    
    if (filtered.length > 0) {
        filtered.forEach(item => {
            resultsDiv.innerHTML += `<p>Found: ${item}</p>`;
        });
    } else {
        resultsDiv.innerHTML = "<p>No results found.</p>";
    }
}

