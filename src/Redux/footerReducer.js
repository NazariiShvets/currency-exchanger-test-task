import git from '../img/github-logo.svg'
import inst from '../img/instagram.svg'
import gmail from '../img/gmail.svg'
import linked from '../img/linkedin.svg'
import teleg from '../img/telegram.svg'


const initialState = {
    socialLinks: [
        {
            logo: git,
            url: 'https://github.com/NazariiShvets',
            id: 1
        },
        {
            logo: inst,
            url: 'https://www.instagram.com/nazar.shvets666/',
            id: 2
        },
        {
            logo: gmail,
            url: 'https://mail.google.com/mail/?view=cm&source=mailto&to=nazarii.shvets@gmail.com',
            id: 3
        },
        {
            logo: linked,
            url: 'https://www.linkedin.com/in/nazar-shvets-3296041bb/',
            id: 4
        },
        {
            logo: teleg,
            url: 'https://t.me/Divine666',
            id: 5
        }
    ]
}


const footerReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        default :
            return state
    }
}


export default footerReducer