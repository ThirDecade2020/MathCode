const queries = [
  { id: 1, title: "Select All Users", description: "Retrieve all records from the users table." },
  { id: 2, title: "Filter by Rating", description: "Select products with a rating above 4." }
];

export default function QueryPromptList() {
  return (
    <div>
      <h2 className="font-bold text-lg mb-2">SQL Queries</h2>
      <ul className="space-y-2">
        {queries.map((query) => (
          <li key={query.id} className="border p-2 rounded bg-white shadow">
            <h3 className="font-semibold">{query.title}</h3>
            <p className="text-sm text-gray-600">{query.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}