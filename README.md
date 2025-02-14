# Web Scraper with Regex-Based Data Extraction

## 📌 Overview
This project is a simple web scraper built using **pure HTML and JavaScript** (no frameworks). It allows users to:
- Scrape data from **APIs or websites**.
- Extract useful information such as **emails, URLs, phone numbers, credit card numbers, time formats, HTML tags, hashtags, and currency values** using **regular expressions (Regex)**.
- Save the extracted data as **JSON and CSV** files.
- Display results directly on the webpage.
- Handle **CORS policy issues** by fetching data correctly.

## 🛠 Features
✅ Fetch data from a given **API or website**.
✅ Extract structured data using **regular expressions**.
✅ **Download extracted data** as JSON and CSV.
✅ **Error handling** for invalid URLs and fetch failures.
✅ Simple, lightweight, and **framework-free**.

## 🚀 How to Use

1. Clone the repository or download the project files.
   ```bash
   git clone https://github.com/yourusername/web-scraper.git
   cd web-scraper
   ```

2. Open `index.html` in any browser.

3. **Enter a URL** (API or website) in the input field.

4. Click the **"Scrape"** button.

5. The extracted data will be displayed on the page.

6. Click the **"Download JSON"** or **"Download CSV"** button to save the data.

## 📝 Project Files

- `index.html` - The main webpage containing the form and UI.
- `script.js` - Handles fetching data, applying regex patterns, and generating downloadable files.
- `README.md` - Documentation (this file).

## 🔍 How It Works

1. **User enters a URL** in the form and submits it.
2. **JavaScript fetches** the webpage data using `fetch(url, { mode: 'cors' })`.
3. The **response is converted to text**.
4. The **Regex patterns extract** specific data from the text.
5. The extracted data is displayed in **JSON format** on the webpage.
6. Users can **download** the extracted data as JSON or CSV.
7. **Error handling** is implemented to show errors on the webpage if:
   - The URL is invalid.
   - The website blocks CORS requests.
   - There’s a network issue.

## 📌 Regex Patterns Used
| Data Type       | Regex Pattern |
|----------------|--------------|
| Emails         | `/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g` |
| URLs          | `/https?:\/\/[a-zA-Z0-9.-]+(?:\.[a-zA-Z]{2,})+(?:\/\S*)?/g` |
| Phone Numbers  | `/\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/g` |
| Credit Cards   | `/\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g` |
| Time Formats   | `/\b(?:[01]?\d|2[0-3]):[0-5]\d\b|\b\d{1,2}:\d{2}\s?(AM|PM)\b/gi` |
| HTML Tags      | `/<[^>]+>/g` |
| Hashtags       | `/#[A-Za-z0-9_]+/g` |
| Currency       | `/\$\d{1,3}(,\d{3})*(\.\d{2})?/g` |

## 🛠️ Troubleshooting & CORS Issues

- If you encounter **CORS policy errors**, try using a **CORS proxy** like `allorigins.win`.
- Ensure the website allows scraping; some sites block automated requests.
- If a site blocks scraping, consider running the script on a **server backend**.

## 💡 Future Enhancements

- Improve UI with better **styling and animations**.
- Add **file upload support** to scrape local HTML files.
- Implement a **backend proxy** to bypass CORS issues more reliably.
- Expand Regex patterns to extract more types of data.

## 👨‍💻 Author
- **Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

## 📜 License
This project is licensed under the MIT License - feel free to modify and distribute it!

