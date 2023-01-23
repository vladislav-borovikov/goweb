import person1 from '../../images/images/team/person1.jpg'
import person2 from '../../images/images/team/person2.jpg'
import person3 from '../../images/images/team/person3.jpg'
import contact from '../../images/images/home/contact.jpg'



export const Contacts = () => {
    return (
        <div>
            <div>
                <p>Who we are</p>
                <h2>Our Professional Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
                <ul>
                    <li>
                        <img src={person1} alt="person1" />
                        <h4>John Doe</h4>
                        <p>President</p>
                    </li>
                    <li>
                        <img src={person2} alt="person2" />
                        <h4>Jane Doe</h4>
                        <p>Vice President</p>
                    </li>
                    <li>
                        <img src={person3} alt="person3" />
                        <h4>Steve Smith</h4>
                        <p>Marketing Head</p>
                    </li>
                </ul>
            </div>
            <div>
                <img src={contact} alt="contact" />
                <form >
                    <label >Request Callback</label >
                    <input type="text" />
                    <input type="email" />
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};