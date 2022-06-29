/* POPUP 1 */
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

/* POPUP 2 */

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


/* pop up 3 */

function iniciaModal4(modalID) {
			
    const modal4 = document.getElementById(modalID);
    if(modal4) {
        modal4.classList.add('mostrar4');
        modal4.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fechar4') {
                modal4.classList.remove('mostrar4');
                
            }
        });
    }

}

const logo4 = document.querySelector('.clicar4');
logo4.addEventListener('click', () => iniciaModal4('mostrar-modal4')); //mouseover

/* POPUP 4 */

function iniciaModal5(modalID) {
			
    const modal5 = document.getElementById(modalID);
    if(modal5) {
        modal5.classList.add('mostrar5');
        modal5.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fechar5') {
                modal5.classList.remove('mostrar5');
                
            }
        });
    }

}

const logo5 = document.querySelector('.clicar5');
logo5.addEventListener('click', () => iniciaModal5('mostrar-modal5')); //mouseover

