let contacts = [
    {
        name: "puneet Sheriyans ",
      lastMessage: "bhai code nahi baan raha ..please help kar de ",
      time: "just now",
      img: "https://images.unsplash.com/photo-1692048098453-109979b87e10?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGN1dGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "arpit malviya ",
      lastMessage: "bsdk wo riya ko ghar chodh aa .. mujhe sona hai raat bhar se bahar hu ..",
      time: "12:00 pm",
      img: "https://images.unsplash.com/photo-1536303158031-c868b371399f?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Aman mishra ",
      lastMessage: "bhai riya kal raat se reply nahi kar rahi ",
      time: "10:45 AM",
      img: "https://plus.unsplash.com/premium_photo-1671718678636-638093436ea0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsJTIwYm95fGVufDB8fDB8fHww"
    },
    {
      name: "Riya Sharma",
      lastMessage: "last night was amazing ...😘",
      time: "9:30 AM",
      img: "https://images.unsplash.com/photo-1695509039453-8cd581573da6?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    
    {
      name: "Sheriyans Class",
      lastMessage: "Class 3:30 baje hai",
      time: "Yesterday",
      img: "https://imgs.search.brave.com/5x6BerFsyJPhlltYaU0w_RYRcRKuNBNL4-uMxHjxAy8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pay5p/bWFnZWtpdC5pby9z/aGVyeWlhbnMvU2hl/cnlpYW5zX2xvZ29f/RXp3Z2NwcG5EP3Vw/ZGF0ZWRBdD0xNzAx/MjcyOTE2ODQ4.jpeg"
    },
    {
        name: "riya's sister",
      lastMessage: "aj miloge sham ko.... ",
      time: "11:00 am",
      img: "https://images.unsplash.com/photo-1617788600025-215aa836ab4c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1dGUlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "shruti ",
      lastMessage: "kaha ho...?",
      time: "yesterday",
      img: "https://images.unsplash.com/photo-1566802725767-890e3f6e69b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "neha collage ",
      lastMessage: "it's not working between us ...",
      time: "3 days..",
      img: "https://images.unsplash.com/photo-1590189585288-ae7a51f3ea16?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "momo wali",
      lastMessage: "momo khane chale ..",
      time: "4 days..",
      img: "https://images.unsplash.com/photo-1711993429167-fb04f40eaf3b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc2fHxjdXRlJTIwbW9kZWxzfGVufDB8fDB8fHww"
    },
  ];
  let container = document.getElementById("contact-list-container");

  contacts.forEach(contact => {
    let card = document.createElement("div");
    card.classList.add("contact-card");
  
    card.innerHTML = `
      <img src="${contact.img}" alt="${contact.name}" class="contact-img">
      <div class="contact-info">
        <div class="contact-top">
          <span class="contact-name">${contact.name}</span>
          <span class="contact-time">${contact.time}</span>
        </div>
        <div class="contact-msg">${contact.lastMessage}</div>
      </div>
    `;
  
    container.appendChild(card);
  });
    