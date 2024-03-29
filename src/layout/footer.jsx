function Footer() {
    return <footer className="page-footer pink accent-1">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Made by Sofia Suhorukova
                <a className="grey-text text-lighteen-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}

export { Footer };