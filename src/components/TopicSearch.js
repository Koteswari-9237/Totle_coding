import React, { useState } from 'react';
import './TopicSearch.css';

const topics = [
  { id: 1, name: 'Thermodynamics', category: 'Physics' },
  { id: 2, name: 'Calculus', category: 'Mathematics' },
  { id: 3, name: 'Organic Chemistry', category: 'Chemistry' },
  { id: 4, name: 'World War II', category: 'History' },
  { id: 5, name: 'Evolution', category: 'Biology' },
];

function TopicSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="topic-search">
      <h1>Topic Catalogue</h1>
      <input
        type="text"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="topics-list">
        {filteredTopics.length > 0 ? (
          filteredTopics.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.name}</h3>
              <p>{topic.category}</p>
            </div>
          ))
        ) : (
          <p className="no-topics">No topics found</p>
        )}
      </div>
    </div>
  );
}

export default TopicSearch;
