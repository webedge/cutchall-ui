export const header = theme => ({
    a: { color: `${theme.colors.primary} !important` },
    background: 'white',
    fontFamily: 'Poppins',
    boxShadow: '0px 0px 11px 3px rgba(0,0,0,0.38)',
    position: 'relative',
    zIndex: 100,
})

export const headerLayout = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
}
