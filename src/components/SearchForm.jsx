import { useState } from 'react';

const SearchForm = ({setSearchParams}) => {

    const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

    return(
        <form onSubmit={handleSubmit}>
                
                    <input type="text" name={query} placeholder="type movie name" required   onChange={handleSearchParams}/>
                    <button type="button">Search</button>
            </form>
    )
}

export default SearchForm;