import cases1 from "../../images/images/cases/cases1.jpg"
import cases2 from "../../images/images/cases/cases2.jpg"
import cases3 from "../../images/images/cases/cases3.jpg"
import cases4 from "../../images/images/cases/cases4.jpg"
import cases5 from "../../images/images/cases/cases5.jpg"
import cases6 from "../../images/images/cases/cases6.jpg"



export const Cases = () => {
    return (
        <div>
            <div>
                <p>This is what we do</p>
                <h2>Business Cases</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            </div>
            <div>
                <img src={cases1} alt="cases1" />
                <img src={cases2} alt="cases2" />
                <img src={cases3} alt="cases3" />
                <img src={cases4} alt="cases4" />
                <img src={cases5} alt="cases5" />
                <img src={cases6} alt="cases6" />
            </div>

        </div>

    );
};
