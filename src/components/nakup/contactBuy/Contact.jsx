import React, { useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {

        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_9s5odes', 'template_qy8541d', form.current, {
              publicKey: 'orppStexEZQ7lMCfC',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );

            window.location.reload(false);
        };
    return (
        <div className="contact section__padding bg__whitesmoke">
            <div className="container">
                <h2 className="section__title text__center">Kontaktiraj nas</h2>
                <p className="para__text text__center">S spodnjim obrazcom nas lahko kontaktirate za test ter nakup koles, 
                lahko se pa tudi prijavite za organizirano skupinsko vožnjo</p>

                <div className="contact__content">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form__elem form__elem--2">
                            <input type = "text" name="from_name" className="form__control" placeholder="Vaše ime" />
                            <input type = "email" name="from_email" className="form__control" placeholder="Vaš email" />
                        </div>
                        <div className="form__elem">
                            <textarea className="form__control" name="message" placeholder="Sporočilo" rows = "6"></textarea>
                        </div>
                        <button type = "submit" className="form__submit--btn btn btn__gold">Pošlji sporočilo</button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default Contact;