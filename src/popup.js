function iniciaModal(modalID) {
			
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
                
            }
        });
    }
}
const logo = document.querySelector('.click');
logo.addEventListener('click', () => iniciaModal('modal-promocao')); //mouseover

function iniciaModal3(modalID) {
			
    const modal3 = document.getElementById(modalID);
    if(modal3) {
        modal3.classList.add('mostrar3');
        modal3.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fechar3') {
                modal3.classList.remove('mostrar3');
                
            }
        });
    }

}

const logo3 = document.querySelector('.clicar');
logo3.addEventListener('click', () => iniciaModal3('mostrar-modal')); //mouseover
