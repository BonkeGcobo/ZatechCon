window.onload = () => {
  const speakerSec = document.querySelector('.speakers');

  const hamburger = document.querySelector('.hamBtn');
  hamburger.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'block';
  });

  function closeMobileMenu(closer) {
    closer.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      menu.style.display = 'none';
    });
  }

  const closeBtn = document.querySelector('.closeBtn');
  closeMobileMenu(closeBtn);

  const item = document.querySelector('.menuPopUp');
  closeMobileMenu(item);

  const speakers = [
    {
      image: 'images/geek-icon.jpg',
      speakerName: 'Geekulcha',
      speakerPosition: 'Leading tech community in Africa',
      speakerDes: 'Geekulcha is the leading tech community in Africa, which aims to connect all developers around the world.',
    },
    {
      image: 'images/bothale-AI.jpg',
      speakerName: 'Bothale AI',
      speakerPosition: 'A start up in South Africa',
      speakerDes: 'Bothale AI, is a startup that is building bots that can speak the African Languages',
    },
    {
      image: 'images/Vusi-Thembekwayo.png',
      speakerName: 'Vusi Thembakwayo',
      speakerPosition: 'Ceo of the growth fund, venture capitalist firm',
      speakerDes: 'Vusi is a motivational speaker and the ceo of the Venture Capitalist firm called Growth Fund',
    },
    {
      image: 'images/Katlego-Maphai.jpg',
      speakerName: 'Katlego Maphai',
      speakerPosition: 'Ceo of Yoco',
      speakerDes: 'Yoco is a point-of-sale provider form small business in Africa',
    },
  ];

  speakers.forEach((item) => {
    const EachSpeaker = `
    <div class="speaker speaker-1">
    <div class="speaker Speakerimg-1">
      <img src="${item.image}" width="150px" height="150px">
    </div>

    <div class="speakInfo">
       <h1 class="speakerNam">${item.speakerName}</h1>
       <h4 class="speaker-pos">${item.speakerPosition}</h4>
       <hr class="small-line">
       <p class="speaker-des speaker-des-1">
         ${item.speakerDes}
       </p>
    </div>
  </div>
    `;
    speakerSec.insertAdjacentHTML('beforeend', EachSpeaker);
  });
};