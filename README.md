AI-Powered Data Query Dashboard

🚀 Project Overview

This is a React-based dashboard prototype designed for a Gen AI Analytics Tool that allows non-technical users to query data using natural language. The system processes user queries, simulates fetching results, and visualizes data with charts.

🎯 Key Features

Natural Language Query Input: Users can type questions to retrieve insights.

Query Processing Simulation: Mocks AI-powered responses.

Results Visualization: Displays processed data in a chart format.

Query History: Users can track past queries.

State Management: Uses Redux for handling queries and results.

Modern UI: Built with Tailwind CSS for a clean and responsive design.


🛠 Tech Stack

Frontend: React.js, Tailwind CSS

State Management: Redux Toolkit

Chart Visualization: Recharts



---

📌 Demo Queries

Here are some example business queries that users can input:

1. "What were the total sales in the last quarter?"


2. "How many new customers signed up this month?"


3. "Which product had the highest revenue last year?"


4. "What is the profit trend over the last 6 months?"


5. "Show me the top 5 best-selling products."




---

🎨 UI Components

⿡ Query Input

Text field: Users enter business-related queries.

Submit button: Triggers query processing.

AI-powered suggestions (future enhancement).


⿢ Query History

List of past queries for easy reference.

Clicking a query could allow re-execution (future enhancement).


⿣ Results Display

Loading State: Shows progress while processing.

Success State: Displays the queried results as a chart.

Error State: Handles invalid or failed queries.

Visualization: Uses Recharts for data representation.



---

🔄 State Management (Redux)

State Structure:

{
  queryHistory: [],
  currentQuery: "",
  queryStatus: "idle" | "loading" | "success" | "error",
  resultData: null
}

Actions & Reducers:

submitQuery(query) → Sets query and changes state to loading.

querySuccess(data) → Saves the result and updates state to success.

queryError() → Handles errors and updates state to error.



---

🚀 Running the Project

⿡ Install dependencies:

npm install

⿢ Start the development server:

npm start

⿣ Build for production:

npm run build


---

📢 Future Enhancements

✅ AI-powered autocomplete for query suggestions.
✅ Database integration for real-time insights.
✅ More complex visualizations with filtering options.


---

🎯 Conclusion

This dashboard demonstrates the interaction between users and an AI-powered data analytics tool. It serves as a prototype for how businesses can democratize data access across teams, improving efficiency and decision-making.


---

📬 Contact

For queries or contributions, feel free to reach out!
