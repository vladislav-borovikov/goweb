import { SvgSelect } from "halpers/SvgSelect/SvgSelect";


export const Header = () => {
    return (
        <header>
            <div>
                <SvgSelect id={"logo"} /><span>Finance</span><span>Ledger</span>
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Cases</a>
                <a href="#">Blog</a>
                <a href="#">Contacts</a>
            </div>
        </header>
    );
};