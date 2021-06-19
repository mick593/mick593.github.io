const gameboard = (() => {
    const block = (id) => {
        let chosen = false
        const tick = ()=> {
            const displayedBlocks = document.querySelectorAll('div.field')
            displayedBlocks.forEach((e,i)=> {
                if(i == id) {
                    e.classList.add('field-tick')
                }
            })
        }
        return {chosen,tick,id}
    }
    let blocks = [block(0),block(1),block(2),
        block(3),block(4),block(5),block(6),block(7),block(8)]
    this.name = 'jko'

    const gName = () => {
        console.log(name)
    }
    const occupyBlock = (id) => {
        block[id].tick()
    }
    return {blocks,gName};
})()

