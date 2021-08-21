const background = new Array()

background[background.length] = "https://cdn.dribbble.com/users/699467/screenshots/2920823/sky_800_x_600.jpg?compress=1&resize=800x600" 
background[background.length] = "https://i.pinimg.com/1200x/cc/8e/39/cc8e39403a986777427fa70537c4361f.jpg"

background[background.length] ="https://images.squarespace-cdn.com/content/v1/590d5571e6f2e1fda30135bb/1567652278621-2GGLYP0PI2W3PK6D63E6/3.jpg?format=2500w "
background[background.length] = "https://miro.medium.com/max/1313/0*r7YMmw4miue8cBi4.jpg"
background[background.length] = "https://i.pinimg.com/564x/ce/ad/63/cead63e676d39c2de781a83ca1422552.jpg"
background[background.length] ="https://i.pinimg.com/564x/63/5b/54/635b540a1e634e76f81a8665fd73906c.jpg"

background[background.length]="https://images.squarespace-cdn.com/content/v1/590d5571e6f2e1fda30135bb/1577912106089-KGPQUPJMBGLMC89DKD72/limbo+bakery2.jpg?format=2500w"


//when we make a new Array, we do like
// arrayName = new Array 
// then basically, we need to make array like  arrayName[0]or 1 2 3 4 whatever it is
// but then, we need to count every number we wrote as a array
// to solve this problem, we can just write arrayName[arrayName.length]
// then it will automatically give you the index of the array. 

const chosenImage = background[Math.floor(Math.random() * (background.length))];

const bgImage = document.getElementById("conA");

bgImage.style.backgroundImage = 'url(' +chosenImage +')';

// stlye.backgroundImage means we will put the background-Image in the style(html)