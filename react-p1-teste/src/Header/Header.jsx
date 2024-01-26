import React from "react";

function Header(){
    return(
        <>
        <img className="logo" src="./src/image/patinha.png" alt="logo da fantastika, uma patinha" />
        <h2>Fantastika</h2>
        <img className="redesSociais" src="./src/image/logo_insta.png" alt="logo do instagram, uma camera" />
        <img className="redesSociais" src="./src/image/logo_yt.png" alt="logo do YouTube, um retangulo com o sinal de reproduzir no centro" />
        <img className="redesSociais" src="./src/image/logo_wpp.png" alt="logo do WhatsApp, um balão de conversa com o simbolo de um telefone dentro" />
        </>
    )
}

export default Header;