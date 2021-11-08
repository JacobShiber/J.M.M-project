let pixelCounter = 0;
let containerPxTarget = [0, 100, 200, 300, 400]
let target = 0;




// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     addToHead (value) {
//         let newNode = new Node (value);
//         if (this.head == null) {
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//     }

//     addToTail (value){
//         let newNode = new Node (value);

//         if(this.head == null){
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//     }
// }

// class Node {
//     constructor(data, next){
//         this.data = data;
//         this.next = next;
//     }
// }

// let ll = new LinkedList();

// ll.addToHead("./media/matrix.jfif");
// ll.addToTail("./media/godfather.jfif");
// ll.addToTail("./media/tonymontana.png");
// ll.addToTail("./media/django.jfif");
// ll.addToTail("./media/leodecap.jfif");


// carouselImg.src = ll.head.data;
// let nextImg = ll.head;

// rightBtn.onclick = () => {
//     nextImg = nextImg.next;
//     displayImg.src = nextImg.data;
    
//     // console.log(nextImg.data);
// }


leftBtn.onclick = () => {
    if(target > 0)
    target = target - 1;
    let sliderId = setInterval(() => {
        imagesContainer.style.left = `${pixelCounter++}%`;
           if(pixelCounter > Number(`-${containerPxTarget[target]}`)) {
               clearInterval(sliderId) 
            };
    }, 5);
};


rightBtn.onclick = () => {
    if(target < 4)
    target = target + 1;
    let sliderId = setInterval(() => {
        imagesContainer.style.left = `${pixelCounter--}%`;
           if(pixelCounter < Number(`-${containerPxTarget[target]}`)) {
               clearInterval(sliderId) 
            };
    }, 5);
    
};