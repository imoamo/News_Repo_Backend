const mongoose = require('mongoose');
const News = require('./model/News');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Expanded Dummy News Data (30+ articles across various categories)
const newsData = [
  // Business News
  { title: "Federal Reserve Announces Interest Rate Cut for Q1 2025", content: "The FRB announced a 0.25% rate cut to support economic growth.", category: "Business", likes: 120, views: 1500 },
  { title: "Stock Market Surges After FRB’s Interest Rate Decision", content: "The S&P 500 and Nasdaq saw significant gains.", category: "Business", likes: 180, views: 2100 },
  { title: "Global Business Leaders Gather for Davos 2025", content: "World leaders discuss economic policies and trade relations.", category: "Business", likes: 250, views: 3200 },
  { title: "US Unemployment Rate Drops to Record Low in 2025", content: "Job market reaches highest employment rate since 2000.", category: "Business", likes: 190, views: 2800 },
  { title: "Elon Musk Announces New Tesla Gigafactory in India", content: "Tesla plans to expand its EV production in Asia.", category: "Business", likes: 220, views: 3100 },

  // Economy News
  { title: "Federal Reserve Signals Possible Rate Hike in Mid-2025", content: "FRB Chairman hints at an interest rate increase.", category: "Economy", likes: 95, views: 1100 },
  { title: "US GDP Growth Exceeds Expectations in Q1 2025", content: "Economic growth reaches 3.2% amid strong consumer spending.", category: "Economy", likes: 175, views: 2600 },
  { title: "China's Economy Slows Amidst Global Tensions", content: "China's growth rate dips to its lowest in a decade.", category: "Economy", likes: 150, views: 2300 },
  { title: "Europe Faces Inflation Challenges in 2025", content: "Eurozone inflation rises to 4.1% due to energy costs.", category: "Economy", likes: 140, views: 2100 },
  { title: "Cryptocurrency Adoption Grows Among Central Banks", content: "Several countries launch pilot programs for digital currencies.", category: "Economy", likes: 300, views: 3700 },

  // Tech News
  { title: "Tech Giants React to FRB’s 2025 Monetary Policy", content: "Apple, Google, and Microsoft analysts discuss market impact.", category: "Tech", likes: 200, views: 2500 },
  { title: "AI in Finance: How FRB Uses Machine Learning in 2025", content: "The FRB integrates AI to analyze economic trends.", category: "Tech", likes: 275, views: 3300 },
  { title: "Apple Unveils AI-Powered iPhone 17", content: "Apple introduces its most advanced AI-driven smartphone.", category: "Tech", likes: 340, views: 4200 },
  { title: "Google Launches Quantum Computing Initiative", content: "Google aims to revolutionize computing with quantum AI.", category: "Tech", likes: 260, views: 3100 },
  { title: "Meta Introduces Next-Gen VR Headset for 2025", content: "Meta launches a more immersive VR experience.", category: "Tech", likes: 280, views: 3400 },
  { title: "SpaceX Successfully Tests Starship for Mars Mission", content: "Elon Musk's SpaceX moves closer to Mars colonization.", category: "Tech", likes: 350, views: 4500 },

  // Sports News
  { title: "Super Bowl 2025: Kansas City Chiefs vs. San Francisco 49ers", content: "NFL's biggest game of the year sees record viewership.", category: "Sports", likes: 500, views: 6000 },
  { title: "LeBron James Breaks NBA All-Time Scoring Record", content: "LeBron sets a new milestone in basketball history.", category: "Sports", likes: 400, views: 5500 },
  { title: "FIFA Announces Expanded 48-Team World Cup 2026", content: "More teams, more matches, and global excitement.", category: "Sports", likes: 350, views: 4800 },
  { title: "Roger Federer Returns to Tennis in 2025 Exhibition Match", content: "The tennis legend makes a surprise comeback.", category: "Sports", likes: 320, views: 4400 },
  { title: "Olympics 2025: Paris Prepares for Summer Games", content: "France gears up to host one of the biggest events.", category: "Sports", likes: 290, views: 4100 },

  // Finance News
  { title: "FRB Discusses Digital Dollar Pilot Program for 2025", content: "The Federal Reserve explores a Central Bank Digital Currency (CBDC).", category: "Finance", likes: 300, views: 3500 },
  { title: "Bitcoin Hits $100K for the First Time", content: "Cryptocurrency reaches an all-time high in 2025.", category: "Finance", likes: 450, views: 5800 },
  { title: "US Treasury to Launch Blockchain-Based Bond System", content: "Government explores blockchain for secure transactions.", category: "Finance", likes: 280, views: 3300 },
  { title: "Warren Buffett Invests $10 Billion in Green Energy", content: "Berkshire Hathaway doubles down on clean energy projects.", category: "Finance", likes: 310, views: 3700 },
  { title: "Hedge Funds See Record Returns in Volatile 2025 Market", content: "Top hedge funds outperform the stock market.", category: "Finance", likes: 270, views: 3200 }
];

// Insert Dummy Data
const seedDatabase = async () => {
  try {
    await News.deleteMany(); // Clear existing data
    await News.insertMany(newsData);
    console.log("✅ 30+ Dummy News Data Inserted Successfully!");
    mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error inserting data:", error);
  }
};

// Run Seeder
seedDatabase();
