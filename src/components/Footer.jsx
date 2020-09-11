import React from 'react'

const Footer = () => {
    const footer = "Copyright @Parul Malhotra"
    const socialLinks = {
        github: "https://github.com/malhotra-parul",
        twitter: "https://twitter.com/malhotra_parul"
    } 
    return (
        <div style={{height: '5vh'}}>
            {footer}
    {Object.keys(socialLinks).map(social => <a href={socialLinks[social]}>{social}</a> )}
        </div>
    )
}

export default Footer
