document.addEventListener('DOMContentLoaded', function() {
    



    function createGrid(size) {
        const container = document.getElementById('container');
        container.innerHTML = '';

        const squareSize = 80 / size;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = squareSize + 'vw';
            square.style.height = squareSize + 'vw';
            container.appendChild(square);
        }
        const squares=document.querySelectorAll(".grid-square");
        squares.forEach(square => {
            square.addEventListener('mouseenter', function() {
                square.style.backgroundColor = '#66a3ff';
            });
        });
    }
    const reset_btn=document.getElementById('reset-button');
    reset_btn.addEventListener('click',function(){
        let new_pad_size=prompt("Enter the number of squares per side (maximum 100):");
        new_pad_size=parseInt(new_pad_size);
        if(isNaN(new_pad_size)||new_pad_size>100||new_pad_size<1){
            alert('Please enter a valid number between 1 and 100.');
            return;
        }
        else{
            createGrid(new_pad_size);
        }
    })
    createGrid(16);

});
