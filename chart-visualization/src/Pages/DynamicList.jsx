import React, { useState } from 'react';

const DynamicList = () => {
  //Implementing State variables to the list, question, answer, and search term
  const [list, setList] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  // For adding new item to the list
  const handleAddItem = () => {
    if (question.trim() !== '' && answer.trim() !== '') {
      setList([...list, { question, answer }]);

      // Clearing the input fields for question and answer
      setQuestion('');
      setAnswer('');
    }
  };

  //For removing an existing item in the List
  const handleRemoveItem = (index) => {
    
    // Checking if the index is valid 
    if (index !== list.length - 1) {
      const updatedList = list.filter((item,i) => i !== index);
      setList(updatedList);
    }
    // if there is only one list item do nothing
    if (list.length === 1) {
      return;
    }
  };

  // Handling the Search input Change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredList = list.filter(
    (item) =>
      item.question.includes(searchTerm) ||
      item.answer.includes(searchTerm)
  );

  return (
    // Form and List Container
    <div className='container p-5'>
      <div className="form-group p-3">
        <label className='p-2' htmlFor="question">QUESTION</label>
        <input
          type="text"
          className="form-control"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div className="form-group p-3">
        <label className='p-2' htmlFor="answer">ANSWER</label>
        <input
          type="text"
          className="form-control"
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <div className='text-center'>
        <button className="btn btn-primary " onClick={handleAddItem}>
          Add Question & Answer
        </button>
      </div>
      <div className='p-3'>
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          onChange={handleSearch}
        />
      </div>
      <div className='p-3'>
        <ul className="list-group primary-success">
          {filteredList.map((item, index) => (
            <li className="d-flex justify-content-between align-items-center p-3" key={index}>
              <div>
                <strong>Question:</strong> {item.question}
                <br />
                <strong>Answer:</strong> {item.answer}
              </div>
              <button className="btn btn-danger btn-sm rounded-5" onClick={() => handleRemoveItem(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicList;
