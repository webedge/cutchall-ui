export const eventWrapper = (theme) => ({
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '13px',
    marginBottom: '15px',
    ':last-of-type': { margin: 0 },
    h2: {
        fontSize: '16px',
        color: theme.colors.primary,
    },
    a: { color: theme.colors.secondary }
});

export const content = theme => ({
    paddingLeft: '16px',
    span: {
        color: theme.colors.secondary,
        cursor: 'pointer',
    }
})
