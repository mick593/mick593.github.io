// (() => {    

const gameboard = (() => {
    let playerMarker = "x"
    let isGameOver = false
    let markedField = 0
    const displayedBlocks = document.querySelectorAll('div.field')
    const block = (id) => {
        let marker
        this.id = id
        // const tick = ()=> {
        //     const displayedBlocks = document.querySelectorAll('div.field')
        //     displayedBlocks.forEach((e,i)=> {
        //         if(i == id) {
        //             e.classList.add('field-tick')
        //             console.log(e)
        //             e.textContent = "DD"
        //             console.log(e.textContent)

        //         }
        //     })
        return {id,marker}
    }
        
    
    let blocks = [block(0),block(1),block(2),
        block(3),block(4),block(5),block(6),block(7),block(8)]
    // this.name = 'jko'

    // const gName = () => {
    //     console.log(name)
    // }

    const occupyBlock = (id) => {
        // block[id].tick()
        if(blocks[id].marker || isGameOver) return
        displayedBlocks[id].classList.add('field-tick')
        displayedBlocks[id].textContent = playerMarker
        blocks[id]['marker'] = playerMarker
        markedField++
        checkWinner();
        changePlayer()
        
    
    }

    const changePlayer = () => {
        if (playerMarker == 'x') playerMarker = 'o'
        else playerMarker = 'x'
    }

    const checkWinner = () => {
        if(markedField >= 9) declareWinner('No one ')
        if(blocks[0].marker && blocks[1].marker && blocks[2].marker
           &&  blocks[0].marker === blocks[1].marker && blocks[2].marker === blocks[1].marker) {

            declareWinner(blocks[0].marker)
        }
                
        else if (blocks[3].marker && blocks[4].marker && blocks[5].marker
                 &&  blocks[3].marker === blocks[4].marker && blocks[5].marker === blocks[4].marker) {
     
            declareWinner(blocks[3].marker)
        } 

        else if (blocks[0].marker && blocks[3].marker && blocks[6].marker
            &&  blocks[0].marker === blocks[3].marker && blocks[6].marker === blocks[0].marker) {
         
            declareWinner(blocks[0].marker)
        }

        else if (blocks[1].marker && blocks[4].marker && blocks[7].marker
            &&  blocks[1].marker === blocks[4].marker && blocks[7].marker === blocks[1].marker) {
         
            declareWinner(blocks[1].marker)
        }

        else if (blocks[2].marker && blocks[5].marker && blocks[8].marker
            &&  blocks[2].marker === blocks[5].marker && blocks[8].marker === blocks[2].marker) {
         
            declareWinner(blocks[2].marker)
        }

        else if (blocks[0].marker && blocks[4].marker && blocks[8].marker
            &&  blocks[0].marker === blocks[4].marker && blocks[8].marker === blocks[0].marker) {
         
            declareWinner(blocks[0].marker)
        }

        else if (blocks[2].marker && blocks[4].marker && blocks[6].marker
            &&  blocks[2].marker === blocks[4].marker && blocks[6].marker === blocks[2].marker) {
         
            declareWinner(blocks[2].marker)
        }

               
    }

    const declareWinner = (winner) => {
        const board = document.querySelector('div.result-board')
        const textArea = document.querySelector('h1.winner-text')
        textArea.textContent = winner + ' is the winner!'
        board.classList.add('result-popup')

        isGameOver = true
    }

    const reset = () => {
        //clear local variables
        playerMarker = 'x'
        isGameOver = false
        markedField = 0
        blocks.forEach(block => {
            block.marker = undefined
        });
        //clear display
        displayedBlocks.forEach(displayBlock => {
            displayBlock.classList.remove('field-tick')
            displayBlock.textContent = ''
        })
        
        //clear result display  
        const board = document.querySelector('div.result-board')
        board.classList.remove('result-popup')
    }
    return {blocks,occupyBlock,reset};
})();





//add event listener to each field
(() => {    
    const fields = document.querySelectorAll('div.field')
    fields.forEach((field,i) => {
        field.value = i
        field.addEventListener('click', ()=> {
            console.log(field.value)
            gameboard.occupyBlock(field.value)
        })
    })
    const resetBtn = document.getElementById('reset-btn')
    resetBtn.addEventListener('click', ()=> {
        gameboard.reset()
    })
    
})();


// })();