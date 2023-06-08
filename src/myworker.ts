self.addEventListener('message', () => {
    setTimeout(() => {
        self.postMessage('Process completed')
    }, 2000);
});

export default {};
