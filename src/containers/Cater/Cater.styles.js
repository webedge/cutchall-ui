export const wrapper = {
    marginBottom: '25px',
    '&:first-of-type': { marginTop: '25px', },
    '&:last-of-type': { margin: 0, }
};

export const content = theme => ({
    'a.download': { borderRadius: '4px', color: 'white', background: theme.colors.primary, padding: '10px 10px' }
})
