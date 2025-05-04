const queries = [
  {
    id: 1,
    title: "Select All Users",
    description: "Retrieve all records from the users table.",
  },
  {
    id: 2,
    title: "Filter by Rating",
    description: "Select products with a rating above 4.",
  },
];

export default function QueryPromptList() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-2">SQL Queries</h2>
      {queries.map((query) => (
        <div
          key={query.id}
          className="border border-gray-300 rounded-md p-4 shadow-sm hover:bg-gray-50 transition"
        >
          <h3 className="font-semibold text-lg">{query.title}</h3>
          <p className="text-sm text-gray-600">{query.description}</p>
        </div>
      ))}
    </div>
  );
}
