# 🧠 Text Sentiment Analyzer

A simple web application that uses **NLTK's VADER** sentiment analysis tool to detect the sentiment of a given text input. Built using **Flask** and styled with modern HTML/CSS.

## 🚀 Features

- Analyze sentiment of any English text (Positive, Neutral, or Negative)
- Uses NLTK's VADER sentiment intensity analyzer
- Clean, responsive UI with modern design
- Fast and lightweight

## 📸 Screenshot



## 🛠️ Technologies Used

- Python 3
- Flask
- HTML5 / CSS3
- JavaScript (optional enhancements)
- NLTK (VADER lexicon)

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/text-sentiment-analyzer.git
cd text-sentiment-analyzer
```

### 2. Create a Virtual Environment (Optional but Recommended)
```bash
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Download VADER Lexicon
```python
import nltk
nltk.download('vader_lexicon')
```

Alternatively, run this in the terminal:
```bash
python -c "import nltk; nltk.download('vader_lexicon')"
```

### 5. Run the App
```bash
python app.py
```

Open your browser and go to:
```
http://127.0.0.1:5000/
```

## 📁 Project Structure
```
text-sentiment-analyzer/
│
├── app.py
├── requirements.txt
├── static/
│   ├── style.css
│   └── script.js
├── templates/
│   └── index.html
├── README.md
└── screenshot.png   # Optional
```

## 📄 License
MIT License — feel free to use, modify, and distribute.

## 💡 Future Improvements
* Add support for multiple languages
* Include charts or visual feedback
* Save analysis history
* API version for external use

## 🤝 Contributions
Pull requests are welcome! If you find bugs or want to improve the UI/UX, feel free to contribute.

## 🌟 Acknowledgements
* NLTK
* VADER Sentiment Analysis
* Flask framework