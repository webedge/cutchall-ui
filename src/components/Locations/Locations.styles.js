import { theme } from "../../constants/theme"

export const wrapper = theme => ({
    margin: '25px 0',
    fontFamily: 'Poppins',
    '.state': {
        marginBottom: '25px',
        '&:last-of-type': {
            margin: 0,
        }
    },
    h1: {
        color: theme.colors.primary,
        fontSize: '24px',
        margin: '0 0 40px 0',
        fontWeight: 500,
    },
    h2: {
        color: theme.colors.primary,
        fontSize: '18px',
        margin: '24px 0',
        fontWeight: 500,
    },
    h3: {
        fontWeight: 300,
        fontSize: '16px',
        borderBottom: `1px solid ${theme.colors.primary}`,
        marginTop: '15px',
        ':first-of-type': {
            marginTop: '0'
        }
    },
    span: { display: 'block', color: theme.colors.secondary, cursor: 'pointer', ':hover': { textDecoration: 'underline' } }
})

export const locationHeader = {
    fontSize: '24px !important',
    marginBottom: '15px !important',
}

export const state = {
    padding: 0,
    borderBottom: '1px solid grey'
}

export const stateList = {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    '> li': {
        padding: '0 0 15px 0',
        margin: 0,
        'li': {
            color: theme.colors.secondary,
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    }
}
