export const resourceStyles = theme => ({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    li: { fontSize: '14px' },
    '> li': {
        fontSize: '20px',
        color: theme.colors.primary,
        fontWeight: 500,
        marginBottom: '15px',
        '&:last-of-type': {
            margin: 0,
        }
    }
})

export const listStyle = {
    marginBottom: '15px',
    '&:last-of-type': {
        margin: 0
    }
}
