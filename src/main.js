import { World } from './World/World'

const main = () => {
  const container = document.querySelector("#scene-container");

  const toggleModal = _ => {
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')

    const world = new World(container);
    world.start()
    // world.render();
  }

  let modalClosing = document.querySelectorAll('.modal-close')
  modalClosing.forEach(closingElement =>
    closingElement.addEventListener('click', toggleModal)
  );
}

main();
