<script>
function performSearch() {
    let input = document.getElementById("searchInput").value.toLowerCase().trim();
    let resultsDiv = document.getElementById("results");

    const topics = ["mathematics", "physics", "chemistry", "biology", "computer"];

    if (input === "") {
        resultsDiv.innerHTML = "Please type something";
        return;
    }

    let found = topics.filter(t => t.includes(input));

    if (found.length > 0) {
        resultsDiv.innerHTML = "Results: " + found.join(", ");
    } else {
        resultsDiv.innerHTML = "No results found";
    }
}
</script>
