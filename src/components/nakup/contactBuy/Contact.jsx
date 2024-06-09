import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact section__padding bg__whitesmoke">
            <div className="container">
                <h2 className="section__title text__center">Kontaktiraj nas</h2>
                <p className="para__text text__center">S spodnjim obrazcom nas lahko kontaktirate za test ter nakup koles, 
                lahko se pa tudi prijavite za organizirano skupinsko vožnjo</p>

                <div className="contact__content">
                    <form>
                        <div className="form__elem form__elem--2">
                            <input type = "text" className="form__control" placeholder="Vaše ime" />
                            <input type = "text" className="form__control" placeholder="Vaš email" />
                        </div>
                        <div className="form__elem">
                            <input type = "text" className="form__control" placeholder="Naslov" />
                        </div>
                        <div className="form__elem">
                            <textarea className="form__control" placeholder="Your Comment" rows = "6"></textarea>
                        </div>
                        <button type = "submit" className="form__submit--btn btn btn__gold">Pošlji sporočilo</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact;