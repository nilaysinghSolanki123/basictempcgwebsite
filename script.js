/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
}

.hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom, #34c6b9, #0049b7);
    padding: 2rem;
    color: white;
}

.hero-section nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
}

.hero-section nav ul li {
    display: inline;
}

.hero-section nav ul li a {
    text-decoration: none;
    color: white;
}

.hero-content {
    max-width: 50%;
}

.hero-image img {
    max-width: 100%;
    border-radius: 8px;
}

.services, .case-studies {
    padding: 2rem;
    text-align: center;
}

.service-cards, .case-cards {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
}

.card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    max-width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h3 {
    color: #0049b7;
}
