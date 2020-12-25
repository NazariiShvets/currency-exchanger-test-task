import React from 'react'
import {connect} from 'react-redux'

import s from './Footer.module.scss'


const mapStateToProps = (state) => ({
    socialLinks: state.footer.socialLinks,
    isDarkTheme: state.global.isDarkTheme,
})
const Footer = ({socialLinks, isDarkTheme}) => (
    <footer className={isDarkTheme ? s.footerDark : s.footer}>
        <div className={s.title}> Created by Nazarii Shvets</div>
        <div>
            {socialLinks.map(link => (
                <a className={s.link} key={link.id}
                   href={link.url} target='_blank'
                   rel='noreferrer'>
                    <img src={link.logo} key={link.id} alt="" width='30px'/>
                </a>
            ))}
        </div>
    </footer>
)


export default connect(mapStateToProps, {})(Footer)