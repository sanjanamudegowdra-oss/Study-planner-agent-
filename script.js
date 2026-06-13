
function performSearch() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsDiv = document.getElementById("results");

    const studyTopics = [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Computer Science"
    ];

    let results = studyTopics.filter(topic =>
        topic.toLowerCase().includes(input)
    );

    resultsDiv.innerHTML =
        results.length > 0
            ? results.join("<br>")
            : "No results found";
}
