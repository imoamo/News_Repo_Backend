
# 📰 News API Documentation

## 📌 Overview
The **News API** allows managing news articles with real-time updates using WebSockets.  
It supports **creating, retrieving, and fetching trending news** by category.

## 🌍 Base URL
```
http://localhost:5000
```
*(Update this in production as needed.)*

## 🚀 Features
✅ Create news articles  
✅ Fetch trending news  
✅ Retrieve articles by category  
✅ Real-time WebSocket updates  

📌 **You can check the API documentation here:**  
➡️ [http://localhost:5000/api-docs/#/](http://localhost:5000/api-docs/#/)

---

## 📖 API Endpoints

### 📌 1. Create a News Article
#### ➡️ `POST /api/news`
**Description:** Adds a new news article.  

#### 📥 Request Body (JSON)
```json
{
  "title": "Breaking Tech News",
  "content": "Latest advancements in AI...",
  "category": "Tech"
}
```

#### 📤 Response (201 Created)
```json
{
  "id": "auto-generated-id",
  "title": "Breaking Tech News",
  "content": "Latest advancements in AI...",
  "category": "Tech",
  "likes": 0,
  "views": 0,
  "timestamp": "2024-02-26T12:00:00Z"
}
```
> **⚠️ Errors:**  
> `500 Internal Server Error` – If something goes wrong.

---

### 🔥 2. Get Trending News
#### ➡️ `GET /api/news/trending`
**Description:** Fetches the **top 5 trending news** articles based on likes and views.

#### 📤 Response (200 OK)
```json
[
  {
    "id": "1",
    "title": "Stock Market Crash",
    "content": "Stock markets have plunged today...",
    "category": "Finance",
    "likes": 150,
    "views": 1200,
    "timestamp": "2024-02-26T12:00:00Z"
  }
]
```
> **⚠️ Errors:**  
> `500 Internal Server Error` – If something goes wrong.

---

### 🏷️ 3. Get News by Category
#### ➡️ `GET /api/news/{category}`
**Description:** Retrieves news articles **by category**.

#### 📥 Path Parameter
| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `category` | `string` | ✅ Yes | Must be one of: `Tech`, `Business`, `Sports`, `Economy`, `Finance` |

#### 📤 Example Response (200 OK)
```json
[
  {
    "id": "2",
    "title": "AI Breakthrough",
    "content": "A new AI model surpasses human capabilities...",
    "category": "Tech",
    "likes": 300,
    "views": 5000,
    "timestamp": "2024-02-26T14:30:00Z"
  }
]
```
> **⚠️ Errors:**  
> `500 Internal Server Error` – If something goes wrong.

---

## 🔄 Real-Time News Updates (WebSockets)
The API supports real-time news updates via WebSockets.  
Clients can subscribe to a **news category** and receive live updates.

### 🔔 Subscribe to a Category
```javascript
const socket = io("http://localhost:5000");
socket.emit("subscribeToCategory", "Tech");

socket.on("newsUpdate", (data) => {
  console.log("New article received:", data);
});
```

### 📥 Incoming News Update (Example Payload)
```json
{
  "id": "3",
  "title": "5G Expands Globally",
  "content": "5G networks are now available in more countries...",
  "category": "Tech",
  "likes": 100,
  "views": 2500,
  "timestamp": "2024-02-26T16:00:00Z"
}
```

---

## ⚠️ Error Handling
| Status Code | Meaning |
|-------------|---------|
| `500` | Internal Server Error – Something went wrong on the server. |
| `404` | Not Found – If the resource does not exist. |

---

## 📜 Notes
- Ensure the `category` matches one of the predefined values.
- **WebSocket clients** must maintain a persistent connection to receive updates.
- The API uses **Swagger OpenAPI 3.0**, available at:
  ```
  http://localhost:5000/api-docs
  ```




