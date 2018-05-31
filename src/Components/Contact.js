import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    state = {
        showForm:true
    }
    _submitForm = async (e) => {
        e.preventDefault();
        let form = this.refs["form-contact"];
        let email = this.refs["email"].value;
        let name = this.refs["name"].value;
        let topic = this.refs["topic"].value;
        let message = this.refs["message"].value;

        let data = {
            email,
            name,
            topic,
            message
        };

        fetch(`https://formspree.io/muhammettnur@gmail.com`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "email":data.email,
                "name":data.name,
                "message": `Konu: ${data.topic}\nMesaj:${data.message}`
            })
        }).then((resp) => {
            if(resp.status === 200){
                this.setState({
                    showForm:false
                });
            }
        });

        form.reset();
    }
    _renderForm(){
        return (
            <form className="app-contact" id="sect-contact" ref={"form-contact"} onSubmit={(e) => this._submitForm(e)}>
                <label className={"label-default"} htmlFor={"email"}>
                    Email
                </label>
                <input type={"email"} name={"email"} className={"inp-default"} ref={"email"} required />
                <label className={"label-default"} htmlFor={"name"}>
                    Ad & Soyad
                </label>
                <input type={"text"} name={"name"} className={"inp-default"} ref={"name"} required />
                <label className={"label-default"} htmlFor={"topic"}>
                    Konu
                </label>
                <input type={"text"} name={"body"} className={"inp-default"} ref={"topic"} required />
                <label className={"label-default"} htmlFor={"body"}>
                    Mesajınız
                </label>
                <textarea type={"text"} name={"body"} className={"inp-default txtarea"} rows={"10"} ref={"message"} required />
                <input type={"submit"} className={"btn-default"} value={"GÖNDER"} />
            </form>
        );
    }
    _renderResult(){
        return (
          <h2>Mesajınız başarıyla gönderildi!</h2>
        );
    }
    render(){
        let { showForm } = this.state;
        return (
            <section className="app-contact-container">
                <h1 id="contact">İletişim</h1>
                { showForm === true ? this._renderForm() : this._renderResult() }
            </section>
        );
    }
}

export default Contact;
