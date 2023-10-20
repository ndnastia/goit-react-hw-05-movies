import style from 'components/SearchForm/SearchForm.module.css'

const SearchForm = ({onSubmit}) => {


    return(
        <form className={style['search-form']} onSubmit={onSubmit}>
                
                    <input className={style['search-input']} type="text" name='searchPostId' placeholder="type movie name" required />
                    <button className={style['search-btn']} type="submit">Search</button>
            </form>
    )
}

export default SearchForm;