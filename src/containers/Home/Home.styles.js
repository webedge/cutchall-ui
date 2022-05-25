export const bannerContainer = (theme) => ({
    background: `${theme.colors.primary} url('/img/home.png') top center no-repeat`,
    div: {
        position: 'relative',
        height: '417px',
        img: {
            position: 'absolute',
            bottom: 0,
            height: '350px',
        }
    },
    'h1,h2,h3,h4': {
        position: 'absolute',
        textShadow: `3px 3px 4px ${theme.colors.primary}`,
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: '48px',
    },
    h3: { fontSize: '32px', fontWeight: 300, },
    h4: { fontSize: '18px', fontWeight: 300, }
});
