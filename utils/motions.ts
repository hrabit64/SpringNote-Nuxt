export const motionShake = {
    initial: {
        y: 0,
        x: 0
    },
    enter: {
        y: 8,
        x: 8,
        transition: {
            duration: 1000,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}
