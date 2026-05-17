from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # This is your collection dataset. Easily add new items here!
    collections = [
        {
            "id": 1,
            "tag": "EVERYDAY ELEGANCE",
            "title": "Velvet-Trimmed Abaya",
            "price": "₹4,500",
            "image": "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=600"
        },
        {
            "id": 2,
            "tag": "PREMIUM COUTURE",
            "title": "Classic Onyx Burqa",
            "price": "₹5,200",
            "image": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600"
        },
        {
            "id": 3,
            "tag": "ROYAL HERITAGE",
            "title": "Embroidered Silk Kaftan",
            "price": "₹6,800",
            "image": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600"
        }
    ]
    return render_template('index.html', products=collections)

if __name__ == '__main__':
    app.run(debug=True)