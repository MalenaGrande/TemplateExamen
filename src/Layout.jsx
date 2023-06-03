import css from './Layout.module.css'

const Layout = ({children, title}) => {
    return (
        <>
        <header>
            <div className={css["title-wrapper"]}>
                <h4>
                    Malena Grande
                </h4>
                <h4 className={css.title}>
                    {title}
                </h4>
            </div>
            <h4>
                02/06/2023
            </h4>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}

export default Layout