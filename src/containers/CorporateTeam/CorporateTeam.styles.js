export const staffGrid = {
    '.card': {
        boxShadow: 'none',
        border: 'none',
        padding: '10px',
    },
}

export const indvCard = theme => ({
    img: {
        boxShadow: theme.boxShadow
    },
    p: {
        margin: '15px 0 0 0',
        fontFamily: 'Poppins',
        color: theme.colors.primary,
        display: 'flex',
        justifyContent: 'space-between',
    },
    span: { fontWeight: 100, }
})
