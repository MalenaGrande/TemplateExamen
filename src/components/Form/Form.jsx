import css from './Form.module.css'

const Form = ({children, onSubmit}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(event)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className={css["children-wrapper"]}>
                {children}
            </div>
            <button type='submit'>
                Submit
            </button>
        </form>
    )
}

export default Form