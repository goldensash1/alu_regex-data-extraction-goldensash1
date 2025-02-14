document.getElementById('scrapeForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const url = document.getElementById('urlInput').value;
    const outputEl = document.getElementById('output');
    const errorEl = document.getElementById('errorOutput');
    
    
    outputEl.textContent = "Extracting data";
    errorEl.textContent = "";

    if (!url) {
        errorEl.textContent = "Please enter a valid URL.";
        return;
    }

    try {
        const response = await fetch(url, { mode: 'cors' });

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
        }

        const text = await response.text();
        outputEl.textContent = "Extracting data...";

        const patterns = {
            emails: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
            urls: /https?:\/\/[a-zA-Z0-9.-]+(?:\.[a-zA-Z]{2,})+(?:\/\S*)?/g,
            phones: /\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/g,
            creditCards: /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g,
            timeFormats: /\b(?:[01]?\d|2[0-3]):[0-5]\d\b|\b\d{1,2}:\d{2}\s?(AM|PM)\b/gi,
            htmlTags: /<[^>]+>/g,
            hashtags: /#[A-Za-z0-9_]+/g,
            currency: /\$\d{1,3}(,\d{3})*(\.\d{2})?/g
        };

        const extractData = (text, pattern) => text.match(pattern) || [];

        const results = {
            emails: extractData(text, patterns.emails),
            urls: extractData(text, patterns.urls),
            phones: extractData(text, patterns.phones),
            creditCards: extractData(text, patterns.creditCards),
            timeFormats: extractData(text, patterns.timeFormats),
            htmlTags: extractData(text, patterns.htmlTags),
            hashtags: extractData(text, patterns.hashtags),
            currency: extractData(text, patterns.currency)
        };

        outputEl.textContent = JSON.stringify(results, null, 2);

        // Create JSON file
        const jsonData = JSON.stringify(results, null, 2);
        const jsonBlob = new Blob([jsonData], { type: "application/json" });
        const jsonUrl = URL.createObjectURL(jsonBlob);
        document.getElementById('jsonDownload').href = jsonUrl;
        document.getElementById('jsonDownload').style.display = "block";

        // Create CSV file
        const csvData = Object.entries(results).map(([key, values]) => 
            `${key},"${values.join("; ")}"`
        ).join("\n");

        const csvBlob = new Blob([csvData], { type: "text/csv" });
        const csvUrl = URL.createObjectURL(csvBlob);
        document.getElementById('csvDownload').href = csvUrl;
        document.getElementById('csvDownload').style.display = "block";

    } catch (error) {
        errorEl.textContent = `Error: ${error.message}`;
        outputEl.textContent = "";
        console.error("Fetch Error:", error);
    }
});
