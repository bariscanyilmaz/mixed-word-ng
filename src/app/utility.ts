declare global {
    interface Array<T> {
        shuffle(): this;
    }
}

Array.prototype.shuffle = function () {

    for (let index = 0; index < this.length; index++) {
        let randomIndex = Math.floor(Math.random() * this.length);

        let currentElment = this[index];

        this[index] = this[randomIndex];
        this[randomIndex] = currentElment;
    }
    return this;
};

export { };