import { SvgSelect } from "halpers/SvgSelect/SvgSelect";


export const Footer = () => {
    return (
        <footer>
            <div>

                <SvgSelect id={"fb"} />

                <SvgSelect id={"tweeter"} />

                <SvgSelect id={"youtube"} />

                <SvgSelect id={"in"} />

            </div>


            <p>Copyright © 2021 - FinanceLedger</p>
        </footer>
    );
};