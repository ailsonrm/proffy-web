import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/4666109?s=460&u=81ef67461c200e01513e1240a73370849e1faeef&v=4" alt="Ailson Ramos Moreira" />
                        <div>
                            <strong>Ailson Ramos Moreira</strong>
                            <span>Programação</span>
                        </div>
                    </header>
                    <p>
                        Programado Full Stack front e back.
                        <br/><br/>
                        Apaixonado por tecnologia em geral, porém, focado em programação e solucionar problemas usando código.
                    </p>
                    
                    <footer>
                        <p>
                            Preço/hora
                                <strong>R$ 60,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsIcon} alt="Entrar em contato via WhatsApp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;