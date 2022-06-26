
export const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min)

export function asyncIterator(length, delay) {
    const iterable = {
        from: 0,
        to: length
    }

    iterable[Symbol.iterator] = function () {
        let last = this.to
        let current = this.from
        return {
            next: function() {
                if(current <= last) {
                    const obj = new Promise(resolve => {
                        setTimeout(() => {
                            resolve({
                                done: false,
                                value: current++
                            })
                        }, delay)
                    }).then(obj => obj)
                    console.log(obj)
                    return { done: false, value: current++ }
                } else {
                    return { done: true }
                }
            }
        }
    }

    return iterable
}