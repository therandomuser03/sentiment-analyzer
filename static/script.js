document.getElementById('analyze-btn').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('result').textContent = data.error;
        } else {
            document.getElementById('result').textContent = `Sentiment: ${data.sentiment}`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'An error occurred.';
    });
});
