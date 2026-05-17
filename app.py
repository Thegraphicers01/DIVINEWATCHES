from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Organized catalog database structure
    catalog = {
        "premium_abayas": [
            {"id": 1, "name": "Royal Velvet Abaya", "price": "₹5,500", "img": "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=600"},
            {"id": 2, "name": "Editorial Silk Abaya", "price": "₹6,200", "img": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600"}
        ],
        "luxury_burqas": [
            {"id": 3, "name": "Classic Onyx Burqa", "price": "₹4,800", "img": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600"},
            {"id": 4, "name": "Zari Embroidered Burqa", "price": "₹7,500", "img": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600"}
        ]
    }
    return render_template('index.html', catalog=catalog)

if __name__ == '__main__':
    app.run(debug=True)
