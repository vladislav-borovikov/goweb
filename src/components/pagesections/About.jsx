import People from "../../images/images/home/people.jpg"


export const About = () => {
    return (
        <div>
            <div>
                <img src={People} alt="our team in office " />
            </div>
            <div>
                <p>What you are looking for</p>
                <h2>We provide bespoke solutions</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                <button>Read More</button>
            </div>
        </div>
    );
};
